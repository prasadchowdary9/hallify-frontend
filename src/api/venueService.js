
import axios from 'axios';
import { VENUE_ENDPOINTS } from './ApiEndpoints';
import { toast } from 'sonner';
import { venues as localVenues } from '@/lib/data';

// Convert local venue format to our API venue format
const convertLocalVenueToApiVenue = (localVenue) => {
  return {
    id: localVenue.id,
    name: localVenue.name,
    description: localVenue.description || "",
    address: localVenue.location || "",
    city: localVenue.city || "",
    state: localVenue.city ? localVenue.city.split(",")[1]?.trim() || "" : "",
    zipCode: "",
    capacity: localVenue.capacity || 0,
    pricePerHour: localVenue.price ? Math.round(localVenue.price / 100) : 0,
    amenities: localVenue.amenities || [],
    images: localVenue.images || [localVenue.image].filter(Boolean),
    category: "wedding", // Default category
    rating: localVenue.rating || 0,
    reviews: localVenue.reviewCount || 0,
    isAvailable: true
  };
};

// Get all venues
export const getAllVenues = async () => {
  try {
    const response = await axios.get(VENUE_ENDPOINTS.GET_ALL);
    return response.data;
  } catch (error) {
    console.error('Error fetching venues:', error);
    toast.error('Failed to fetch venues from server. Using local data.');
    // Convert local venue data to match our API venue format
    return localVenues.map(convertLocalVenueToApiVenue);
  }
};

// Get venue by ID
export const getVenueById = async (id) => {
  try {
    const response = await axios.get(VENUE_ENDPOINTS.GET_BY_ID(id));
    return response.data;
  } catch (error) {
    console.error(`Error fetching venue ${id}:`, error);
    toast.error('Failed to fetch venue details from server. Using local data.');
    // Find venue in local data as fallback
    const localVenue = localVenues.find(venue => venue.id === id);
    return localVenue ? convertLocalVenueToApiVenue(localVenue) : null;
  }
};

// Create new venue
export const createVenue = async (venueData) => {
  try {
    const response = await axios.post(VENUE_ENDPOINTS.CREATE, venueData);
    toast.success('Venue created successfully!');
    return response.data;
  } catch (error) {
    console.error('Error creating venue:', error);
    toast.error('Failed to create venue. Please try again.');
    throw error;
  }
};

// Update venue
export const updateVenue = async (id, venueData) => {
  try {
    const response = await axios.put(VENUE_ENDPOINTS.UPDATE(id), venueData);
    toast.success('Venue updated successfully!');
    return response.data;
  } catch (error) {
    console.error(`Error updating venue ${id}:`, error);
    toast.error('Failed to update venue. Please try again.');
    throw error;
  }
};

// Delete venue
export const deleteVenue = async (id) => {
  try {
    await axios.delete(VENUE_ENDPOINTS.DELETE(id));
    toast.success('Venue deleted successfully!');
  } catch (error) {
    console.error(`Error deleting venue ${id}:`, error);
    toast.error('Failed to delete venue. Please try again.');
    throw error;
  }
};
