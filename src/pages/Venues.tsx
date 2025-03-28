
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, ArrowUpDown, Grid, List, MapPin } from 'lucide-react';
import { venues, Venue, getCities, searchVenues } from '@/lib/data';
import VenueCard from '@/components/VenueCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const Venues = () => {
  const [searchParams] = useSearchParams();
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>(venues);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [capacity, setCapacity] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [amenities, setAmenities] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  
  // Get all unique amenities from the venues
  const allAmenities = Array.from(
    new Set(venues.flatMap(venue => venue.amenities))
  ).sort();

  // Get all cities
  useEffect(() => {
    setCities(getCities());
  }, []);

  // Initialize with URL params if any
  useEffect(() => {
    const location = searchParams.get('location') || '';
    const city = searchParams.get('city') || '';
    const guests = searchParams.get('guests') || '';
    
    setSearchQuery(location);
    setSelectedCity(city);
    setCapacity(guests);
    
    // Apply initial filtering if search params exist
    if (location || city || guests) {
      filterVenues(location, city, guests, priceRange, amenities, sortBy);
    }
  }, [searchParams]);

  const filterVenues = (
    query: string,
    city: string,
    capacityStr: string,
    price: number[],
    selectedAmenities: string[],
    sort: string
  ) => {
    // Use the search function from data.ts
    let results = searchVenues(
      query,
      city || undefined,
      capacityStr ? parseInt(capacityStr, 10) : undefined
    );
    
    // Apply additional filters
    results = results.filter(venue => {
      // Price range filter
      const matchesPrice = venue.price >= price[0] && venue.price <= price[1];
      
      // Amenities filter
      const matchesAmenities = selectedAmenities.length === 0 || 
        selectedAmenities.every(amenity => venue.amenities.includes(amenity));
      
      return matchesPrice && matchesAmenities;
    });
    
    // Sort results
    switch (sort) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'capacity':
        results.sort((a, b) => b.capacity - a.capacity);
        break;
      case 'featured':
      default:
        results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredVenues(results);
  };

  const handleFilter = () => {
    filterVenues(searchQuery, selectedCity, capacity, priceRange, amenities, sortBy);
  };

  const toggleAmenity = (amenity: string) => {
    setAmenities(prev => 
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const formatIndianRupee = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Search Bar */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-6 animate-fade-in">Find Your Perfect Venue</h1>
          <SearchBar />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-6">Filters</h2>
              
              {/* City Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">City</h3>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={300000}
                  step={10000}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{formatIndianRupee(priceRange[0])}</span>
                  <span className="text-sm text-gray-600">{formatIndianRupee(priceRange[1])}</span>
                </div>
              </div>
              
              {/* Capacity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Min. Capacity</h3>
                <Input
                  type="number"
                  placeholder="Minimum guests"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  min="0"
                  className="w-full"
                />
              </div>
              
              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Amenities</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {allAmenities.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <Checkbox
                        id={`amenity-${amenity}`}
                        checked={amenities.includes(amenity)}
                        onCheckedChange={() => toggleAmenity(amenity)}
                      />
                      <label
                        htmlFor={`amenity-${amenity}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button onClick={handleFilter} className="w-full bg-orange-500 hover:bg-orange-600">Apply Filters</Button>
            </div>
          </div>
          
          {/* Mobile Filter Button & Sheet */}
          <div className="lg:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                {/* Mobile Filter Content - Same as desktop sidebar */}
                <div className="mt-6">
                  {/* City Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">City</h3>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Cities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Cities</SelectItem>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={300000}
                      step={10000}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{formatIndianRupee(priceRange[0])}</span>
                      <span className="text-sm text-gray-600">{formatIndianRupee(priceRange[1])}</span>
                    </div>
                  </div>
                  
                  {/* Capacity */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Min. Capacity</h3>
                    <Input
                      type="number"
                      placeholder="Minimum guests"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      min="0"
                      className="w-full"
                    />
                  </div>
                  
                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Amenities</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                      {allAmenities.map((amenity) => (
                        <div key={amenity} className="flex items-center">
                          <Checkbox
                            id={`mobile-amenity-${amenity}`}
                            checked={amenities.includes(amenity)}
                            onCheckedChange={() => toggleAmenity(amenity)}
                          />
                          <label
                            htmlFor={`mobile-amenity-${amenity}`}
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {amenity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <SheetClose asChild>
                    <Button onClick={handleFilter} className="w-full bg-orange-500 hover:bg-orange-600">Apply Filters</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Results Area */}
          <div className="flex-1">
            {/* Results Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-xl font-semibold">
                  {filteredVenues.length} {filteredVenues.length === 1 ? 'Venue' : 'Venues'} Found
                  {selectedCity && <span className="ml-2 text-orange-600 flex items-center"><MapPin className="h-4 w-4 mr-1" />{selectedCity}</span>}
                </h2>
              </div>
              
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                {/* Sort Dropdown */}
                <Select
                  value={sortBy}
                  onValueChange={(value) => {
                    setSortBy(value);
                    filterVenues(searchQuery, selectedCity, capacity, priceRange, amenities, value);
                  }}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="capacity">Capacity</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* View Toggle */}
                <div className="hidden sm:flex border rounded-md overflow-hidden">
                  <button
                    className={`p-2 ${viewMode === 'grid' ? 'bg-orange-50 text-orange-600' : 'bg-white text-gray-500'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    className={`p-2 ${viewMode === 'list' ? 'bg-orange-50 text-orange-600' : 'bg-white text-gray-500'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search venues by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Results Grid/List */}
            {filteredVenues.length > 0 ? (
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6' 
                  : 'space-y-6'
              }`}>
                {filteredVenues.map((venue, index) => (
                  <div key={venue.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <VenueCard venue={venue} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No venues found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to find more options</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCity('');
                    setCapacity('');
                    setPriceRange([0, 300000]);
                    setAmenities([]);
                    setSortBy('featured');
                    setFilteredVenues(venues);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
