// Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      <div className="sidebar-content">
        <h2>Hello!</h2>
        <ul>
       <li> <Link to="/Myprofile" className="button-link">
              <button>My Profile</button>
        </Link> </li>
       <li> <Link to="/profileedit" className="button-link">
              <button>Edit Profile</button>
        </Link> </li>
          <li>Logout</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Sidebar;
