import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Truck, 
  Zap, 
  Shield, 
  Clock, 
  Globe, 
  Brain, 
  Target, 
  CheckCircle, 
  Star,
  Menu,
  X,
  Search,
  ArrowRight,
  Users,
  TrendingUp,
  MapPin,
  Smartphone
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Routing",
      description: "Smart algorithms optimize delivery routes in real-time for maximum efficiency."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Worldwide delivery network with local expertise and global reach."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Tracking",
      description: "End-to-end security with blockchain-verified delivery confirmations."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Updates",
      description: "Live package tracking with predictive delivery time estimates."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Smart Pickup",
      description: "AI schedules optimal pickup times and routes"
    },
    {
      step: "02", 
      title: "Intelligent Sorting",
      description: "Machine learning sorts packages for efficient processing"
    },
    {
      step: "03",
      title: "Dynamic Routing",
      description: "Real-time route optimization using traffic and weather data"
    },
    {
      step: "04",
      title: "Secure Delivery",
      description: "Verified delivery with digital signatures and photos"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      features: [
        "Up to 50 packages/month",
        "Basic tracking",
        "Email notifications",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$24.99", 
      period: "/month",
      features: [
        "Up to 500 packages/month",
        "AI-powered routing",
        "Real-time tracking",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99.99",
      period: "/month", 
      features: [
        "Unlimited packages",
        "Custom AI solutions",
        "Dedicated account manager",
        "24/7 premium support",
        "Advanced analytics",
        "API access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechCorp Inc.",
      text: "Bolt AI Logistics transformed our delivery operations. The AI-powered routing reduced our costs by 30%.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Michael Rodriguez", 
      company: "E-Commerce Solutions",
      text: "The real-time tracking and predictive analytics have been game-changers for our customer satisfaction.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emily Johnson",
      company: "Retail Dynamics",
      text: "Exceptional service and cutting-edge technology. Our delivery times improved by 40%.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Fixed Navbar */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bolt AI Logistics
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Reviews</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Services</a>
              <a href="#how-it-works" className="block px-3 py-2 hover:bg-gray-700 rounded-md">How It Works</a>
              <a href="#pricing" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Reviews</a>
              <button className="w-full text-left bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight">
              Future of
              <br />
              Smart Logistics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your delivery operations with AI-powered routing, real-time tracking, 
              and predictive analytics for unparalleled efficiency.
            </p>
            
            {/* Track Package Input */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter tracking ID..."
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center gap-2 text-lg font-semibold shadow-2xl">
                Start Shipping Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 px-8 py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2 text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { label: "Packages Delivered", value: "10M+", icon: <Package className="w-6 h-6" /> },
              { label: "Countries Served", value: "50+", icon: <Globe className="w-6 h-6" /> },
              { label: "Delivery Accuracy", value: "99.9%", icon: <Target className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">{stat.icon}</div>
                  <span className="text-gray-400">{stat.label}</span>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience next-generation logistics with our cutting-edge AI technology and global infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-400 mb-4 group-hover:text-green-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent system handles every step of the delivery process with precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600/50 hover:border-green-500/50 transition-all transform hover:scale-105">
                  <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Tracking Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                AI-Powered Tracking
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of package tracking with our advanced AI system that provides 
                real-time insights, predictive analytics, and intelligent notifications.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Brain className="w-6 h-6" />, title: "Neural Network Analysis", desc: "Deep learning algorithms predict delivery times with 99% accuracy" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Real-Time Location", desc: "GPS tracking with machine learning for precise package positioning" },
                  { icon: <Smartphone className="w-6 h-6" />, title: "Smart Notifications", desc: "AI-powered alerts that adapt to your preferences and schedule" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-700/50">
                    <div className="text-purple-400 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600/50 shadow-2xl">
                <div className="bg-gray-900 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-400" />
                    Package #BL789456123
                  </h3>
                  <div className="space-y-3">
                    {[
                      { status: "Picked up", time: "2 hours ago", active: false },
                      { status: "In transit", time: "1 hour ago", active: false },
                      { status: "Out for delivery", time: "30 min ago", active: true },
                      { status: "Delivered", time: "Estimated in 15 min", active: false }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${item.active ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-gray-800'}`}>
                        <div className={`w-3 h-3 rounded-full ${item.active ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'}`}></div>
                        <div className="flex-1">
                          <div className="font-medium">{item.status}</div>
                          <div className="text-sm text-gray-400">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">99.2%</div>
                  <div className="text-sm text-gray-400">Delivery Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border transition-all transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                  : 'border-gray-600/50 hover:border-blue-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'border border-gray-600 hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who've transformed their logistics operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600/50 hover:border-green-500/50 transition-all transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bolt AI Logistics
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolutionizing logistics with AI-powered solutions for a smarter, faster future.
              </p>
            </div>
            
            {[
              {
                title: "Services",
                links: ["AI Routing", "Global Delivery", "Real-time Tracking", "Analytics"]
              },
              {
                title: "Company", 
                links: ["About Us", "Careers", "Press", "Contact"]
              },
              {
                title: "Support",
                links: ["Help Center", "API Docs", "Status", "Security"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bolt AI Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 rounded-full shadow-2xl hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-110 flex items-center gap-2 font-semibold">
          <Package className="w-5 h-5" />
          Track Parcel
        </button>
      </div>
    </div>
  );
}

export default App;