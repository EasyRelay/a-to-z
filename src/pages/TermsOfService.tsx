import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/40 shadow-lg">
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 hover:text-green-400 transition-colors duration-300 font-medium mb-8"
            >
              ← Back to Home
            </Link>

            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">
              Terms of Service
            </h1>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
              <p className="text-xl mb-8 text-gray-400">
                Welcome to A TO Z FREIGHT SOLUTION LLC. By accessing our website or using our logistics and communication services—including integrations with platforms like RingCentral—you agree to the following Terms of Service. If you do not agree to these terms, please discontinue use of our services immediately.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
              <p>These Terms form a binding agreement between you (the user) and A TO Z FREIGHT SOLUTION LLC. Use of our website or services constitutes your acceptance of these Terms and our Privacy Policy.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">2. Services Overview</h2>
              <p>A TO Z FREIGHT SOLUTION LLC provides logistics, freight coordination, shipment tracking, and digital communication tools. Certain services may be integrated with third-party platforms such as RingCentral. We reserve the right to modify, suspend, or discontinue any feature at any time without notice.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">3. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Be at least 18 years old</li>
                <li>Be legally capable of entering binding agreements</li>
                <li>Provide accurate, complete, and up-to-date information</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">4. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Do not violate laws or regulations</li>
                <li>Do not interfere with or disrupt service functionality or security</li>
                <li>Do not misuse communication features (e.g., RingCentral integration)</li>
                <li>Do not impersonate any person or submit false information</li>
              </ul>
              <p>You are responsible for maintaining the confidentiality of your account credentials.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">5. RingCentral Integration</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>We may access call metadata and account details (not message content)</li>
                <li>You agree to use RingCentral in compliance with their Terms of Use</li>
                <li>We use the API for voice, messaging, and routing functionalities</li>
                <li>We do not share your RingCentral data with unauthorized third parties</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">6. Intellectual Property</h2>
              <p>All content, branding, software, and materials on this site are the exclusive property of A TO Z FREIGHT SOLUTION LLC or our partners. Reproduction without permission is prohibited.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">7. Account Suspension and Termination</h2>
              <p>We reserve the right to suspend or terminate accounts violating these Terms or engaging in abuse. Notifications will be sent via email or in-platform.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">8. Disclaimer of Warranties</h2>
              <p>Our services are provided “as is” without any warranties. We do not guarantee uninterrupted, secure, or error-free access.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">9. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>No liability for indirect or consequential damages</li>
                <li>No liability for loss of data, revenue, or third-party service failure</li>
                <li>Total liability is limited to amounts paid by you (if any)</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">10. Indemnity</h2>
              <p>You agree to indemnify and hold harmless A TO Z FREIGHT SOLUTION LLC and its affiliates from any claims resulting from your use of our services or breach of these Terms.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">11. Governing Law</h2>
              <p>These Terms are governed by the laws of Delaware, USA. Any disputes shall be handled in the courts of the State of Ohio, USA.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">12. Modifications to These Terms</h2>
              <p>We may revise these Terms at any time. The latest version will be posted on our website. Continued use of our services implies acceptance.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">13. Contact Information</h2>
              <p>For any questions about these Terms of Service, please contact us at:</p>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/40 mt-6">
                <p className="mb-2 font-bold text-white">A TO Z FREIGHT SOLUTION LLC</p>
                <p className="mb-2">Email: azfreightsolution@gmail.com</p>
                <p className="mb-2">Phone: (937) 518-4849, (513) 667-4946</p>
                <p className="mb-2">Address: 80 Marbury Ct, Springboro, OH 45066</p>
                <p className="mb-2">Website: https://atozlogistic.netlify.app</p>
              </div>

              <p className="text-sm text-gray-500 mt-12 text-center italic">
                Last Updated: 25.06.2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfService;
