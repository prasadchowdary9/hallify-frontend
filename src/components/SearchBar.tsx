
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (date) params.append('date', date.toISOString().split('T')[0]);
    if (guests) params.append('guests', guests);
    
    navigate(`/venues?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-1">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
        {/* Location Search */}
        <div className="flex-1 flex items-center p-3 border-b md:border-b-0 md:border-r border-gray-200">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <Input
            type="text"
            placeholder="Location or venue name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-none shadow-none focus-visible:ring-0 p-0 text-sm md:text-base"
          />
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
                  <span>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
        
        {/* Filter Button (Mobile Only) */}
        <div className="md:hidden flex items-center p-3">
          <button type="button" className="flex items-center text-blue-600">
            <Filter className="h-5 w-5 mr-1" />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Search Button */}
        <div className="p-2">
          <Button type="submit" className="w-full md:w-auto px-6">Search</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
