import axios from "axios";

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
  city: string;
}

// State to store venue data fetched from backend
export let venues: Venue[] = [];

// Fetch venues from backend
export const fetchVenues = async () => {
  try {
    const response = await axios.get<Venue[]>("http://localhost:8082/api/venues");
    venues = response.data;
  } catch (error) {
    console.error("Error fetching venues:", error);
  }
};

// Call fetchVenues when the module is imported
fetchVenues();

// Get all cities for filtering
export const getCities = (): string[] => {
  const cities = venues.map((venue) => venue.city);
  return [...new Set(cities)].sort();
};

// Get popular cities for quick search
export const getPopularCities = (): string[] => {
  return ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];
};

export const getVenue = (id: string): Venue | undefined => {
  return venues.find((venue) => venue.id === id);
};

export const getFeaturedVenues = (): Venue[] => {
  return venues.filter((venue) => venue.featured);
};

export const getVenuesByCity = (city: string): Venue[] => {
  return venues.filter((venue) => venue.city.toLowerCase() === city.toLowerCase());
};

export const searchVenues = (query: string, city?: string, guests?: number): Venue[] => {
  return venues.filter((venue) => {
    const matchesQuery =
      !query ||
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

export const getUserBookings = async (): Promise<Booking[]> => {
  try {
    const response = await axios.get<Booking[]>("http://localhost:8080/bookings");
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};


















// export interface Venue {
//   id: string;
//   name: string;
//   location: string;
//   description: string;
//   image: string;
//   images: string[];
//   price: number;
//   capacity: number;
//   amenities: string[];
//   rating: number;
//   reviewCount: number;
//   availability: {
//     date: string;
//     slots: {
//       time: string;
//       available: boolean;
//     }[];
//   }[];
//   featured: boolean;
//   city: string; // Added city field for better filtering
// }

// export const venues: Venue[] = [
//   {
//     id: "1",
//     name: "Taj Banquet Hall",
//     location: "Bandra West, Mumbai",
//     city: "Mumbai",
//     description: "An elegant banquet hall with stunning decor and panoramic city views, perfect for weddings and celebrations.",
//     image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
//     images: [
//       "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
//       "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062",
//       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
//     ],
//     price: 150000,
//     capacity: 400,
//     amenities: ["Catering", "Sound System", "Lighting", "Stage", "Valet Parking"],
//     rating: 4.8,
//     reviewCount: 126,
//     availability: [
//       {
//         date: "2023-07-15",
//         slots: [
//           { time: "Morning", available: false },
//           { time: "Afternoon", available: true },
//           { time: "Evening", available: false },
//         ],
//       },
//       {
//         date: "2023-07-16",
//         slots: [
//           { time: "Morning", available: true },
//           { time: "Afternoon", available: true },
//           { time: "Evening", available: true },
//         ],
//       },
//     ],
//     featured: true,
//   },
//   {
//     id: "2",
//     name: "The Leela Convention Center",
//     location: "Diplomatic Enclave, New Delhi",
//     city: "Delhi",
//     description: "A luxurious conference center with state-of-the-art technology and spacious meeting halls in the heart of New Delhi.",
//     image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070",
//     images: [
//       "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070",
//       "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
//       "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
//     ],
//     price: 200000,
//     capacity: 600,
//     amenities: ["Projector", "Wi-Fi", "Catering", "Whiteboards", "Technical Support"],
//     rating: 4.6,
//     reviewCount: 98,
//     availability: [
//       {
//         date: "2023-07-15",
//         slots: [
//           { time: "Morning", available: true },
//           { time: "Afternoon", available: false },
//           { time: "Evening", available: true },
//         ],
//       },
//       {
//         date: "2023-07-16",
//         slots: [
//           { time: "Morning", available: false },
//           { time: "Afternoon", available: false },
//           { time: "Evening", available: true },
//         ],
//       },
//     ],
//     featured: true,
//   },
//   {
//     id: "3",
//     name: "Falaknuma Palace Gardens",
//     location: "Engine Bowli, Hyderabad",
//     city: "Hyderabad",
//     description: "A majestic outdoor venue surrounded by historic architecture and lush gardens with panoramic views of the city.",
//     image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
//     images: [
//       "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
//       "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070",
//       "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070",
//     ],
//     price: 180000,
//     capacity: 250,
//     amenities: ["Outdoor Heaters", "Tent Options", "Garden Lighting", "Catering", "Heritage Tours"],
//     rating: 4.9,
//     reviewCount: 87,
//     availability: [
//       {
//         date: "2023-07-15",
//         slots: [
//           { time: "Morning", available: true },
//           { time: "Afternoon", available: true },
//           { time: "Evening", available: false },
//         ],
//       },
//       {
//         date: "2023-07-16",
//         slots: [
//           { time: "Morning", available: true },
//           { time: "Afternoon", available: false },
//           { time: "Evening", available: false },
//         ],
//       },
//     ],
//     featured: true,
//   },
  
// ];

// // Get all cities for filtering
// export const getCities = (): string[] => {
//   const cities = venues.map(venue => venue.city);
//   return [...new Set(cities)].sort();
// };

// // Get popular cities for quick search
// export const getPopularCities = (): string[] => {
//   return ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];
// };

// export const getVenue = (id: string): Venue | undefined => {
//   return venues.find(venue => venue.id === id);
// };

// export const getFeaturedVenues = (): Venue[] => {
//   return venues.filter(venue => venue.featured);
// };

// export const getVenuesByCity = (city: string): Venue[] => {
//   return venues.filter(venue => venue.city.toLowerCase() === city.toLowerCase());
// };

// export const searchVenues = (query: string, city?: string, guests?: number): Venue[] => {
//   return venues.filter(venue => {
//     const matchesQuery = !query || 
//       venue.name.toLowerCase().includes(query.toLowerCase()) ||
//       venue.location.toLowerCase().includes(query.toLowerCase()) ||
//       venue.description.toLowerCase().includes(query.toLowerCase());
    
//     const matchesCity = !city || venue.city.toLowerCase() === city.toLowerCase();
    
//     const matchesCapacity = !guests || venue.capacity >= guests;
    
//     return matchesQuery && matchesCity && matchesCapacity;
//   });
// };

// export interface Booking {
//   id: string;
//   venueId: string;
//   venueName: string;
//   date: string;
//   time: string;
//   guestCount: number;
//   status: "confirmed" | "pending" | "cancelled";
//   totalPrice: number;
// }

// export const bookings: Booking[] = [
//   {
//     id: "b1",
//     venueId: "1",
//     venueName: "Taj Banquet Hall",
//     date: "2023-08-15",
//     time: "Evening",
//     guestCount: 250,
//     status: "confirmed",
//     totalPrice: 150000,
//   },
//   {
//     id: "b2",
//     venueId: "3",
//     venueName: "Falaknuma Palace Gardens",
//     date: "2023-09-22",
//     time: "Morning",
//     guestCount: 150,
//     status: "pending",
//     totalPrice: 180000,
//   },
// ];

// export const getUserBookings = (): Booking[] => {
//   return bookings;
// };
