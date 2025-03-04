import React from "react";
import './Navbar.css';

const Navbar:React.FC= () => {
    return (
        <nav className="navbar">
        <div className="logo">ShopApp</div>
        <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="cart-icon">🛒</div>
    </nav>
    );
}

export default Navbar;