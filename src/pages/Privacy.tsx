import { LINKS } from "@/lib/links";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-cyan-400 mb-4">{children}</h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-300 leading-relaxed mb-3">{children}</p>
);

const UL = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main id="main" className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8 italic">Release draft updated: October 29, 2026</p>

          <section className="prose prose-invert max-w-none space-y-8">
            <section>
              <H2>1. What Boppi is</H2>
              <P>
                Boppi is an AI security and access-control platform. The public Agent scanner
                (npm package "boppi", v0.3.0) analyzes supported AI and MCP configuration on your device.
                Cloud centralizes submitted evidence; Control adds supported permission workflows;
                Intelligence develops evidence-based improvements. The wider platform is in development.
                This draft describes the website, public scanner, and unpublished workflows separately.
              </P>
            </section>

            <section>
              <H2>2. The scanner sends nothing unless you tell it to</H2>
              <P>
                The scan, verify, history, and report commands make no network calls. They read the MCP
                configuration files for Claude Desktop, Claude Code, and Cursor, analyze them in memory,
                and write output to your machine. None of them sends anything to Boppi or to anyone
                else.
              </P>
              <P>
                In public v0.3.0, boppi push is the network command. When you run it, it sends the
                sanitized inventory of a single scan (agent, server, capability, and permission records,
                plus fingerprinted paths and redacted configuration metadata) to the workspace you
                name with --url, over HTTPS, authenticated by the collector token you generated in that
                workspace. In the unpublished 0.4.0 candidate, a separately approved discover command can start one MCP server and contact it; ordinary scans never run that discovery. Package installation can contact the npm registry.
              </P>
              <UL
                items={[
                  "Scan records omit environment variable values and redact recognized secret shapes. Configuration metadata may still identify services or projects; review every export before sharing it.",
                  "Recognized absolute filesystem paths are fingerprinted before export. This is tested against known shapes, not a guarantee that arbitrary configuration text can never contain private information.",
                  "Some entries that appear to contain secrets are refused. Detection and redaction cover recognized patterns; they cannot establish that all arbitrary configuration text is safe to share.",
                  "Every file read during a run is listed at the end of the output.",
                  "boppi history keeps a sanitized record of past scans on your machine only.",
                ]}
              />
            </section>

            <section>
              <H2>3. The control plane, if your team uses it</H2>
              <P>
                An older beta is hosted at app.boppi.io. Successful public onboarding and parity with the current development build remain unverified. The Cloud implementation stores the following data when these workflows are used:
              </P>
              <UL
                items={[
                  "Your email address and a password hash, to sign you in.",
                  "Your organization name and the role of each member.",
                  "Scan inventories that you push from one of your machines with boppi push, using a token your organization created. These contain agent names, server names, inferred capabilities and permissions, redacted configuration metadata and path fingerprints. They do not intentionally include prompt contents, runtime events or remediation backups.",
                  "Workspace audit records for supported actions.",
                  "In the unpublished 0.4.0 implementation only: corrections and review notes your team writes on the Intelligence page, including free-text reasons. Review provenance, separate contribution consent, withdrawal, and erasure workflows are implemented; hosted rollout is pending.",
                  "In the unpublished 0.4.0 implementation only, if you turn on activity sync for a collector: activity events sent with boppi events push. These carry the event type, server, tool, outcome and duration, plus keyed digests. They do not include tool arguments, prompts or file contents.",
                  "In the unpublished 0.4.0 implementation only, if you pair a device with boppi connect: the fixes that device offers (described by hashes, path fingerprints, server names and capability names), the proposals your team approves or declines, and the state the device reports back (previewed, applied, verified, rolled back). The connector is designed to keep raw file paths, configuration contents, and backups on the device; identifiers and recognized redacted metadata still cross the boundary.",
                ]}
              />
              <P>
                Cloud uses Supabase with row-level security for organization isolation, exercised by automated database tests. This is not an independent certification of the hosted service. Collector tokens are stored hashed; the development workflows support rotation, revocation, and organization deletion. The unpublished 0.4.0 cloud workflow adds versioned sync consent, withdrawal that revokes tokens, and separately confirmed erasure of a collector’s uploaded inventory and snapshots. Those controls are tested; deployment is still gated. Do not assume the older hosted beta has those screens. Use on-device analysis or a dry-run preview until a compatible cloud release is confirmed.
              </P>
            </section>

            <section>
              <H2>4. This website</H2>
              <P>
                boppi.io is a static site hosted on Vercel. We do not run analytics or advertising scripts.
                Vercel may log requests for the purpose of serving the site, as any host does.
              </P>
            </section>

            <section>
              <H2>5. Data use and Intelligence development</H2>
              <UL
                items={[
                  "We do not sell or rent personal data.",
                  "The Intelligence prototype uses reviewed evidence and separate contribution consent. Production learning is not activated.",
                  "The public scanner uploads inventory only through explicit push. The unpublished candidate has separate activity-sync and pairing flows. Review metadata before sending it; redaction is not a guarantee that arbitrary text contains no private information.",
                  "We share customer data with the hosting providers named above, or when the law requires it.",
                ]}
              />
            </section>

            <section>
              <H2>6. Your rights</H2>
              <P>
                You can ask for a copy of the data we hold about you or your organization, ask us to
                correct it, or ask us to delete it. Email us and we will do it.
              </P>
            </section>

            <section>
              <H2>7. Contact</H2>
              <P>
                <a href={LINKS.contact} className="text-cyan-400 hover:underline">{LINKS.email}</a>
              </P>
            </section>

            <section>
              <H2>8. Changes</H2>
              <P>
                If this policy changes, the new version goes on this page with a new date at the top.
              </P>
            </section>
          </section>

          <div className="mt-12 pt-8 border-t border-white/20">
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Back to home</a>
          </div>
        </div>
      </main>
    </div>
  );
}
