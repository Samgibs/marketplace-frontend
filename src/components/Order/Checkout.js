import React, { useState } from 'react';
import axios from 'axios';

const Checkout = ({ token, itemId }) => {
  const [status, setStatus] = useState('');

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/checkout/', {
        item_id: itemId
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStatus('Checkout successful');
      console.log('Checkout response', response.data);
    } catch (error) {
      setStatus('Checkout failed');
      console.error('Checkout error', error);
    }
  };

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
      <p>{status}</p>
    </div>
  );
};

export default Checkout;
