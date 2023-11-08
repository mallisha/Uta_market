import './Sellform.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sellform = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    address: "",
    pincode: "",
    number: "",
    isOrganization: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Here, you can handle form submission, e.g., send it to a server
  };

  return (
    <div className="reg-container">
      <h2>Sell Products</h2>
      <form onSubmit={handleSubmit}>
      <div>
            <label>First Name: </label>
            <input
                className="reg-input"
                type="text"
                placeholder="John"
                name="fname"
                value={form.address}
                onChange={handleInputChange}
            />
            <label> Last Name: </label>
            <input
                className="reg-input"
                type="text"
                placeholder="Doe"
                name="lname"
                value={form.address}
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
            />
        </div>

        <div>    
            <label>Product Category: </label>
            <input
                className="reg-input"  
                type="Prodct"
                placeholder="Specify product category"
                name="Product"
                value={form.product}
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
        <button className="submit-button" type="submit">Submit</button>
      </form>
      <div className="login-link">
       Already a member? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default Sellform;