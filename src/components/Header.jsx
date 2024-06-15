import React from 'react';
import { Link } from 'react-router-dom';
import ViraHeader from '../assets/img/vira-header.jpg'

const Header = () => {
  return (
    <div className="header">
  <div className="header-text">
    <h1>Vira Boichuk</h1>
    <p>Vitalize your balance, find harmony with Dr. Vira Boichuk</p>
    <button className="header-button">Learn More</button>
  </div>
  <img className="header-image" src={ViraHeader} alt="Vira Boichuk" />
</div>
  );
};

export default Header;
