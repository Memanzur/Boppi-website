/** Real browser journey against the built local website; no personal scan or external service. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(new URL('../../Boppi-auto/apps/control-plane/scripts/browser-validation/package.json', import.meta.url));
const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');
const base = process.argv[2] || 'http://127.0.0.1:4178';
assert(new URL(base).hostname === '127.0.0.1', 'Local website only');
const out = path.resolve(process.argv[3] || '/tmp/boppi-hybrid-guest-entry');
fs.mkdirSync(out, { recursive: true });
const results = [];
const check = (name, condition) => { results.push({ name, passed: Boolean(condition) }); assert(condition, name); console.log(`PASS ${name}`); };
const browser = await chromium.launch();
try {
  for (const width of [1280, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    const errors = [], external = [];
    page.on('pageerror', e => errors.push(String(e)));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    await context.route('**/*', route => {
      if (new URL(route.request().url()).origin !== new URL(base).origin) { external.push(route.request().url()); return route.abort(); }
      return route.continue();
    });
    await page.goto(base);
    const demoLink = page.getByRole('link', { name: 'Try the demo', exact: true });
    let reached = false;
    for (let i = 0; i < 30; i++) { await page.keyboard.press('Tab'); if (await demoLink.evaluate(el => el === document.activeElement)) { reached = true; break; } }
    check(`${width}: demo entry reachable by keyboard`, reached);
    await page.keyboard.press('Enter');
    await page.waitForURL('**/demo');
    check(`${width}: synthetic boundary visible before interaction`, (await page.locator('main').innerText()).includes('fictional AI connections'));
    const frame = page.frameLocator('iframe');
    await frame.locator('#demo-nav button').first().waitFor();
    check(`${width}: four real scenarios rendered`, await frame.locator('#demo-nav button').count() === 4);
    await frame.locator('#demo-nav button').nth(1).click();
    const before = await frame.locator('#demo-title').innerText();
    await frame.locator('#demo-fixes button').first().click();
    check(`${width}: simulated change produces a result`, (await frame.locator('#demo-result').innerText()).length > 0);
    check(`${width}: scenario survives simulation`, await frame.locator('#demo-title').innerText() === before);
    check(`${width}: demo makes its no-scan claim visible`, (await frame.locator('.demo-note').innerText()).includes('Nothing on your device is scanned or changed'));
    check(`${width}: demo axe`, (await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()).violations.length === 0);
    check(`${width}: demo has no page overflow`, await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: path.join(out, `demo-${width}.png`) });
    await page.getByRole('link', { name: 'Run a real guest checkup', exact: true }).click();
    await page.waitForURL('**/checkup');
    check(`${width}: guest checkup works without an account`, await page.getByRole('heading', { name: 'Start with your AI connections.' }).count() === 1 && (await context.cookies()).length === 0);
    await page.getByRole('button', { name: 'Copy checkup command' }).click();
    check(`${width}: copies the real public scanner command`, await page.evaluate(() => navigator.clipboard.readText()) === 'npx boppi scan');
    const body = await page.locator('main').innerText();
    check(`${width}: public/candidate and upload boundaries explicit`, body.includes('does not install that candidate') && body.includes('does not start MCP servers') && body.includes('Cloud sync is a separate choice'));
    await page.getByText('No results, errors, or missing integrations?', { exact: true }).click();
    check(`${width}: recovery and unsupported scope are inspectable`, await page.getByText('No supported configuration found means there was nothing Boppi could inspect.', { exact: false }).isVisible());
    check(`${width}: checkup axe`, (await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()).violations.length === 0);
    check(`${width}: checkup has no page overflow`, await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: path.join(out, `checkup-${width}.png`), fullPage: true });
    check(`${width}: no external requests`, external.length === 0);
    check(`${width}: no console errors`, errors.length === 0);
    await context.close();
  }
} finally {
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify(results, null, 2));
  await browser.close();
}
console.log(`${results.length} guest-entry checks passed`);
