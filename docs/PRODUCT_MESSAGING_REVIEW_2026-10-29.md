# Boppi website messaging review — local only

Local preview: http://localhost:4188/ (also http://127.0.0.1:4188/). The built site is served with the repository's Vercel security headers. No publication, push, hosted account creation, database operation, or production change was performed.

Repository: `https://github.com/Memanzur/boppi-website.git`. Working directory: `~/Desktop/Boppi Workspace/Worktrees/Boppi-website-positioning` (the Desktop shortcut is preserved). Dedicated branch: `codex/accurate-product-messaging-2026-10-29`, based on the initially clean `edd8c9f`. The original `codex/homepage-positioning` branch remains at that checkpoint. It already contained 25 commits ahead of its locally recorded upstream. This review does not verify the remote production branch or Vercel project settings; inherited unpublished history must be reviewed before any approved preview/push.

## Positioning

Boppi is an AI security and access-control platform for individuals, developers, teams, and enterprises. The experience is **see access → understand risk → control permissions → verify changes → monitor access**. The public scanner is the entry point. Agent, Cloud, Control, and Intelligence have different release stages, shown beside the capabilities themselves.

The homepage keeps the existing headline, palette, typography, logo, section order, grids, cards, button treatments, and animated terminal. No generated imagery or new design system was added. Necessary fitting changes: wrapping the access-card status line and shortening mobile navigation labels, with full accessible names. Three native disclosure FAQs were added inside the existing boundaries card.

## Evidence reviewed

Paths below are relative to `~/Desktop/Boppi Workspace/Worktrees/` unless stated otherwise. These are local implementation checkpoints, not public-release certifications.

| Source | Checkpoint | What it establishes |
| --- | --- | --- |
| `Boppi-auto` | `b3442f5` | Latest primary Cloud handoff; local work remains unpublished. |
| `boppi-scan-auto` | `7f69ed9` | Current scanner development, including platform-readiness work; package version 0.4.0 does not imply npm publication. |
| `Boppi-codex-enterprise` | `9682cf9` | Isolated combined SSO/JIT Cloud integration. |
| `boppi-scan-codex-enterprise` | `362fee9` | Isolated Agent JIT integration. |
| `Boppi-auto/BOPPI_NEXT_SESSION.md`, `BOPPI_AUTONOMOUS_PROGRESS.md`, `CLAUDE.md`, `BOPPI_PRODUCT_VISION.md` | Read with recovery records | Product direction and release boundaries; older feature-status paragraphs can be stale. |
| `Boppi-auto/BOPPI_FULL_PRODUCT_COMPLETION.md`, `BOPPI_CAPABILITY_MATRIX.csv`, `docs/roadmap/MASTER_FEATURE_INVENTORY.md`, `docs/release/EXTERNAL_BETA_READINESS_2026-10-27.md` | Read alongside newer handoffs | Public 0.3.0 vs unpublished 0.4.0; partial integrations, real-device and hosted gates. The completion document predates recovered JIT integration and must not override newer evidence. |
| `Boppi-auto/docs/handoffs/BOPPI_CODEX_RECOVERY_2026-10-29.md` | Includes 53-worktree inventory | Preserved feature branches: SSO, SCIM, MFA, graph, distribution, JIT, release. A branch's COMPLETE label is not public availability. |
| `Boppi-codex-enterprise/docs/handoffs/BOPPI_CODEX_ENTERPRISE_INTEGRATION_2026-10-29.md` | Latest subsequent-flow checkpoint | Logs 60/60 Agent suites; combined Cloud verification, SQL/rollback; 38 API/CLI and 38 Chromium JIT checks on disposable local infrastructure. These product suites were reviewed as evidence, not rerun for a website-only copy change. |
| `Boppi-codex-enterprise/BOPPI_JIT_PERMISSION_DESIGN.md`, `BOPPI_ENTERPRISE_READINESS.md`, `docs/design/SSO_DESIGN.md` | Read with source | Specific JIT configuration control point, unsigned leases, invocation/watcher expiry, running-process limits; OIDC local testing, SAML unverified, real SCIM provider compatibility unverified. |
| Scanner `src/cli/{boppi,fix,narrowScope,jit,watch}.js`, discovery readers, `CHANGELOG.md`, `README.md`, test references | Current primary and enterprise worktrees | Server-entry removal, narrower directory arguments, configuration rescan, foreground watch, JIT boundaries. Built-in settings are broader in development than in public 0.3.0. |
| npm registry and public tarball, checked during this review | `npm view boppi version dist-tags --json` → latest 0.3.0 | Public artifact exists. Downloaded tarball inspected in memory: help/dispatch/source contain scan, plan, fix, verify, history, push, explicit config/CI flags, reports; backups and default confirmation are in code. No personal scan or installer was run. |
| Public source | https://github.com/Memanzur/boppi-scan | Public source and installation instructions load; do not use newer local README text as proof of the public release. |

## Capability classifications used in the copy

| Classification | Capabilities | Messaging consequence |
| --- | --- | --- |
| Implemented; public artifact verified | 0.3.0 configuration discovery for Claude Desktop/Code/Cursor; inferred access and modeled exposure paths; reports, plans, selected server removal with confirmation/backup; verification, history, optional inventory push and CI configuration checks | Public scanner v0.3.0. Public artifact/source verified; no claim of independent real-device or end-to-end hosted validation. |
| Implemented and locally tested; publicly unverified | Paired remediation, selected directory narrowing, rollback; current consent/erasure/findings workflows; scoped JIT configuration lifecycle and local OIDC | In development/unpublished, with real-device, independent review, release and hosted-validation gaps visible. |
| Partial or branch-specific | Enterprise SSO/SCIM/service identities/MFA/approval/audit integration; broader discovery; event capture; evaluated Intelligence corrections and signed shadow bundles | No publicly verified enterprise-suite claim. The primary branch and isolated integrations differ. |
| Planned/active development | Privacy-preserving production learning, wider monitoring, hosted parity, additional integration surfaces | In development, without a launch date or suggestion that data is already training shared models. |
| Not currently supported/publicly established | Universal agent coverage; hosted app permission inventory; automatic runtime protection; guaranteed prevention; enterprise-wide JIT enforcement; credential brokering; continuous public monitoring | Explicitly bounded. Configured potential access is distinct from actual tool use. A rescan does not revoke a credential or stop an already running client. |

## Sections and pages changed

| Section/page | Change |
| --- | --- |
| Hero | Platform definition first; free scanner entry point; current coverage and wider development status; public version label. Original headline and command treatment retained. |
| Navigation | Product-status destination replaces unverified sign-in promise; homepage anchors now work from secondary pages; concise phone labels with full accessible names. |
| Coverage strip | Configured/inferred evidence; public exclusions for Codex, VS Code, Windsurf and hosted app permissions; experimental OS status. |
| Feature cards | Accurate public server-removal scope and confirmation; reports, CI and evidence language retained. |
| How it works | Five steps now follow see → understand → control → verify → monitor; step 5 distinguishes repeated scans from unpublished watching/event capture. |
| Risk model | Existing six templates retained; section explicitly labeled configuration evidence. |
| Platform/pillars/status | Four existing status columns now explain Agent, Cloud, Control and Intelligence. Cloud organization/governance positioning, scope-limited remediation and JIT, and inactive production learning are explicit. |
| Cloud cards and synthetic-demo callout | Shared evidence and accountable decisions; authorized changes and verification; integration-specific enforcement limits; working sample demo CTA. |
| Access cards | Public free scanner and in-development Cloud/Control separated; misleading signup and command-shaped GitHub button replaced with checkup instructions and labeled email contact. No price promise for the unreleased enterprise product. |
| Boundaries/FAQs | Bounded redaction language, choice/backup implications, configured vs observed activity, current changes, and full-platform availability. |
| Footer | Platform positioning and working cross-page section links. Existing GitHub/npm/contact/legal destinations retained. |
| `/checkup` | Public vs candidate scope; environment values excluded from records rather than claiming they are never read; Cloud status and email contact; valid main landmark target. |
| `/demo` | Existing fictional demo and disclosure retained; main landmark target fixed. Generated demo files and sample behavior untouched. |
| `/privacy`, `/terms` | Product architecture, unpublished data workflows, hosted-validation status, and configuration-vs-effective-access statements corrected; original visual layout retained. Draft dates updated. Existing commercial provisions were not independently legally reviewed. |
| Metadata | Platform description in search/social metadata; SoftwareApplication schema stays specific to the public 0.3.0 Agent scanner. |
| Maintainer workflow | Type-check and website-test npm scripts, current README checks, source-accurate sitemap dates, expanded existing guest-entry regression suite. Historical dated copy tests remain preserved as historical evidence. |

## CTA and link audit

All anchors and buttons in the five routes, the bundled demo, and the 404 return link were inspected in source. Desktop/mobile guest tests drive the demo, clipboard, FAQs, section navigation, and inspect every rendered anchor for empty/placeholder destinations.

| CTA/destination | Result / action |
| --- | --- |
| Hero command | Copies `npx boppi scan`; checkup page supplies installation prerequisites and limits. |
| Guest/free checkup | `/checkup`, loads and works without an account. Pricing no longer displays a command while actually opening GitHub. |
| Demo CTAs | `/demo`, bundled iframe `/boppi-demo.html`, provenance `/boppi-demo.json`: real local files; four scenarios and simulated-change interaction pass. |
| Hosted login and signup | Root and `/signup` return HTTP 200. Browser shows an actual signup form and login link. **No account was created and no login was submitted:** doing so would write to the live product. Successful public signup/login and current product parity remain unverified. Removed from marketing CTAs. |
| New product status | `/#platform`; section exists and works from secondary pages. |
| Early access / team contact / email | Valid `mailto:boppii.ioo@gmail.com` links, with explicit email wording and subject where appropriate. No waitlist database, fake success message, or implicit automatic enrollment. Mail-client configuration and delivery are not verified; no email was sent. |
| GitHub/source/issues | Both repository and issues URLs return HTTP 200. |
| npm | Package registry and 0.3.0 tarball return HTTP 200; standard npm package-page URL retained. Automated request to www.npmjs.com returns HTTP 403, so package-page reachability through that client remains unverified. |
| Section navigation | Previously bare `#...` links broke from `/checkup` and `/demo`; now use `/#...`. All section targets verified in desktop/mobile tests. |
| Privacy/terms/home | Resolve locally; matching sitemap entries. |
| Download / waitlist / booking form | No installer-download, waitlist, demo-booking form or submission handler exists in this website. None was invented or advertised. The demo is the functioning demo destination. |

## Verification and screenshots

- Production Vite build succeeds. TypeScript application and node-config checks pass.
- ESLint: 0 errors; the same 7 pre-existing React fast-refresh warnings in unchanged UI primitives. Build also reports an outdated Browserslist data warning; dependencies were not upgraded for this copy task.
- Sitemap regression suite: 12/12; all 5 route dates match their source changes.
- Expanded website suite: 110/110, at 1280×900 and 390×900, against the built website under the Vercel CSP/security headers. Covers guest keyboard entry, four demo scenarios, simulated change, command clipboard, FAQ expansion, all-five-page axe WCAG A/AA, main targets, overflow, empty links, section targets across routes, CTA boundaries, console errors and unexpected external requests. No violations, horizontal overflow, console errors, or unexpected external requests in those checks. Automated checks are not a complete accessibility certification.
- Additional visual/layout review at 320, 390, 768 and 1280 CSS pixels. Mobile CTA labels shortened to keep the existing header readable. Access status wraps instead of forcing a horizontal layout.
- Before screenshots captured from the original checkout before edits; matching hero screenshots additionally captured from an isolated read-only archive of `edd8c9f`. After screenshots capture the built local revision. Five routes × two widths, plus homepage hero/details.

Screenshot directory (outside the repository):
`~/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/`

- `before/1280-home.png`, `after/1280-home.png`: full desktop homepage.
- `before/390-home.png`, `after/390-home.png`: full mobile homepage.
- `before/{1280,390}-home-hero.png`, `after/{1280,390}-home-hero.png`: matching homepage hero views.
- `before/` and `after/`: desktop/mobile `checkup`, `demo`, `privacy`, `terms` page screenshots.
- `tests/results.json`: individual automated check results, plus test screenshots.

## Screenshot links

| Page | Desktop before | Desktop after | Mobile before | Mobile after |
| --- | --- | --- | --- | --- |
| home | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/1280-home.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/1280-home.png>) | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/390-home.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/390-home.png>) |
| checkup | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/1280-checkup.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/1280-checkup.png>) | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/390-checkup.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/390-checkup.png>) |
| demo | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/1280-demo.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/1280-demo.png>) | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/390-demo.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/390-demo.png>) |
| privacy | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/1280-privacy.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/1280-privacy.png>) | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/390-privacy.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/390-privacy.png>) |
| terms | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/1280-terms.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/1280-terms.png>) | [before](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/before/390-terms.png>) | [after](</Users/melodymanzur/Desktop/Boppi Workspace/Reviews and Evidence/website-messaging-2026-10-29/after/390-terms.png>) |

## Remaining uncertainties and approval boundary

No known unsupported feature is intentionally advertised as public. Hosted signup completion, mail delivery, current hosted schema/feature parity, true real-device behavior, real IdP/SCIM compatibility, runtime hook delivery, JIT call-time enforcement, and production learning/monitoring remain unverified or unavailable as labeled. Local product-test logs support the in-development wording only. No launch date, installer or immediate enterprise access is promised.

Stop here for local review. Only after approval: verify actual Git/Vercel project linkage and production branch, audit the complete deployment diff including inherited history and sensitive values, and create a non-production preview. A Git push requires separate approval. A production merge/push/deploy requires explicit final approval after the preview and final diff.
