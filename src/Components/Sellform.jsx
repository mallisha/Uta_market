import './Sellform.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sellform = () => {
  const [form, setForm] = useState({
    email: "", 
    productCategory: "Select..", // Default category
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
          <label>Email: </label>
          <input
            className="reg-input"
            type="email"
            placeholder="@mavs.uta.edu"
            name="email"
            value={form.email}
            readOnly // Email field is read-only
          />
        </div>

        <div>
          <label>Product Category: </label>
          <select
            className="reg-input"
            name="productCategory"
            value={form.productCategory}
            onChange={handleInputChange}
          >
          <option value="Select">Select</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
            <option value="Other">Other</option>
          </select>
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
          <label>Contact Number: </label>
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
        <div>
  <label>Price: </label>
  <input
    className="reg-input"
    type="number" // Assuming the price is a number
    placeholder="Enter the price"
    name="price"
    value={form.price}
    onChange={handleInputChange}
    required
  />
</div>
        <div>
          <label>Upload Image: </label>
          <input
            className="reg-input"
            type="file"
            name="image"
            accept="image/*" // Limit file type to images
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
