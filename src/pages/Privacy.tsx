export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8 italic">Last Updated: October 26, 2025</p>

          <section className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Boppi ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-pink-400 mt-4 mb-2">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Email address and password (for account creation)</li>
                <li>Name (optional)</li>
                <li>User preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-pink-400 mt-4 mb-2">2.2 Information Automatically Collected</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>PII detection logs (anonymized)</li>
                <li>Risk level assessments</li>
                <li>Extension usage statistics</li>
                <li>Page URLs where detections occur (anonymized)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-2">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Analyze usage patterns to improve our services</li>
                <li>Detect and prevent security threats</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Data Storage and Security</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>All data is encrypted in transit and at rest</li>
                <li>Data is stored securely in Supabase (PostgreSQL database)</li>
                <li>We implement industry-standard security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Data Sharing</h2>
              <p className="text-gray-300 mb-2">We do not sell your personal information. We may share data only:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers (e.g., Supabase) under strict agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-2">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Request data portability</li>
                <li>Opt-out of certain data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Contact Us</h2>
              <p className="text-gray-300 mb-2">For privacy concerns, contact us at:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Email: privacy@boppi.io</li>
                <li>Website: <a href="https://boppi.io/contact" className="text-cyan-400 hover:underline">https://boppi.io/contact</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
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
