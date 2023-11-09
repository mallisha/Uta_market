// ProfileEdit.js

import React, { useState } from 'react';
import './ProfileEdit.css';

const ProfileEdit = ({ userProfile, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    email: userProfile.email, // Email field is read-only
    contact: userProfile.contact,
    address: userProfile.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to the server
    console.log(formData); // Display the updated form data in the console
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            disabled // Make the email field read-only
          />
        </div>

        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <div>
          <button type="submit">Save Changes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
