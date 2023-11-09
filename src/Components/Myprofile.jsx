// Myprofile.js

import React, { useState } from 'react';
import './Myprofile.css';
import ProfileEdit from './ProfileEdit';

const Myprofile = () => {
  const userProfile = {
    firstName: 'First',
    lastName: 'Last',
    address: 'Arlington',
    contact: '123-456-7890',
    email: 'eg@example.com',
  };

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>My Profile</h2>
        {editMode ? (
          <button onClick={() => setEditMode(false)}>Cancel</button>
        ) : (
          <button onClick={handleEditClick}>Edit Profile</button>
        )}
      </div>
      {editMode ? (
        <ProfileEdit
          userProfile={userProfile}
          onCancel={() => setEditMode(false)}
        />
      ) : (
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
      )}
    </div>
  );
};

export default Myprofile;
