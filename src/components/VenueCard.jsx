
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const VenueCard = ({ venue, index = 0 }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/venues/${venue.id}`);
  };

  const formatIndianRupee = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleClick}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 image-shine" />
        <img 
          src={venue.image} 
          alt={venue.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        
        {/* Floating Price Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-orange-600 shadow-sm">
          {formatIndianRupee(venue.price)}/day
        </div>
        
        {/* Featured Badge */}
        {venue.featured && (
          <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-none">
            Featured
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{venue.name}</h3>
          <div className="flex items-center text-amber-500">
            <Star className="fill-amber-500 stroke-amber-500 h-4 w-4" />
            <span className="ml-1 text-sm font-medium">{venue.rating}</span>
            <span className="ml-1 text-xs text-gray-500">({venue.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center mb-2 text-gray-500">
          <MapPin className="h-4 w-4 mr-1 text-orange-500" />
          <span className="text-sm">{venue.location}</span>
        </div>
        
        <div className="flex items-center mb-4 text-gray-500">
          <Users className="h-4 w-4 mr-1 text-orange-500" />
          <span className="text-sm">Up to {venue.capacity.toLocaleString()} guests</span>
        </div>
        
        <p className="text-gray-600 mb-5 line-clamp-2">{venue.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {venue.amenities.slice(0, 3).map((amenity, i) => (
              <span 
                key={i} 
                className="inline-block bg-orange-50 text-orange-700 rounded-full px-2 py-1 text-xs"
              >
                {amenity}
              </span>
            ))}
            {venue.amenities.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs">
                +{venue.amenities.length - 3} more
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-orange-500 hover:bg-orange-600"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/booking?venueId=${venue.id}`);
            }}
          >
            Book
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
