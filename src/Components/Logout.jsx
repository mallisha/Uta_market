import React from 'react';
import { Link } from 'react-router-dom';


function Logout() {
  const handleLogout = () => {
    // Perform the logout actions here.
    // For example, you can clear user data, tokens, or perform any other actions needed for logout.

    window.location.href = "/login"; // Replace with your actual login page URL.
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>

      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default Logout;
