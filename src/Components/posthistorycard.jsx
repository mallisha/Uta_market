// ProductCard.js

import React from 'react';
import './posthistorycard.css';
const posthistorycard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {/* Add additional product details as needed */}
    </div>
  );
};

export default posthistorycard;
