import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('authToken')); // Check if the user is logged in
    const navigate = useNavigate();

    const handleLogout = () => {
       
        localStorage.removeItem('authToken'); // Remove the token from localStorage
        setIsLoggedIn(false);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/productlist" className="navbar-link">Home</Link>
                <Link to="/productform" className="navbar-link">Add Product</Link>
                <Link to="/productform/:id" className="navbar-link">Add Product</Link>
            </div>
            <div className="navbar-profile">
                <Link to="/profile" className="navbar-link">Profile</Link>
                {isLoggedIn ? (
                    <button className="navbar-profile-button" onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login" className="navbar-profile-button">Login</Link> // Navigate to login page
                )}
            </div>
        </nav>
    );
};

export default Navbar;
