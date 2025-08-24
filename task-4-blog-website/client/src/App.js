import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import SinglePostPage from './pages/SinglePostPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TermsAndConditions from './pages/TermsAndConditions';
import LoginPage from './pages/LoginPage';

import AdminDashboard from './pages/AdminDashboard';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/post/:id" element={<Layout><SinglePostPage /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
        
        {/* --- Standalone Login Route --- */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* --- Protected Admin Routes --- */}
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminLayout><AdminDashboard /></AdminLayout></ProtectedRoute>} />
        <Route path="/admin/create-post" element={<ProtectedRoute><AdminLayout><CreatePost /></AdminLayout></ProtectedRoute>} />
        <Route path="/admin/edit-post/:id" element={<ProtectedRoute><AdminLayout><EditPost /></AdminLayout></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute><AdminLayout><UserManagement /></AdminLayout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;