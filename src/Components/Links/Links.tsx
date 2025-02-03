import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Links.css';
import { FaBars, FaHome, FaInfoCircle, FaPhone, FaBlog } from 'react-icons/fa';

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
          <FaBars />
        </div>
        <h2 className="nav-title">GREEN SHADOW</h2>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`navigation ${isSidebarVisible ? 'visible' : ''}`}>
        {/* Menu Items */}
        <MenuItem
  linktext={isSidebarVisible ? 'DashBoard' : ''}
  url="/"  // Correct URL
  className="menu-item"
>
  <FaHome className="nav_icon" />
</MenuItem>


        <MenuItem
          linktext={isSidebarVisible ? 'Monitor Log' : ''}
          url="/monitorLog"
          className="menu-item"
        >
          <FaInfoCircle className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Field' : ''}
          url="/field"
          className="menu-item"
        >
          <FaPhone className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Staff' : ''}
          url="/staff"
          className="menu-item"
        >
          <FaPhone className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Vehicle' : ''}
          url="/vehicle"
          className="menu-item"
        >
          <FaPhone className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Crop' : ''}
          url="/Crop"
          className="menu-item"
        >
          <FaBlog className="nav_icon" />
        </MenuItem>
      </nav>
    </div>
  );
};

export default Links;
