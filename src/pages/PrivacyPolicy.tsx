import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
              <p className="text-xl mb-8 text-gray-400">
                At Buraq Limited LLC, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including integrations with third-party communication platforms such as RingCentral.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Personal Identifiable Information (PII): your name, email address, phone number, and company name.</li>
                <li>Communication Data: data related to communication tools usage like RingCentral, such as call logs, messages (metadata), and user preferences.</li>
                <li>Technical Data: IP address, browser type, device info, OS, and activity logs.</li>
                <li>Usage Data: information on how you use our website or services.</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Providing logistics services to you</li>
                <li>Facilitating communication using RingCentral</li>
                <li>Improving our website and customer experience</li>
                <li>Providing customer support</li>
                <li>Monitoring and analyzing usage trends</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">3. RingCentral Integration</h2>
              <p>Our service uses RingCentral’s APIs to facilitate communication. When you connect your RingCentral account, we may access and use data such as:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Your RingCentral account information</li>
                <li>Call and message metadata (not message content)</li>
                <li>Contact and directory information</li>
              </ul>
              <p>This data is not shared with third parties except as required to operate the service.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">4. Sharing of Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>With service providers under confidentiality agreements</li>
                <li>To comply with legal obligations or government requests</li>
                <li>In connection with a merger, acquisition, or asset sale</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">5. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary to provide services and fulfill the purposes outlined in this policy.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">6. Your Data Protection Rights</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict certain data processing</li>
                <li>Withdraw consent for data usage (where applicable)</li>
              </ul>
              <p>To exercise these rights, contact us at <strong>legal@buraqlogistics.com</strong>.</p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">7. Security of Your Information</h2>
              <p>
                We implement industry-standard technical and organizational measures to protect your information, including encryption, secure data storage, and access controls.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of such sites.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">9. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, contact us at:</p>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/40 mt-6">
                <p className="mb-2 font-bold text-white">Buraq Limited LLC</p>
                <p className="mb-2">70 Eleanor Dr</p>
                <p className="mb-2">Springboro, OH 45066</p>
                <p className="mb-2">Phone: +1 (513) 407-4748</p>
                <p className="mb-2">Email: legal@buraqlogistics.com</p>
              </div>

              <p className="text-sm text-gray-500 mt-12 text-center italic">
                Last Updated: 20.06.2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
