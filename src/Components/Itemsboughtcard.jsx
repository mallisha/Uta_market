// MyOrdersCard.js

import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Usercard.css";

const ItemsboughtCard = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "purchases"));
        const purchasesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPurchases(purchasesData);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <div className="dashboard-card">
      <h2>Items Purchased</h2>
      {purchases.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Buyer's Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Product Name Bought</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td>{purchase.buyerName}</td>
                <td>{purchase.buyerEmail}</td>
                <td>{purchase.buyerContact}</td>
                <td>{purchase.productName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items purchased yet.</p>
      )}
    </div>
  );
};

export default ItemsboughtCard;
