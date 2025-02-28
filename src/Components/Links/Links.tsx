import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Links.css';
import { FaBars, FaHome,FaSeedling ,FaMap , FaListAlt ,FaCar , FaUserFriends , FaTools,FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';

const Links: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); 
    localStorage.removeItem('authToken'); 
    navigate('/login'); 
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
        url="/dashboard"  // Correct URL
        className="menu-item"
      >
  <FaHome className="nav_icon" />
</MenuItem>


        <MenuItem
          linktext={isSidebarVisible ? 'Monitor Log' : ''}
          url="/monitorLog"
          className="menu-item"
        >
          <FaListAlt  className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Field' : ''}
          url="/field"
          className="menu-item"
        >
          <FaMap  className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Staff' : ''}
          url="/staff"
          className="menu-item"
        >
          <FaUserFriends  className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Vehicle' : ''}
          url="/vehicle"
          className="menu-item"
        >
          <FaCar  className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Equipment' : ''}
          url="/equipment"
          className="menu-item"
        >
          <FaTools  className="nav_icon" />
        </MenuItem>

        <MenuItem
          linktext={isSidebarVisible ? 'Crop' : ''}
          url="/Crop"
          className="menu-item"
        >
          <FaSeedling  className="nav_icon" />
        </MenuItem>

        {/* ✅ Logout Button (No link, just calls `handleLogout`) */}
        <div className="menu-item logout-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <FaSignOutAlt className="nav_icon" />
          {isSidebarVisible ? 'Logout' : ''}
        </div>
      </nav>
    </div>
  );
};

export default Links;
