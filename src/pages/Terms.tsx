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

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8 italic">Last updated: October 1, 2026</p>

          <section className="prose prose-invert max-w-none space-y-8">
            <section>
              <H2>1. The scanner</H2>
              <P>
                The boppi scanner is open source under the Apache License 2.0. The license, not these
                terms, governs your use of the code. You can read it in the repository.
              </P>
            </section>

            <section>
              <H2>2. The control plane</H2>
              <P>
                The hosted Boppi control plane is available to pilot customers under a written pilot
                agreement. Where that agreement and these terms differ, the agreement wins. By using the
                control plane you agree to these terms.
              </P>
              <UL
                items={[
                  "Give accurate information when you create an account or organization.",
                  "Keep your credentials and collector tokens confidential, and rotate a token if you think it leaked.",
                  "Only push scans from machines you are authorized to scan.",
                  "Do not attempt to access another organization's data or to disrupt the service.",
                ]}
              />
            </section>

            <section>
              <H2>3. What the reports mean</H2>
              <P>
                Boppi reports potential exposure based on configuration. A reported path means the
                configured grants would allow that chain. It does not mean an attack happened. A clean
                scan means the scanner found no such chain in the files it could read, not that your
                machine is secure. You are responsible for decisions you make based on a report.
              </P>
            </section>

            <section>
              <H2>4. Privacy</H2>
              <P>
                Our <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a> explains
                what we store and what we never collect.
              </P>
            </section>

            <section>
              <H2>5. Termination</H2>
              <P>
                You can delete your organization at any time. We may suspend access to the control plane
                if these terms are violated. The scanner is yours to keep under its license regardless.
              </P>
            </section>

            <section>
              <H2>6. Warranties and liability</H2>
              <P>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS
                OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOPPI SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, AND OUR TOTAL LIABILITY
                SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE CLAIM.
              </P>
            </section>

            <section>
              <H2>7. Contact</H2>
              <P>
                <a href={LINKS.contact} className="text-cyan-400 hover:underline">{LINKS.email}</a>
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
