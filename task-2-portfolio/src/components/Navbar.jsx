import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); 
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <motion.h1
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          MyPortfolio
        </motion.h1>

        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#00bcd4" }}
              onClick={() => handleScroll(link)}
            >
              {link}
            </motion.li>
          ))}
        </ul>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <motion.ul
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link, index) => (
          <li key={index} onClick={() => handleScroll(link)}>
            {link}
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
