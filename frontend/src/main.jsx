/**
 * MAIN.JSX - Application Entry Point
 *
 * HACKTOBERFEST TODO:
 * This is the root file that renders the React application.
 *
 * CONTRIBUTOR TASKS:
 * 1. Import React and ReactDOM
 * 2. Import App component
 * 3. Import global CSS styles
 * 4. Import BrowserRouter from react-router-dom
 * 5. Import Toaster from react-hot-toast for notifications
 * 6. Wrap App component with BrowserRouter
 * 7. Add Toaster component for toast notifications
 * 8. Render to root element
 *
 * STRUCTURE:
 * <BrowserRouter>
 *   <App />
 *   <Toaster />
 * </BrowserRouter>
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

/**
 * TODO: RENDER APPLICATION
 *
 * Steps:
 * 1. Create root using ReactDOM.createRoot
 * 2. Wrap App in BrowserRouter for routing
 * 3. Add Toaster component for notifications
 * 4. Render to #root element
 *
 * EXAMPLE:
 * ReactDOM.createRoot(document.getElementById('root')).render(
 *   <React.StrictMode>
 *     <BrowserRouter>
 *       <App />
 *       <Toaster position="top-right" />
 *     </BrowserRouter>
 *   </React.StrictMode>
 * );
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
