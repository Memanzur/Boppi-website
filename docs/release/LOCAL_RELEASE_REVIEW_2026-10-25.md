# Website local release checkpoint

Source c9461d0 after claims correction 4ba9b06, on codex/homepage-positioning. Build and lint pass (0 errors, seven existing refresh warnings). Actual local navigation/privacy and 390 px review are in `/Users/melodymanzur/Boppi-release-completion-20261025T033847Z/evidence/browser.json`. The public npm metadata checked this session is 0.3.0, not the unpublished 0.4.0 candidate. No website deployment occurred.

The website remains the entry point to Boppi Agent + optional Cloud + future reviewed Intelligence. Current source labels local candidate 0.4.0, avoids source-only move confirmation/absolute redaction claims and states consent/hosted limits. Privacy is a release draft requiring founder review. Public release gates live in `~/Desktop/Boppi-auto/docs/release/RELEASE_BLOCKERS.md`.

Existing untracked `docs/HOMEPAGE_POSITIONING_REVIEW_2026-10-22.md` was preserved. Source-only type/import lint fixes do not alter runtime behavior. No public version bump, analytics or beta-demo activation was performed.

## Second claims pass, 2026-10-25 (later session)

Source on codex/homepage-positioning after this pass. Scope: the open rows in `~/Desktop/Boppi-auto/docs/requirements/extractions-2026-10-25/extract-D-website.md`, section 5, priorities 1 to 8. No deployment, no push, no public version change.

What changed, by file:

- `src/components/Hero.tsx`: the proof line now reads "A scan stays on your machine unless you choose to push it. No account needed."
- `src/components/ScanTerminal.tsx`: the sample's last PRIVACY line now matches the bounded sentence the scanner source prints ("Known secret shapes are redacted, environment variable values are not read, and recognized paths become fingerprints. Review an export before sharing it."). The header line "nothing left this machine" is kept on purpose: it is scoped to "Files read this run" and is the tested, verbatim output of the published scanner (no sockets during scan).
- `src/components/Platform.tsx`: "The 0.4.0 release requires" is now "The unpublished 0.4.0 candidate requires"; the workspace button reads "Create a beta workspace".
- `src/components/Pricing.tsx`: the workspace button reads "Create a beta workspace".
- `src/components/Nav.tsx`: the primary CTA reads "Sign in · beta".
- `src/pages/Privacy.tsx`: the sentence "Fonts load from Google Fonts." is removed. Nothing in `index.html` or `src/index.css` loads a font; Tailwind names Nunito and Instrument Serif and the browser falls back to system fonts.
- `src/pages/Terms.tsx`: section 4 now reads "what we store, what we do not collect, and the limits of redaction." and the date line matches Privacy ("Release draft updated: October 25, 2026"). The "Release draft" wording on both legal pages still needs the founder's decision.
- `vercel.json`: `git.deploymentEnabled: false`, so a pushed branch never triggers a Vercel build. Intentional deploys stay on the CLI path (`vercel deploy`).

Verification: `npm run build` and `npm run lint` pass (0 errors, the same seven refresh warnings). `docs/release/evidence-2026-10-25-claims/check.js` drove the built site from `vite preview` in headless Chromium (Playwright from the control plane's `scripts/browser-validation/node_modules`) at 1280 and 390 px: every new sentence is rendered on `/`, `/privacy` and `/terms`, every replaced sentence is gone, the terminal animation reaches the new PRIVACY line, no console errors. Results in `results.json`, screenshots alongside.

Axe reported pre-existing violations that this pass did not touch and did not fix: the footer version line fails colour contrast, the hero copy button's `aria-label` does not match its visible text, there is no `<main>` landmark, hero content sits outside any landmark, and at 390 px the GitHub nav link has no accessible name once its text is hidden. They are listed here so the next pass can take them.

Still open from extract D: the hosted-beta team and security statements (Pricing, Privacy sections 3 and 5, Terms section 5) are unverified against the deployed 938e9d1; the "Seven per-agent rules plus one data-governance check" count is unsourced; the Pricing `npx boppi scan` button opens GitHub; sitemap lastmod is 2026-10-14; README.md is still the Lovable template.
