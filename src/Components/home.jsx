import React, { useState, useEffect } from 'react';
import './home.css';
import homepagee from '../Images/utalogobg.png';
import Navbar from './Navbar';

function Home() {
  const quote = 'We Buy We Sell';
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const typingAnimation = () => {
      let typedChars = '';

      for (let i = 0; i < quote.length; i++) {
        setTimeout(() => {
          typedChars += quote[i];
          setCharacters(typedChars);
        }, i * 100);
      }
    };

    typingAnimation();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <img src={homepagee} alt="My Image" style={{ width: '800px', height: '400px' }} className="centered-image" />
        <div className="text-overlay">
          <span className="wavy-text">{characters}</span>
        </div>
      </main>
    </div>
  );
}

export default Home;









