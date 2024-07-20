import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username,
        password,
        role,
      });
      console.log('Registration successful', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration error', error.response.data);
      setErrorMessage(error.response.data.error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} className="container mt-5">
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-control"
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default Register;
