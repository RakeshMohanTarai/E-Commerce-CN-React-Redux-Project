import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link">Create Product</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
