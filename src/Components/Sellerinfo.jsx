import React from 'react';
import { Link } from 'react-router-dom';

const SellerInfo = ({ match }) => {
  // Dummy seller information (replace with actual data from the database)
  const sellerInfo = {
    name: 'seller',
    email: 'sellere@example.com',
    contact: '123-456-7890',
  };

  return (
    <div className="seller-info">
      <h2>Seller Information</h2>
      <div className="info-item">
        <strong>Name:</strong> {sellerInfo.name}
      </div>
      <div className="info-item">
        <strong>Email:</strong> {sellerInfo.email}
      </div>
      <div className="info-item">
        <strong>Contact:</strong> {sellerInfo.contact}
      </div>
      <Link to="/">Go Back to Homepage</Link>
    </div>
  );
};

export default SellerInfo;
