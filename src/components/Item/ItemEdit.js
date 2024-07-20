import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ItemEdit = ({ token }) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/items/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
      } catch (error) {
        console.error('Fetch item error', error);
      }
    };

    fetchItem();
  }, [id, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/items/${id}/`, {
        name,
        description,
        price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate('/dashboard/items');
    } catch (error) {
      console.error('Update item error', error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="container mt-5">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  );
};

export default ItemEdit;
