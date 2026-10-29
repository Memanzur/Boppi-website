/**
 * QA-006 and RT-10: check:sitemap holds every <lastmod> to its route's source
 * date. In throwaway clones dated after every existing commit: a demo refresh
 * without the sitemap step fails and with it passes; a garbage or future
 * lastmod fails and --fix sets it back to the source date; a change to a
 * shared component flags every page that imports it; a change to
 * public/boppi-demo.json flags /demo.
 * Usage: node scripts/verify-sitemap-refresh.mjs
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let checks = 0;
const ok = (condition, label) => { assert.ok(condition, label); console.log(`ok [${++checks}] ${label}`); };
const LATER = '2031-03-04';
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'boppi-sitemap-refresh-'));
const git = (dir, ...args) => execFileSync('git', ['-C', dir, ...args], { encoding: 'utf8', env: { ...process.env, GIT_AUTHOR_DATE: `${LATER}T12:00:00`, GIT_COMMITTER_DATE: `${LATER}T12:00:00`, GIT_AUTHOR_NAME: 'test', GIT_AUTHOR_EMAIL: 'test@example.test', GIT_COMMITTER_NAME: 'test', GIT_COMMITTER_EMAIL: 'test@example.test' } });
const check = (dir, ...args) => spawnSync(process.execPath, [path.join(dir, 'scripts/check-sitemap.mjs'), ...args], { encoding: 'utf8' });
const sitemap = dir => fs.readFileSync(path.join(dir, 'public/sitemap.xml'), 'utf8');
const lastmodOf = (dir, route) => sitemap(dir).match(new RegExp(`<loc>https://boppi\\.io${route}</loc>\\s*<lastmod>([^<]*)</lastmod>`))[1];
const writeLastmod = (dir, route, value) => fs.writeFileSync(path.join(dir, 'public/sitemap.xml'), sitemap(dir).replace(new RegExp(`(<loc>https://boppi\\.io${route}</loc>\\s*<lastmod>)[^<]*`), `$1${value}`));
const flagged = result => [...result.stderr.matchAll(/FAIL https:\/\/boppi\.io(\S*) lastmod/g)].map(m => m[1]).sort();

/** A clone of HEAD carrying the working tree's sitemap code, its sitemap fixed and committed. */
function cleanClone(name) {
  const dir = path.join(work, name);
  execFileSync('git', ['clone', '-q', '--local', '--no-hardlinks', root, dir]);
  for (const file of ['scripts/sitemap.mjs', 'scripts/check-sitemap.mjs', 'public/sitemap.xml']) fs.copyFileSync(path.join(root, file), path.join(dir, file));
  execFileSync(process.execPath, [path.join(dir, 'scripts/check-sitemap.mjs'), '--fix'], { stdio: 'ignore' });
  git(dir, 'add', '-A'); git(dir, 'commit', '-q', '--allow-empty', '-m', 'base');
  return dir;
}
function commitChange(dir, file, stampDemo) {
  fs.appendFileSync(path.join(dir, file), '\n');
  if (stampDemo) execFileSync(process.execPath, ['--input-type=module', '-e', `import { setLastmod } from ${JSON.stringify(path.join(dir, 'scripts/sitemap.mjs'))}; setLastmod(${JSON.stringify(dir)}, '/demo', '${LATER}');`]);
  git(dir, 'add', '-A'); git(dir, 'commit', '-q', '-m', `change ${file}`);
  return dir;
}
try {
  const unstamped = commitChange(cleanClone('unstamped'), 'public/boppi-demo.html', false);
  const before = check(unstamped);
  ok(before.status === 1 && before.stderr.includes(`https://boppi.io/demo lastmod`) && before.stderr.includes(`(${LATER})`), 'a demo refresh committed without the sitemap step fails the check');
  const stamped = commitChange(cleanClone('stamped'), 'public/boppi-demo.html', true);
  const after = check(stamped);
  ok(after.status === 0, `the same refresh with the build's sitemap step passes (${(after.stderr || after.stdout).trim()})`);
  const fixed = check(unstamped, '--fix');
  ok(fixed.status === 0 && lastmodOf(unstamped, '/demo') === LATER, '--fix moves the stale /demo entry forward to its source date');

  const garbage = cleanClone('garbage');
  const sourceDate = lastmodOf(garbage, '/checkup');
  writeLastmod(garbage, '/checkup', 'banana');
  const garbageRun = check(garbage);
  ok(garbageRun.status === 1 && garbageRun.stderr.includes('https://boppi.io/checkup lastmod "banana" is not a YYYY-MM-DD date'), 'a garbage lastmod fails the check');
  writeLastmod(garbage, '/checkup', '2026-02-30');
  ok(check(garbage).status === 1, 'an impossible calendar date (2026-02-30) fails the check');
  ok(check(garbage, '--fix').status === 0 && lastmodOf(garbage, '/checkup') === sourceDate, '--fix replaces a garbage lastmod with the source date');

  const future = cleanClone('future');
  writeLastmod(future, '/checkup', '2099-01-01');
  const futureRun = check(future);
  ok(futureRun.status === 1 && futureRun.stderr.includes(`https://boppi.io/checkup lastmod 2099-01-01 is later than its source (${sourceDate})`), 'a lastmod later than its source fails the check');
  ok(check(future, '--fix').status === 0 && lastmodOf(future, '/checkup') === sourceDate, '--fix moves a future lastmod back to the source date');

  const footer = commitChange(cleanClone('footer'), 'src/components/Footer.tsx', false);
  ok(flagged(check(footer)).join(' ') === '/ /checkup /demo', 'a shared Footer change flags every page that imports it, and no other');

  const demoJson = commitChange(cleanClone('demo-json'), 'public/boppi-demo.json', false);
  ok(flagged(check(demoJson)).join(' ') === '/demo', 'a boppi-demo.json change flags /demo');

  const uncommitted = cleanClone('uncommitted');
  fs.appendFileSync(path.join(uncommitted, 'src/lib/links.ts'), '\n');
  const { today } = await import(path.join(uncommitted, 'scripts/sitemap.mjs'));
  ok(check(uncommitted, '--fix').status === 0 && ['/', '/checkup', '/demo', '/privacy', '/terms'].every(route => lastmodOf(uncommitted, route) === today()), 'an uncommitted change to shared links.ts dates every page today');

  const source = fs.readFileSync(path.join(root, 'scripts/build-demo.mjs'), 'utf8');
  ok(/fixSitemap\(root\)/.test(source), 'demo:build sets every lastmod to its source date whenever it writes a new demo');
} finally { fs.rmSync(work, { recursive: true, force: true }); }
console.log(`SITEMAP REFRESH VERIFIED: ${checks} checks passed`);
