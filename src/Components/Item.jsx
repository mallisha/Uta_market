import React from 'react';

function Item({ title, price, description }) {
    return (
        <div className="item">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    );
}

export default Item;