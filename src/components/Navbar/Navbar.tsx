import React from "react";
import './Navbar.css';

const Navbar:React.FC= () => {
    const toggleMobileMenu = () => {
        const navLinks = document.querySelector('.nav-links') as HTMLUListElement;
        navLinks.classList.toggle('active');
        
    }
    return (
        <nav className="navbar">
        <div className="logo">ShopApp</div>
        <button  onClick={toggleMobileMenu} className="mobile-menu-btn">☰</button>
        <ul className="nav-links">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="cart-icon">🛒</div>
    </nav>
    );
}

export default Navbar;