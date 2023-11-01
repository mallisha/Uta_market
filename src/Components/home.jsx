// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import './home.css';
import homepagee from '../Images/homepagelight.jpg';
import Navbar from './Navbar';

function home() {
    return (
        <div className="home">
        <Navbar />
          <img src={homepagee} alt="My Image" style={{ width: '1600px', height: '600px' }} className="centered-image"/>
          <div className="text-overlay">
      <p>This website allows you to </p> 
      <div className="bold-heading"> Buy & Sell </div>
       <p>
        whatever, whenever you want!
      </p>
    
        
   
      </div>
        </div>

      );
    

}


export default home;






