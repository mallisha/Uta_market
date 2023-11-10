// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import Navbar from "./Navbar";
import "./Buy.css";
import laptop from "../Images/laptop.jpeg";
import book from "../Images/book.jpg";

function HomePage() {
  // Dummy data
  const items = [
    {
      id: 1,
      title: "Laptop",
      price: 500,
      description: "A great laptop for students.",
      type: "Electronics",
      image: laptop,
    },
    {
      id: 2,
      title: "Calculus 101",
      price: 30,
      description: "Calculus 101 textbook.",
      type: "Books",
      image: book,
    },
    // ... add more items as necessary
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [filter, setFilter] = useState("All"); // State to keep track of selected filter
  const [displayedItems, setDisplayedItems] = useState(items); // State to keep track of items to display

  useEffect(() => {
    if (filter === "All") {
      setDisplayedItems(items);
    } else {
      setDisplayedItems(items.filter((item) => item.type === filter));
    }
  }, [filter, items]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="filter-section">
          <label>Filter by Category: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Furniture">Furniture</option>
            {/* Add other categories as needed */}
          </select>
        </div>
        <ItemList items={displayedItems} />
      </main>
    </div>
  );
}
export default HomePage;
