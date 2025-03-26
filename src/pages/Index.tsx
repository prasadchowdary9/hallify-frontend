
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import FeaturedVenues from '@/components/FeaturedVenues';
import { CheckCircle, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
    title: "Curated Venues",
    description: "Handpicked premium venues that meet our high quality standards"
  },
  {
    icon: <Calendar className="h-6 w-6 text-blue-500" />,
    title: "Real-time Availability",
    description: "Check and book available dates instantly without the wait"
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-500" />,
    title: "Perfect Locations",
    description: "Find venues in ideal locations that suit your specific needs"
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "Capacity Planning",
    description: "Filter venues by capacity to accommodate all your guests"
  }
];

const testimonials = [
  {
    quote: "We found our dream wedding venue through VenueHub. The booking process was seamless and the venue was exactly as advertised.",
    author: "Sarah & Michael",
    role: "Wedding Clients"
  },
  {
    quote: "As an event planner, VenueHub has been a game-changer for me. I can quickly find and book the perfect venues for my clients.",
    author: "James Peterson",
    role: "Corporate Event Planner"
  },
  {
    quote: "The detailed venue information and high-quality photos helped us make our decision with confidence. Highly recommended!",
    author: "Emma Rodriguez",
    role: "Conference Organizer"
  }
];

const Index = () => {
  const navigate = useNavigate();
  
  // Animation for staggered elements
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Search Bar */}
      <div className="relative z-10 -mt-16 px-6">
        <SearchBar />
      </div>
      
      {/* Featured Venues */}
      <FeaturedVenues />
      
      {/* How It Works */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Finding and booking your perfect venue has never been easier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-500 rounded-full text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Search</h3>
              <p className="text-gray-600">Browse our curated selection of premium venues or search with specific criteria</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-500 rounded-full text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Compare</h3>
              <p className="text-gray-600">View detailed information, photos, and reviews to find your perfect match</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-500 rounded-full text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Book</h3>
              <p className="text-gray-600">Secure your venue with instant booking and receive immediate confirmation</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6" ref={ref}>
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-20"
          >
            {/* Left Column - Features */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">FEATURES</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose VenueHub?</h2>
              <p className="text-gray-600 mb-8">
                We've reimagined the venue booking experience from the ground up to make it simpler, faster, and more reliable.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="mt-8"
                onClick={() => navigate('/venues')}
              >
                Explore All Venues
              </Button>
            </motion.div>
            
            {/* Right Column - Testimonials */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500 ${
                      index % 2 === 0 ? 'ml-0 md:ml-8' : 'ml-0 md:ml-16'
                    }`}
                  >
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Venue?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of event planners who have successfully booked their ideal venues through VenueHub
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/venues')}
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
