
// src/components/Navbar.js

import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Sellform from './Sellform';

function Dashboardnavbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Logo />
                
            </div>

            <div className="navbar-right">
            <Link to="/login">Buy</Link>
            <Link to="/sell">Sell</Link> 
            </div>

        </div>
    );
}

export default Dashboardnavbar;

