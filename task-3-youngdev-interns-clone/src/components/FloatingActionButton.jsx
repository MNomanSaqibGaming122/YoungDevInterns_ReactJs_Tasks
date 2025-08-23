import React from 'react';
import './FloatingActionButton.css';
import logoIcon from '../assets/FloatingActionButton.jpg'; 

const FloatingActionButton = () => {
  const handleClick = () => {
    alert('Floating Action Button Clicked!');
  };

  return (
    <button className="floating-action-button" onClick={handleClick}>
      <img src={logoIcon} alt="Contact" />
    </button>
  );
};

export default FloatingActionButton;