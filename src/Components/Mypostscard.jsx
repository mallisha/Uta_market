import React, { useState } from 'react';
import laptop from '../Images/laptop.jpeg'
import book from '../Images/book.jpg'

import './posthistorycard.css';

const Posthistory = [
  {
    id: 1,
    title: 'Laptop',
    price: 500,
    description: 'A great laptop for students.',
    type: 'Electronics',
    image: laptop, // Replace with the actual icon image URL
  },
  {
    id: 2,
    title: 'Calculus 101',
    price: 30,
    description: 'Calculus 101 textbook.',
    type: 'Books',
    image: book, // Replace with the actual icon image URL
  },
  // Add more items as necessary
];

const MyPostsCard = () => {
  return (
    <div className="dashboard-card">
      
      {/* Render My Posts using map */}
      {Posthistory.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>Price: ${post.price}</p>
          <p>{post.description}</p>
          <p>Type: {post.type}</p>
          <img
            src={post.image}
            alt={post.title}
            className="post-icon" // Add a class for styling the icon
          />
        </div>
      ))}


const MyPostCard = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: 'Laptop',
      price: 500,
      description: 'A great laptop for students.',
      image: laptop,
    },
    {
      id: 2,
      title: 'Calculus 101',
      price: 30,
      description: 'Calculus 101 textbook.',
      image: book,
    },
  ]);

  const [editOrderModalOpen, setEditOrderModalOpen] = useState(false);
  const [currentOrderToEdit, setCurrentOrderToEdit] = useState(null);

  const handleEditOrder = (orderId) => {
    const orderToEdit = orders.find((order) => order.id === orderId);
    setCurrentOrderToEdit(orderToEdit);
    setEditOrderModalOpen(true);
  };

  const handleEditOrderSubmit = (event) => {
    event.preventDefault();

    const updatedOrder = {
      id: currentOrderToEdit.id,
      title: event.target.title.value,
      price: event.target.price.value,
      description: event.target.description.value,
      image: event.target.image.value,
    };

    // Update the order data in the data source (e.g., database, API)
    // ...

    setEditOrderModalOpen(false);
    setCurrentOrderToEdit(null);

    setOrders(
      orders.map((order) => {
        if (order.id === updatedOrder.id) {
          return updatedOrder;
        }
        return order;
      })
    );
  };

  const closeEditOrderModal = () => {
    setEditOrderModalOpen(false);
  };

  const EditOrderModal = () => {
    if (!currentOrderToEdit) {
      return null;
    }

    return (
      <div className="edit-order-modal">
        <h2>Edit Order</h2>
        <form onSubmit={handleEditOrderSubmit}>
          <label>Title:</label>
          <input type="text" name="title" defaultValue={currentOrderToEdit.title} />

          <label>Price:</label>
          <input type="number" name="price" defaultValue={currentOrderToEdit.price} />

          <label>Description:</label>
          <textarea name="description" defaultValue={currentOrderToEdit.description} />

          <label>Image URL:</label>
          <input type="text" name="image" defaultValue={currentOrderToEdit.image} />

          <button type="submit">Save Changes</button>
        </form>
        <button onClick={closeEditOrderModal}>Cancel</button>
      </div>
    );
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="dashboard-card">
      <h2>Orders list</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th className="image-column">Image</th>
            <th className="title-column">Title</th>
            <th className="price-column">Price</th>
            <th className="description-column">Description</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="image-cell">
                <img src={order.image} alt={order.title} width="50" height="50" />
              </td>
              <td className="title-cell">{order.title}</td>
              <td className="price-cell">${order.price}</td>
              <td className="description-cell">{order.description}</td>
              <td className="actions-cell">
                <button className="edit-button" onClick={() => handleEditOrder(order.id)}>Edit</button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editOrderModalOpen && <EditOrderModal />}

    </div>
  );
};

export default MyPostCard;