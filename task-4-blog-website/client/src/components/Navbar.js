import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        M Noman's Blog
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </nav>
  );
};

export default Navbar;