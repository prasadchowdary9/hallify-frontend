
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
   {
    id: "9",
    name: "Mumbai Grand Convention Center",
    location: "Bandra Kurla Complex, Mumbai",
    city: "Mumbai",
    description: "A luxurious convention center with world-class facilities in the heart of Mumbai.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      "https://images.unsplash.com/photo-1560813086-4203458e5475?q=80&w=2070",
      "https://images.unsplash.com/photo-1545256749-0322d2db6cbd?q=80&w=2070",
    ],
    price: 250000,
    capacity: 600,
    amenities: ["Luxury Interiors", "VIP Lounges", "Ample Parking", "Catering", "Conference Facilities"],
    rating: 4.8,
    reviewCount: 120,
    availability: [
      {
        date: "2023-08-10",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "10",
    name: "Hyderabad International Convention Centre",
    location: "HITEC City, Hyderabad",
    city: "Hyderabad",
    description: "A state-of-the-art convention center known for large-scale events and exhibitions.",
    image: "https://images.unsplash.com/photo-1566577132764-d0ccaf85efba?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1566577132764-d0ccaf85efba?q=80&w=2070",
      "https://images.unsplash.com/photo-1568746957839-91914c8f84b5?q=80&w=2070",
      "https://images.unsplash.com/photo-1567776148353-0aa1a24f946d?q=80&w=2070",
    ],
    price: 220000,
    capacity: 700,
    amenities: ["High-Speed WiFi", "Large Parking", "Food Courts", "Conference Rooms", "Event Management"],
    rating: 4.7,
    reviewCount: 105,
    availability: [
      {
        date: "2023-08-15",
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
    id: "11",
    name: "Delhi Prime Convention Hall",
    location: "Connaught Place, Delhi",
    city: "Delhi",
    description: "A centrally located convention center with a heritage touch and modern facilities.",
    image: "https://images.unsplash.com/photo-1568454537842-d93366951be1?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1568454537842-d93366951be1?q=80&w=2070",
      "https://images.unsplash.com/photo-1563205807-10b974134ac8?q=80&w=2070",
      "https://images.unsplash.com/photo-1592290051723-c21672b6243e?q=80&w=2070",
    ],
    price: 200000,
    capacity: 500,
    amenities: ["Heritage Design", "Security", "Catering", "Luxury Seating", "Outdoor Spaces"],
    rating: 4.5,
    reviewCount: 98,
    availability: [
      {
        date: "2023-08-20",
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
    id: "12",
    name: "Bangalore Palace Convention Hall",
    location: "Palace Grounds, Bangalore",
    city: "Bangalore",
    description: "A royal experience with lush gardens and grand halls for high-profile events.",
    image: "https://images.unsplash.com/photo-1570646381044-4a4d420bf6f1?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1570646381044-4a4d420bf6f1?q=80&w=2070",
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=2070",
      "https://images.unsplash.com/photo-1556767576-8cc88433d1a1?q=80&w=2070",
    ],
    price: 280000,
    capacity: 800,
    amenities: ["Royal Interiors", "Garden Area", "Banquet Facilities", "VIP Lounges", "Security"],
    rating: 4.9,
    reviewCount: 130,
    availability: [
      {
        date: "2023-08-25",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: true,
  },
  {
    id: "13",
    name: "Chennai Trade Centre",
    location: "Nandambakkam, Chennai",
    city: "Chennai",
    description: "A modern convention center for corporate events, trade shows, and exhibitions.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070",
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f9?q=80&w=2070",
      "https://images.unsplash.com/photo-1542317854-2330ac0bd7d1?q=80&w=2070",
    ],
    price: 190000,
    capacity: 600,
    amenities: ["Exhibition Halls", "Conference Rooms", "Catering", "Ample Parking", "Business Center"],
    rating: 4.6,
    reviewCount: 110,
    availability: [
      {
        date: "2023-08-30",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true },
        ],
      },
    ],
    featured: false,
  },
  {
    id: "14",
    name: "Jaipur Royal Convention Center",
    location: "Pink City, Jaipur",
    city: "Jaipur",
    description: "A culturally rich convention hall with vibrant interiors and Rajasthani architecture.",
    image: "https://images.unsplash.com/photo-1564490138497-906ddc03e06c?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1564490138497-906ddc03e06c?q=80&w=2070",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=2070",
      "https://images.unsplash.com/photo-1578897365405-9678e578c68e?q=80&w=2070",
    ],
    price: 160000,
    capacity: 400,
    amenities: ["Rajasthani Decor", "Traditional Catering", "Open Lawn", "Security", "Event Management"],
    rating: 4.4,
    reviewCount: 85,
    availability: [
      {
        date: "2023-09-05",
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
    id: "15",
    name: "Royal Orchid Convention Centre",
    location: "Yelahanka, Bangalore",
    city: "Bangalore",
    description: "A premium venue with lush green surroundings and modern facilities.",
    image: "https://images.unsplash.com/photo-1592839714449-7a1e2b6c35b1?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1592839714449-7a1e2b6c35b1?q=80&w=2070",
      "https://images.unsplash.com/photo-1520052205864-92dfe54a3c11?q=80&w=2070",
      "https://images.unsplash.com/photo-1600423115361-307885c6b9a5?q=80&w=2070"
    ],
    price: 210000,
    capacity: 600,
    amenities: ["Garden Area", "Banquet Facilities", "Luxury Seating", "Parking", "Catering"],
    rating: 4.7,
    reviewCount: 115,
    availability: [
      {
        date: "2023-09-10",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: true },
          { time: "Evening", available: false }
        ]
      }
    ],
    featured: true,
  },
  {
    id: "16",
    name: "The Grand Banquet",
    location: "MG Road, Delhi",
    city: "Delhi",
    description: "A grand hall with luxurious interiors and a spacious banquet area.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070",
      "https://images.unsplash.com/photo-1600907050551-f37e72397b5c?q=80&w=2070"
    ],
    price: 250000,
    capacity: 750,
    amenities: ["VIP Lounges", "Private Parking", "Catering", "AV Setup", "Event Planning"],
    rating: 4.8,
    reviewCount: 140,
    availability: [
      {
        date: "2023-09-15",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true }
        ]
      }
    ],
    featured: true,
  },
  {
    id: "17",
    name: "Pearl Convention Centre",
    location: "Salt Lake, Kolkata",
    city: "Kolkata",
    description: "An elegant venue with modern decor and spacious halls.",
    image: "https://images.unsplash.com/photo-1572099606225-85b66a0122f4?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1572099606225-85b66a0122f4?q=80&w=2070",
      "https://images.unsplash.com/photo-1582281298051-75a94717343c?q=80&w=2070",
      "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?q=80&w=2070"
    ],
    price: 180000,
    capacity: 500,
    amenities: ["Event Coordination", "Business Center", "WiFi", "Security", "Fine Dining"],
    rating: 4.6,
    reviewCount: 105,
    availability: [
      {
        date: "2023-09-20",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: false },
          { time: "Evening", available: true }
        ]
      }
    ],
    featured: false,
  },
  {
    id: "18",
    name: "Sunrise Banquets",
    location: "Pune City Center, Pune",
    city: "Pune",
    description: "A well-equipped venue with indoor and outdoor event spaces.",
    image: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2070",
      "https://images.unsplash.com/photo-1590490360183-c84a89a83fa5?q=80&w=2070",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070"
    ],
    price: 170000,
    capacity: 450,
    amenities: ["Scenic Views", "Buffet Catering", "Luxury Seating", "Parking", "AV Equipment"],
    rating: 4.5,
    reviewCount: 98,
    availability: [
      {
        date: "2023-09-25",
        slots: [
          { time: "Morning", available: false },
          { time: "Afternoon", available: true },
          { time: "Evening", available: true }
        ]
      }
    ],
    featured: false,
  },
  {
    id: "19",
    name: "Emerald Palace Convention Hall",
    location: "Banjara Hills, Hyderabad",
    city: "Hyderabad",
    description: "A premium space with exquisite decor and premium services.",
    image: "https://images.unsplash.com/photo-1605627079915-b36640152c34?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1605627079915-b36640152c34?q=80&w=2070",
      "https://images.unsplash.com/photo-1603614759311-40a649173d6d?q=80&w=2070",
      "https://images.unsplash.com/photo-1603190287597-3e8e939be501?q=80&w=2070"
    ],
    price: 300000,
    capacity: 900,
    amenities: ["Personalized Event Planning", "Multi-Cuisine Catering", "High-Tech AV", "Valet Parking", "Lounge"],
    rating: 4.9,
    reviewCount: 150,
    availability: [
      {
        date: "2023-09-30",
        slots: [
          { time: "Morning", available: true },
          { time: "Afternoon", available: true },
          { time: "Evening", available: false }
        ]
      }
    ],
    featured: true,
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
