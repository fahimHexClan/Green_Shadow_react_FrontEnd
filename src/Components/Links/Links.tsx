import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Links.css';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaPhone, FaBlog } from 'react-icons/fa';

const Links: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`links-container ${isSidebarVisible ? 'expanded' : 'collapsed'}`}>
      {/* Header with the Toggle Button */}
      <header className="header">
        <div className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
          {isSidebarVisible ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`navigation ${isSidebarVisible ? 'visible' : ''}`}>
        <div className="nav-header">
          <h2 className={`nav-title ${isSidebarVisible ? 'show' : 'hide'}`}>Green Shadow</h2>
        </div>

        {/* Menu Items */}
        <MenuItem
          linktext={isSidebarVisible ? 'Home' : ''}
          url="/"
          className="menu-item"
        >
          <FaHome className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'About Us' : ''}
          url="/about"
          className="menu-item"
        >
          <FaInfoCircle className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Contact Us' : ''}
          url="/contact"
          className="menu-item"
        >
          <FaPhone className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Blog' : ''}
          url="/blog"
          className="menu-item"
        >
          <FaBlog className="nav_icon" />
        </MenuItem>
      </nav>
    </div>
  );
};

export default Links;
