import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ token }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/items/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItem(response.data);
    };
    fetchItem();
  }, [id, token]);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetail;
