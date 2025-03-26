
import React from 'react';
import { useNavigate } from 'react-router-dom';
import VenueCard from './VenueCard';
import { getFeaturedVenues } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedVenues = () => {
  const navigate = useNavigate();
  const featuredVenues = getFeaturedVenues();

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Venues</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium venues for your next event
          </p>
        </div>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVenues.map((venue, index) => (
            <div key={venue.id}>
              <VenueCard venue={venue} index={index} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/venues')}
            className="group"
          >
            View All Venues
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
