
// API base URL
export const API_BASE_URL = "http://localhost:8080";

// Venue endpoints
export const VENUE_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}/venues`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/venues/${id}`,
  CREATE: `${API_BASE_URL}/venues`,
  UPDATE: (id: string) => `${API_BASE_URL}/venues/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/venues/${id}`,
};

// User endpoints
export const USER_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`,
  GET_ALL: `${API_BASE_URL}/users`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/users/${id}`,
};

// Booking endpoints
export const BOOKING_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}/bookings`,
  GET_BY_ID: (id: string) => `${API_BASE_URL}/bookings/${id}`,
  CREATE: `${API_BASE_URL}/bookings`,
  UPDATE: (id: string) => `${API_BASE_URL}/bookings/${id}`,
  DELETE: (id: string) => `${API_BASE_URL}/bookings/${id}`,
  GET_BY_USER: (userId: string) => `${API_BASE_URL}/bookings/user/${userId}`,
  GET_BY_VENUE: (venueId: string) => `${API_BASE_URL}/bookings/venue/${venueId}`,
};
