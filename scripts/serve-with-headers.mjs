/** Serves dist/ on 127.0.0.1 with the headers and SPA rewrite from vercel.json, so the browser checks run under the deployed CSP. Local only. */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = path.join(root, 'dist');
const port = Number(process.argv[2] || 4178);
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
// The sources in vercel.json are plain regex paths; anchor them as Vercel does.
const rules = (config.headers || []).map(rule => ({ pattern: new RegExp(`^${rule.source}$`), headers: rule.headers }));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml' };

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  for (const rule of rules) if (rule.pattern.test(urlPath)) for (const { key, value } of rule.headers) res.setHeader(key, value);
  let file = path.join(dist, urlPath);
  if (!file.startsWith(dist + path.sep) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(dist, 'index.html');
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`serving dist with vercel.json headers on http://127.0.0.1:${port}`));
