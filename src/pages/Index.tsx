import { useEffect } from 'react';
import {
    Package,
    Target,
    Star,
    Clock,
    Headset,
    ShieldCheck,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Index() {
    const partners = [
        '/logos/amazon.png',
        '/logos/jbhunt.png',
        '/logos/crane.png',
        '/logos/usps.png',
        '/logos/fedex.png'
    ];

    const features = [
        {
            icon: Package,
            title: 'Secure Handling',
            description: 'We treat every package like it’s our own. From pickup to delivery, safety and security are our top priority.',
            color: 'bg-orange-500/10 text-orange-600'
        },
        {
            icon: Star,
            title: '5-Star Customer Service',
            description: 'Our dedicated support team is available around the clock to ensure your logistics experience is seamless.',
            color: 'bg-yellow-400/10 text-yellow-500'
        },
        {
            icon: Target,
            title: 'AI-Powered Routing',
            description: 'Intelligent route optimization powered by AI to reduce delays and fuel costs while improving reliability.',
            color: 'bg-pink-500/10 text-pink-500'
        }
    ];


    const testimonials = [
        {
            name: "Jason Lee",
            company: "NextWave Logistics",
            text: "Partnering with A TO Z FREIGHT SOLUTION LLC has been a game-changer. Their communication and speed are unmatched.",
            rating: 5,
            avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        },
        {
            name: "Natalie Brooks",
            company: "PrimeTech Solutions",
            text: "Their real-time tracking system gave us the confidence to scale operations without compromising service quality.",
            rating: 5,
            avatar: "https://images.pexels.com/photos/3184403/pexels-photo-3184403.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        },
        {
            name: "David Kim",
            company: "SupplyGrid Corp.",
            text: "Efficient, transparent, and tech-driven. We’ve reduced delivery delays by over 50% since switching to A TO Z.",
            rating: 5,
            avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
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
            <section id='about-us' className="relative pt-20 pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight">
                        A TO Z FREIGHT SOLUTION LLC
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-4">
                        Your trusted partner in smart logistics.
                    </p>
                    <p className="text-lg text-gray-400">
                        <strong>MC:</strong> 1598514 &nbsp; | &nbsp; <strong>DOT:</strong> 3856056
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
                        {[
                            {
                                label: "Months in Business",
                                value: "30+",
                                icon: <Clock className="w-6 h-6" />,
                                color: "from-orange-400 to-yellow-400"
                            },
                            {
                                label: "Customer Support",
                                value: "24/7",
                                icon: <Headset className="w-6 h-6" />,
                                color: "from-blue-400 to-purple-400"
                            },
                            {
                                label: "Delivery Accuracy",
                                value: "99.9%",
                                icon: <ShieldCheck className="w-6 h-6" />,
                                color: "from-green-400 to-emerald-400"
                            }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105 shadow-md"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 rounded-full bg-gradient-to-br ${stat.color} text-white`}>
                                        {stat.icon}
                                    </div>
                                    <span className="text-gray-300 text-sm tracking-wide uppercase">{stat.label}</span>
                                </div>
                                <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section id='partners' className="bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Trusted by Global Brands
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Our commitment to reliability has earned the trust of industry leaders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 items-center">
                        {partners.map((partner, index) => (
                            <div
                                key={partner}
                                className="flex items-center justify-center p-4 rounded-2xl bg-gray-700/80 backdrop-blur-md border border-gray-700/40 hover:border-blue-500 transition-all duration-300 hover:scale-105 group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <img
                                    src={partner}
                                    alt="Partner logo"
                                    className="max-h-16 max-w-[80%] object-contain  group-hover:grayscale-0 transition duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section id="why-choose-us" className="py-20 bg-gradient-to-b from-gray-900 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                            Why Choose A TO Z FREIGHT SOLUTION
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover the key advantages that set us apart in the logistics industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600/50 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-2xl"
                                >
                                    <div className={`w-14 h-14 mb-5 flex items-center justify-center rounded-full ${feature.color}`}>
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
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

            <div id='contact'>
                <Footer />
            </div>
        </div>
    );
}

export default Index;
