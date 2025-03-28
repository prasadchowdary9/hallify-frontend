
// API base URL
export const API_BASE_URL = "http://localhost:8081/api";

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
  LOGIN: `${API_BASE_URL}/users/login`,
  SIGNUP: `${API_BASE_URL}/users/signup`,
  RESET_PASSWORD: `${API_BASE_URL}/users/forgot-password`,
  GET_ALL: `${API_BASE_URL}/users`,
  GET_BY_ID: (id) => `${API_BASE_URL}/users/${id}`,
};

// Booking endpoints
export const BOOKING_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}/bookings/allbookings`,
  GET_BY_ID: (id) => `${API_BASE_URL}/bookings/user/${id}`,
CREATE_BY_USER: (userId, venueId) => `${API_BASE_URL}/bookings/create/${userId}?venueId=${venueId}`,
  UPDATE: (id) => `${API_BASE_URL}/bookings/${id}`,
  DELETE: (id) => `${API_BASE_URL}/bookings/${id}`,
  GET_BY_USER: (userId) => `${API_BASE_URL}/bookings/user/${userId}`,
  GET_BY_VENUE: (venueId) => `${API_BASE_URL}/bookings/venue/${venueId}`,
};
 // Payment endpoints 

export const PAYMENT_ENDPOINTS = {
  CREATE: `${API_BASE_URL}/payments`,
  GET_BY_ID: (id) => `${API_BASE_URL}/payments/${id}`,
  GET_ALL: `${API_BASE_URL}/payments`,
  GET_BY_USER: (userId) => `${API_BASE_URL}/payments/user/${userId}`,
  UpdateById: (id) => `${API_BASE_URL}/payments/${id}`,
};