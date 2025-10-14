# InterviewPrep Frontend

A modern, responsive React application for the InterviewPrep platform - a community-sourced interview question bank where students can browse, submit, and upvote interview questions from real company interviews.

> **Note:** This is the frontend repository. The backend API is maintained in a separate repository.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Components](#components)
- [Pages](#pages)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Contributing](#contributing)
- [Development Guidelines](#development-guidelines)
- [Building for Production](#building-for-production)

## Project Overview

InterviewPrep Frontend is a React application that provides an intuitive interface for browsing and submitting interview questions. This is a **Hacktoberfest 2025 project** with detailed TODO comments throughout the codebase for contributors to implement features.

### What This App Does

- User registration and authentication
- Browse interview questions with advanced filtering
- Search questions by keyword
- Submit new interview questions
- Upvote helpful questions
- Responsive design for mobile, tablet, and desktop

### How It Connects to Backend

This frontend application (separate repository) connects to the backend API:
- Makes HTTP requests using Axios
- Sends JWT tokens for authentication
- Receives and displays JSON data
- Handles errors and loading states

## Tech Stack

- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Context API** - State management

## Features

### Implemented
- Project structure and boilerplate
- Routing setup
- Component templates with TODOs
- Axios configuration with interceptors
- Auth context setup
- Tailwind CSS configuration
- Responsive navbar and footer

### To Be Implemented (Contributors)
- API integration (auth, questions)
- Form submissions and validation
- Search and filtering functionality
- Upvote system
- Pagination
- Error handling
- Loading states
- Toast notifications

## Project Structure

```
frontend/
├── public/
│   └── vite.svg              # Favicon
│
├── src/
│   ├── api/
│   │   ├── axios.js          # Axios instance [PARTIAL]
│   │   ├── authApi.js        # Auth API [TODO]
│   │   └── questionApi.js    # Question API [TODO]
│   │
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation [COMPLETE]
│   │   ├── Footer.jsx        # Footer [COMPLETE]
│   │   ├── QuestionCard.jsx  # Question card [TODO]
│   │   ├── PrivateRoute.jsx  # Route protection [COMPLETE]
│   │   └── Loading.jsx       # Loading spinner [COMPLETE]
│   │
│   ├── context/
│   │   └── AuthContext.jsx   # Auth state [TODO]
│   │
│   ├── pages/
│   │   ├── Home.jsx          # Landing page [TODO]
│   │   ├── Questions.jsx     # Browse page [TODO]
│   │   ├── AddQuestion.jsx   # Submit form [TODO]
│   │   ├── Login.jsx         # Login page [TODO]
│   │   └── Register.jsx      # Register page [TODO]
│   │
│   ├── utils/
│   │   └── dateUtils.js      # Date formatting [COMPLETE]
│   │
│   ├── App.jsx               # Main app [TODO]
│   ├── main.jsx              # Entry point [COMPLETE]
│   └── index.css             # Global styles [COMPLETE]
│
├── .env.example              # Environment template
├── index.html                # HTML entry
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind config
└── vite.config.js            # Vite config
```

## Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn**
- **Backend API** running (see backend repository)
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone <frontend-repo-url>
cd interviewprep-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your backend API URL:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=InterviewPrep
VITE_ITEMS_PER_PAGE=10
```

4. **Start the development server**
```bash
npm run dev
```

The app will start on: **http://localhost:5173**

## Environment Setup

### Environment Variables

Create a `.env` file in the root directory:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api

# App Configuration
VITE_APP_NAME=InterviewPrep
VITE_ITEMS_PER_PAGE=10
```

**Important:** All environment variables must be prefixed with `VITE_` to be accessible in the app.

### Connecting to Backend

Make sure the backend API is running:
1. Backend should be running on `http://localhost:5000`
2. Update `VITE_API_URL` in `.env` to match your backend URL
3. Backend CORS should allow requests from `http://localhost:5173`

## Components

### Navbar (`components/Navbar.jsx`)
Navigation bar with authentication-aware links.
- **Status:** Complete
- **Features:** Logo, nav links, auth buttons, responsive menu

### Footer (`components/Footer.jsx`)
Footer with copyright and social links.
- **Status:** Complete

### QuestionCard (`components/QuestionCard.jsx`)
Displays a single question with metadata.
- **Status:** TODO - needs API integration
- **Props:**
  - `question` - Question object
  - `onUpvote` - Upvote handler function

### PrivateRoute (`components/PrivateRoute.jsx`)
Protected route wrapper for authenticated users.
- **Status:** Complete
- **Props:**
  - `children` - Components to render
  - `role` - Optional role requirement

### Loading (`components/Loading.jsx`)
Loading spinner component.
- **Status:** Complete

## Pages

### Home (`pages/Home.jsx`)
Landing page with features and CTA.
- **Status:** TODO
- **Needs:** Fetch recent questions, display features

### Questions (`pages/Questions.jsx`)
Browse all questions with filters and search.
- **Status:** TODO
- **Needs:** API integration, filters, pagination

### AddQuestion (`pages/AddQuestion.jsx`)
Form to submit new questions (protected).
- **Status:** TODO
- **Needs:** Form validation, API submission

### Login (`pages/Login.jsx`)
User login page.
- **Status:** TODO
- **Needs:** Connect to auth context

### Register (`pages/Register.jsx`)
User registration page.
- **Status:** TODO
- **Needs:** Connect to auth context

## API Integration

### Axios Configuration (`api/axios.js`)
Pre-configured axios instance with:
- Base URL from environment
- Request interceptor (adds auth token)
- Response interceptor (handles errors)

### Auth API (`api/authApi.js`)
Authentication API functions to implement:
```javascript
register(userData)        // Register new user
login(credentials)        // Login user
getProfile()             // Get current user
logout()                 // Logout user
```

### Question API (`api/questionApi.js`)
Question API functions to implement:
```javascript
getAllQuestions(filters) // Get questions with filters
getQuestionById(id)      // Get single question
createQuestion(data)     // Create new question
updateQuestion(id, data) // Update question
deleteQuestion(id)       // Delete question
upvoteQuestion(id)       // Toggle upvote
searchQuestions(query)   // Search questions
getCategories()          // Get unique categories
```

## Styling

### Tailwind CSS
The project uses Tailwind CSS for styling.

**Configuration:** `tailwind.config.js`

**Usage Example:**
```jsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h2 className="text-xl font-bold text-gray-900">Title</h2>
</div>
```

### Global Styles (`index.css`)
Contains:
- Tailwind directives
- CSS reset
- Global typography
- Custom utility classes

### Responsive Design
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

## Contributing

This is a **Hacktoberfest 2024** project! We welcome contributions from developers of all skill levels.

### How to Contribute

1. **Find an Issue**
   - Browse open issues
   - Look for `hacktoberfest`, `good-first-issue`, or `help-wanted` labels
   - Comment to get assigned

2. **Fork and Clone**
```bash
git clone https://github.com/your-username/interviewprep-frontend.git
cd interviewprep-frontend
```

3. **Create a Branch**
```bash
git checkout -b feature/your-feature-name
```

4. **Follow TODO Comments**
   - Every file has detailed TODO comments
   - Read the instructions carefully
   - Follow existing code patterns

5. **Test Your Changes**
   - Test in browser (Chrome, Firefox, Safari)
   - Test responsive design (mobile, tablet, desktop)
   - Check browser console for errors

6. **Commit and Push**
```bash
git add .
git commit -m "feat: implement question filters"
git push origin feature/your-feature-name
```

**Commit Message Convention:**
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - Styling changes
- `refactor:` - Code refactoring
- `docs:` - Documentation

7. **Create Pull Request**
   - Link related issue
   - Describe changes
   - Wait for review

### Contribution Levels

**🟢 Easy (Beginner-Friendly)**
- Implement basic components
- Add styling improvements
- Form validation
- Loading states
- Error messages

**🟡 Medium**
- API integration
- Search functionality
- Filtering logic
- Pagination
- Auth context implementation

**🔴 Hard**
- Advanced search
- Real-time updates
- Infinite scroll
- Dark mode
- Performance optimization

## Development Guidelines

### Code Style

**React Best Practices:**
- Use functional components with hooks
- Destructure props
- Keep components focused and small
- Use meaningful names

**JavaScript:**
- Use ES6+ features
- Use `const`/`let`, avoid `var`
- Prefer arrow functions
- Use template literals

### File Organization

- One component per file
- Group related components
- Keep utilities separate
- Follow existing patterns

### Error Handling

Always handle errors gracefully:

```javascript
try {
  const response = await apiFunction();
  // Handle success
} catch (error) {
  toast.error(error.response?.data?.message || 'Something went wrong');
}
```

### State Management

Use React Context for global state:
- Auth state in AuthContext
- Keep local state minimal
- Avoid prop drilling

### Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Testing Checklist

Before submitting PR:
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested on mobile viewport
- [ ] No console errors
- [ ] Forms validate correctly
- [ ] Loading states display
- [ ] Error handling works
- [ ] API calls succeed

## Building for Production

### Build Command
```bash
npm run build
```

Output directory: `dist/`

### Preview Build
```bash
npm run preview
```

### Deployment

The `dist/` folder can be deployed to:
- **Vercel** (recommended for Vite)
- **Netlify**
- **GitHub Pages**
- **AWS S3**
- Any static hosting service

**Important:** Set environment variables in your hosting platform:
- `VITE_API_URL` - Production API URL

### Deployment Steps (Example: Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

## Common Issues

### API Connection Failed
**Solution:**
- Verify backend is running
- Check `VITE_API_URL` in `.env`
- Check CORS settings in backend

### Port Already in Use
**Solution:**
Vite will automatically try the next available port.

### Environment Variables Not Working
**Solution:**
- Ensure variables are prefixed with `VITE_`
- Restart dev server after changing `.env`
- Use `import.meta.env.VITE_VAR_NAME` to access

### Build Errors
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Performance Tips

- Use React.memo for expensive components
- Lazy load routes with React.lazy
- Optimize images
- Use production build for deployment

## Accessibility

The app follows accessibility best practices:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Alt text for images

## Browser Support

Supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Repositories

- **Backend Repository:** [Backend Repo](https://github.com/MSTC-DA-IICT/Hacktoberfest2k25_node.js)
- **Documentation for Endpoints[API Routes]:** [Docs](https://docs.google.com/document/d/14AyAqyu26qKM8LX28oWZee304NahW7DJWeGDLIGZw3Y/edit?usp=sharing)

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)


## Support

For questions or issues:
1. Check existing issues
2. Read TODO comments in code
3. Create new issue with details
4. Join community discussions

---

## 🌐 *Connect with MSTC DAU*
- [LinkedIn](https://www.linkedin.com/company/microsoft-student-technical-club-da-iict/)
- [Instagram](https://www.instagram.com/mstc_daiict/)
- 📧 Email: *microsoftclub@dau.ac.in*

---

💡 Happy Coding & Keep Contributing! 💙  
*#Hacktoberfest2025 #OpenSource #InterviewPrep*
