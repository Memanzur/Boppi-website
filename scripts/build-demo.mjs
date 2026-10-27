/** Build a synthetic browser demo from an explicitly selected, checksum-verified candidate. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const selected = process.env.BOPPI_DEMO_CANDIDATE;
if (!selected) throw new Error('Set BOPPI_DEMO_CANDIDATE to the selected local CANDIDATE.json; nothing is downloaded.');
const manifestPath = fs.realpathSync(selected);
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const artifact = fs.realpathSync(path.resolve(path.dirname(manifestPath), manifest.artifact));
if (!artifact.startsWith(path.dirname(manifestPath) + path.sep)) throw new Error('Artifact must be inside the candidate directory.');
const digest = crypto.createHash('sha256').update(fs.readFileSync(artifact)).digest('hex');
if (digest !== manifest.sha256 || manifest.journey_checks.failed !== 0) throw new Error('Candidate integrity or journey check failed.');
const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'boppi-website-demo-'));
try {
  execFileSync('tar', ['-xzf', artifact, '-C', scratch]);
  const target = path.join(root, 'public/boppi-demo.html');
  const home = path.join(scratch, 'synthetic-home');
  fs.mkdirSync(home);
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('BOPPI_')));
  execFileSync(process.execPath, [path.join(scratch, 'package/bin/boppi.js'), 'demo', '--html', target, '--home', home, '--cwd', home, '--no-color'], { env, cwd: scratch, stdio: 'pipe' });
  const html = fs.readFileSync(target, 'utf8');
  if (html.includes(scratch)) throw new Error('Synthetic local path leaked into the demo.');
  fs.writeFileSync(path.join(root, 'public/boppi-demo.json'), JSON.stringify({ synthetic: true, packageVersion: manifest.package_version, engineVersion: manifest.engine_version, rubricVersion: manifest.rubric_version, scannerCommit: manifest.scanner_commit, candidateSha256: digest, htmlSha256: crypto.createHash('sha256').update(html).digest('hex'), published: false }, null, 2) + '\n');
  console.log(`Synthetic demo generated from ${manifest.scanner_commit.slice(0, 7)}; no personal configuration read.`);
} finally { fs.rmSync(scratch, { recursive: true, force: true }); }
