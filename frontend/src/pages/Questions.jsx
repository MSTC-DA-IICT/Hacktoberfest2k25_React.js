/* eslint-disable no-unused-vars */
/**
 * QUESTIONS PAGE - Browse all questions with filters
 *
 * HACKTOBERFEST TODO:
 * This page displays all questions with filtering and sorting options.
 *
 * CONTRIBUTOR TASKS:
 * 1. Fetch all questions from API
 * 2. Implement filter by:
 *    - Company
 *    - Topic
 *    - Role
 *    - Difficulty
 * 3. Implement search functionality
 * 4. Implement sorting (latest, oldest, most upvoted)
 * 5. Implement pagination or infinite scroll
 * 6. Display questions using QuestionCard component
 * 7. Add loading and error states
 * 8. Make responsive with sidebar filters
 *
 * FEATURES:
 * - Search bar
 * - Filter sidebar/dropdown
 * - Sort options
 * - Question grid/list
 * - Pagination
 */

import { useState, useEffect } from 'react';
// TODO: Import API functions
import { getAllQuestions, getCategories, searchQuestions } from '../api/questionApi';
import QuestionCard from '../components/QuestionCard';
// import Loading from '../components/Loading';

/**
 * TODO: IMPLEMENT QUESTIONS PAGE
 *
 * State to manage:
 * - questions: Array of questions
 * - filters: { company, topic, role, difficulty, sort }
 * - searchQuery: string
 * - loading: boolean
 * - error: string
 * - pagination: { page, limit, total }
 * - categories: { companies, topics, roles }
 *
 * Functions:
 * 1. fetchQuestions() - Fetch questions with filters
 * 2. fetchCategories() - Fetch filter options
 * 3. handleFilterChange() - Update filters
 * 4. handleSearch() - Search questions
 * 5. handleSort() - Sort questions
 * 6. handlePageChange() - Pagination
 *
 * LAYOUT:
 * <div>
 *   <SearchBar />
 *   <div className="flex">
 *     <FilterSidebar />
 *     <QuestionGrid />
 *   </div>
 *   <Pagination />
 * </div>
 */

const Questions = () => {
//   const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState('');

  const [filters, setFilters] = useState({
    company: '',
    topic: '',
    role: '',
    difficulty: '',
    sort: 'latest',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState({
    companies: [],
    topics: [],
    roles: [],
  });

    const [questions, setQuestions] = useState();

  const handleUpvote = (questionId) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q =>
        q._id === questionId
          ? { ...q, upvotes: q.upvotes + 1 }
          : q
      )
    );
  };

  // TODO: Fetch questions on mount and when filters change
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    setLoading(false)
    setQuestions([
    {
      _id: '1',
      questionText: 'Explain the difference between var, let, and const in JavaScript',
      company: 'Google',
      topic: 'JavaScript',
      role: 'Frontend Developer',
      difficulty: 'Easy',
      upvotes: 142,
      createdAt: '2024-10-15T10:30:00Z',
      updatedAt: '2024-10-15T10:30:00Z'
    },
    {
      _id: '2',
      questionText: 'Design a parking lot system with multiple levels and different vehicle types',
      company: 'Amazon',
      topic: 'System Design',
      role: 'Software Engineer',
      difficulty: 'Hard',
      upvotes: 287,
      createdAt: '2024-10-14T14:20:00Z',
      updatedAt: '2024-10-14T14:20:00Z'
    },
    {
      _id: '3',
      questionText: 'What is the time complexity of binary search?',
      company: 'Microsoft',
      topic: 'Data Structures',
      role: 'SDE-1',
      difficulty: 'Easy',
      upvotes: 95,
      createdAt: '2024-10-13T09:15:00Z',
      updatedAt: '2024-10-13T09:15:00Z'
    },
    {
      _id: '4',
      questionText: 'Implement a LRU Cache with O(1) time complexity for get and put operations',
      company: 'Meta',
      topic: 'Algorithms',
      role: 'Software Engineer',
      difficulty: 'Medium',
      upvotes: 456,
      createdAt: '2024-10-12T16:45:00Z',
      updatedAt: '2024-10-12T16:45:00Z'
    },
    {
      _id: '5',
      questionText: 'Explain React hooks and when to use useEffect vs useLayoutEffect',
      company: 'Netflix',
      topic: 'React',
      role: 'Senior Frontend Engineer',
      difficulty: 'Medium',
      upvotes: 203,
      createdAt: '2024-10-11T11:30:00Z',
      updatedAt: '2024-10-11T11:30:00Z'
    },
    {
      _id: '6',
      questionText: 'Design a URL shortening service like bit.ly',
      company: 'Uber',
      topic: 'System Design',
      role: 'Backend Engineer',
      difficulty: 'Hard',
      upvotes: 531,
      createdAt: '2024-10-10T13:20:00Z',
      updatedAt: '2024-10-10T13:20:00Z'
    },
    {
      _id: '7',
      questionText: 'What are closures in JavaScript? Provide an example',
      company: 'Apple',
      topic: 'JavaScript',
      role: 'iOS Developer',
      difficulty: 'Medium',
      upvotes: 178,
      createdAt: '2024-10-09T10:00:00Z',
      updatedAt: '2024-10-09T10:00:00Z'
    },
    {
      _id: '8',
      questionText: 'Find the longest palindromic substring in a given string',
      company: 'Adobe',
      topic: 'Algorithms',
      role: 'Software Developer',
      difficulty: 'Medium',
      upvotes: 312,
      createdAt: '2024-10-08T15:10:00Z',
      updatedAt: '2024-10-08T15:10:00Z'
    },
    {
      _id: '9',
      questionText: 'Explain the CAP theorem and its implications in distributed systems',
      company: 'LinkedIn',
      topic: 'Distributed Systems',
      role: 'Backend Engineer',
      difficulty: 'Hard',
      upvotes: 421,
      createdAt: '2024-10-07T12:30:00Z',
      updatedAt: '2024-10-07T12:30:00Z'
    },
    {
      _id: '10',
      questionText: 'What is the difference between SQL and NoSQL databases?',
      company: 'Salesforce',
      topic: 'Databases',
      role: 'Full Stack Developer',
      difficulty: 'Easy',
      upvotes: 267,
      createdAt: '2024-10-06T09:45:00Z',
      updatedAt: '2024-10-06T09:45:00Z'
    },
    {
      _id: '11',
      questionText: 'Implement a rate limiter for an API gateway',
      company: 'Stripe',
      topic: 'System Design',
      role: 'Software Engineer',
      difficulty: 'Hard',
      upvotes: 389,
      createdAt: '2024-10-05T14:15:00Z',
      updatedAt: '2024-10-05T14:15:00Z'
    },
    {
      _id: '12',
      questionText: 'Explain event delegation in JavaScript',
      company: 'Airbnb',
      topic: 'JavaScript',
      role: 'Frontend Engineer',
      difficulty: 'Medium',
      upvotes: 156,
      createdAt: '2024-10-04T11:20:00Z',
      updatedAt: '2024-10-04T11:20:00Z'
    },
    {
      _id: '13',
      questionText: 'Design a real-time chat application architecture',
      company: 'Slack',
      topic: 'System Design',
      role: 'Senior Software Engineer',
      difficulty: 'Hard',
      upvotes: 598,
      createdAt: '2024-10-03T16:00:00Z',
      updatedAt: '2024-10-03T16:00:00Z'
    },
    {
      _id: '14',
      questionText: 'What are the SOLID principles in object-oriented programming?',
      company: 'Oracle',
      topic: 'OOP',
      role: 'Java Developer',
      difficulty: 'Medium',
      upvotes: 234,
      createdAt: '2024-10-02T10:30:00Z',
      updatedAt: '2024-10-02T10:30:00Z'
    },
    {
      _id: '15',
      questionText: 'Reverse a linked list iteratively and recursively',
      company: 'Twitter',
      topic: 'Data Structures',
      role: 'Software Engineer',
      difficulty: 'Easy',
      upvotes: 412,
      createdAt: '2024-10-01T13:45:00Z',
      updatedAt: '2024-10-01T13:45:00Z'
    }
  ])
  }

  //Fetch categories function for filters
  const fetchCategories = async () => {
    setCategoriesLoading(true);
    setCategoriesError('');
    try {
      const categoriesData = await getCategories();

      setCategories({
        companies: categoriesData.companies || [],
        topics: categoriesData.topics || [],
        roles: categoriesData.roles || [],
      })
    }
    catch (err) {
      setCategoriesError('Failed to load filter options. Please try again later.');
      console.error('Error fetching categories:', err);
    }
    finally {
      setCategoriesLoading(false); // This ensures loading stops even if error occurs
    }
  }

  // TODO: Fetch categories for filters
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Interview Questions</h1>
        <p className="text-gray-600">Browse and search through community-sourced interview questions</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        {/* TODO: Implement search input */}
        <input
          type="text"
          placeholder="Search questions, companies, or topics..."
          className="input-field"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filters and Sort */}
      <div className="mb-6 flex flex-wrap gap-4">
        {/* TODO: Implement filter dropdowns */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={filters.company}
          onChange={(e) => setFilters({ ...filters, company: e.target.value })}
        >
          <option value="">All Companies</option>
          {/* TODO: Map categories.companies */}
        </select>

        <select
          className="px-4 py-2 border rounded-lg"
          value={filters.topic}
          onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
        >
          <option value="">All Topics</option>
          {/* TODO: Map categories.topics */}
        </select>

        <select
          className="px-4 py-2 border rounded-lg"
          value={filters.difficulty}
          onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          className="px-4 py-2 border rounded-lg"
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="upvotes">Most Upvoted</option>
        </select>
      </div>

      {/* Questions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* TODO: Map questions and render QuestionCard */}
        {/* Placeholder */}
        {loading ? (
          <div className="col-span-full text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading questions...</p>
          </div>
        ) : questions.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600">No questions found. Try adjusting your filters.</p>
          </div>
        ) : (
          // Map questions here
          <div className="col-span-full text-center py-12 text-gray-500 space-y-4">
            {questions.map(question => (
                <QuestionCard
                key={question._id}
                question={question}
                onUpvote={handleUpvote}
                showActions={true}
                />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {/* TODO: Implement pagination controls */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Previous</button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">2</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">3</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
