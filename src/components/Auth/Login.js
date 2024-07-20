import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password
      });
      setToken(response.data.access);
      console.log('Login successful', response.data);
      navigate('/profile'); 
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="container mt-5">
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
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;

