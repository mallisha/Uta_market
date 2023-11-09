// ChangePassword.js
import React, { useState } from 'react';
import './ChangePassword.css';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPasswordIsCorrect()) {
      if (newPassword === confirmPassword) {
        if (isPasswordValid(newPassword)) {
          // Password is valid, update the user's password here
          console.log('Password changed successfully');
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
        } else {
          alert(
            'Password must be at least 8 characters long and contain at least one number.'
          );
        }
      } else {
        alert('New password and confirm password do not match');
      }
    } else {
      alert('Current password is incorrect');
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
