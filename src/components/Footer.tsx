
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="text-2xl font-semibold tracking-tight mb-4 inline-block">
              Venue<span className="text-blue-500">Hub</span>
            </Link>
            <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
              Find and book premium venues for your events. We curate the best spaces for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/venues" className="text-gray-600 hover:text-blue-500 transition-colors">Browse Venues</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-blue-500 transition-colors">Book a Venue</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-500 transition-colors">My Bookings</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">About Us</a>
              </li>
            </ul>
          </div>

          {/* Venue Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Venue Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Wedding Halls</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Conference Centers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Banquet Halls</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Corporate Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Outdoor Venues</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-600">Krishna Nagar, JubleeHills<br />Hyderabad 520002</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3" />
                <a href="tel:+12125551234" className="text-gray-600 hover:text-blue-500 transition-colors">(212) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <a href="mailto:info@venuehub.com" className="text-gray-600 hover:text-blue-500 transition-colors">info@venuehub.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VenueHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
