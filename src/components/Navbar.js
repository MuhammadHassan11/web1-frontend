import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/productlist" className="nav-link">Home</Link>
                <Link to="/productform" className="nav-link">Add Product</Link>
                <Link to="/productform/:id" className="nav-link">Products</Link>
            </div>
            <div className="navbar-right">
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/logout" className="nav-link">Logout</Link>
            </div>
        </nav>
    );
};

export default Navbar;
