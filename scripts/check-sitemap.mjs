/**
 * Fails when public/sitemap.xml misses a route from src/App.tsx, lists a URL
 * that is no route, or gives a route a <lastmod> that is not a real date or
 * differs from its source date (see sitemap.mjs). `--fix` sets each wrong
 * <lastmod> to its source date, earlier or later.
 * Usage: node scripts/check-sitemap.mjs [--fix]
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ORIGIN, fixSitemap, sitemapFailures } from './sitemap.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
if (process.argv.includes('--fix')) {
  for (const { route, date } of fixSitemap(root)) console.log(`updated ${ORIGIN + route} lastmod to ${date}`);
}
const { checked, failures } = sitemapFailures(root);
if (failures.length) { for (const f of failures) console.error(`FAIL ${f.text}`); process.exit(1); }
console.log(`sitemap ok: ${checked} routes listed, each lastmod matches its source`);
