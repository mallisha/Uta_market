// src/components/Navbar.js

import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Sellform from './Sellform';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Logo />
                <Link to="/login">Buy</Link>
                <Link to="/login">Sell</Link> 
            </div>


            
            <div className="navbar-right">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default Navbar;

