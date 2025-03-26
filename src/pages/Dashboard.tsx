
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getUserBookings, getVenue } from '@/lib/data';
import { 
  CalendarDays, 
  MapPin, 
  Users, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Phone, 
  Mail, 
  FileEdit, 
  X,
  Check,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const bookings = getUserBookings();
  const [expandedBooking, setExpandedBooking] = useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    setExpandedBooking(expandedBooking === id ? null : id);
  };
  
  const cancelBooking = (id: string) => {
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been cancelled successfully.",
    });
  };
  
  const downloadInvoice = (id: string) => {
    toast({
      title: "Invoice Downloaded",
      description: "Your invoice has been downloaded successfully.",
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              <Separator className="my-4" />
              <nav className="space-y-1">
                <a href="#" className="flex items-center py-2 px-3 bg-blue-50 text-blue-600 rounded-md font-medium">
                  <CalendarDays className="h-5 w-5 mr-3" />
                  My Bookings
                </a>
                <a href="#" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  <Users className="h-5 w-5 mr-3" />
                  Profile
                </a>
                <a href="#" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  Messages
                </a>
                <a href="#" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  <Download className="h-5 w-5 mr-3" />
                  Invoices
                </a>
              </nav>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">Our team is available to assist you with any questions about your bookings.</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">(212) 555-1234</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">support@venuehub.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
              
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-8 w-full md:w-auto">
                  <TabsTrigger value="upcoming" className="flex-1 md:flex-auto">Upcoming Bookings</TabsTrigger>
                  <TabsTrigger value="past" className="flex-1 md:flex-auto">Past Bookings</TabsTrigger>
                  <TabsTrigger value="cancelled" className="flex-1 md:flex-auto">Cancelled</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="animate-fade-in">
                  {bookings.filter(b => b.status !== 'cancelled').length > 0 ? (
                    <div className="space-y-6">
                      {bookings.filter(b => b.status !== 'cancelled').map((booking) => {
                        const venue = getVenue(booking.venueId);
                        const isExpanded = expandedBooking === booking.id;
                        
                        return (
                          <div 
                            key={booking.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                          >
                            <div 
                              className="flex flex-col md:flex-row cursor-pointer"
                              onClick={() => toggleExpand(booking.id)}
                            >
                              {/* Venue Image */}
                              {venue && (
                                <div className="md:w-48 h-48 md:h-auto shrink-0">
                                  <img 
                                    src={venue.image} 
                                    alt={venue.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              
                              {/* Booking Summary */}
                              <div className="flex-1 p-6">
                                <div className="flex justify-between items-start mb-3">
                                  <div>
                                    <h3 className="text-xl font-semibold">{booking.venueName}</h3>
                                    {venue && (
                                      <p className="flex items-center text-gray-600 mb-2">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {venue.location}
                                      </p>
                                    )}
                                  </div>
                                  <Badge className={`
                                    ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                                      booking.status === 'pending' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' : 
                                      'bg-red-100 text-red-800 hover:bg-red-100'}
                                  `}>
                                    {booking.status === 'confirmed' ? 'Confirmed' : 
                                     booking.status === 'pending' ? 'Pending' : 'Cancelled'}
                                  </Badge>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                                  <div className="flex items-center">
                                    <CalendarDays className="h-5 w-5 text-blue-500 mr-2" />
                                    <span>{new Date(booking.date).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric'
                                    })}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                                    <span>{booking.time}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Users className="h-5 w-5 text-blue-500 mr-2" />
                                    <span>{booking.guestCount} Guests</span>
                                  </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                  <p className="font-semibold text-blue-600">${booking.totalPrice}</p>
                                  <div className="flex items-center text-blue-600">
                                    <span className="mr-1">Details</span>
                                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Expanded Section */}
                            {isExpanded && (
                              <div className="bg-gray-50 p-6 border-t border-gray-200 animate-fade-in">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  {/* Left Column - Booking Details */}
                                  <div>
                                    <h4 className="text-lg font-semibold mb-4">Booking Details</h4>
                                    <div className="space-y-3">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Booking ID:</span>
                                        <span className="font-medium">{booking.id}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Booking Date:</span>
                                        <span>{new Date().toLocaleDateString('en-US', {
                                          month: 'short',
                                          day: 'numeric',
                                          year: 'numeric'
                                        })}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Status:</span>
                                        <Badge className={`
                                          ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                                           booking.status === 'pending' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' : 
                                           'bg-red-100 text-red-800 hover:bg-red-100'}
                                        `}>
                                          {booking.status === 'confirmed' ? 'Confirmed' : 
                                           booking.status === 'pending' ? 'Pending' : 'Cancelled'}
                                        </Badge>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Payment Status:</span>
                                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                          Paid
                                        </Badge>
                                      </div>
                                    </div>
                                    
                                    <h4 className="text-lg font-semibold mt-6 mb-4">Price Details</h4>
                                    <div className="space-y-3">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Base Price:</span>
                                        <span>${booking.totalPrice - 200}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Service Fee:</span>
                                        <span>$200</span>
                                      </div>
                                      <Separator />
                                      <div className="flex justify-between font-semibold">
                                        <span>Total:</span>
                                        <span className="text-blue-600">${booking.totalPrice}</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Right Column - Venue Information */}
                                  <div>
                                    <h4 className="text-lg font-semibold mb-4">Venue Information</h4>
                                    {venue && (
                                      <div className="space-y-3">
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Venue Name:</span>
                                          <span className="font-medium">{venue.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Address:</span>
                                          <span>{venue.location}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Capacity:</span>
                                          <span>Up to {venue.capacity} guests</span>
                                        </div>
                                        <div>
                                          <span className="text-gray-600 block mb-2">Amenities:</span>
                                          <div className="flex flex-wrap gap-2">
                                            {venue.amenities.slice(0, 5).map((amenity, i) => (
                                              <span 
                                                key={i} 
                                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                                              >
                                                {amenity}
                                              </span>
                                            ))}
                                            {venue.amenities.length > 5 && (
                                              <span className="text-gray-500 text-xs">+{venue.amenities.length - 5} more</span>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    
                                    <h4 className="text-lg font-semibold mt-6 mb-4">Contact Information</h4>
                                    <div className="space-y-3">
                                      <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-gray-500 mr-3" />
                                        <span className="text-gray-700">(212) 555-1234</span>
                                      </div>
                                      <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-gray-500 mr-3" />
                                        <span className="text-gray-700">venue@example.com</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-3 mt-8 justify-end">
                                  <Button variant="outline" className="flex items-center" onClick={() => downloadInvoice(booking.id)}>
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Invoice
                                  </Button>
                                  <Button variant="outline" className="flex items-center">
                                    <FileEdit className="h-4 w-4 mr-2" />
                                    Modify Booking
                                  </Button>
                                  <Button 
                                    variant="destructive" 
                                    className="flex items-center"
                                    onClick={() => cancelBooking(booking.id)}
                                  >
                                    <X className="h-4 w-4 mr-2" />
                                    Cancel Booking
                                  </Button>
                                </div>
                                
                                {booking.status === 'pending' && (
                                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                                    <p className="text-amber-800 text-sm">
                                      Your booking is awaiting confirmation from the venue. You will receive an email once it's confirmed. If you have any questions, please contact our support team.
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                      <CalendarDays className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No Upcoming Bookings</h3>
                      <p className="text-gray-600 mb-6">You don't have any upcoming bookings at the moment.</p>
                      <Button onClick={() => window.location.href = '/venues'}>Browse Venues</Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="past" className="animate-fade-in">
                  <div className="bg-white rounded-xl shadow-md p-8 text-center">
                    <Check className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Past Bookings</h3>
                    <p className="text-gray-600 mb-6">You don't have any past bookings at the moment.</p>
                    <Button variant="outline" onClick={() => window.location.href = '/venues'}>Browse Venues</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="cancelled" className="animate-fade-in">
                  <div className="bg-white rounded-xl shadow-md p-8 text-center">
                    <X className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Cancelled Bookings</h3>
                    <p className="text-gray-600 mb-6">You don't have any cancelled bookings at the moment.</p>
                    <Button variant="outline" onClick={() => window.location.href = '/venues'}>Browse Venues</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
