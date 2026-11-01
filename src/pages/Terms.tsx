import { CONTACT_EMAIL, contactMailto } from "@/lib/site";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8 italic">Last Updated: November 1, 2026</p>

          <section className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By using the boppi.io site or creating a Boppi Cloud account
                ("the Service"), you agree to these Terms of Service ("Terms").
                If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. The Service</h2>
              <p className="text-gray-300 mb-2">
                Boppi Cloud is an AI access security and governance platform.
                With an account, and a computer you enroll, the Service can:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Discover Claude Desktop, Claude Code, and Cursor on that computer</li>
                <li>Show potential access paths and evidenced findings, with history</li>
                <li>Monitor on a recurring basis, including a notice when a report is missed and alerts inside the app</li>
                <li>Propose a remediation for you to approve and apply manually, then check the outcome on a later scan</li>
                <li>Keep an audit record and provide export</li>
                <li>Offer optional multi-factor authentication</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                The Service is not antivirus, not a chatbot, and not a
                local-only scanner. It does not monitor every AI action.
                Just-in-time access, SSO, SCIM, a policy engine, automatic
                enforcement, Boppi Intelligence, and billing are planned and
                are not part of the Service today. A finding is evidence about
                potential reach. It is not a promise about a later incident,
                and it is not a certification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Accounts</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate information when you create an account</li>
                <li>Keep your credentials confidential</li>
                <li>Be at least 18 years old</li>
                <li>Tell us if you believe someone else is using your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Acceptable use</h2>
              <p className="text-gray-300 mb-2">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Break the law while using the Service</li>
                <li>Send malware or other harmful software to the Service</li>
                <li>Attempt to access an account, workspace, or system you are not allowed to use</li>
                <li>Interfere with the Service or the computers that run it</li>
                <li>Reverse engineer the Service except where the law does not allow this limit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Pricing</h2>
              <p className="text-gray-300 leading-relaxed">
                Creating an account does not collect a payment. There is no
                checkout on boppi.io today. If paid plans are offered later,
                we will describe the price before charging you. Nothing on the
                marketing site is a quote.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Intellectual property</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service, its design, and its software are owned by us or
                our licensors. We grant you a limited, non-exclusive,
                non-transferable license to access the Service for your own use
                while these Terms are in effect. Findings about your own
                environment stay yours to export.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a> describes
                what the account holds. Using the Service means you have read it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Ending use</h2>
              <p className="text-gray-300 leading-relaxed">
                You may ask us to close your account by email. We may suspend
                or close an account that breaks these Terms or that is used to
                abuse the Service or other people.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Disclaimers</h2>
              <p className="text-gray-300 leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND. WE DISCLAIM WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT DISCOVERY IS COMPLETE,
                THAT A PATH WAS USED, OR THAT APPLYING A MODELED REMEDIATION
                CHANGES A LATER OUTCOME. THE NEXT SCAN CHECKS WHAT THE
                ENROLLED COMPUTER CAN REPORT. IT IS NOT A PROMISE ABOUT A LATER INCIDENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">10. Limitation of liability</h2>
              <p className="text-gray-300 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE
                AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">11. Contact</h2>
              <p className="text-gray-300 mb-2">Questions about these Terms:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <a href={contactMailto("Boppi terms")} className="text-cyan-400 hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
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
