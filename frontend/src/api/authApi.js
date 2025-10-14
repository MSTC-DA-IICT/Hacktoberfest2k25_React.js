/**
 * AUTH API - Authentication related API calls
 *
 * HACKTOBERFEST TODO:
 * This file contains all authentication API functions.
 *
 * CONTRIBUTOR TASKS:
 * Implement the following API functions:
 *
 * 1. register(userData) - POST /auth/register
 *    - Parameters: { name, email, password }
 *    - Returns: { success, message, user, token }
 *
 * 2. login(credentials) - POST /auth/login
 *    - Parameters: { email, password }
 *    - Returns: { success, message, user, token }
 *
 * 3. getProfile() - GET /auth/profile
 *    - Requires authentication
 *    - Returns: { success, user }
 *
 * 4. logout() - Client-side only (clear localStorage)
 *    - Remove token from localStorage
 *    - Clear user data
 *
 * ERROR HANDLING:
 * - All functions should handle errors gracefully
 * - Return error messages in a consistent format
 * - Use try-catch blocks
 */

import api from './axios';

/**
 * TODO: IMPLEMENT REGISTER FUNCTION
 *
 * @param {Object} userData - { name, email, password }
 * @returns {Promise} Response with user data and token
 *
 * Steps:
 * 1. Make POST request to /auth/register
 * 2. Pass userData in request body
 * 3. On success, save token to localStorage
 * 4. Return response data
 * 5. Handle errors
 *
 * EXAMPLE:
 * export const register = async (userData) => {
 *   try {
 *     const response = await api.post('/auth/register', userData);
 *     if (response.token) {
 *       localStorage.setItem('token', response.token);
 *     }
 *     return response;
 *   } catch (error) {
 *     throw error;
 *   }
 * };
 */

export const register = async (userData) => {
  // TODO: Implement register API call
  console.log('Register API not implemented yet');
  throw new Error('Register API not implemented');
};

/**
 * TODO: IMPLEMENT LOGIN FUNCTION
 *
 * @param {Object} credentials - { email, password }
 * @returns {Promise} Response with user data and token
 *
 * Steps:
 * 1. Make POST request to /auth/login
 * 2. Pass credentials in request body
 * 3. On success, save token to localStorage
 * 4. Return response data
 * 5. Handle errors
 */

export const login = async (credentials) => {
  // TODO: Implement login API call
  console.log('Login API not implemented yet');
  throw new Error('Login API not implemented');
};

/**
 * TODO: IMPLEMENT GET PROFILE FUNCTION
 *
 * @returns {Promise} Response with user data
 *
 * Steps:
 * 1. Make GET request to /auth/profile
 * 2. Token will be attached automatically by interceptor
 * 3. Return user data
 * 4. Handle errors (especially 401 unauthorized)
 */

export const getProfile = async () => {
  // TODO: Implement get profile API call
  console.log('Get profile API not implemented yet');
  throw new Error('Get profile API not implemented');
};

/**
 * TODO: IMPLEMENT LOGOUT FUNCTION
 *
 * This is client-side only
 *
 * Steps:
 * 1. Remove token from localStorage
 * 2. Remove any other user data from localStorage
 * 3. Optionally clear session storage
 * 4. Return success
 *
 * EXAMPLE:
 * export const logout = () => {
 *   localStorage.removeItem('token');
 *   localStorage.removeItem('user');
 *   return { success: true, message: 'Logged out successfully' };
 * };
 */

export const logout = () => {
  // TODO: Implement logout
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return { success: true, message: 'Logged out successfully' };
};
