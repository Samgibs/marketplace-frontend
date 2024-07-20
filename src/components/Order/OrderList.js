import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/orders/', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(response.data)) {
          setOrders(response.data);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load orders');
        setOrders([]);
      }
    };
    fetchOrders();
  }, [token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>{order.item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;

