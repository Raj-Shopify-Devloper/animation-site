import React, { useState, useEffect } from 'react';
import '../style/header.css';
import logoImage from '../assets/logo.png';
import { initHeaderFunctionality, getSearchSuggestions } from '../script/header-functionality';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSuggestions(getSearchSuggestions(query));
  };

  useEffect(() => {
    initHeaderFunctionality();
  }, []);

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
      <div className={`menu-overlay-custom ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-left-panel">
          <div className="menu-logo-container">
            <a href='/'>
              <img src={logoImage} alt="Pecos Shield Logo" className="menu-logo-image" />
            </a>
          </div>
          <div className="menu-vertical-text first-font">PECO</div>
        </div>
        <div className="menu-right-panel">
          <div className="menu-top-bar">
            <div className="search-container">
              <span className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input
                type="text"
                placeholder="Type To Search..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {suggestions.length > 0 && (
                <ul className="search-suggestions">
                  {suggestions.map((item, index) => (
                    <li key={index} className="suggestion-item">
                      <a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="close-container">
              <span className="separator">|</span>
              <button className="close-btn" onClick={closeMenu}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
          <ul className="menu-list-custom">
            <li>
              <a href="/" className="menu-link" onClick={closeMenu}>ABOUT US</a>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
            <li>
              <a href="/about" className="menu-link" onClick={closeMenu}>PRODUCTS</a>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
            <li>
              <a href="/portfolio" className="menu-link" onClick={closeMenu}>DOWNLOAD</a>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
            <li>
              <a href="/contact" className="menu-link" onClick={closeMenu}>CONTACT</a>
              <span className="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;