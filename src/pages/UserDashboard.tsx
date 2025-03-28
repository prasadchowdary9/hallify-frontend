
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, MapPin, Heart, Clock, Bell, User, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {BOOKING_ENDPOINTS} from "../api/ApiEndpoints";


const UserDashboard = () => {
  const { user } = useAuth();

  const upcomingBookings = [
    { 
      id: 1, 
      venue: 'Taj Banquet Hall', 
      date: '2023-12-15', 
      time: '18:00', 
      guests: 150,
      status: 'confirmed',
      city: 'Mumbai'
    },
    { 
      id: 2, 
      venue: 'The Grand Ballroom', 
      date: '2024-01-20', 
      time: '19:30', 
      guests: 200,
      status: 'pending',
      city: 'Delhi'
    }
  ];

  const UserBookings = (userId: string) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (userId) {
      axios.get(BOOKING_ENDPOINTS.GET_BY_ID(userId)) .then(response => setBookings(response.data))
        .catch(error => console.error('Error fetching bookings:', error));
    }
  }, [userId]);

  return bookings;
};

  const bookings = UserBookings(user?.id);

  return (
    <div className="container mx-auto py-10 px-6">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
        <p className="text-gray-500">Manage your venues and bookings</p>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardDescription>Your scheduled venue bookings</CardDescription>
          </CardHeader>
          <CardContent>
            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg">
                    <div className="mb-3 md:mb-0">
                      <h3 className="font-semibold">{booking.venue}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{booking.city}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(booking.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded">
                        <User className="h-3 w-3 mr-1" />
                        <span>{booking.guests} guests</span>
                      </div>
                      <div className={`flex items-center text-sm px-2 py-1 rounded ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        <CalendarCheck className="h-3 w-3 mr-1" />
                        <span>{booking.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <Calendar className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">You don't have any upcoming bookings</p>
                <Button asChild className="mt-4">
                  <Link to="/venues">Browse Venues</Link>
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link to="/booking">Book a New Venue</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saved Venues</CardTitle>
            <CardDescription>Venues you've saved for later</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">ITC Grand Chola</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Chennai</span>
                </div>
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  View Details
                </Button>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold">Marriott Whitefield</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Bangalore</span>
                </div>
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link to="/venues">
                <Heart className="h-4 w-4 mr-2" />
                View All Saved
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Activity
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <Bell className="h-4 w-4 text-orange-500" />
              </div>
              <div>
                <p className="text-sm">Your booking at <strong>Taj Banquet Hall</strong> is confirmed</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-3">
                <Heart className="h-4 w-4 text-orange-500" />
              </div>
              <div>
                <p className="text-sm">You saved <strong>ITC Grand Chola</strong> to your favorites</p>
                <p className="text-xs text-gray-500">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Special Offers */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Special Offers For You</h2>
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Early Bird Discount!</h3>
          <p className="mb-4">Book any premium venue 3 months in advance and get 15% off</p>
          <Button variant="secondary" asChild>
            <Link to="/venues">Explore Venues</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
