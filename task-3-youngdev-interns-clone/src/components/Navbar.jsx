import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          Youngdev<span>Interns</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><HashLink smooth to="/#hero">Home <span className="dropdown-arrow">▼</span></HashLink></li>
        <li>
          <Link to="/services">
            Services <span className="dropdown-arrow">▼</span>
          </Link>
        </li>
        <li><HashLink smooth to="/#why-join">Why Join?</HashLink></li>
        <li><HashLink smooth to="/#whats-included">Whats Included?</HashLink></li>
        <li><Link to="/internship-domains">Internship Domains</Link></li>
        <li><Link to="/apply-now">Apply Now</Link></li>
        <li><Link to="/internee-portal">Internee Portal</Link></li>
        <li>
          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;