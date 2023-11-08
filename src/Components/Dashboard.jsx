// Dashboard.js

import React from 'react';
import './Dashboard.css'; // Import the CSS file
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Mypostscard from './Mypostscard'; // Create MyOrdersCard component
import Myorderscard from './Myorderscard';
import Editorders from './Editorders';
import Editposts from './Editposts';
const Dashboard = () => {
    return (
      <div>
        <Navbar />
        <div className="dashboard-content"> {/* Add CSS class for styling */}
          <Sidebar />
          <div className="main-content"> {/* Add CSS class for styling */}
            <div className="user-dashboard"> {/* Add CSS class for styling */}
              <h1>My Dashboard</h1>
              <p>Welcome to UTA Market!</p>
              {/* Add user-related content here */}
              <div className="dashboard-cards">
              <div className="card-row">
                <Myorderscard />
                <Mypostscard />
              </div>
              <div className="card-row">
                <Editorders />
                <Editposts />
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;