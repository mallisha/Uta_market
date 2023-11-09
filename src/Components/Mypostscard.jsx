// MyPostsCard.js

import React from 'react';
import './Usercard.css';
import laptop from '../Images/laptop.jpeg'
import book from '../Images/book.jpg'
import './posthistorycard.css';

const Posthistory = [
  {
    id: 1,
    title: 'Laptop',
    price: 500,
    description: 'A great laptop for students.',
    type: 'Electronics',
    image: laptop, // Replace with the actual icon image URL
  },
  {
    id: 2,
    title: 'Calculus 101',
    price: 30,
    description: 'Calculus 101 textbook.',
    type: 'Books',
    image: book, // Replace with the actual icon image URL
  },
  // Add more items as necessary
];

const MyPostsCard = () => {
  return (
    <div className="dashboard-card">
      
      {/* Render My Posts using map */}
      {Posthistory.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>Price: ${post.price}</p>
          <p>{post.description}</p>
          <p>Type: {post.type}</p>
          <img
            src={post.image}
            alt={post.title}
            className="post-icon" // Add a class for styling the icon
          />
        </div>
      ))}
    </div>
  );
};

export default MyPostsCard;
