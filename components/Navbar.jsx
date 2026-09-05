import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="brand-logo">
        Rafay Khan <span>Yousafzai Travels</span>
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#contact" className="nav-cta">Contact Us</a></li>
      </ul>
    </nav>
  );
}