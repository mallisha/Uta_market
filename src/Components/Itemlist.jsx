// src/components/ItemList.js

import React from 'react';
import Item from './Item';
import './Itemlist.css';

function ItemList({ items }) {
    return (
        <div className="item-grid">
            {items.map(item => (
                <div key={item.id} className="item-card">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.type}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
}
export default ItemList;
