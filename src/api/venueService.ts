
import axios from 'axios';
import { VENUE_ENDPOINTS } from './ApiEndpoints';
import { toast } from 'sonner';
import { venues } from '@/lib/data';

// Define venue type
export interface Venue {
  id?: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  capacity: number;
  pricePerHour: number;
  amenities: string[];
  images: string[];
  category: string;
  rating?: number;
  reviews?: number;
  isAvailable?: boolean;
}

// Get all venues
export const getAllVenues = async (): Promise<Venue[]> => {
  try {
    const response = await axios.get(VENUE_ENDPOINTS.GET_ALL);
    return response.data;
  } catch (error) {
    console.error('Error fetching venues:', error);
    toast.error('Failed to fetch venues from server. Using local data.');
    return venues; // Fallback to local data
  }
};

// Get venue by ID
export const getVenueById = async (id: string): Promise<Venue | null> => {
  try {
    const response = await axios.get(VENUE_ENDPOINTS.GET_BY_ID(id));
    return response.data;
  } catch (error) {
    console.error(`Error fetching venue ${id}:`, error);
    toast.error('Failed to fetch venue details from server. Using local data.');
    // Find venue in local data as fallback
    return venues.find(venue => venue.id === id) || null;
  }
};

// Create new venue
export const createVenue = async (venueData: Venue): Promise<Venue> => {
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
export const updateVenue = async (id: string, venueData: Venue): Promise<Venue> => {
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
export const deleteVenue = async (id: string): Promise<void> => {
  try {
    await axios.delete(VENUE_ENDPOINTS.DELETE(id));
    toast.success('Venue deleted successfully!');
  } catch (error) {
    console.error(`Error deleting venue ${id}:`, error);
    toast.error('Failed to delete venue. Please try again.');
    throw error;
  }
};
