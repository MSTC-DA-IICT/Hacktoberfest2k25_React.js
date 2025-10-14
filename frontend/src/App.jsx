/**
 * APP.JSX - Main Application Component
 *
 * HACKTOBERFEST TODO:
 * This is the main application component that sets up routing.
 *
 * CONTRIBUTOR TASKS:
 * 1. Import Routes and Route from react-router-dom
 * 2. Import all page components (Home, Questions, AddQuestion, Login, Register, etc.)
 * 3. Import Navbar and Footer components
 * 4. Import AuthProvider context
 * 5. Setup routes for all pages:
 *    - / - Home page
 *    - /questions - Questions feed
 *    - /questions/:id - Question details
 *    - /submit - Add question form
 *    - /login - Login page
 *    - /register - Register page
 *    - /profile - User profile (protected)
 *    - /admin - Admin dashboard (protected)
 *    - * - 404 Not Found
 *
 * STRUCTURE:
 * <AuthProvider>
 *   <Navbar />
 *   <Routes>
 *     <Route path="/" element={<Home />} />
 *     ...
 *   </Routes>
 *   <Footer />
 * </AuthProvider>
 */

import { Routes, Route } from 'react-router-dom';
// TODO: Import AuthProvider


// TODO: Import layout components


// TODO: Import page components


// TODO: Import PrivateRoute wrapper for protected routes


/**
 * TODO: SETUP APPLICATION ROUTING
 *
 * Steps:
 * 1. Wrap everything in AuthProvider
 * 2. Add Navbar at the top
 * 3. Setup Routes with all page routes
 * 4. Use PrivateRoute wrapper for protected routes
 * 5. Add Footer at the bottom
 *
 * PUBLIC ROUTES:
 * - / - Home
 * - /questions - Questions list
 * - /questions/:id - Question details
 * - /login - Login
 * - /register - Register
 *
 * PROTECTED ROUTES:
 * - /submit - Add question (requires auth)
 * - /profile - User profile (requires auth)
 * - /admin - Admin dashboard (requires admin role)
 *
 * EXAMPLE:
 * <AuthProvider>
 *   <Navbar />
 *   <main className="min-h-screen">
 *     <Routes>
 *       <Route path="/" element={<Home />} />
 *       <Route path="/questions" element={<Questions />} />
 *       <Route path="/login" element={<Login />} />
 *       <Route path="/submit" element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
 *     </Routes>
 *   </main>
 *   <Footer />
 * </AuthProvider>
 */

function App() {
  return (
    <div className="App">
      {/* TODO: Add AuthProvider wrapper */}
      {/* TODO: Add Navbar */}

      <main className="min-h-screen bg-gray-50">
        {/* TODO: Add Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to InterviewPrep</h1>
                <p className="text-xl text-gray-600 mb-8">A Community-Sourced Interview Question Bank</p>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 max-w-2xl mx-auto">
                  <p className="text-yellow-700">
                    <strong>🚀 Hacktoberfest Contributors:</strong> This is a starter template. Implement the routes,
                    components, and pages according to the TODO comments throughout the codebase.
                  </p>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      {/* TODO: Add Footer */}
    </div>
  );
}

export default App;
