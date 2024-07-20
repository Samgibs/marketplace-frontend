import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/order-history/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('API response:', response.data);

        if (Array.isArray(response.data)) {
          setOrders(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
          setOrders([]);
        }
      } catch (error) {
        console.error('Fetch orders error', error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(orders)) {
    console.error('Orders state is not an array:', orders);
    return <div>Error: Orders data is not in expected format.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Order History</h2>
      <ul>
        {orders.length > 0 ? (
          orders.map(order => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Status: {order.status}</p>
              <p>Total: {order.total}</p>
            </li>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </ul>
    </div>
  );
};

export default OrderHistory;

