import React, { useState } from 'react';
import '../style/header.css';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container container">
        {/* Logo */}
        <div className="header-logo">
          <a href="/" className="logo-link">
            <img src={logoImage} alt="Pecos Shield Logo" className="logo-image" />
          </a>
        </div>
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><a href="/" className="nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font">ABOUT US</a></li>
            <li><a href="/about" className="nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font">PRODUCTS</a></li>
            <li><a href="/portfolio" className="nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font">DOWNLOAD</a></li>
            <li><a href="/contact" className="nav-link f-22 f-m-16 white-color l-h-1-4 w-500 second-font">CONTACT</a></li>
          </ul>
        </nav>
        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line line1 bg-white-color"></span>
          <span className="hamburger-line line2 bg-white-color"></span>
          <span className="hamburger-line line3 bg-white-color"></span>
        </button>
      </div>
      <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list-mobile">
          <li><a href="/" className="nav-link-mobile f-22 f-m-16 white-color l-h-1-4 w-500 second-font" onClick={closeMenu}>ABOUT US</a></li>
          <li><a href="/about" className="nav-link-mobile f-22 f-m-16 white-color l-h-1-4 w-500 second-font" onClick={closeMenu}>PRODUCTS</a></li>
          <li><a href="/portfolio" className="nav-link-mobile f-22 f-m-16 white-color l-h-1-4 w-500 second-font" onClick={closeMenu}>DOWNLOAD</a></li>
          <li><a href="/contact" className="nav-link-mobile f-22 f-m-16 white-color l-h-1-4 w-500 second-font" onClick={closeMenu}>CONTACT</a></li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;