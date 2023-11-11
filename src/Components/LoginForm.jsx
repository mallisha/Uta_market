import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "../UserContext";

function LoginForm() {
  const { updateUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      const userDocRef = doc(db, "users", user.user.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        updateUser({ ...docSnap.data(), uid: user.user.uid });
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      alert(e);
    }
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
          <button type="submit">Login</button>
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
