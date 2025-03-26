
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
}

export const venues: Venue[] = [
  {
    id: "1",
    name: "Crystal Ballroom",
    location: "Downtown Plaza",
    description: "An elegant ballroom with crystal chandeliers and panoramic city views, perfect for weddings and galas.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
    ],
    price: 5000,
    capacity: 400,
    amenities: ["Catering", "Sound System", "Lighting", "Stage", "Parking"],
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
    name: "Horizon Conference Center",
    location: "Business District",
    description: "A modern conference center with state-of-the-art technology and flexible meeting spaces.",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
    ],
    price: 3500,
    capacity: 300,
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
    name: "Garden Pavilion",
    location: "Botanical Gardens",
    description: "A beautiful outdoor pavilion surrounded by lush gardens and water features.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070",
    ],
    price: 4000,
    capacity: 250,
    amenities: ["Outdoor Heaters", "Tent Options", "Garden Lighting", "Catering", "Parking"],
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
    name: "Metropolitan Loft",
    location: "Arts District",
    description: "An industrial-chic loft with exposed brick walls and polished concrete floors.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
    ],
    price: 3200,
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
    featured: false,
  },
  {
    id: "5",
    name: "Oceanview Terrace",
    location: "Coastal Highway",
    description: "A stunning terrace venue with panoramic ocean views and breathtaking sunsets.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070",
    ],
    price: 6000,
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
    name: "Grand Theatre Hall",
    location: "Cultural District",
    description: "A historic theatre venue with ornate architecture and state-of-the-art acoustics.",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070",
    images: [
      "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070",
      "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?q=80&w=2070",
    ],
    price: 4500,
    capacity: 500,
    amenities: ["Stage", "Professional Sound", "Lighting System", "Green Rooms", "Orchestra Pit"],
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
];

export const getVenue = (id: string): Venue | undefined => {
  return venues.find(venue => venue.id === id);
};

export const getFeaturedVenues = (): Venue[] => {
  return venues.filter(venue => venue.featured);
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
    venueName: "Crystal Ballroom",
    date: "2023-08-15",
    time: "Evening",
    guestCount: 250,
    status: "confirmed",
    totalPrice: 5000,
  },
  {
    id: "b2",
    venueId: "3",
    venueName: "Garden Pavilion",
    date: "2023-09-22",
    time: "Morning",
    guestCount: 150,
    status: "pending",
    totalPrice: 4000,
  },
];

export const getUserBookings = (): Booking[] => {
  return bookings;
};
