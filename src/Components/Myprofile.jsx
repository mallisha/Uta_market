import React, { useState, useEffect } from "react";
import { useUser } from "../UserContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

import "./Myprofile.css";
import "./ProfileEdit.css";
const Myprofile = () => {
  const { userData, updateUser } = useUser();

  const [userProfile, setUserProfile] = useState(userData);

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (!userProfile) {
        console.error("User profile or edited profile is undefined");
        return;
      }

      // Validate the required properties in editedProfile
      if (
        !userProfile.fname ||
        !userProfile.lname ||
        !userProfile.address ||
        !userProfile.number
      ) {
        console.error("Required fields are missing in edited profile");
        return;
      }

      // Update user profile in the database
      const userDocRef = doc(db, "users", userProfile.uid);
      await updateDoc(userDocRef, userProfile);

      // Inform the parent component that editing is complete
      updateUser(userProfile);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
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
        <div className="profile-edit">
          <h2>Edit Profile</h2>
          <div className="edit-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="fname"
                value={userProfile.fname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lname"
                value={userProfile.lname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userProfile.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact:</label>
              <input
                type="text"
                id="contact"
                name="number"
                value={userProfile.number}
                onChange={handleInputChange}
              />
            </div>
            <div className="buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="profile-info">
          <div className="info-item">
            <strong>First Name:</strong> {userProfile?.fname}
          </div>
          <div className="info-item">
            <strong>Last Name:</strong> {userProfile?.lname}
          </div>
          <div className="info-item">
            <strong>Address:</strong> {userProfile?.address}
          </div>
          <div className="info-item">
            <strong>Contact:</strong> {userProfile?.number}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {userProfile?.email}
          </div>
        </div>
      )}
    </div>
  );
};

export default Myprofile;
