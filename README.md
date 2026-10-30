# boppi.io website

The marketing site for Boppi: home page, `/checkup`, the synthetic `/demo`, `/privacy` and `/terms`. Vite, React, TypeScript, Tailwind and shadcn/ui. The project started from a Lovable template; Lovable is not how it is built or published now.

## Work on it locally

```sh
npm ci
npm run dev          # http://localhost:8080
npm run build        # writes dist/
npm run lint
npm run typecheck
```

To browse the built site under the same security headers production sends (from `vercel.json`):

```sh
npm run build
node scripts/serve-with-headers.mjs 4178    # http://127.0.0.1:4178
```

## The synthetic demo

`public/boppi-demo.html` and `public/boppi-demo.json` are generated from a frozen, checksum-verified scanner candidate. Never edit them by hand. The build is byte-reproducible:

```sh
BOPPI_DEMO_CANDIDATE=~/Desktop/Boppi-candidate-<version>-<commit>/CANDIDATE.json npm run demo:build
BOPPI_DEMO_CANDIDATE=... npm run demo:build -- --check   # rebuilds and compares bytes
```

The Cloud app serves the same file. After a refresh, run its `scripts/sync-guest-demo.mjs` so the two stay identical.

## Checks

- `npm run test:website -- http://127.0.0.1:4178 <outDir>`: desktop/mobile guest journey, simulated change, clipboard, all five pages, WCAG A/AA axe, CTA destinations, homepage anchors from secondary pages, FAQ, overflow, console errors, and unexpected external requests. Uses Playwright and axe from the adjacent Boppi-auto browser-validation package; set `BOPPI_BROWSER_DEPS` to its absolute package.json if the workspace moved.
- Older scripts under dated `docs/release/evidence-*` directories record historical wording and are not current copy expectations.
- `npm run check:sitemap`: every route is in `public/sitemap.xml`, and none has a `lastmod` older than its page source.

## Deploying

The site is the Vercel project `boppi-website`. Git deploys are disabled (`vercel.json` `git.deploymentEnabled: false`), so pushing a branch publishes nothing. Production deploys are a deliberate founder decision. Do not deploy from an agent session without explicit approval.

## Messaging review (local only)

See `docs/PRODUCT_MESSAGING_REVIEW_2026-10-29.md` for the product evidence, feature status, CTA audit, changed sections, screenshots, verification, and approval boundary. No push or deployment is part of this update.
