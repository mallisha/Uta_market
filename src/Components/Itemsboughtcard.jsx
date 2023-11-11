import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Link, useParams, Route, Routes } from "react-router-dom";
import PurchaseDetails from "./PurchaseDetails";
import "./Usercard.css";
import { useUser } from "../UserContext";

const ItemsboughtCard = () => {
  const [purchases, setPurchases] = useState([]);
  const { userData } = useUser();

  const fetchPurchases = async () => {
    try {
      const purchasesCollection = collection(db, "purchases");

      const q = query(
        purchasesCollection,
        where("buyer_uid", "==", userData.uid)
      );
      const querySnapshot = await getDocs(q);
      const purchasesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(purchasesData);
      setPurchases(purchasesData);
    } catch (error) {
      console.error("Error fetching purchases:", error);
    }
  };

  const handleDelete = async (purchaseId) => {
    try {
      const purchaseRef = doc(db, "purchases", purchaseId);
      await deleteDoc(purchaseRef);
      console.log("Purchase deleted successfully");
      // After deletion, fetch the updated list of purchases
      fetchPurchases();
    } catch (error) {
      console.error("Error deleting purchase:", error);
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  return (
    <div className="dashboard-card">
      <h2>Items Purchased</h2>
      {purchases.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Seller's Name</th>
              <th>Email</th>
              <th>Product Name Bought</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td>{purchase.seller_name}</td>
                <td>{purchase.seller_email}</td>
                <td>{purchase.product_name}</td>
                <td>
                  <Link to={`/purchase/${purchase.id}`}>View Details</Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(purchase.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items purchased yet.</p>
      )}

      <Routes>
        <Route
          path={`/purchase/:purchaseId`}
          element={<PurchaseDetails purchases={purchases} />}
        />
      </Routes>
    </div>
  );
};

export default ItemsboughtCard;
