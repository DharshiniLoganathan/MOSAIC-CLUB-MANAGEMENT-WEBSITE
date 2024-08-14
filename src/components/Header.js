// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../css/Header.css';
import logo from '../image/logo.png'; // Import your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Link to="/signin" className="join-btn">Join Us</Link> {/* Updated */}
      </div>
    </header>
  );
}

export default Header;
