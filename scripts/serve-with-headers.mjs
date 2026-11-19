/** Serves dist/ on 127.0.0.1 with the headers, redirects, and files from vercel.json. Local only. */
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
const redirects = (config.redirects || []).map(rule => ({ pattern: new RegExp(`^${rule.source}$`), destination: rule.destination, permanent: rule.permanent !== false }));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };

function resolve(urlPath) {
  const rel = path.normalize(urlPath).replace(/^(\.\.(\/|\\|$))+/, '').replace(/^[/\\]+/, '');
  let file = path.resolve(dist, rel);
  if (file !== dist && !file.startsWith(dist + path.sep)) file = dist;
  if (fs.existsSync(file) && fs.statSync(file).isFile()) return { file, status: 200 };
  const index = path.join(file, 'index.html');
  if (fs.existsSync(index) && fs.statSync(index).isFile()) return { file: index, status: 200 };
  const notFound = path.join(dist, '404.html');
  if (fs.existsSync(notFound)) return { file: notFound, status: 404 };
  return { file: path.join(dist, 'index.html'), status: 200 };
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  for (const rule of redirects) {
    if (!rule.pattern.test(urlPath)) continue;
    res.writeHead(rule.permanent ? 308 : 307, { Location: rule.destination });
    res.end();
    return;
  }
  for (const rule of rules) if (rule.pattern.test(urlPath)) for (const { key, value } of rule.headers) res.setHeader(key, value);
  const resolved = resolve(urlPath);
  res.statusCode = resolved.status;
  res.setHeader('Content-Type', types[path.extname(resolved.file)] || 'application/octet-stream');
  fs.createReadStream(resolved.file).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`serving dist with vercel.json headers on http://127.0.0.1:${port}`));
