import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isResetSent, setIsResetSent] = useState(false);

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setIsResetSent(true);
    } catch (error) {
      console.error("Error sending reset email", error.message);
    }
  };
  return (
    <div className="forgot-password-form">
      <h2>Forgot Password</h2>
      {isResetSent ? (
        <p>Password reset email sent. Check your inbox.</p>
      ) : (
        <form onSubmit={handleResetPassword}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      )}
      <div className="login-link">
        Remember your password? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
