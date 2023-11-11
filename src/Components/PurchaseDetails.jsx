import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link, useParams } from "react-router-dom";

const PurchaseDetails = () => {
  const { purchaseId } = useParams();
  const [purchaseInfo, setPurchaseInfo] = useState(null);
  const [sellerData, setSellerData] = useState(null);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    const fetchPurchaseInfo = async () => {
      if (!purchaseId) {
        console.error("Purchase ID is undefined");
        return;
      }

      const purchaseRef = doc(db, "purchases", purchaseId);

      try {
        const purchaseDoc = await getDoc(purchaseRef);
        if (purchaseDoc.exists()) {
          setPurchaseInfo({ id: purchaseDoc.id, ...purchaseDoc.data() });

          // Fetch seller information
          const sellerRef = doc(db, "users", purchaseDoc.data().seller_uid);
          const sellerDoc = await getDoc(sellerRef);
          if (sellerDoc.exists()) {
            setSellerData({
              id: sellerDoc.id,
              ...sellerDoc.data(),
            });

            // Fetch product information
            const productRef = doc(db, "posts", purchaseDoc.data().productId);
            const productDoc = await getDoc(productRef);
            if (productDoc.exists()) {
              setProductInfo({
                id: productDoc.id,
                ...productDoc.data(),
              });
            } else {
              console.error("Product not found");
            }
          } else {
            console.error("Seller not found");
          }
        } else {
          console.error("Purchase not found");
        }
      } catch (error) {
        console.error("Error fetching purchase information:", error);
      }
    };

    fetchPurchaseInfo();
  }, [purchaseId]);

  if (!purchaseInfo || !sellerData || !productInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="purchase-details">
      <h2>Purchase Details</h2>
      <div className="info-item">
        <strong>Seller's Name:</strong> {sellerData?.fname} {sellerData?.lname}
      </div>
      <div className="info-item">
        <strong>Email:</strong> {sellerData?.email}
      </div>
      <div className="info-item">
        <strong>Contact:</strong> {sellerData?.number}
      </div>
      <div className="info-item">
        <strong>Product Name Bought:</strong> {purchaseInfo.product_name}
      </div>
      <div className="info-item">
        <strong>Address:</strong> {productInfo.address}, {productInfo.pincode}
      </div>
      <div className="info-item">
        <strong>Product Price:</strong> ${productInfo.price}
      </div>
      <div className="info-item">
        <strong>Product Image:</strong>{" "}
        <img
          src={productInfo.image}
          alt="Product"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
      </div>
      <Link to="/Buy">Go Back to explore more</Link>
    </div>
  );
};

export default PurchaseDetails;
