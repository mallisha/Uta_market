import "./Sellform.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; // Import useUser from your context
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";

const Sellform = () => {
  const { userData } = useUser(); // Use your user context hook
  const navigate = useNavigate();

  const [form, setForm] = useState({
    productCategory: "Select..",
    pname: "",
    address: "",
    pincode: "",
    number: "",
    price: "",
    image: null,
    productDescription: "",
  });

  useEffect(() => {
    if (userData) {
      setForm((prevForm) => ({
        ...prevForm,
        address: userData.address || "",
        pincode: userData.pincode || "",
        number: userData.number || "",
      }));
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming 'posts' is the collection in your database
    const postsCollection = collection(db, "posts");

    try {
      // Add a new document with the form data
      const docRef = await addDoc(postsCollection, {
        ...form,
        seller_uid: userData.uid,
        // Add other fields if needed
      });

      console.log("Document written with ID: ", docRef.id);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="reg-container">
      <h2>Sell Products</h2>
      <div>
        <p>
          Name: {userData && userData.fname} {userData && userData.lname}
        </p>
        <p>Email: {userData && userData.email}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Omitted input fields for fname, lname, and email */}

        {/* Fields for other information */}
        <div>
          <label>Product Category: </label>
          <select
            className="reg-input"
            name="productCategory"
            required
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
          <label>Product Name: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="Name of your product"
            name="pname"
            required
            value={form.pname}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Pick up Address: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="Street name, Apt"
            name="address"
            required
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
            required
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
            type="number"
            placeholder="Enter the price"
            name="price"
            value={form.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Image URL: </label>
          <input
            className="reg-input"
            type="text"
            placeholder="Enter the URL of the image"
            name="image"
            value={form.image}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Display image link if image is uploaded */}

        <div>
          <label>Product Description: </label>
          <textarea
            className="reg-input"
            placeholder="Enter a description of your product..."
            name="productDescription"
            value={form.productDescription}
            onChange={handleInputChange}
          />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sellform;
