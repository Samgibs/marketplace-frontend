import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetail = ({ token }) => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/orders/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrder(response.data);
    };
    fetchOrder();
  }, [id, token]);

  return (
    <div>
      {order ? (
        <div>
          <h1>Order: {order.item.name}</h1>
          <p>Status: {order.status}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderDetail;
