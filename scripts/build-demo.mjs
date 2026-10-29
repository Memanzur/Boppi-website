/** Build a synthetic browser demo from an explicitly selected, checksum-verified candidate.
 * The build is byte-reproducible from the tarball: the clock is pinned to the
 * candidate's built_at, the synthetic home sits at one fixed path, and its
 * fingerprint key is derived from the tarball checksum (it only ever keys
 * fictional demo paths). `--check` rebuilds and compares with the committed
 * public/boppi-demo.html instead of writing. Writing also moves the /demo
 * <lastmod> in public/sitemap.xml to today. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { bumpLastmod, today } from './sitemap.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checkOnly = process.argv.includes('--check');
const selected = process.env.BOPPI_DEMO_CANDIDATE;
if (!selected) throw new Error('Set BOPPI_DEMO_CANDIDATE to the selected local CANDIDATE.json; nothing is downloaded.');
const manifestPath = fs.realpathSync(selected);
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const artifact = fs.realpathSync(path.resolve(path.dirname(manifestPath), manifest.artifact));
if (!artifact.startsWith(path.dirname(manifestPath) + path.sep)) throw new Error('Artifact must be inside the candidate directory.');
const digest = crypto.createHash('sha256').update(fs.readFileSync(artifact)).digest('hex');
if (digest !== manifest.sha256 || manifest.journey_checks.failed !== 0) throw new Error('Candidate integrity or journey check failed.');
if (!Number.isFinite(Date.parse(manifest.built_at))) throw new Error('CANDIDATE.json has no built_at to pin the clock to.');

const buildDir = '/tmp/boppi-website-demo-build';
const demoKey = crypto.createHash('sha256').update(`boppi-synthetic-demo-key:${digest}`).digest('hex');
try { fs.mkdirSync(buildDir); } catch { throw new Error(`${buildDir} already exists; remove it (a leftover demo build) and run again.`); }
try {
  execFileSync('tar', ['-xzf', artifact, '-C', buildDir]);
  const home = path.join(buildDir, 'synthetic-home');
  fs.mkdirSync(path.join(home, '.boppi'), { recursive: true });
  fs.writeFileSync(path.join(home, '.boppi', 'fingerprint-key'), demoKey + '\n', { mode: 0o600 });
  const built = path.join(buildDir, 'boppi-demo.html');
  const env = { ...Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('BOPPI_'))), DEMO_PINNED_TIME: manifest.built_at };
  execFileSync(process.execPath, ['--import', path.join(root, 'scripts/pin-clock.mjs'), path.join(buildDir, 'package/bin/boppi.js'), 'demo', '--html', built, '--home', home, '--cwd', home, '--no-color'], { env, cwd: buildDir, stdio: 'pipe' });
  const html = fs.readFileSync(built, 'utf8');
  if (html.includes(buildDir)) throw new Error('Synthetic local path leaked into the demo.');
  const htmlSha256 = crypto.createHash('sha256').update(html).digest('hex');
  const target = path.join(root, 'public/boppi-demo.html');
  if (checkOnly) {
    const committed = crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex');
    if (committed !== htmlSha256) { console.error(`DIFFERS: rebuilt ${htmlSha256}, committed ${committed}`); process.exitCode = 1; }
    else console.log(`REPRODUCED: public/boppi-demo.html is byte-identical to a fresh build from ${manifest.scanner_commit.slice(0, 7)} (sha256 ${htmlSha256}).`);
  } else {
    fs.writeFileSync(target, html);
    fs.writeFileSync(path.join(root, 'public/boppi-demo.json'), JSON.stringify({
      synthetic: true, packageVersion: manifest.package_version, engineVersion: manifest.engine_version, rubricVersion: manifest.rubric_version,
      scannerCommit: manifest.scanner_commit, candidateSha256: digest, htmlSha256,
      reproducible: { pinnedTime: manifest.built_at, buildDir, demoKey: 'sha256("boppi-synthetic-demo-key:" + candidateSha256)', check: 'BOPPI_DEMO_CANDIDATE=<CANDIDATE.json> npm run demo:build -- --check' },
      published: false,
    }, null, 2) + '\n');
    // The demo page changed today, so its sitemap entry says so; commit both together (QA-006).
    if (bumpLastmod(root, '/demo', today())) console.log(`public/sitemap.xml: /demo lastmod set to ${today()}.`);
    console.log(`Synthetic demo generated from ${manifest.scanner_commit.slice(0, 7)}; no personal configuration read.`);
  }
} finally { fs.rmSync(buildDir, { recursive: true, force: true }); }
