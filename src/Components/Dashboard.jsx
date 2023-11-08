// Dashboard.js

import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Dashboardnavbar from './dashboardnavbar';
import Usercard from './Usercard';

const Dashboard = () => {
  return (
    <div>
      <Dashboardnavbar />
      <div className="dashboard-content">
        
        <Sidebar />
        <div className="main-content">
     
          <div className="user-dashboard">
            <h1>My Dashboard</h1>
            <p>Welcome to UTA Market!</p>
            <Usercard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
