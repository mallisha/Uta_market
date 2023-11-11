// MyOrdersCard.js

import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import "./Usercard.css";
import { useUser } from "../UserContext";

const MyOrdersCard = () => {
  const [orders, setOrders] = useState([]);
  const { userData } = useUser();

  useEffect(() => {
    fetchOrders();
  }, [userData]);
  const fetchOrders = async () => {
    try {
      // Query orders where the seller UID matches the currently logged-in user's UID
      const querySnapshot = await getDocs(
        query(
          collection(db, "purchases"),
          where("seller_uid", "==", userData.uid)
        )
      );

      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const handleCancelOrder = async (purchaseId) => {
    try {
      const purchaseRef = doc(db, "purchases", purchaseId);
      await deleteDoc(purchaseRef);
      console.log("Purchase deleted successfully");
      // After deletion, fetch the updated list of purchases
      fetchOrders();
    } catch (error) {
      console.error("Error deleting purchase:", error);
    }
  };

  return (
    <div className="dashboard-card">
      <h2>Orders list</h2>
      {orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Buyer's Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.buyer_name}</td>
                <td>{order.buyer_email}</td>
                <td>{order.product_name}</td>
                <td>{order.buyer_address}</td>
                <td>
                  <button onClick={() => handleCancelOrder(order.id)}>
                    Cancel Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default MyOrdersCard;
