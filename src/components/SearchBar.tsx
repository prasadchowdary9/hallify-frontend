
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getCities } from '@/lib/data';

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    // Get all available cities
    setCities(getCities());
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (city) params.append('city', city);
    if (date) params.append('date', date.toISOString().split('T')[0]);
    if (guests) params.append('guests', guests);
    
    navigate(`/venues?${params.toString()}`);
  };

  const handleCityChange = (value: string) => {
    setCity(value);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-1">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
        {/* Location Search */}
        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-gray-200">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <Input
            type="text"
            placeholder="Venue name or keyword"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-none shadow-none focus-visible:ring-0 p-0 text-sm md:text-base"
          />
        </div>
        
        {/* City Select */}
        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-gray-200">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
          <Select value={city} onValueChange={handleCityChange}>
            <SelectTrigger className="border-none shadow-none focus:ring-0 p-0 h-auto">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((cityName) => (
                <SelectItem key={cityName} value={cityName}>
                  {cityName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Date Picker */}
        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-gray-200">
          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <button 
                type="button"
                className="flex-1 flex items-center text-left focus:outline-none"
              >
                {date ? (
                  <span>{date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                ) : (
                  <span className="text-gray-500 text-sm md:text-base">Select date</span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={(day) => {
                  setDate(day);
                  setIsCalendarOpen(false);
                }}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Guests Input */}
        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-gray-200">
          <Users className="h-5 w-5 text-gray-400 mr-2" />
          <Input
            type="number"
            placeholder="Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            className="border-none shadow-none focus-visible:ring-0 p-0 text-sm md:text-base"
          />
        </div>
        
        {/* Search Button */}
        <div className="p-2">
          <Button type="submit" className="w-full md:w-auto px-6 bg-orange-500 hover:bg-orange-600">
            Search Venues
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
