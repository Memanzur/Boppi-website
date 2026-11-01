import { CONTACT_EMAIL, contactMailto } from "@/lib/site";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8 italic">Last Updated: November 1, 2026</p>

          <section className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Boppi ("we", "our", or "us") provides Boppi Cloud, an AI access
                security and governance platform. This policy describes the
                marketing site at boppi.io and the account you create in the
                control plane. Boppi is not a browser extension, and this policy
                does not describe one.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. Information we handle</h2>

              <h3 className="text-xl font-semibold text-pink-400 mt-4 mb-2">2.1 Account</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Email address and password, when you create an account or sign in</li>
                <li>The workspace you create, or the workspace you join by invitation</li>
                <li>Optional multi-factor authentication, if you turn it on</li>
              </ul>

              <h3 className="text-xl font-semibold text-pink-400 mt-4 mb-2">2.2 Enrolled computer</h3>
              <p className="text-gray-300 leading-relaxed">
                If you enroll a computer, it reports findings for Claude Desktop,
                Claude Code, and Cursor to your workspace. Those reports are
                about configuration and potential access. They are not a copy of
                your files and not a transcript of every prompt. Unknowns in a
                finding stay visible. We do not claim the report covers every
                AI tool or every action.
              </p>

              <h3 className="text-xl font-semibold text-pink-400 mt-4 mb-2">2.3 Marketing site</h3>
              <p className="text-gray-300 leading-relaxed">
                boppi.io is a static site. The repository for this site does not
                include a third-party analytics script. The page requests the
                Instrument Serif typeface from Google Fonts, which means your
                browser contacts Google. The corner chip stores a dismissal
                flag in session storage on your browser and does not send it
                to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. How we use information</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To run your account and workspace</li>
                <li>To show inventory, potential access paths, and evidenced findings with history</li>
                <li>To show monitoring status, missed-report notices, and in-app alerts</li>
                <li>To record an approval and to provide export</li>
                <li>To answer email you send us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Where it is stored</h2>
              <p className="text-gray-300 leading-relaxed">
                The control plane is hosted on Vercel and stores account and
                finding data with Supabase. This marketing site is also hosted
                on Vercel. Traffic to both uses HTTPS. This policy does not
                claim a certification, and it does not describe a local-only
                product that keeps every record on the device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Sharing</h2>
              <p className="text-gray-300 mb-2">We do not sell personal information. We share data only:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With the hosting and database providers above, so the service can run</li>
                <li>If you export it, or if you invite someone into your workspace</li>
                <li>To comply with law, or to respond to abuse of the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Your choices</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Export data from the control plane</li>
                <li>Email us to request access to, or deletion of, your account data</li>
                <li>Turn optional MFA on or leave it off</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                A self-serve deletion control is not described here. Send the
                request by email and we will handle it on the account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Contact</h2>
              <p className="text-gray-300 mb-2">For privacy questions, email:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <a href={contactMailto("Boppi privacy")} className="text-cyan-400 hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Changes</h2>
              <p className="text-gray-300">
                We may update this policy. The date at the top is when this
                page last changed. Earlier text on this site described a
                browser extension and local masking. That description is withdrawn.
              </p>
            </section>
          </section>

          <div className="mt-12 pt-8 border-t border-white/20">
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}
