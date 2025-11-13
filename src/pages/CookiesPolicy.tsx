import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiesPolicy = () => {
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
              Cookie Policy
            </h1>

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
              <p className="text-xl mb-8 text-gray-400">
                This Cookie Policy explains how A TO Z FREIGHT SOLUTION LLC (“we,” “our,” or “us”) uses cookies and similar technologies when you visit our website or use our services, including tools integrated with third-party platforms such as RingCentral.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help improve your experience by remembering your preferences, enabling functionality, and providing analytical insights.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">
                2. Types of Cookies We Use
              </h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li><strong>Essential Cookies:</strong> Necessary for core functionality like authentication and security.</li>
                <li><strong>Functional Cookies:</strong> Save your preferences such as region or language.</li>
                <li><strong>Analytics Cookies:</strong> Track anonymous usage data for optimization.</li>
                <li><strong>RingCentral Integration:</strong> Used by RingCentral for communication features.</li>
                <li><strong>Third-Party Cookies:</strong> Set by services like Google Maps or reCAPTCHA.</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">
                3. Why We Use Cookies
              </h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Ensure the website works properly</li>
                <li>Customize the user experience</li>
                <li>Track and improve performance</li>
                <li>Support integrations like RingCentral</li>
                <li>Enhance security and detect fraud</li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">
                4. How to Manage Cookies
              </h2>
              <p>
                Most browsers allow you to view, delete, or block cookies. Use these features to control your cookie settings:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Edge</li>
              </ul>
              <p>
                Disabling essential cookies might limit your access to key features.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">
                5. Updates to This Policy
              </h2>
              <p>
                We may revise this Cookie Policy from time to time. Updates will be posted here with the latest date. Continued use implies consent.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-4">
                6. Contact Us
              </h2>
              <p>If you have questions about this Cookie Policy, please reach out:</p>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/40 mt-6">
                <p className="mb-2 font-bold text-white">A TO Z FREIGHT SOLUTION LLC</p>
                <p className="mb-2">80 Marbury Ct</p>
                <p className="mb-2">Springboro, OH 45066</p>
                <p className="mb-2">Phone: (937) 518-4849, (513) 667-4946</p>
                <p className="mb-2">Email: dispatch@azfreightllc.com</p>
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

export default CookiesPolicy;
