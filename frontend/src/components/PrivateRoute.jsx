/**
 * PRIVATE ROUTE COMPONENT - Route protection wrapper
 *
 * HACKTOBERFEST TODO:
 * This component protects routes that require authentication.
 *
 * CONTRIBUTOR TASKS:
 * 1. Check if user is authenticated using useAuth hook
 * 2. If authenticated, render children
 * 3. If not authenticated, redirect to login page
 * 4. Show loading state while checking auth
 * 5. Optionally check for specific roles (admin, user)
 *
 * USAGE:
 * <Route path="/submit" element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
 * <Route path="/admin" element={<PrivateRoute role="admin"><Admin /></PrivateRoute>} />
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * TODO: IMPLEMENT PRIVATE ROUTE COMPONENT
 *
 * Props:
 * - children: React elements to render if authorized
 * - role: Required role (optional)
 *
 * Logic:
 * 1. Get user, loading, isAuthenticated from useAuth
 * 2. If loading, show loading spinner
 * 3. If not authenticated, redirect to /login
 * 4. If role is specified and user doesn't have role, redirect to /
 * 5. If authorized, render children
 *
 * EXAMPLE:
 * const PrivateRoute = ({ children, role }) => {
 *   const { user, loading, isAuthenticated } = useAuth();
 *
 *   if (loading) {
 *     return <Loading />;
 *   }
 *
 *   if (!isAuthenticated) {
 *     return <Navigate to="/login" replace />;
 *   }
 *
 *   if (role && user.role !== role) {
 *     return <Navigate to="/" replace />;
 *   }
 *
 *   return children;
 * };
 */

const PrivateRoute = ({ children, role }) => {
  const { user, loading, isAuthenticated } = useAuth();

  // TODO: Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // TODO: Check authentication
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // TODO: Check role if specified
  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
