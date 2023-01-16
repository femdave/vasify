import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Vasify</div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            Features
          </a>
        </li>
        <li className="navbar-item">
          <a href="#services" className="navbar-link">
            Blog
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            Contact Us
          </a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
