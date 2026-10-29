/**
 * Fails when public/sitemap.xml misses a route from src/App.tsx, or when a
 * route's <lastmod> is older than the last commit to its page source.
 * `--fix` moves each stale <lastmod> forward to its source's date instead.
 * Usage: node scripts/check-sitemap.mjs [--fix]
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ORIGIN, bumpLastmod, sitemapFailures } from './sitemap.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
if (process.argv.includes('--fix')) {
  for (const failure of sitemapFailures(root).failures) {
    if (failure.newest && bumpLastmod(root, failure.loc.slice(ORIGIN.length), failure.newest)) console.log(`updated ${failure.loc} lastmod to ${failure.newest}`);
  }
}
const { checked, failures } = sitemapFailures(root);
if (failures.length) { for (const f of failures) console.error(`FAIL ${f.text}`); process.exit(1); }
console.log(`sitemap ok: ${checked} routes listed, none older than its source`);
