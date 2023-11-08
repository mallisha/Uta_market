// Sidebar.js

import React, { useState } from 'react';

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
          <li>My Profile</li>
          <li>Edit Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
