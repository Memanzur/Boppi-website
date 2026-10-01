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
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8 italic">Last updated: October 1, 2026</p>

          <section className="prose prose-invert max-w-none space-y-8">
            <section>
              <H2>1. What Boppi is</H2>
              <P>
                Boppi has two parts. The scanner, published as the npm package "boppi", runs on your
                machine and reports what your local AI agents can reach. The control plane is a hosted
                workspace where a team can collect scans from many machines. This policy covers both,
                plus this website.
              </P>
            </section>

            <section>
              <H2>2. The scanner collects nothing</H2>
              <P>
                The scanner contains no network code. It reads the MCP configuration files for Claude
                Desktop, Claude Code, and Cursor, analyzes them in memory, and prints a report. Nothing is
                sent to Boppi or to anyone else.
              </P>
              <UL
                items={[
                  "It never collects secret values, environment variable values, or file contents.",
                  "Raw filesystem paths are replaced with fingerprints before they reach the report.",
                  "If a config entry looks like it contains a secret, the scanner refuses that config and tells you why.",
                  "Every file read during a run is listed at the end of the output.",
                ]}
              />
            </section>

            <section>
              <H2>3. The control plane, if your team uses it</H2>
              <P>
                The control plane is only available to pilot customers. When a team uses it, we store:
              </P>
              <UL
                items={[
                  "Your email address and a password hash, to sign you in.",
                  "Your organization name and the role of each member.",
                  "Scan snapshots that a collector on one of your machines pushes with a token your organization created. These contain the same metadata the scanner prints: agent names, server names, inferred capabilities, and path fingerprints. Never secret values or file contents.",
                  "An audit event for each change made in the workspace.",
                ]}
              />
              <P>
                Data is stored in a Supabase project with row-level security enforced in the database, so
                one organization cannot read another's rows. Collector tokens are stored hashed and can be
                rotated or revoked at any time. Deleting your organization deletes its data.
              </P>
            </section>

            <section>
              <H2>4. This website</H2>
              <P>
                boppi.io is a static site hosted on Vercel. We do not run analytics or advertising scripts.
                Vercel may log requests for the purpose of serving the site, as any host does. Fonts load
                from Google Fonts.
              </P>
            </section>

            <section>
              <H2>5. What we never do</H2>
              <UL
                items={[
                  "Sell or rent personal data.",
                  "Train models on customer data.",
                  "Collect data from the scanner.",
                  "Share customer data with third parties except the hosting providers named above, or when the law requires it.",
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
      </div>
    </div>
  );
}
