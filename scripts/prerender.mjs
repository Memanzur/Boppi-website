/**
 * After the client and SSR builds, write one HTML file per route so crawlers
 * receive the page content, title, and canonical URL without running JavaScript.
 * Usage: node scripts/prerender.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const templatePath = path.join(dist, 'index.html');
const template = fs.readFileSync(templatePath, 'utf8');
const { render, headBlock, jsonLd, prerenderRoutes } = await import(pathToFileURL(path.join(root, '.ssr/entry-server.js')).href);

const ld = jsonLd();
if (!template.includes('<!--jsonld-->') || !template.includes('<!--seo:start-->')) {
  console.error('index.html is missing <!--jsonld--> or <!--seo:start--> markers');
  process.exit(1);
}
const hash = crypto.createHash('sha256').update(ld).digest('base64');
const csp = fs.readFileSync(path.join(root, 'vercel.json'), 'utf8');
if (!csp.includes(`'sha256-${hash}'`)) {
  console.error(`CSP script hash missing. Add 'sha256-${hash}' to script-src.`);
  process.exit(1);
}

function apply(html, route) {
  const head = headBlock(route);
  const next = html
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => `<!--seo:start-->\n    ${head}\n    <!--seo:end-->`)
    .replace('<!--jsonld-->', () => `<script type="application/ld+json" id="boppi-jsonld">${ld}</script>`)
    .replace('<div id="root"></div>', () => `<div id="root">${render(route)}</div>`);
  const h1s = next.match(/<h1\b[\s\S]*?<\/h1>/g) || [];
  if (h1s.length !== 1) throw new Error(`${route} rendered ${h1s.length} h1 elements`);
  if (!h1s[0].includes('Boppi')) throw new Error(`${route} h1 does not contain Boppi`);
  if (!next.includes('<title>Boppi')) throw new Error(`${route} title does not lead with Boppi`);
  if (!next.includes('https://boppi.io')) throw new Error(`${route} is missing the canonical origin`);
  return next;
}

const outputs = prerenderRoutes.map(route => ({
  route,
  file: route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html'),
  html: apply(template, route),
}));
outputs.push({
  route: '/404',
  file: path.join(dist, '404.html'),
  html: apply(template, '/404'),
});

for (const { route, file, html } of outputs) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`prerendered ${route} -> ${path.relative(root, file)} (${html.length} bytes)`);
}
