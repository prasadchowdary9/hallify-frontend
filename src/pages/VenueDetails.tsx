
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getVenue } from '@/lib/data';
import { 
  MapPin, 
  Users, 
  Star, 
  Calendar, 
  Share2, 
  Heart, 
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const VenueDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [venue, setVenue] = useState(id ? getVenue(id) : undefined);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(() => {
    if (!venue) {
      navigate('/venues');
      return;
    }
    
    setSelectedImage(venue.images[0]);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [venue, navigate]);
  
  if (!venue) {
    return null;
  }
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The venue link has been copied to your clipboard.",
    });
  };
  
  const handleBook = () => {
    navigate(`/booking?venueId=${venue.id}${selectedDate ? `&date=${selectedDate.toISOString().split('T')[0]}` : ''}`);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Back Navigation */}
        <button 
          onClick={() => navigate('/venues')}
          className="flex items-center text-gray-600 hover:text-blue-500 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to venues
        </button>
        
        {/* Venue Name & Location */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">{venue.name}</h1>
              <div className="flex items-center text-gray-600 mb-2 animate-fade-in">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{venue.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button
                variant={isLiked ? "default" : "outline"}
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className={`${isLiked ? 'bg-red-500 hover:bg-red-600 border-red-500' : ''}`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-white stroke-white' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
          {/* Main Image */}
          <div className="md:col-span-8 rounded-xl overflow-hidden h-[400px] md:h-[500px] shadow-md">
            <motion.img 
              src={selectedImage || venue.images[0]} 
              alt={venue.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Thumbnails */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {venue.images.slice(0, 4).map((img, index) => (
                <div 
                  key={index}
                  className={`rounded-xl overflow-hidden cursor-pointer shadow-md transition-all duration-200 ${
                    selectedImage === img ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${venue.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Venue Info & Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Venue Details - Left Column */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="animate-fade-in">
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">About This Venue</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {venue.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Capacity</p>
                        <p className="text-gray-600">Up to {venue.capacity} guests</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">{venue.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Rating</p>
                        <p className="text-gray-600">{venue.rating} out of 5 ({venue.reviewCount} reviews)</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Availability</p>
                        <p className="text-gray-600">Check the calendar for available dates</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-4">Location</h2>
                  <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-gray-600">Interactive map would be displayed here</p>
                  </div>
                  <p className="text-gray-700">
                    Located in {venue.location}, this venue is easily accessible and offers ample parking space for your guests.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="amenities" className="animate-fade-in">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-6">Amenities & Services</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {venue.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="animate-fade-in">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Guest Reviews</h2>
                    <div className="flex items-center">
                      <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                        <span className="font-semibold">{venue.rating}</span>
                      </div>
                      <div>
                        <p className="font-medium">Excellent</p>
                        <p className="text-sm text-gray-600">{venue.reviewCount} reviews</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="font-semibold">Sarah Thompson</p>
                          <p className="text-sm text-gray-600">Wedding Reception, June 2023</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This venue exceeded all our expectations! The staff was incredibly helpful, the space was beautiful, and all our guests were impressed.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="font-semibold">Michael Rodriguez</p>
                          <p className="text-sm text-gray-600">Corporate Event, May 2023</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Great venue for our company's annual meeting. The AV equipment was top-notch and the catering options were excellent.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div>
                          <p className="font-semibold">Emily Chen</p>
                          <p className="text-sm text-gray-600">Birthday Party, April 2023</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                          <Star className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                        </div>
                      </div>
                      <p className="text-gray-700">
                        I hosted my 30th birthday here and it was perfect! The space is stunning and everyone had an amazing time.
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">View All Reviews</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Booking Section - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Book This Venue</h2>
                <p className="text-2xl font-bold text-blue-600 mb-6">${venue.price} <span className="text-sm font-normal text-gray-600">per day</span></p>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Select a date</label>
                  <div className="border rounded-lg overflow-hidden">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </div>
                </div>
                
                <Button 
                  className="w-full mb-4" 
                  size="lg"
                  onClick={handleBook}
                >
                  {selectedDate ? 'Book for Selected Date' : 'Check Availability'}
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">No payment required to book</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">Need help booking this venue?</h3>
                <p className="text-sm text-blue-700 mb-4">Our event specialists are ready to assist you in planning your perfect event.</p>
                <Button variant="outline" className="w-full text-blue-600 border-blue-200">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Venues Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Similar Venues You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Show 3 random venues except the current one */}
            {[...Array(3)].map((_, index) => {
              const randomVenue = getVenue(String(Math.floor(Math.random() * 6) + 1));
              if (randomVenue && randomVenue.id !== venue.id) {
                return (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div 
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => navigate(`/venues/${randomVenue.id}`)}
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={randomVenue.image} 
                          alt={randomVenue.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{randomVenue.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{randomVenue.location}</p>
                        <p className="text-blue-600 font-semibold">${randomVenue.price}/day</p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
