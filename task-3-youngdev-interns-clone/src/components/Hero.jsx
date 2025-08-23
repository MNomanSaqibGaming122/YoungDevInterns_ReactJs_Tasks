import React, { useState, useEffect } from 'react';
import './Hero.css';
import bg1 from '../assets/background1.jpg'; 
import bg2 from '../assets/background2.jpg'; 

const images = [bg1, bg2]; 

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      <div className="background-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="background-image"
            style={{ 
              backgroundImage: `url(${image})`,
              opacity: index === currentImageIndex ? 1 : 0 
            }}
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>We Build Websites & Apps That Get Trending On Appworld</h1>
        <p>Our motive is to make your business online to get more customers.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <h2>234+</h2>
          <p>Clients</p>
        </div>
        <div className="stat-item">
          <h2>56+</h2>
          <p>projects</p>
        </div>
        <div className="stat-item">
          <h2>1k+</h2>
          <p>Subscribers</p>
        </div>
        <div className="stat-item" style={{borderRight: 'none', paddingRight: '0'}}>
          <h2>300+</h2>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;