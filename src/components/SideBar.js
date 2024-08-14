import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SideBar.css'; // Import the CSS file for styling
import { FaHome, FaInfoCircle, FaImages, FaBullhorn, FaSignOutAlt, FaBlog } from 'react-icons/fa'; // Import Font Awesome icons

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <i className="fas fa-times"></i>
      </button>
      <nav className="sidebar-menu">
        <Link to="/frontpage" onClick={toggleSidebar}>
          <FaHome className="sidebar-icon" />
          Home
        </Link>
        <Link to="/explore" onClick={toggleSidebar}>
          <FaInfoCircle className="sidebar-icon" />
          Explore
        </Link>
        <Link to="/gallery" onClick={toggleSidebar}>
          <FaImages className="sidebar-icon" />
          Gallery
        </Link>
        <Link to="/announcements" onClick={toggleSidebar}>
          <FaBullhorn className="sidebar-icon" />
          Announcements
        </Link>
        <Link to="/blog" onClick={toggleSidebar}>
          <FaBlog className="sidebar-icon" />
          Blog
        </Link>
      </nav>
      <div className="logout-container">
        <Link to="/logout" onClick={toggleSidebar}>
          <FaSignOutAlt className="sidebar-icon" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
