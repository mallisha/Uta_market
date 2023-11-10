import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import "./posthistorycard.css";

const MyPostsCard = () => {
  const [postHistory, setPostHistory] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPostHistory(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      setPostHistory((prevPosts) =>
        prevPosts.filter((post) => post.id !== postId)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="dashboard-card">
      <h2>Posts list</h2>
      {postHistory.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Type</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {postHistory.map((post) => (
              <tr key={post.id}>
                <td>{post.pname}</td>
                <td>${post.price}</td>
                <td>{post.productDescription}</td>
                <td>{post.productCategory}</td>
                <td>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-icon"
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-items-message">
          <p>No items! Add items to sell.</p>
          <Link to="/sell">Go to Sell Page</Link>
        </div>
      )}
    </div>
  );
};

export default MyPostsCard;
