/**
 * Fails when public/sitemap.xml misses a route from src/App.tsx, or when a
 * route's <lastmod> is older than the last commit to its page source.
 * Usage: node scripts/check-sitemap.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://boppi.io';
// Content a route shows beyond its own page file.
const EXTRA = { '/': ['src/components'], '/demo': ['public/boppi-demo.html'] };

const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
const lastmod = new Map([...sitemap.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map(m => [m[1], m[2]]));
const committed = file => execFileSync('git', ['-C', root, 'log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim();

const seen = new Set();
const failures = [];
let checked = 0;
for (const [, route, element] of app.matchAll(/<Route path="([^"]+)" element=\{<(\w+) \/>\}/g)) {
  if (route === '*' || seen.has(element)) continue; // the catch-all and aliases of a page already listed
  seen.add(element);
  const sources = [`src/pages/${element}.tsx`, ...(EXTRA[route] || [])];
  const newest = sources.map(committed).filter(Boolean).sort().at(-1);
  const loc = ORIGIN + route;
  const listed = lastmod.get(loc);
  checked++;
  if (!listed) failures.push(`${loc} is missing from the sitemap`);
  else if (newest && listed < newest) failures.push(`${loc} lastmod ${listed} is older than its source (${newest})`);
}
const routes = new Set([...app.matchAll(/<Route path="([^"]+)"/g)].map(m => ORIGIN + m[1]));
for (const loc of lastmod.keys()) if (!routes.has(loc)) failures.push(`${loc} is in the sitemap but not a route`);
if (failures.length) { for (const f of failures) console.error(`FAIL ${f}`); process.exit(1); }
console.log(`sitemap ok: ${checked} routes listed, none older than its source`);
