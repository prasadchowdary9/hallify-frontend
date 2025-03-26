
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const heroImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
  "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070",
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
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
            className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-blue-500/80 backdrop-blur-sm rounded-full"
            variants={itemVariants}
          >
            PREMIUM VENUES FOR EVERY OCCASION
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Find the Perfect Space for Your Event
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Discover and book exclusive halls, ballrooms, and conference centers for your next gathering. Premium spaces, seamless experience.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <Button
              size="lg"
              onClick={() => navigate('/venues')}
              className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
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

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
