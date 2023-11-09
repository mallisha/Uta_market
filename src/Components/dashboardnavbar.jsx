import React from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Dashboardnavbar({ isSidebarOpen }) {
  return (
    <div className={`navbar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="navbar-left">
       
      </div>

      <div className="navbar-right">
        <Link to="/login">Buy</Link>
        <Link to="/sell">Sell</Link>
      </div>
    </div>
  );
}

export default Dashboardnavbar;
