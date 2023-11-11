import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  auth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "../firebase";
import { useUser } from "../UserContext"; // Import useUser from your UserContext file
import "./ChangePassword.css";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentPasswordIsCorrect()) {
      if (newPassword === confirmPassword) {
        if (isPasswordValid(newPassword)) {
          try {
            // Get the current user
            const user = auth.currentUser;

            // Prompt the user to re-enter their password for security
            const credential = EmailAuthProvider.credential(
              user.email,
              currentPassword
            );
            await reauthenticateWithCredential(user, credential);

            // Update the user's password
            await updatePassword(user, newPassword);

            // Update the password in the user's document in Firestore
            const userDocRef = doc(db, "users", user.uid);
            await updateDoc(userDocRef, { password: newPassword });

            console.log("Password changed successfully");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

            // Add an alert for a successful password change
            alert("Password changed successfully");
          } catch (error) {
            console.error("Error changing password:", error.message);
          }
        } else {
          alert(
            "Password must be at least 8 characters long and contain at least one number."
          );
        }
      } else {
        alert("New password and confirm password do not match");
      }
    } else {
      alert("Current password is incorrect");
    }
  };

  const isPasswordValid = (password) => {
    const hasMinimumLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    return hasMinimumLength && hasNumber;
  };

  const currentPasswordIsCorrect = () => {
    // Implement the logic to verify the current password here
    return true; // Replace with your actual logic
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default ChangePassword;
