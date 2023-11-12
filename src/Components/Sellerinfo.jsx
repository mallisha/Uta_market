import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "../UserContext";
import "./Sellerinfo.css"

const SellerInfo = () => {
  const { productId } = useParams(); // Using useParams hook to get the productId
  const [productInfo, setProductInfo] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const { userData } = useUser();
  const handleBuy = async (product, seller) => {
    try {
      if (userData.uid === product.seller_uid) {
        alert("Sellers can't buy their own items.");
        return;
      }
      const purchasesCollection = collection(db, "purchases");

      const q = query(
        purchasesCollection,
        where("buyer_uid", "==", userData.uid),
        where("productId", "==", product.id)
      );
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot.size);
      if (querySnapshot.size !== 0) {
        alert("Item already bought");
        return;
      }

      const purchaseDocRef = await addDoc(purchasesCollection, {
        seller_uid: seller.id,
        productId: product.id,
        buyer_uid: userData.uid,
        seller_name: seller.fname + " " + seller.lname,
        seller_email: seller.email,
        product_name: product.pname,
        product_add: product.address + " " + product.pincode,
        product_price: product.price,
        buyer_name: userData.fname + " " + userData.lname,
        buyer_email: userData.email,
        buyer_address: userData.address + " " + userData.pincode,
      });
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, {
        name: userData.fname + " " + userData.lname,
        email: userData.email,
        contact: userData.number,
        productName: product.pname,
        purchaseId: purchaseDocRef.id,
      }).then((res) => {
        alert("Item Bought");
      });
    } catch (error) {
      console.error("Error handling purchase:", error);
    }
  };
  useEffect(() => {
    const fetchProductInfo = async () => {
      const productRef = doc(db, "posts", productId);

      try {
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          setProductInfo({ id: productDoc.id, ...productDoc.data() });
          const sellerRef = doc(db, "users", productDoc.data().seller_uid);
          const sellerDoc = await getDoc(sellerRef);
          if (sellerDoc.exists()) {
            setSellerData({
              id: sellerDoc.id,
              ...sellerDoc.data(),
            });
            console.log(sellerDoc.data());
          }
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product information:", error);
      }
    };

    fetchProductInfo();
  }, [productId]);

  if (!productInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="seller-info"
      style={{
        textAlign: "center",
        border: "1px solid black",
        width: "500px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2>Product Information</h2>
      <div className="info-item">
        <strong>Seller's Name:</strong> {sellerData?.fname} {sellerData?.lname}
      </div>
      <div className="info-item">
        <strong>Email:</strong> {sellerData?.email}
      </div>
      <div className="info-item">
        <strong>Contact:</strong> {productInfo.number}
      </div>
      <div className="info-item">
        <strong>Pick-up Address:</strong> {productInfo.address},{" "}
        {productInfo.pincode}
      </div>
      <div className="info-item">
        <strong>Product Price:</strong> ${productInfo.price}
      </div>
      <div className="info-item">
        <strong>Product Name:</strong> {productInfo.pname}
      </div>
      <div className="info-item">
        <strong>Description:</strong> {productInfo.productDescription}
      </div>
      <div className="info-item">
        <strong>Category:</strong> {productInfo.productCategory}
      </div>
      <div className="info-item">
        <strong>Product Image:</strong>{" "}
        <img
          src={productInfo.image}
          alt="Product"
          style={{ maxWidth: "300px", maxHeight: "300px" }} // Adjust the values as needed
        />
      </div>
      <button
        className="buy-button"
        onClick={() => handleBuy(productInfo, sellerData)}
      >
        Buy
      </button>
      <Link to="/Buy">Go Back to explore more</Link>
    </div>
  );
};

export default SellerInfo;
