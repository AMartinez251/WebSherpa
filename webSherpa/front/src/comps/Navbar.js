import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import './HamburgerMenu.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav-cont-over'>
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src="/WebSLogo.png" alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
        <li>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={handleClick}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
