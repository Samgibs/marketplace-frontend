import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaUser, FaSignInAlt, FaList, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [token, setToken] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log('Searching for:', searchQuery);
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              Marketplace
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/register"><FaUser /> Register</Nav.Link>
              <Nav.Link as={Link} to="/login"><FaSignInAlt /> Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard"><FaList /> Dashboard</Nav.Link>
            </Nav>
            <Form className="d-flex ml-auto" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" type="submit"><FaSearch /></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="welcome-message"
        >
          <h1>Welcome to the Marketplace!</h1>
        </motion.div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/dashboard/*" element={<PrivateRoute component={Dashboard} token={token} />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
