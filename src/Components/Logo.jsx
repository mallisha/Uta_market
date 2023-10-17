// src/components/Logo.js

import React from 'react';
import img from '../Images/uta_logo.jpg'

function Logo() {
    return (
        <div className="logo">
            {/* Placeholder for logo */}
            <img src={img} alt="UTA Marketplace Logo" />
        </div>
    );
}

export default Logo;
