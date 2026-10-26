const NM = '/Users/melodymanzur/Desktop/Boppi-auto/apps/control-plane/scripts/browser-validation/node_modules/';
const { chromium } = require(NM + 'playwright');
const { AxeBuilder } = require(NM + '@axe-core/playwright');
const fs = require('fs');
const base = process.argv[2];
const outDir = process.argv[3];
const expect = {
  '/': {
    present: ['A scan stays on your machine unless you choose to push it. No account needed.', 'Sign in · beta', 'Create a beta workspace', 'The unpublished 0.4.0 candidate requires explicit workspace sync consent'],
    absent: ['Your scan stays on your machine. No account needed.', 'The 0.4.0 release requires', 'raw path names are never collected'],
  },
  '/privacy': { present: ['as any host does.'], absent: ['Google Fonts'] },
  '/terms': { present: ['Release draft updated: October 25, 2026', 'what we store, what we do not collect, and the limits of redaction.'], absent: ['what we never collect', 'October 14, 2026'] },
};
const results = [];
function ok(name, pass, detail) { results.push({ name, pass, detail }); console.log(`${pass ? 'PASS' : 'FAIL'} ${name}${detail ? ' ' + detail : ''}`); }
(async () => {
  const browser = await chromium.launch();
  for (const width of [1280, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    const errors = [];
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', e => errors.push(String(e)));
    for (const [route, want] of Object.entries(expect)) {
      await page.goto(base + route, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const text = await page.evaluate(() => document.body.innerText);
      for (const s of want.present) ok(`${width}px ${route} shows "${s.slice(0, 48)}"`, text.includes(s));
      for (const s of want.absent) ok(`${width}px ${route} no longer shows "${s.slice(0, 48)}"`, !text.includes(s));
      const axe = await new AxeBuilder({ page }).analyze();
      ok(`${width}px ${route} axe violations`, axe.violations.length === 0, axe.violations.map(v => v.id).join(',') || '0');
      await page.screenshot({ path: `${outDir}/${width}${route === '/' ? '-home' : route.replace('/', '-')}.png`, fullPage: route !== '/' });
    }
    if (width === 1280) {
      await page.goto(base + '/', { waitUntil: 'networkidle' });
      await page.waitForTimeout(16000);
      const text = await page.evaluate(() => document.body.innerText);
      ok('terminal animation reaches the bounded redaction line', text.includes('Known secret shapes are redacted, environment variable values are not read, and recognized paths become fingerprints.'));
      ok('terminal animation keeps the scan-run privacy header', text.includes('nothing left this machine'));
    }
    ok(`${width}px console errors`, errors.length === 0, errors.join(' | '));
    await context.close();
  }
  await browser.close();
  fs.writeFileSync(`${outDir}/results.json`, JSON.stringify(results, null, 2));
  const failed = results.filter(r => !r.pass).length;
  console.log(`${results.length - failed}/${results.length} checks passed`);
  process.exit(failed ? 1 : 0);
})();
