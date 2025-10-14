/**
 * AXIOS CONFIGURATION
 *
 * HACKTOBERFEST TODO:
 * This file configures axios for making API requests.
 *
 * CONTRIBUTOR TASKS:
 * 1. Import axios
 * 2. Create axios instance with base URL from environment variable
 * 3. Add request interceptor to attach JWT token to headers
 * 4. Add response interceptor for error handling
 * 5. Export configured axios instance
 *
 * FEATURES TO IMPLEMENT:
 * - Base URL configuration
 * - JWT token attachment
 * - Global error handling
 * - Request/response logging (development only)
 * - Token refresh logic (optional)
 */

import axios from 'axios';

/**
 * TODO: CREATE AXIOS INSTANCE
 *
 * Configuration:
 * - baseURL: import.meta.env.VITE_API_URL
 * - timeout: 10000 (10 seconds)
 * - headers: { 'Content-Type': 'application/json' }
 *
 * EXAMPLE:
 * const api = axios.create({
 *   baseURL: import.meta.env.VITE_API_URL,
 *   timeout: 10000,
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * TODO: ADD REQUEST INTERCEPTOR
 *
 * Attach JWT token to every request if available
 *
 * Steps:
 * 1. Get token from localStorage
 * 2. If token exists, add to Authorization header
 * 3. Format: 'Bearer <token>'
 * 4. Return modified config
 *
 * EXAMPLE:
 * api.interceptors.request.use(
 *   (config) => {
 *     const token = localStorage.getItem('token');
 *     if (token) {
 *       config.headers.Authorization = `Bearer ${token}`;
 *     }
 *     return config;
 *   },
 *   (error) => {
 *     return Promise.reject(error);
 *   }
 * );
 */

api.interceptors.request.use(
  (config) => {
    // TODO: Implement token attachment
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * TODO: ADD RESPONSE INTERCEPTOR
 *
 * Handle common errors globally
 *
 * Steps:
 * 1. On success response, return response.data
 * 2. On error:
 *    - Extract error message from response
 *    - Handle 401 errors (redirect to login)
 *    - Handle 403 errors (unauthorized)
 *    - Handle 404 errors (not found)
 *    - Handle 500 errors (server error)
 *    - Show toast notification with error
 *    - Return rejected promise
 *
 * EXAMPLE:
 * api.interceptors.response.use(
 *   (response) => response.data,
 *   (error) => {
 *     const message = error.response?.data?.message || 'Something went wrong';
 *
 *     if (error.response?.status === 401) {
 *       // Clear token and redirect to login
 *       localStorage.removeItem('token');
 *       window.location.href = '/login';
 *     }
 *
 *     return Promise.reject(error);
 *   }
 * );
 */

api.interceptors.response.use(
  (response) => {
    // TODO: Handle successful responses
    return response.data;
  },
  (error) => {
    // TODO: Implement global error handling

    // Extract error message
    const message = error.response?.data?.message || error.message || 'Something went wrong';

    // Handle specific status codes
    // 401: Unauthorized - redirect to login
    // 403: Forbidden
    // 404: Not found
    // 500: Server error

    console.error('API Error:', message);

    return Promise.reject(error);
  }
);

export default api;
