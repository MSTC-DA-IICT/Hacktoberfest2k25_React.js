/**
 * MAIN.JSX - Application Entry Point
 * Renders the React application, sets up routing and global notifications.
 */

// React core imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Application component
import App from './App.jsx';

// Global styles
import './index.css';

// Routing
import { BrowserRouter } from 'react-router-dom';

// Notifications
import { Toaster } from 'react-hot-toast';

// Create root and render application

// Create root and render application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
