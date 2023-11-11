// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import BuyNavbar from "./BuyNavbar";
import "./Buy.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function HomePage() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [filter, setFilter] = useState("All");
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const itemsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsData);
        setDisplayedItems(itemsData);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setDisplayedItems(items);
    } else {
      setDisplayedItems(
        items.filter((item) => item.productCategory === filter)
      );
    }
  }, [filter, items]);

  return (
    <div className="App">
      <BuyNavbar />
      <main>
        <div className="filter-section">
          <label>Filter by Category: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Furniture">Furniture</option>
            <option value="Other">Other</option>
            {/* Add other categories as needed */}
          </select>
        </div>
        <ItemList items={displayedItems} />
      </main>
    </div>
  );
}

export default HomePage;
