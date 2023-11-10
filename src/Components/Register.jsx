import "./Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
const Register = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    pincode: "",
    number: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(user);
      const usersCollection = collection(db, "users");
      const userDocRef = doc(usersCollection, user.user.uid);

      try {
        await setDoc(userDocRef, form);
        console.log("Document successfully written!");
        navigate("/login");
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="reg-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="John"
            name="fname"
            value={form.fname}
            onChange={handleInputChange}
          />
          <label> Last Name: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="Doe"
            name="lname"
            value={form.lname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            className="reg-input"
            type="email"
            placeholder="@mavs.uta.edu"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
            pattern="^[a-zA-Z0-9]+@mavs\.uta\.edu$"
            title="Please enter a valid email with the domain @mavs.uta.edu"
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            className="reg-input"
            type="password"
            placeholder="********"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="Street name, Apt"
            name="address"
            value={form.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Pincode: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="00000"
            name="pincode"
            value={form.pincode}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Conatct Number: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="(999)-999-9999"
            name="number"
            value={form.number}
            onChange={handleInputChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <div className="login-link">
        Already a member? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default Register;
