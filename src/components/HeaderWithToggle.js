import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../css/HeaderWithToggle.css'; // Update the CSS import to match the new file
import Sidebar from './SideBar';
import logo from '../image/logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderWithToggle = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="header-content">
        <button className="menu-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Link to="/userprofile" className="user-btn"> {/* Link to UserProfile */}
          <FontAwesomeIcon icon={faUser} className="user-icon" /> {/* Font Awesome user icon */}
        </Link>
      </div>
    </header>
  );
}

export default HeaderWithToggle;
