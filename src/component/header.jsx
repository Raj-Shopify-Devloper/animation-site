import React, { useState } from 'react';
import '../style/header.css';

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
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <a href="/" className="logo-link">
            <span className="logo-text">Animation</span>
          </a>
        </div>
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><a href="/" className="nav-link">ABOUT US</a></li>
            <li><a href="/about" className="nav-link">PRODUCTS</a></li>
            <li><a href="/portfolio" className="nav-link">DOWNLOAD</a></li>
            <li><a href="/contact" className="nav-link">CONTACT</a></li>
          </ul>
        </nav>
        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line line1"></span>
          <span className="hamburger-line line2"></span>
          <span className="hamburger-line line3"></span>
        </button>
      </div>
      <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list-mobile">
          <li><a href="/" className="nav-link-mobile" onClick={closeMenu}>ABOUT US</a></li>
          <li><a href="/about" className="nav-link-mobile" onClick={closeMenu}>PRODUCTS</a></li>
          <li><a href="/portfolio" className="nav-link-mobile" onClick={closeMenu}>DOWNLOAD</a></li>
          <li><a href="/contact" className="nav-link-mobile" onClick={closeMenu}>CONTACT</a></li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;