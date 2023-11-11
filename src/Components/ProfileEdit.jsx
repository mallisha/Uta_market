import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./ProfileEdit.css";

const ProfileEdit = ({ userProfile, onCancel }) => {
  const [editedProfile, setEditedProfile] = useState({ ...userProfile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Check if userProfile and editedProfile are defined
      if (!userProfile || !editedProfile) {
        console.error("User profile or edited profile is undefined");
        return;
      }

      // Validate the required properties in editedProfile
      if (
        !editedProfile.fname ||
        !editedProfile.lname ||
        !editedProfile.address ||
        !editedProfile.contact
      ) {
        console.error("Required fields are missing in edited profile");
        return;
      }

      // Update user profile in the database
      const userDocRef = doc(db, "users", userProfile.uid);
      await updateDoc(userDocRef, editedProfile);

      // Inform the parent component that editing is complete
      onCancel();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-edit">
      <h2>Edit Profile</h2>
      <div className="edit-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={editedProfile.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={editedProfile.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={editedProfile.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={editedProfile.contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
