import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle login logic here using email and password state
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div> 
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-actions">
          <button  type="submit">Login</button>
          <div className="forgot-password">
            <Link to="/ForgotPassword">Forgot password?</Link>
          </div>
        </div>
      </form>
      <div className="register-link">
        New member? <Link to="/Register">Register here</Link>
      </div>
    </div>
  );
}

export default LoginForm;