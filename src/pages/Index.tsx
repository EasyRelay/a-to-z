import { useEffect } from 'react';
import {
  Package,
  Shield,
  Clock,
  Globe,
  Brain,
  Target,
  Star,
  MapPin,
  Smartphone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Index() {
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
      <Header />

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
              Future of Smart Logistics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              MC: 1598514
              <br />
              DOT: 3856056
            </p>
          </div>

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

      <Footer />
    </div>
  );
}

export default Index;