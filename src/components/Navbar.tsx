
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, isAdmin, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
        <Link 
  to="/" 
  className="text-3xl font-extrabold tracking-wide animate-fade-in 
             bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 
             text-transparent bg-clip-text transition duration-300 
             hover:scale-110 drop-shadow-lg"
>
  Venue<span className="text-blue-600">Hub</span>
</Link>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/venues" className="text-gray-700 hover:text-blue-500 transition-colors">Venues</Link>
            <Link to="/booking" className="text-gray-700 hover:text-blue-500 transition-colors">Book Now</Link>
            {isAuthenticated && (
              <Link 
                to={isAdmin ? "/admin" : "/dashboard"} 
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                {isAdmin ? "Admin" : "Dashboard"}
              </Link>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in">
            <Button variant="outline" size="sm" asChild className="animate-slide-down" style={{ animationDelay: '100ms' }}>
              <Link to="/venues">
                <Search className="h-4 w-4 mr-2" /> Find Venue
              </Link>
            </Button>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="ghost" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user?.name.split(' ')[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to={isAdmin ? "/admin" : "/dashboard"}>
                      {isAdmin ? "Admin Dashboard" : "Dashboard"}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/booking">My Bookings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button size="sm" asChild className="animate-slide-down" style={{ animationDelay: '200ms' }}>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-500 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-5 pb-3 space-y-3 animate-fade-in">
            <Link to="/" className="block text-gray-700 hover:text-blue-500 py-2 transition-colors">Home</Link>
            <Link to="/venues" className="block text-gray-700 hover:text-blue-500 py-2 transition-colors">Venues</Link>
            <Link to="/booking" className="block text-gray-700 hover:text-blue-500 py-2 transition-colors">Book Now</Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to={isAdmin ? "/admin" : "/dashboard"} 
                  className="block text-gray-700 hover:text-blue-500 py-2 transition-colors"
                >
                  {isAdmin ? "Admin Dashboard" : "Dashboard"}
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center text-red-500 hover:text-red-600 py-2 transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </button>
              </>
            ) : (
              <div className="flex space-x-3 pt-2">
                <Button asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
