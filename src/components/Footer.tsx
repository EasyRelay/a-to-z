import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    {name: "About Us", id: "about-us"}, 
    {name: "Partners", id: "partners"}, 
    {name: "Testimonials", id: "why-choose-us"}, 
    {name: "Contact", id: "contact"},
  ];

  const getById = (name: string) => {
    return '#' + services.find(item => item.name === name)?.id;
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Summary */}
          <div >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                A TO Z FREIGHT
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Smart logistics powered by technology and reliability. Nationwide and international freight delivery with precision.
              <br />
              <strong>MC:</strong> 1598514 <br />
              <strong>DOT:</strong> 3856056
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="text-sm space-y-2 text-gray-400">
              <li><strong>Address:</strong> 80 Marbury Ct, Springboro, OH 45066</li>
              <li><strong>Owner:</strong> Nabijon Umarov (12-01-1968)</li>
              <li><strong>Phone:</strong> (937) 518-4849, (513) 667-4946</li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:azfreightsolution@gmail.com" className="text-blue-400 hover:underline">
                  azfreightsolution@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {services.map((item, i) => (
                <li key={i}>
                  <a href={getById(item.name)} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <p>&copy; 2025 A TO Z FREIGHT SOLUTION LLC. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="text-blue-sky hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-service" className="text-blue-sky hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-blue-sky hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
