/**
 * Sitemap freshness shared by check-sitemap and the demo build: which routes
 * public/sitemap.xml lists, the newest commit date of each route's content,
 * and a writer that only ever moves a <lastmod> forward.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

export const ORIGIN = 'https://boppi.io';
// Content a route shows beyond its own page file.
const EXTRA = { '/': ['src/components'], '/demo': ['public/boppi-demo.html'] };

const sitemapPath = root => path.join(root, 'public/sitemap.xml');
const committed = (root, file) => execFileSync('git', ['-C', root, 'log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim();

/** Today as YYYY-MM-DD in local time, the calendar git's %cs uses. */
export function today(now = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/** Every failure: a route missing from the sitemap, a stale lastmod, or a listed URL that is no route. */
export function sitemapFailures(root) {
  const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
  const lastmod = new Map([...fs.readFileSync(sitemapPath(root), 'utf8').matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(m => [m[1], m[2]]));
  const seen = new Set();
  const failures = [];
  let checked = 0;
  for (const [, route, element] of app.matchAll(/<Route path="([^"]+)" element=\{<(\w+) \/>\}/g)) {
    if (route === '*' || seen.has(element)) continue; // the catch-all and aliases of a page already listed
    seen.add(element);
    const newest = [`src/pages/${element}.tsx`, ...(EXTRA[route] || [])].map(file => committed(root, file)).filter(Boolean).sort().at(-1);
    const loc = ORIGIN + route;
    const listed = lastmod.get(loc);
    checked++;
    if (!listed) failures.push({ loc, text: `${loc} is missing from the sitemap` });
    else if (newest && listed < newest) failures.push({ loc, newest, text: `${loc} lastmod ${listed} is older than its source (${newest})` });
  }
  const routes = new Set([...app.matchAll(/<Route path="([^"]+)"/g)].map(m => ORIGIN + m[1]));
  for (const loc of lastmod.keys()) if (!routes.has(loc)) failures.push({ loc, text: `${loc} is in the sitemap but not a route` });
  return { checked, failures };
}

/** Set a listed route's <lastmod> to `date` when that is later; never moves it back. Returns whether it changed. */
export function bumpLastmod(root, route, date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`not a date: ${date}`);
  const file = sitemapPath(root);
  const text = fs.readFileSync(file, 'utf8');
  const pattern = new RegExp(`(<loc>${(ORIGIN + route).replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}</loc>\\s*<lastmod>)([^<]+)(</lastmod>)`);
  const match = text.match(pattern);
  if (!match) throw new Error(`${ORIGIN + route} is not in the sitemap`);
  if (match[2] >= date) return false;
  fs.writeFileSync(file, text.replace(pattern, `$1${date}$3`));
  return true;
}
