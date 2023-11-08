// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import './home.css';
import homepagee from '../Images/utalogobg.png';
import Navbar from './Navbar';

function home() {
    return (
        <div className="App">
          <Navbar />
          <main>
            <img src={homepagee} alt="My Image" style={{ width: '1000px', height: '600px' }} className="centered-image"/>
           
            
          </main>
        </div>

      );
    

}


export default home;






