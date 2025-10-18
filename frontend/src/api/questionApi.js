/**
 * QUESTION API - Question related API calls
 *
 * HACKTOBERFEST TODO:
 * This file contains all question-related API functions.
 *
 * CONTRIBUTOR TASKS:
 * Implement the following API functions:
 *
 * 1. getAllQuestions(filters) - GET /questions
 * 2. getQuestionById(id) - GET /questions/:id
 * 3. createQuestion(data) - POST /questions
 * 4. updateQuestion(id, data) - PUT /questions/:id
 * 5. deleteQuestion(id) - DELETE /questions/:id
 * 6. upvoteQuestion(id) - POST /questions/:id/upvote
 * 7. getQuestionUpvotes(id) - GET /questions/:id/upvotes
 * 8. searchQuestions(keyword) - GET /questions/search?q=keyword
 * 9. getCategories() - GET /categories
 *
 * FILTERS FOR getAllQuestions:
 * - company, topic, role, difficulty
 * - sort: latest, oldest, upvotes
 * - page, limit
 * - fromDate, toDate
 */

import api from './axios';

/**
 * TODO: IMPLEMENT GET ALL QUESTIONS
 *
 * @param {Object} filters - Query parameters for filtering
 * @returns {Promise} Response with questions array
 *
 * Filters object can include:
 * - company: string
 * - topic: string
 * - role: string
 * - difficulty: string
 * - sort: 'latest' | 'oldest' | 'upvotes'
 * - page: number
 * - limit: number
 * - fromDate: date string
 * - toDate: date string
 *
 * EXAMPLE:
 * export const getAllQuestions = async (filters = {}) => {
 *   try {
 *     const params = new URLSearchParams();
 *     Object.keys(filters).forEach(key => {
 *       if (filters[key]) params.append(key, filters[key]);
 *     });
 *     const response = await api.get(`/questions?${params.toString()}`);
 *     return response;
 *   } catch (error) {
 *     throw error;
 *   }
 * };
 */

export const getAllQuestions = async (filters = {}) => {
  // Simulate API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      let questions = [...MOCK_QUESTIONS];
      
      // Apply sorting
      if (filters.sort === 'oldest') {
        questions.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      } else if (filters.sort === 'upvotes') {
        questions.sort((a, b) => b.upvotes - a.upvotes);
      } else { // latest (default)
        questions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
      
      // Apply filters
      if (filters.company) {
        questions = questions.filter(q => q.company === filters.company);
      }
      if (filters.topic) {
        questions = questions.filter(q => q.topic === filters.topic);
      }
      if (filters.difficulty) {
        questions = questions.filter(q => q.difficulty === filters.difficulty);
      }
      
      resolve({ questions });
    }, 300);
  });
};

/**
 * TODO: IMPLEMENT GET QUESTION BY ID
 *
 * @param {string} id - Question ID
 * @returns {Promise} Response with question data
 */

export const getQuestionById = async (id) => {
  // TODO: Implement get question by ID
  console.log('Get question by ID API not implemented yet');
  throw new Error('Get question by ID API not implemented');
};

/**
 * TODO: IMPLEMENT CREATE QUESTION
 *
 * @param {Object} data - Question data
 * @returns {Promise} Response with created question
 *
 * Required fields:
 * - questionText: string
 * - company: string
 * - topic: string
 * - role: string
 * - difficulty: 'Easy' | 'Medium' | 'Hard'
 */

export const createQuestion = async (data) => {
  // TODO: Implement create question
  console.log('Create question API not implemented yet');
  throw new Error('Create question API not implemented');
};

/**
 * TODO: IMPLEMENT UPDATE QUESTION
 *
 * @param {string} id - Question ID
 * @param {Object} data - Updated question data
 * @returns {Promise} Response with updated question
 *
 * Updatable fields:
 * - questionText
 * - topic
 * - difficulty
 */

export const updateQuestion = async (id, data) => {
  // TODO: Implement update question
  console.log('Update question API not implemented yet');
  throw new Error('Update question API not implemented');
};

/**
 * TODO: IMPLEMENT DELETE QUESTION
 *
 * @param {string} id - Question ID
 * @returns {Promise} Response with success message
 */

export const deleteQuestion = async (id) => {
  // TODO: Implement delete question
  console.log('Delete question API not implemented yet');
  throw new Error('Delete question API not implemented');
};

/**
 * TODO: IMPLEMENT UPVOTE QUESTION
 *
 * @param {string} id - Question ID
 * @returns {Promise} Response with new upvote count
 *
 * This is a toggle - upvotes if not upvoted, removes upvote if already upvoted
 */

export const upvoteQuestion = async (id) => {
  // TODO: Implement upvote question
  console.log('Upvote question API not implemented yet');
  throw new Error('Upvote question API not implemented');
};

/**
 * TODO: IMPLEMENT GET QUESTION UPVOTES
 *
 * @param {string} id - Question ID
 * @returns {Promise} Response with upvote count
 */

export const getQuestionUpvotes = async (id) => {
  // TODO: Implement get upvotes
  console.log('Get question upvotes API not implemented yet');
  throw new Error('Get question upvotes API not implemented');
};

/**
 * TODO: IMPLEMENT SEARCH QUESTIONS
 *
 * @param {string} keyword - Search keyword
 * @returns {Promise} Response with matching questions
 *
 * Searches in questionText, company, and topic fields
 */


// Mock data for demo purposes
const MOCK_QUESTIONS = [
  {
    _id: '1',
    questionText: 'What is React?',
    company: 'Facebook',
    topic: 'Frontend',
    role: 'Developer',
    difficulty: 'Easy',
    upvotes: 10,
    createdAt: '2025-10-01T12:00:00Z',
  },
  {
    _id: '2',
    questionText: 'Explain useEffect hook.',
    company: 'Google',
    topic: 'Frontend',
    role: 'Engineer',
    difficulty: 'Medium',
    upvotes: 7,
    createdAt: '2025-09-28T12:00:00Z',
  },
  {
    _id: '3',
    questionText: 'How does Node.js handle async?',
    company: 'Amazon',
    topic: 'Backend',
    role: 'Backend Developer',
    difficulty: 'Hard',
    upvotes: 15,
    createdAt: '2025-09-20T12:00:00Z',
  },
];

export const searchQuestions = async (keyword) => {
  // Simulate API search
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = MOCK_QUESTIONS.filter(q =>
        q.questionText.toLowerCase().includes(keyword.toLowerCase()) ||
        q.company.toLowerCase().includes(keyword.toLowerCase()) ||
        q.topic.toLowerCase().includes(keyword.toLowerCase())
      );
      resolve({ questions: filtered });
    }, 400);
  });
};

/**
 * TODO: IMPLEMENT GET CATEGORIES
 *
 * @returns {Promise} Response with topics, companies, and roles arrays
 *
 * Response format:
 * {
 *   success: true,
 *   topics: [],
 *   companies: [],
 *   roles: []
 * }
 */

export const getCategories = async () => {
  // Simulate API call with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        companies: ['Facebook', 'Google', 'Amazon', 'Microsoft', 'Apple'],
        topics: ['Frontend', 'Backend', 'Database', 'DevOps', 'System Design'],
        roles: ['Developer', 'Engineer', 'Backend Developer', 'Frontend Developer', 'Full Stack']
      });
    }, 200);
  });
};
