import React, { useState } from 'react';
import axios from 'axios';

const ItemCreate = ({ token }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/items/', {
        name,
        description,
        price
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Item created', response.data);
    } catch (error) {
      console.error('Error creating item', error);
    }
  };

  return (
    <form onSubmit={handleCreateItem}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Create Item</button>
    </form>
  );
};

export default ItemCreate;
