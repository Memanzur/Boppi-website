/**
 * QA-006: a demo refresh on a later date leaves check:sitemap passing. In a
 * throwaway clone, commit a changed public/boppi-demo.html dated after every
 * existing commit: without the build's sitemap step the check fails, with it
 * (bumpLastmod, as build-demo.mjs calls it) the check passes, and --fix
 * repairs a stale entry without ever moving one back.
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
function cloneWithRefresh(name, stamp) {
  const dir = path.join(work, name);
  execFileSync('git', ['clone', '-q', '--local', '--no-hardlinks', root, dir]);
  for (const file of ['scripts/sitemap.mjs', 'scripts/check-sitemap.mjs', 'public/sitemap.xml']) fs.copyFileSync(path.join(root, file), path.join(dir, file));
  execFileSync(process.execPath, [path.join(dir, 'scripts/check-sitemap.mjs'), '--fix'], { stdio: 'ignore' });
  fs.appendFileSync(path.join(dir, 'public/boppi-demo.html'), '\n<!-- refreshed -->\n');
  if (stamp) execFileSync(process.execPath, ['--input-type=module', '-e', `import { bumpLastmod } from ${JSON.stringify(path.join(dir, 'scripts/sitemap.mjs'))}; bumpLastmod(${JSON.stringify(dir)}, '/demo', '${LATER}');`]);
  git(dir, 'add', '-A'); git(dir, 'commit', '-q', '-m', 'refresh demo');
  return dir;
}
try {
  const unstamped = cloneWithRefresh('unstamped', false);
  const before = check(unstamped);
  ok(before.status === 1 && before.stderr.includes(`https://boppi.io/demo lastmod`) && before.stderr.includes(`(${LATER})`), 'a demo refresh committed without the sitemap step fails the check');
  const stamped = cloneWithRefresh('stamped', true);
  const after = check(stamped);
  ok(after.status === 0, `the same refresh with the build's sitemap step passes (${(after.stderr || after.stdout).trim()})`);
  const fixed = check(unstamped, '--fix');
  ok(fixed.status === 0 && fs.readFileSync(path.join(unstamped, 'public/sitemap.xml'), 'utf8').includes(`<lastmod>${LATER}</lastmod>`), '--fix moves the stale /demo entry forward to its source date');
  const { bumpLastmod } = await import(path.join(stamped, 'scripts/sitemap.mjs'));
  ok(bumpLastmod(stamped, '/demo', '2020-01-01') === false && fs.readFileSync(path.join(stamped, 'public/sitemap.xml'), 'utf8').includes(`<lastmod>${LATER}</lastmod>`), 'a lastmod is never moved back');
  const source = fs.readFileSync(path.join(root, 'scripts/build-demo.mjs'), 'utf8');
  ok(/bumpLastmod\(root, '\/demo', today\(\)\)/.test(source), 'demo:build stamps /demo whenever it writes a new demo');
} finally { fs.rmSync(work, { recursive: true, force: true }); }
console.log(`SITEMAP REFRESH VERIFIED: ${checks} checks passed`);
