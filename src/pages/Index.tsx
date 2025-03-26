
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import FeaturedVenues from '@/components/FeaturedVenues';
import { CheckCircle, Calendar, MapPin, Users, Star, Heart, Camera, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { getPopularCities } from '@/lib/data';

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
    title: "Curated Premium Venues",
    description: "Handpicked luxury venues that meet our high quality standards across major Indian cities"
  },
  {
    icon: <Calendar className="h-6 w-6 text-orange-500" />,
    title: "Real-time Availability",
    description: "Check and book available dates instantly for your special occasions"
  },
  {
    icon: <MapPin className="h-6 w-6 text-orange-500" />,
    title: "Prime Locations",
    description: "Find venues in the heart of Mumbai, Delhi, Bangalore and other major cities"
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />,
    title: "Capacity Planning",
    description: "Filter venues by capacity to accommodate all your guests, from intimate gatherings to grand celebrations"
  }
];

const testimonials = [
  {
    quote: "We found our dream wedding venue through VenueHub. The decorated mandap at Taj Banquet Hall was exactly what we envisioned for our special day.",
    author: "Priya & Rahul Sharma",
    role: "Wedding Clients",
    city: "Mumbai"
  },
  {
    quote: "As an event planner for corporate conferences, VenueHub has been a game-changer. The venue options in tech hubs across India are excellent.",
    author: "Vikram Malhotra",
    role: "Corporate Event Planner",
    city: "Bangalore"
  },
  {
    quote: "The detailed venue information and high-quality photos helped us select the perfect palace venue for our destination wedding in Rajasthan.",
    author: "Aisha Patel",
    role: "Destination Wedding Planner",
    city: "Jaipur"
  }
];

const Index = () => {
  const navigate = useNavigate();
  const popularCities = getPopularCities();
  
  // Animation for staggered elements
  const controls = useAnimation();
  const featuresRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [controls]);

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
      <div className="relative z-10 -mt-24 px-6">
        <SearchBar />
      </div>
      
      {/* Popular Cities Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover perfect venues in India's most vibrant cities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularCities.map((city, index) => (
              <div
                key={city}
                className="relative overflow-hidden rounded-lg aspect-square shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => navigate(`/venues?city=${city}`)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(https://source.unsplash.com/featured/?${city},india${index})` 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-xl">{city}</h3>
                  <p className="text-sm opacity-80">Explore venues</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
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
            <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full font-bold">1</div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Search</h3>
              <p className="text-gray-600">Browse our curated selection of premium Indian venues or search by location and requirements</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full font-bold">2</div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compare</h3>
              <p className="text-gray-600">View detailed information, photos, and reviews to find your perfect venue match</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-4 h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full font-bold">3</div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book</h3>
              <p className="text-gray-600">Secure your venue with instant booking and receive immediate confirmation</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6" ref={featuresRef}>
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-20"
          >
            {/* Left Column - Features */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-orange-100 text-orange-600 rounded-full">FEATURES</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose VenueHub?</h2>
              <p className="text-gray-600 mb-8">
                We've reimagined the venue booking experience in India from the ground up to make it simpler, faster, and more reliable.
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
                className="mt-8 bg-orange-500 hover:bg-orange-600"
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
                    className={`bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500 ${
                      index % 2 === 0 ? 'ml-0 md:ml-8' : 'ml-0 md:ml-16'
                    }`}
                  >
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 text-orange-500 mr-1" />
                        <span className="text-xs text-orange-500">{testimonial.city}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Venue?</h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-8">
            Join thousands of event planners across India who have successfully booked their ideal venues through VenueHub
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/venues')}
            className="bg-white text-orange-600 hover:bg-orange-50"
          >
            Start Exploring Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
