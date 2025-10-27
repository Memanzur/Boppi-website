export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8 italic">Last Updated: October 26, 2025</p>

          <section className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using Boppi ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-2">Boppi is a cybersecurity platform that provides:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Real-time PII (Personally Identifiable Information) detection and masking</li>
                <li>Risk assessment and compliance management</li>
                <li>Browser extension for Chrome and other supported browsers</li>
                <li>Web-based dashboard and analytics</li>
                <li>API access (on paid tiers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. User Accounts</h2>
              <p className="text-gray-300 mb-2">You must:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information when creating an account</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Be at least 18 years old to use the Service</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-300 mb-2">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use the Service to violate any local, state, national, or international law</li>
                <li>Transmit any malicious code, viruses, or harmful software</li>
                <li>Attempt to gain unauthorized access to the Service or its systems</li>
                <li>Reverse engineer, decompile, or disassemble any portion of the Service</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Pricing and Payment</h2>
              <p className="text-gray-300 mb-2">
                The Service is offered on a subscription basis with different pricing tiers. Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-300 mb-2">
                All content, features, and functionality of the Service are owned by us or our licensors. We grant you a limited, non-exclusive, non-transferable license to access and use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-300 mb-2">
                Your use of the Service is also governed by our <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>. By using the Service, you consent to our collection and use of your data as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Termination</h2>
              <p className="text-gray-300 mb-2">
                You may terminate your account at any time. We may suspend or terminate your account if you violate these Terms, fail to pay subscription fees, or engage in fraudulent, illegal, or harmful activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Warranties and Disclaimers</h2>
              <p className="text-gray-300 mb-2">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-300 mb-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">11. Contact Information</h2>
              <p className="text-gray-300 mb-2">For questions about these Terms, contact us at:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Email: legal@boppi.io</li>
                <li>Website: <a href="https://boppi.io/contact" className="text-cyan-400 hover:underline">https://boppi.io/contact</a></li>
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
