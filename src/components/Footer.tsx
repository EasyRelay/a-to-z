import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["Routing", "Global Delivery", "Real-time Tracking", "Analytics"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact"]
    },
    {
      title: "Support",
      links: ["Help Center", "API Docs", "Status", "Security"]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                A to Z
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              MC: 1598514
              <br />
              DOT: 3856056
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t flex flex-row items-center justify-between border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className='flex items-center'>
            <p className="m-0">&copy; 2025 A to Z Logistics. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="text-blue-sky hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-service" className="text-blue-sky hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-blue-sky hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
