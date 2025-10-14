/**
 * NAVBAR COMPONENT - Main navigation bar
 *
 * HACKTOBERFEST TODO:
 * This component displays the navigation bar with links and auth status.
 *
 * CONTRIBUTOR TASKS:
 * 1. Import Link from react-router-dom
 * 2. Import useAuth hook
 * 3. Display app logo/name
 * 4. Add navigation links:
 *    - Home
 *    - Questions
 *    - Submit Question (if authenticated)
 *    - Admin (if user is admin)
 * 5. Show user info and logout button if authenticated
 * 6. Show login/register links if not authenticated
 * 7. Make responsive with mobile menu (hamburger icon)
 * 8. Add styling with Tailwind CSS
 *
 * FEATURES TO IMPLEMENT:
 * - Responsive design (mobile menu)
 * - Active link highlighting
 * - User dropdown menu
 * - Logout functionality
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * TODO: IMPLEMENT NAVBAR COMPONENT
 *
 * Structure:
 * 1. Top navigation bar with logo
 * 2. Navigation links (Home, Questions, etc.)
 * 3. Right side: User menu or Login/Register
 * 4. Mobile hamburger menu
 *
 * States:
 * - mobileMenuOpen: boolean
 *
 * Conditional rendering:
 * - If authenticated: Show user name, Submit button, Logout
 * - If not authenticated: Show Login, Register buttons
 * - If admin: Show Admin link
 *
 * EXAMPLE STRUCTURE:
 * <nav className="bg-white shadow-md">
 *   <div className="container mx-auto px-4">
 *     <div className="flex justify-between items-center py-4">
 *       <Logo />
 *       <DesktopMenu />
 *       <UserSection />
 *       <MobileMenuButton />
 *     </div>
 *     <MobileMenu />
 *   </div>
 * </nav>
 */

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  // TODO: Implement mobile menu toggle
  

  // TODO: Implement logout handler
  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-600">
            InterviewPrep
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </Link>
            <Link to="/questions" className="text-gray-700 hover:text-primary-600 transition">
              Questions
            </Link>

            {/* TODO: Show these links only if authenticated */}
            {isAuthenticated && (
              <>
                <Link to="/submit" className="text-gray-700 hover:text-primary-600 transition">
                  Submit Question
                </Link>
                {/* TODO: Show admin link only if user is admin */}
                {user?.role === 'admin' && (
                  <Link to="/admin" className="text-gray-700 hover:text-primary-600 transition">
                    Admin
                  </Link>
                )}
              </>
            )}
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* TODO: Conditional rendering based on auth status */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-700 hover:text-primary-600">
                  {user?.name || 'Profile'}
                </Link>
                <button onClick={handleLogout} className="btn-secondary">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
            {/* TODO: Add hamburger icon or use SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {/* TODO: Implement mobile menu with animation */}
        
      </div>
    </nav>
  );
};

export default Navbar;
