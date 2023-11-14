import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext";
//import "./Logout.css";

function Logout() {
  const { updateUser } = useUser();

  const handleLogout = () => {
    updateUser(null);
    window.location.href = "/login"; // Replace with your actual login page URL.
  };

  return (
    <div className = "logout">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>

      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default Logout;
