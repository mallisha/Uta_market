// MyPostsCard.js

import React from 'react';
import './Usercard.css';
import laptop from '../Images/laptop.jpeg'
import book from '../Images/book.jpg'
import posthistorycard from './posthistorycard';
const posthistory = [
    { 
        id: 1, 
        title: 'Laptop', 
        price: 500, 
        description: 'A great laptop for students.', 
        type: 'Electronics',
        image: laptop 
    },
    { 
        id: 2, 
        title: 'Calculus 101', 
        price: 30, 
        description: 'Calculus 101 textbook.', 
        type: 'Books',
        image: book
    },
    // ... add more items as necessary
];

const MyPostsCard = () => {
        
  return (
    <div className="dashboard-card">
     
      {/* Display user's posts or content information */}
     <h2>Posts list</h2>
     
    </div>
  );
};

export default MyPostsCard;
