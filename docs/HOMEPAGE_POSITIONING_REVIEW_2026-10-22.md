# Boppi homepage positioning review — October 22, 2026

**Prepared locally for founder review. No push, merge, deployment, publication, or production modification.**

Preview: http://127.0.0.1:3106/

Working copy: `/Users/melodymanzur/Desktop/Boppi-website-positioning`, branch `codex/homepage-positioning`, based on `62136dc4af66941e8d1013786ec6a637ac6d9622`.

Screenshots and verification logs: `/Users/melodymanzur/Desktop/Boppi-homepage-review-2026-10-22/`.

## Versions and evidence checked first

| Surface | Verified state | Evidence and boundary |
| --- | --- | --- |
| Public homepage | https://boppi.io/; headline “Find the path before it becomes an incident.”; footer v0.3.0 | Direct read-only browser inspection and desktop/mobile captures. Content matches the local agent-security website lineage; hosting commit identity was not queried. |
| Website baseline | Local `62136dc`; remote `origin/agent-security-site` at `fca3e03` after fetch | The local head adds only the scanner version bump. `origin/main` at `523e55b` is the older extension website. Do not release from that default branch without reconciling the correct site lineage. Existing worktrees were preserved. |
| Published scanner | npm `boppi@0.3.0`; latest tag `0.3.0`; registry gitHead `b2e89dc68f1308ae27dde1e4873c2517e7736dad` | Fresh `npm view`, downloaded registry tarball, README, CLI and discovery source inspection. Public repository main is `a63e4f083fdb0e95fdb0baab7693df26dff26d4a`; repository head is not the published package. |
| Local scanner candidate | `~/Desktop/boppi-scan-auto`, `codex/live-brand-alignment`, `1d32b63a9d621b97f113b08805c888eb69a10873`, package 0.3.1 | Actual local package/source/history checked. Its existing uncommitted milestone decision file was preserved. Local work is not a public release. |
| Roadmap | `~/Desktop/Boppi-auto/BOPPI_ROADMAP_2026.md` | Used for product boundaries and planned capabilities. Historical deployment and test reports are not fresh production verification. |
| Hosted workspace | Existing public beta link retained | No authenticated workspace, database, migration, deployment, or account access. New local fleet/history/envelope behavior is not promised as deployed. |

## Message and customer value

Headline: **Know what your AI can access. Stay in control.**

Supporting description: **Boppi helps you discover what your AI assistants are connected to, understand potential security risks, and make safer decisions about their permissions.**

The homepage applies the supplied principles of clarity, trust, control, and meaningful risk reduction. It does not claim new external research or human comprehension testing was conducted in this task.

- **Visibility:** Find supported configuration and tool connections, with the coverage limits visible.
- **Understanding:** Explain why access combinations can matter, using file access plus an external destination as a concrete example; preserve technical evidence and six EP-A–EP-F templates further down the page.
- **Control:** Compare suggested changes and functionality lost, choose an edit, and rescan. “Control” describes informed user decisions today; runtime enforcement is planned.
- **Meaningful reduction:** Count modeled paths affected by a change instead of promising the “smallest fix,” eliminating all risk, or proving an attack was prevented. Verification can remain unresolved.

## Claim audit and corrections

| Before | Updated treatment | Reason |
| --- | --- | --- |
| Technical attack-path headline and graph explanation lead the page | Customer problem, proposed headline/description, then supported scanner scope | A visitor can understand the benefit before learning the model. |
| “Every agent on the machine” / “every agent … across the org” | Supported configuration and submitted inventory only | Discovery is limited; an upload is not universal fleet visibility. |
| “Smallest fix,” “breaks the most risk,” and “confirms it is gone” | Suggested changes ranked by modeled paths removed; review tradeoffs and compare a fresh scan | Candidate coverage, model assumptions, ineffective edits, and unresolved verification limit those claims. |
| “Five steps, about twenty milliseconds” | Describe the workflow without a speed promise | A lab run is not a general performance guarantee. |
| `operatingSystem: macOS, Linux, Windows` in structured data | `macOS`; visible note that Windows/Linux lookup is implemented but not verified on real machines | Config-location code and fixture execution do not establish actual OS/client support. Node.js 18+ requirement retained. |
| “Real output” with a manually updated version header | “Illustrative scan output,” sample-data header, and explicit non-live caption | Original animation was adapted from a v0.2.0 README example, not a fresh v0.3.0 run. No animation claims to scan the visitor's device. |
| Unqualified fixed-machine/dashboard sync claims | Explicit rescan and push; incomplete or empty discovery may leave older evidence | Avoids a promise of continuous monitoring or unconditional stale-record removal. |
| Monitoring discussed broadly as roadmap work | Public scanner/workspace do not continuously monitor, detect prompt injection, or block runtime actions; hook prototype is separate | Local event capture has unverified delivery/concurrency and is not continuous protection. Local history is manually generated snapshots. |
| Mixed present and future platform claims | Separate live v0.3.0, unpublished local v0.3.1, experimental local hook, and planned Intelligence | Prevents local code or aspirations from becoming public availability claims. Published plan/fix already exist; only expanded previews/rollback are described as candidate additions. |
| Implicitly complete access evidence | Config facts, inferred capabilities, potential paths, and effective access are distinguished | A clean scan is not proof of safety; a path is not an attack, effective permission check, or observed transfer. |
| Broad privacy absolutes on homepage | Local configuration analysis, sanitized reports, explicit push and dry-run, npm download distinction, full-original backup caveat | Configuration must be read locally; downloading via npx uses the network. The homepage avoids promising that all local artifacts are free of secrets. |
| No Boppi Intelligence positioning | Planned hybrid platform: local visibility/analysis plus optional shared intelligence and team controls | Clearly labeled longer-term vision with no working-capability or release-date claim. |

## Demo navigation

`BETA_DEMO` in `src/lib/links.ts` records `/beta`, `live: false`, and `#beta-preview`.

Desktop and mobile navigation currently show **Demo · soon**, pointing to the real homepage explanation at `#beta-preview`. No rendered link points to `/beta`. The explanation says the synthetic website demo is not live and describes its intended sample-data behavior.

A future change must implement and verify `/beta` before enabling this flag. There is no placeholder route, redirect, or fake interactive demo in this update.

## Preserved surfaces

- Logo, colors, typography classes, CSS tokens, grid/card layouts, breakpoints, terminal animation behavior, and legal route registrations are preserved. Copy length naturally changes section heights.
- `Privacy.tsx`, `Terms.tsx`, `App.tsx`, `src/index.css`, and `tailwind.config.ts` are unchanged. `/privacy`, `/terms`, and `/terms-of-service` remain available.
- Scanner commands, workspace sign-in, npm/GitHub/contact destinations, licensing and existing free-beta pricing commitments remain actionable.
- No analytics, dependencies, lockfile changes, tracking, credential operations, real scans, runtime hooks, or device remediation were added.

Legal accuracy follow-up: the unchanged privacy policy uses broad “never collects … file contents” and raw-path statements that should be reconciled with configuration reads, listed configuration locations, pattern-limited sanitization, and full-original remediation backups in a separate policy review. This homepage update adds the backup caveat without rewriting legal commitments or claiming a legal audit.

## Validation

- `npm run build`: PASS.
- TypeScript application and node-project checks: PASS.
- ESLint on changed source files: PASS.
- `git diff --check`: PASS.
- Full `npm run lint`: same **3 pre-existing errors and 7 warnings** observed before edits: empty interfaces in `ui/command.tsx` and `ui/textarea.tsx`, CommonJS import in `tailwind.config.ts`, plus existing refresh warnings. No rule was weakened and unrelated files were not changed.
- Dependency installation used the existing lockfile with scripts disabled. npm reported 34 existing advisory findings (6 moderate, 28 high). No dependency upgrades or audit fixes were applied in this messaging task.
- Read-only published scanner smoke: scan, plan, and verify against an isolated synthetic home/project all exited 0. The example produces one potential path; unedited predictions correctly remain UNRESOLVED. No real fix, push, server execution, or personal scan was performed. Scanner engine suites were not rerun because scanner source is unchanged.
- Browser layout checks at 320, 390, 768, 1024, and 1440 CSS pixels: document width equals viewport width. Homepage section links resolve; `/beta` link count is zero. Mobile and desktop demo links resolve to the notice below the sticky navigation.
- `/privacy`, `/terms`, and `/terms-of-service`: page headings verified in the browser.
- Browser console: no captured application errors; existing React Router future-flag warnings remain. Clipboard round-trip could not be confirmed through browser automation; the original copy handler is unchanged.
- No new human comprehension study, real OS/client validation, hosted-workspace validation, production readiness review, or security certification is implied by these checks.

## Review artifacts

Screenshots compare the current public homepage with the local update at matching sizes:

- `screenshots/before-desktop.jpg` / `after-desktop.jpg` — 1440 × 1000.
- `screenshots/before-mobile.jpg` / `after-mobile.jpg` — 390 × 844.
- `screenshots/before-desktop-full.jpg` / `after-desktop-full.jpg` — full homepage.
- `screenshots/after-demo-mobile.jpg` — actual coming-soon destination.

The evidence directory also includes this report, `review.html`, build/lint/typecheck logs, the synthetic scanner example and smoke logs, the downloaded published scanner, and `homepage-positioning.patch`.

## Approval boundary

This is a local review candidate. Founder approval is required before any push, merge, deployment, publication, or update of boppi.io. Publishing must use the correct current website lineage and freshly recheck the live baseline and scanner version; it must not release the unpublished scanner or change the hosted workspace as part of a copy update.
