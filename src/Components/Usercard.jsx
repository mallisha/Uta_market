// UserCard.js

import React, { useState } from 'react';
import Mypostscard from './Mypostscard';
import Myorderscard from './Myorderscard';
import Itemsboughtcard from './Itemsboughtcard';

const UserCard = () => {
  const [isPostsOpen, setPostsOpen] = useState(false);
  const [isOrdersOpen, setOrdersOpen] = useState(false);
  const [isItemsOpen, setItemsOpen] = useState(false);

  const togglePostsDrawer = () => {
    setPostsOpen(!isPostsOpen);
    setOrdersOpen(false);
    setItemsOpen(false);
  };

  const toggleOrdersDrawer = () => {
    setOrdersOpen(!isOrdersOpen);
    setPostsOpen(false);
    setItemsOpen(false);
  };

  const toggleItemsDrawer = () => {
    setItemsOpen(!isItemsOpen);
    setPostsOpen(false);
    setOrdersOpen(false);
  };

  return (
    <div className="user-card">
      <ul className="drawer-list">
        <li>
          <button onClick={togglePostsDrawer}>My Posts</button>
          {isPostsOpen && <Mypostscard />}
        </li>
        <li>
          <button onClick={toggleOrdersDrawer}>My Orders</button>
          {isOrdersOpen && <Myorderscard />}
        </li>
        <li>
          <button onClick={toggleItemsDrawer}>Items Purchased</button>
          {isItemsOpen && <Itemsboughtcard />}
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
