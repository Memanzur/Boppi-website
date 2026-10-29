/**
 * Sitemap freshness shared by check-sitemap and the demo build. A route's
 * source is its page file plus everything that page reaches through local
 * imports and every public/ file its sources link to by absolute path; its
 * source date is the newest commit date among them (today for a file with
 * uncommitted changes). A listed <lastmod> must be a real date equal to that.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

export const ORIGIN = 'https://boppi.io';

const sitemapPath = root => path.join(root, 'public/sitemap.xml');
const git = (root, ...args) => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8' });

/** Today as YYYY-MM-DD in local time, the calendar git's %cs uses. */
export function today(now = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/** Whether `text` is a YYYY-MM-DD calendar date that exists. */
export function isDate(text) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return false;
  const parsed = new Date(`${text}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === text;
}

const IMPORT = /(?:import|export)\s[^'"]*?from\s*['"]([^'"]+)['"]|import\s*\(?\s*['"]([^'"]+)['"]/g;
const PUBLIC_LINK = /['"`](\/[\w.-]+(?:\/[\w.-]+)*\.\w+)['"`]/g;
const EXTENSIONS = ['', '.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts'];

function resolveImport(root, from, spec) {
  const base = spec.startsWith('@/') ? path.join(root, 'src', spec.slice(2)) : spec.startsWith('.') ? path.resolve(path.dirname(from), spec) : null;
  if (!base) return null;
  return EXTENSIONS.map(ext => base + ext).find(file => fs.existsSync(file) && fs.statSync(file).isFile()) ?? null;
}

/** Repo-relative files a page's content comes from: the page, its local import closure, and public/ files they link to. */
export function routeSources(root, page) {
  const seen = new Set();
  const pending = [path.join(root, page)];
  while (pending.length) {
    const file = pending.pop();
    if (seen.has(file)) continue;
    seen.add(file);
    if (!/\.(tsx?|jsx?)$/.test(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const [, from, bare] of text.matchAll(IMPORT)) {
      const target = resolveImport(root, file, from ?? bare);
      if (target) pending.push(target);
    }
    for (const [, link] of text.matchAll(PUBLIC_LINK)) {
      const asset = path.join(root, 'public', link);
      if (fs.existsSync(asset)) seen.add(asset);
    }
  }
  return [...seen].map(file => path.relative(root, file)).sort();
}

function sourceDate(root, files) {
  const dates = files.map(file => git(root, 'log', '-1', '--format=%cs', '--', file).trim());
  if (git(root, 'status', '--porcelain', '--', ...files).trim()) dates.push(today());
  return dates.filter(Boolean).sort().at(-1);
}

/** Each listed page route with its sitemap entry and source date, plus every failure. */
export function sitemapFailures(root) {
  const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
  const lastmod = new Map([...fs.readFileSync(sitemapPath(root), 'utf8').matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]*)<\/lastmod>/g)].map(m => [m[1], m[2]]));
  const seen = new Set();
  const failures = [];
  let checked = 0;
  for (const [, route, element] of app.matchAll(/<Route path="([^"]+)" element=\{<(\w+) \/>\}/g)) {
    if (route === '*' || seen.has(element)) continue; // the catch-all and aliases of a page already listed
    seen.add(element);
    const source = sourceDate(root, routeSources(root, `src/pages/${element}.tsx`));
    const loc = ORIGIN + route;
    const listed = lastmod.get(loc);
    checked++;
    if (listed === undefined) failures.push({ loc, text: `${loc} is missing from the sitemap` });
    else if (!isDate(listed)) failures.push({ loc, route, source, text: `${loc} lastmod "${listed}" is not a YYYY-MM-DD date` });
    else if (source && listed < source) failures.push({ loc, route, source, text: `${loc} lastmod ${listed} is older than its source (${source})` });
    else if (source && listed > source) failures.push({ loc, route, source, text: `${loc} lastmod ${listed} is later than its source (${source})` });
  }
  const routes = new Set([...app.matchAll(/<Route path="([^"]+)"/g)].map(m => ORIGIN + m[1]));
  for (const loc of lastmod.keys()) if (!routes.has(loc)) failures.push({ loc, text: `${loc} is in the sitemap but not a route` });
  return { checked, failures };
}

/** Set a listed route's <lastmod> to `date`, earlier or later. Returns whether it changed. */
export function setLastmod(root, route, date) {
  if (!isDate(date)) throw new Error(`not a date: ${date}`);
  const file = sitemapPath(root);
  const text = fs.readFileSync(file, 'utf8');
  const pattern = new RegExp(`(<loc>${(ORIGIN + route).replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}</loc>\\s*<lastmod>)([^<]*)(</lastmod>)`);
  const match = text.match(pattern);
  if (!match) throw new Error(`${ORIGIN + route} is not in the sitemap`);
  if (match[2] === date) return false;
  fs.writeFileSync(file, text.replace(pattern, `$1${date}$3`));
  return true;
}

/** Set every listed route's <lastmod> to its source date. Returns the routes changed. */
export function fixSitemap(root) {
  const changed = [];
  for (const { route, source } of sitemapFailures(root).failures) {
    if (route && source && setLastmod(root, route, source)) changed.push({ route, date: source });
  }
  return changed;
}
