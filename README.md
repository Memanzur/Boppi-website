# Boppi marketing site

Public site for [boppi.io](https://boppi.io). It presents Boppi Cloud, an AI access security and governance platform, and sends people to create an account in the control plane.

The product is not a browser extension, not a local-only scanner, not antivirus, and not a chatbot. Copy on this site should stay inside what the control plane actually does today:

- Discovery for Claude Desktop, Claude Code, and Cursor on an enrolled computer
- Potential access paths
- Evidenced findings, with history
- Monitoring, missed-report notices, and in-app alerts
- Propose and approve remediation, manual steps, verify on the next scan
- Audit, export, and optional MFA

Use **potential**, **evidenced**, and **modeled**. Do not write that Boppi is safe, that someone is protected, that it prevents attacks, or that it meets a compliance regime.

Planned, and labeled that way on the page: just-in-time access, SSO/SCIM, policy engine, automatic enforcement, Boppi Intelligence, and billing. Prices are not published. Do not add a price without Melody's decision.

## Control plane URL

Primary calls to action open signup on the control plane. One environment variable sets that origin:

```bash
VITE_APP_URL=https://app.boppi.io
```

- No path and no trailing slash. Signup is `${VITE_APP_URL}/signup`. Sign-in is `${VITE_APP_URL}/login`.
- Vite only exposes variables prefixed with `VITE_` to the browser. `NEXT_PUBLIC_APP_URL` would not be read.
- If `VITE_APP_URL` is unset or blank, the site falls back to `https://app.boppi.io` (the deployed control plane).
- Copy `.env.example` to `.env.local` for local development.
- On Vercel, set `VITE_APP_URL` on project **boppi-website** for Production (and Preview, if previews should point elsewhere). A new value applies on the next build. This repo does not change Vercel project settings.

## Develop

```sh
npm i
npm run dev
```

The dev server listens on port 8080. `npm run build` produces `dist/`.

Stack: Vite, TypeScript, React, Tailwind, shadcn/ui.

Production hosting is the Vercel project `boppi-website`. Do not deploy from this repository unless Melody asks.
