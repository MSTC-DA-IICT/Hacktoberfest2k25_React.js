/**
 * DATE UTILITIES - Helper functions for date formatting
 *
 * HACKTOBERFEST TODO:
 * This file contains utility functions for working with dates.
 *
 * CONTRIBUTOR TASKS:
 * 1. Implement formatRelativeTime() - Shows "2 days ago", "1 hour ago", etc.
 * 2. Implement formatDate() - Standard date formatting
 * 3. Implement formatDateTime() - Date and time formatting
 * 4. Add any other date utility functions as needed
 *
 * USAGE:
 * import { formatRelativeTime } from '../utils/dateUtils';
 * const timeAgo = formatRelativeTime(question.createdAt);
 */

/**
 * TODO: IMPLEMENT FORMAT RELATIVE TIME
 *
 * Converts a date to relative time string
 * Examples: "just now", "5 minutes ago", "2 hours ago", "3 days ago"
 *
 * @param {Date|string} date - Date to format
 * @returns {string} Relative time string
 *
 * LOGIC:
 * - Calculate difference between now and given date
 * - Return appropriate string based on difference:
 *   - < 1 minute: "just now"
 *   - < 1 hour: "X minutes ago"
 *   - < 1 day: "X hours ago"
 *   - < 1 month: "X days ago"
 *   - < 1 year: "X months ago"
 *   - else: "X years ago"
 *
 * EXAMPLE:
 * export const formatRelativeTime = (date) => {
 *   const now = new Date();
 *   const past = new Date(date);
 *   const diffInMs = now - past;
 *   const diffInMinutes = Math.floor(diffInMs / 60000);
 *
 *   if (diffInMinutes < 1) return 'just now';
 *   if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
 *   // ... continue for hours, days, months, years
 * };
 */

export const formatRelativeTime = (date) => {
  // TODO: Implement relative time formatting
  if (!date) return '';

  const now = new Date();
  const past = new Date(date);
  const diffInMs = now - past;

  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
  return `${years} year${years > 1 ? 's' : ''} ago`;
};

/**
 * TODO: IMPLEMENT FORMAT DATE
 *
 * Format date in standard format (e.g., "Oct 11, 2025")
 *
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */

export const formatDate = (date) => {
  if (!date) return '';

  const d = new Date(date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return d.toLocaleDateString('en-US', options);
};

/**
 * TODO: IMPLEMENT FORMAT DATE TIME
 *
 * Format date with time (e.g., "Oct 11, 2025, 10:30 AM")
 *
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date and time string
 */

export const formatDateTime = (date) => {
  if (!date) return '';

  const d = new Date(date);
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  const dateStr = d.toLocaleDateString('en-US', dateOptions);
  const timeStr = d.toLocaleTimeString('en-US', timeOptions);

  return `${dateStr}, ${timeStr}`;
};
