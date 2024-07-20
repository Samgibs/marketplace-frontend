import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = ({ token }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/items/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('API response:', response.data);

        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
          setItems([]);
        }
      } catch (error) {
        console.error('Fetch items error', error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(items)) {
    console.error('Items state is not an array:', items);
    return <div>Error: Items data is not in expected format.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Item List</h2>
      <ul>
        {items.length > 0 ? (
          items.map(item => (
            <li key={item.id}>
              <p>Item Name: {item.name}</p>
              <p>Item Description: {item.description}</p>
              <p>Item Price: {item.price}</p>
            </li>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </ul>
    </div>
  );
};

export default ItemList;

