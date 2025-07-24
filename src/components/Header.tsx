import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('backdrop-blur-md', 'bg-gray-900/80');
        } else {
          navbar.classList.remove('backdrop-blur-md', 'bg-gray-900/80');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
 
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              A TO Z FREIGHT SOLUTION
            </span>
          </div>

          {isHome && (
            <div className="hidden md:flex items-center space-x-8 text-base font-medium">
              <a href="#partners" className="hover:text-blue-400 transition-colors">Partners</a>
              <a href="#why-choose-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Reviews</a>
            </div>
          )}

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && isHome && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Services</a>
            <a href="#how-it-works" className="block px-3 py-2 hover:bg-gray-700 rounded-md">How It Works</a>
            <a href="#testimonials" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Reviews</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
