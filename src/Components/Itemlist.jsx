// ItemList.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Itemlist.css'; // Assuming you have a CSS file for ItemList

function ItemList({ items }) {
  return (
    <div className="item-grid">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.type}</p>
          <p>${item.price}</p>
          <Link to={`/seller/${item.id}`}>
            <button className="buy-button">Buy</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
