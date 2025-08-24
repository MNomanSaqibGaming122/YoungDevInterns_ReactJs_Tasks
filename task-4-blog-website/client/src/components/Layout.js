import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css'; // Import the new CSS file

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;