
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getVenue } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import axios from 'axios';
import {BOOKING_ENDPOINTS} from "../api/ApiEndpoints";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';



const useUserBookings = (userId) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (userId) {
      axios.get(BOOKING_ENDPOINTS.GET_BY_ID(userId))
        .then(response => setBookings(response.data))
        .catch(error => console.error('Error fetching bookings:', error));
    }
  }, [userId]);

  return bookings;
};

const Booking = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const venueId = searchParams.get('venueId');
  const dateParam = searchParams.get('date');
  
  const [venue, setVenue] = useState(venueId ? getVenue(venueId) : null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: dateParam ? new Date(dateParam) : undefined,
    timeSlot: '',
    guestCount: '',
    name: '',
    email: '',
    phone: '',
    eventType: '',
    specialRequests: '',
    agreeToTerms: false,
    paymentMethod: 'credit',
  });
  
  useEffect(() => {
    if (venueId && !venue) {
      navigate('/venues');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [venue, venueId, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };
  
  const handleDateSelect = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, date }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, paymentMethod: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.date || !formData.timeSlot || !formData.guestCount) {
        toast({
          title: "Missing information",
          description: "Please fill in all the required fields.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
      window.scrollTo(0, 0);
    } else if (step === 2) {
      if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
        toast({
          title: "Missing information",
          description: "Please fill in all the required fields.",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
      window.scrollTo(0, 0);
    } else {
      if (!formData.agreeToTerms) {
        toast({
          title: "Terms agreement required",
          description: "Please agree to the terms and conditions to proceed.",
          variant: "destructive",
        });
        return;
      }
      
      // Submit the booking
      toast({
        title: "Booking successful!",
        description: "Your booking has been confirmed. You will receive an email confirmation shortly.",
      });
      
      // Navigate to confirmation/dashboard
      navigate('/dashboard');
    }
  };
  
  if (!venue) {
    return (
      <div className="min-h-screen pt-24 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">No Venue Selected</h1>
            <p className="mb-6">Please select a venue to continue with your booking.</p>
            <Button onClick={() => navigate('/venues')}>Browse Venues</Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => {
            if (step > 1) {
              setStep(step - 1);
              window.scrollTo(0, 0);
            } else {
              navigate(`/venues/${venue.id}`);
            }
          }}
          className="flex items-center text-gray-600 hover:text-blue-500 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {step > 1 ? 'Back to previous step' : 'Back to venue details'}
        </button>
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Book {venue.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Complete the booking process to secure your reservation
          </p>
        </div>
        
        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center w-full max-w-3xl">
            <div className="flex-1 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > 1 ? <CheckCircle className="h-5 w-5" /> : 1}
              </div>
              <span className={`text-sm ${step === 1 ? 'font-semibold text-blue-500' : 'text-gray-600'}`}>
                Event Details
              </span>
            </div>
            <div className={`flex-1 h-1 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`} />
            <div className="flex-1 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > 2 ? <CheckCircle className="h-5 w-5" /> : 2}
              </div>
              <span className={`text-sm ${step === 2 ? 'font-semibold text-blue-500' : 'text-gray-600'}`}>
                Personal Info
              </span>
            </div>
            <div className={`flex-1 h-1 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-200'}`} />
            <div className="flex-1 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className={`text-sm ${step === 3 ? 'font-semibold text-blue-500' : 'text-gray-600'}`}>
                Confirmation
              </span>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Event Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Event Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date Selection */}
                      <div className="md:col-span-2">
                        <Label htmlFor="date" className="block mb-2">Select Date</Label>
                        <div className="border rounded-lg p-4">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={handleDateSelect}
                            initialFocus
                          />
                        </div>
                      </div>
                      
                      {/* Time Slot */}
                      <div>
                        <Label htmlFor="timeSlot" className="block mb-2">Time Slot</Label>
                        <Select
                          value={formData.timeSlot}
                          onValueChange={(value) => handleSelectChange('timeSlot', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                            <SelectItem value="evening">Evening (6PM - 11PM)</SelectItem>
                            <SelectItem value="fullday">Full Day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {/* Guest Count */}
                      <div>
                        <Label htmlFor="guestCount" className="block mb-2">Number of Guests</Label>
                        <Input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          placeholder="Enter number of guests"
                          min="1"
                          max={venue.capacity}
                        />
                        <p className="text-xs text-gray-500 mt-1">Maximum capacity: {venue.capacity} guests</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 text-right">
                      <Button type="submit">Continue to Personal Information</Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Personal Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <Label htmlFor="name" className="block mb-2">Full Name</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <Label htmlFor="email" className="block mb-2">Email Address</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <Label htmlFor="phone" className="block mb-2">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      {/* Event Type */}
                      <div>
                        <Label htmlFor="eventType" className="block mb-2">Event Type</Label>
                        <Select
                          value={formData.eventType}
                          onValueChange={(value) => handleSelectChange('eventType', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="conference">Conference</SelectItem>
                            <SelectItem value="social">Social Gathering</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {/* Special Requests */}
                      <div className="md:col-span-2">
                        <Label htmlFor="specialRequests" className="block mb-2">Special Requests</Label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          placeholder="Any special requirements or requests"
                          className="w-full min-h-[100px] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 text-right">
                      <Button type="submit">Continue to Confirmation</Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Booking Confirmation</h2>
                    
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-6">
                      <h3 className="text-lg font-semibold mb-3">Review Your Booking</h3>
                      <p className="text-gray-700 mb-4">Please review your booking details before confirming.</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Venue:</span>
                          <span className="font-medium">{venue.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">
                            {formData.date ? formData.date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            }) : 'Not selected'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">
                            {formData.timeSlot === 'morning' ? 'Morning (8AM - 12PM)' :
                             formData.timeSlot === 'afternoon' ? 'Afternoon (1PM - 5PM)' :
                             formData.timeSlot === 'evening' ? 'Evening (6PM - 11PM)' :
                             formData.timeSlot === 'fullday' ? 'Full Day' : 'Not selected'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Guests:</span>
                          <span className="font-medium">{formData.guestCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Event Type:</span>
                          <span className="font-medium">{formData.eventType}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total Price:</span>
                          <span className="text-blue-600">${venue.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Payment Method */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={handleRadioChange}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="credit" id="credit" />
                          <Label htmlFor="credit">Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank">Bank Transfer</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {/* Terms and Conditions */}
                    <div className="mb-6">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the <a href="#" className="text-blue-600 underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>. I understand that my booking is subject to the venue's availability and approval.
                        </Label>
                      </div>
                    </div>
                    
                    <div className="pt-4 text-right">
                      <Button type="submit" size="lg">Confirm Booking</Button>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
          
          {/* Venue Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                  <p className="text-gray-600 mb-4">{venue.location}</p>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold">${venue.price}/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity:</span>
                      <span>Up to {venue.capacity} guests</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-600 mr-2">Amenities:</span>
                      <div className="flex-1 text-right">
                        <span>{venue.amenities.slice(0, 3).join(", ")}{venue.amenities.length > 3 ? "..." : ""}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-gray-600 mb-2">Selected Date:</span>
                    {formData.date ? (
                      <div className="flex items-center text-blue-600">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {formData.date.toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    ) : (
                      <span className="text-gray-500 italic">No date selected</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">Need assistance?</h3>
                <p className="text-sm text-blue-700 mb-4">Our venue specialists are ready to help you plan your event.</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700 font-medium">Call us:</span>
                  <a href="tel:+12125551234" className="text-blue-600 font-semibold">(212) 555-1234</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;