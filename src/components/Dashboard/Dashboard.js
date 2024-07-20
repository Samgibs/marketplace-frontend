import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ItemList from '../Item/ItemList';
import ItemCreate from '../Item/ItemCreate';
import OrderList from '../Order/OrderList';
import OrderDetail from '../Order/OrderDetail';
import ItemEdit from '../Item/ItemEdit';
import OrderHistory from '../Order/OrderHistory'; 
import './Dashboard.css';

const Dashboard = ({ token }) => {
  return (
    <div className="container mt-5">
      <h1>User Dashboard</h1>
      <nav>
        <ul className="dashboard-nav">
          <li><Link className="dashboard-btn hover-glow" to="profile">View Profile</Link></li>
          <li><Link className="dashboard-btn rounded-button" to="items">List Items</Link></li>
          <li><Link className="dashboard-btn three-d-touch" to="create-item">Create Item</Link></li>
          <li><Link className="dashboard-btn button-045" to="orders">List Orders</Link></li>
          <li><Link className="dashboard-btn fancy-icon-button" to="order-history">Order History</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="items" element={<ItemList token={token} />} />
        <Route path="create-item" element={<ItemCreate token={token} />} />
        <Route path="items/:id/edit" element={<ItemEdit token={token} />} />
        <Route path="orders" element={<OrderList token={token} />} />
        <Route path="orders/:id" element={<OrderDetail token={token} />} />
        <Route path="order-history" element={<OrderHistory token={token} />} />
      </Routes>
    </div>
  );
};

export default Dashboard;


