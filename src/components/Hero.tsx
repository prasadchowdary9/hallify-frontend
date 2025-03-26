
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const heroImages = [
  "https://images.unsplash.com/photo-1556202964-70dc73c21c57?q=80&w=2070", // Taj Mahal reflection
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071", // Hawa Mahal
  "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=2070", // Decorated wedding venue
  "https://images.unsplash.com/photo-1598386651573-9232cc0c2d6c?q=80&w=2070", // Indian wedding mandap
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <motion.div
          className="max-w-2xl text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-orange-500/80 backdrop-blur-sm rounded-full"
            variants={itemVariants}
          >
            DISCOVER INDIA'S FINEST VENUES
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Perfect Venues for Every Celebration
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            From majestic palaces to urban banquet halls, find the ideal setting for your weddings, corporate events, and milestone celebrations across India.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <Button
              size="lg"
              onClick={() => navigate('/venues')}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
            >
              Explore Venues
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/booking')}
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-lg text-lg transition-all duration-300"
            >
              Book Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* City Quick Links */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 no-scrollbar">
            <div className="flex space-x-4">
              {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Jaipur', 'Kochi'].map((city) => (
                <Button
                  key={city}
                  variant="outline"
                  onClick={() => navigate(`/venues?city=${city}`)}
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 whitespace-nowrap px-6 py-2 rounded-full transition-all duration-300"
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-orange-500 w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
