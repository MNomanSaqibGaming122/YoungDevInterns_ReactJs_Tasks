import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLayout.css'; // Import the new CSS file

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h1 className="sidebar-title">Admin Panel</h1>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/create-post">Create Post</Link>
            </li>
            <li>
              <Link to="/admin/users">Manage Users</Link>
            </li>
            <li className="logout-item">
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="admin-content">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;