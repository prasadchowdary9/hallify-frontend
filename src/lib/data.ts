
export interface Venue {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  capacity: number;
  amenities: string[];
  rating: number;
  reviewCount: number;
  availability: {
    date: string;
    slots: {
      time: string;
      available: boolean;
    }[];
  }[];
  featured: boolean;
  city: string; // Added city field for better filtering
}

export const venues: Venue[] = [
  {
    id: "1",
    name: "Taj Banquet Hall",
    location: "Bandra West, Mumbai",
    city: "Mumbai",
    description: "An elegant banquet hall with stunning decor and panoramic city views, perfect for weddings and celebrations.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
    ],
    price: 150000,
    capacity: 400,
    amenities: ["Catering", "Sound System", "Lighting", "Stage", "Valet Parking"],
    rating: 4.8,
    reviewCount: 126,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: true },
          { time: "Evening", available: false },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "2",
    name: "The Leela Convention Center",
    location: "Diplomatic Enclave, New Delhi",
    city: "Delhi",
    description: "A luxurious conference center with state-of-the-art technology and spacious meeting halls in the heart of New Delhi.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
    ],
    price: 200000,
    capacity: 600,
    amenities: ["Projector", "Wi-Fi", "Catering", "Whiteboards", "Technical Support"],
    rating: 4.6,
    reviewCount: 98,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Falaknuma Palace Gardens",
    location: "Engine Bowli, Hyderabad",
    city: "Hyderabad",
    description: "A majestic outdoor venue surrounded by historic architecture and lush gardens with panoramic views of the city.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070",
    ],
    price: 180000,
    capacity: 250,
    amenities: ["Outdoor Heaters", "Tent Options", "Garden Lighting", "Catering", "Heritage Tours"],
    rating: 4.9,
    reviewCount: 87,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: true },
          { time: "Evening", available: false },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: false },
          { time: "Evening", available: false },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "4",
    name: "Urban Warehouse Loft",
    location: "Indiranagar, Bangalore",
    city: "Bangalore",
    description: "A modern industrial-chic loft in Bangalore's tech hub, perfect for corporate events and product launches.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
    ],
    price: 120000,
    capacity: 150,
    amenities: ["DJ Booth", "Bar", "Lounge Area", "Mood Lighting", "Rooftop Access"],
    rating: 4.5,
    reviewCount: 64,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "5",
    name: "Kovalam Beach Resort",
    location: "Kovalam, Kerala",
    city: "Kochi",
    description: "A stunning beachfront venue with panoramic ocean views, perfect for destination weddings and retreats.",
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=2070",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
      "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=2075",
    ],
    price: 250000,
    capacity: 200,
    amenities: ["Infinity Pool", "Private Beach Access", "Outdoor Bar", "Catering", "Valet Parking"],
    rating: 4.9,
    reviewCount: 112,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: false },
          { time: "Evening", available: false },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "6",
    name: "Rajwada Heritage Hall",
    location: "MG Road, Jaipur",
    city: "Jaipur",
    description: "A grand heritage venue with ornate Rajasthani architecture and royal ambiance for unforgettable events.",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070",
      "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?q=80&w=2070",
    ],
    price: 170000,
    capacity: 500,
    amenities: ["Traditional Decor", "Cultural Performances", "Courtyard", "Royal Catering", "Heritage Tours"],
    rating: 4.7,
    reviewCount: 78,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: true },
          { time: "Evening", available: false },
        ],
      },
    ],
    featured: false,
  },
  {
    id: "7",
    name: "ITC Grand Chola Ballroom",
    location: "Guindy, Chennai",
    city: "Chennai",
    description: "An opulent ballroom with grand chandeliers and palatial design, perfect for luxury weddings and galas.",
    image: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=2070",
      "https://images.unsplash.com/photo-1439130490301-25e322d88054?q=80&w=2070",
      "https://images.unsplash.com/photo-1582653291997-079b4f559669?q=80&w=2070",
    ],
    price: 300000,
    capacity: 800,
    amenities: ["Luxury Suites", "5-Star Catering", "Spa Services", "Valet Parking", "Wedding Planning"],
    rating: 4.8,
    reviewCount: 156,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: false },
          { time: "Evening", available: false },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "8",
    name: "Salt Lake Convention Center",
    location: "Sector V, Kolkata",
    city: "Kolkata",
    description: "A modern convention center with flexible spaces and excellent connectivity in Kolkata's tech hub.",
    image: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2070",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062",
      "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=2075",
    ],
    price: 180000,
    capacity: 450,
    amenities: ["Modular Spaces", "Advanced AV Setup", "Dedicated IT Support", "Business Center", "Catering"],
    rating: 4.6,
    reviewCount: 93,
    availability: [
      {
        date: "2023-07-15",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true },
        ],
      },
      {
        date: "2023-07-16",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: false,
  },
];

// Get all cities for filtering
export const getCities = (): string[] => {
  const cities = venues.map(venue => venue.city);
  return [...new Set(cities)].sort();
};

// Get popular cities for quick search
export const getPopularCities = (): string[] => {
  return ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];
};

export const getVenue = (id: string): Venue | undefined => {
  return venues.find(venue => venue.id === id);
};

export const getFeaturedVenues = (): Venue[] => {
  return venues.filter(venue => venue.featured);
};

export const getVenuesByCity = (city: string): Venue[] => {
  return venues.filter(venue => venue.city.toLowerCase() === city.toLowerCase());
};

export const searchVenues = (query: string, city?: string, guests?: number): Venue[] => {
  return venues.filter(venue => {
    const matchesQuery = !query || 
      venue.name.toLowerCase().includes(query.toLowerCase()) ||
      venue.location.toLowerCase().includes(query.toLowerCase()) ||
      venue.description.toLowerCase().includes(query.toLowerCase());
    
    const matchesCity = !city || venue.city.toLowerCase() === city.toLowerCase();
    
    const matchesCapacity = !guests || venue.capacity >= guests;
    
    return matchesQuery && matchesCity && matchesCapacity;
  });
};

export interface Booking {
  id: string;
  venueId: string;
  venueName: string;
  date: string;
  time: string;
  guestCount: number;
  status: "confirmed" | "pending" | "cancelled";
  totalPrice: number;
}

export const bookings: Booking[] = [
  {
    id: "b1",
    venueId: "1",
    venueName: "Taj Banquet Hall",
    date: "2023-08-15",
    time: "Evening",
    guestCount: 250,
    status: "confirmed",
    totalPrice: 150000,
  },
  {
    id: "b2",
    venueId: "3",
    venueName: "Falaknuma Palace Gardens",
    date: "2023-09-22",
    time: "Morning",
    guestCount: 150,
    status: "pending",
    totalPrice: 180000,
  },
];

export const getUserBookings = (): Booking[] => {
  return bookings;
};
