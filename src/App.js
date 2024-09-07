import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Profile from './components/Profile';
import Login from './components/Login';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/productlist" />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productForm" element={<ProductForm />} />
        <Route path="/productForm/:id" element={<ProductForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
};

export default App;

