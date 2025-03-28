
// API base URL
export const API_BASE_URL = "http://localhost:8080";

// Venue endpoints
export const VENUE_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}/venues`,
  GET_BY_ID: (id) => `${API_BASE_URL}/venues/${id}`,
  CREATE: `${API_BASE_URL}/venues`,
  UPDATE: (id) => `${API_BASE_URL}/venues/${id}`,
  DELETE: (id) => `${API_BASE_URL}/venues/${id}`,
};

// User endpoints
export const USER_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`,
  GET_ALL: `${API_BASE_URL}/users`,
  GET_BY_ID: (id) => `${API_BASE_URL}/users/${id}`,
};

// Booking endpoints
export const BOOKING_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}/bookings`,
  GET_BY_ID: (id) => `${API_BASE_URL}/bookings/${id}`,
  CREATE: `${API_BASE_URL}/bookings`,
  UPDATE: (id) => `${API_BASE_URL}/bookings/${id}`,
  DELETE: (id) => `${API_BASE_URL}/bookings/${id}`,
  GET_BY_USER: (userId) => `${API_BASE_URL}/bookings/user/${userId}`,
  GET_BY_VENUE: (venueId) => `${API_BASE_URL}/bookings/venue/${venueId}`,
};
