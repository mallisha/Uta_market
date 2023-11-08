// ProfileView.js

import React from 'react';
import './Myprofile.css';

const Myprofile = () => {
  const userProfile = {
    firstName: 'Frist',
    lastName: 'last',
    address: 'Arlington',
    contact: '123-456-7890',
    email: 'eg@example.com',
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      <div className="profile-info">
        <div className="info-item">
          <strong>First Name:</strong> {userProfile.firstName}
        </div>
        <div className="info-item">
          <strong>Last Name:</strong> {userProfile.lastName}
        </div>
        <div className="info-item">
          <strong>Address:</strong> {userProfile.address}
        </div>
        <div className="info-item">
          <strong>Contact:</strong> {userProfile.contact}
        </div>
        <div className="info-item">
          <strong>Email:</strong> {userProfile.email}
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
