import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  timeout: 20000, // Longer timeout since we're proxying
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          throw new Error('Invalid request. Please check the username.');
        case 401:
          throw new Error('Authentication error');
        case 403:
          throw new Error('API quota exceeded. Please try again later.');
        case 404:
          throw new Error('Profile not found');
        case 429:
          throw new Error('Too many requests. Please wait a few minutes.');
        case 500:
          throw new Error('Server error. Please try again later.');
        default:
          throw new Error(data?.error || 'Failed to fetch profile data');
      }
    } else if (error.request) {
      throw new Error('No response from server. Check your connection.');
    } else {
      throw new Error(error.message || 'Unknown error');
    }
  }
);

export default api;

