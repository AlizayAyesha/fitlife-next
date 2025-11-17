'use client'

import React, { useState, useEffect } from 'react';
import '../styles/admin-navbar.css';

export default function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Hamburger clicked, menuOpen:', !menuOpen);
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    console.log('Menu closed');
    setMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  // Close menu when clicking on backdrop (menu itself)
  const handleMenuClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <header className="user-dashboard-navbar">
      <div className="user-navbar-container">
        <a href="/" className="user-logo">
          {React.createElement('ion-icon', { name: 'barbell-sharp', 'aria-hidden': true })}
          <span>AdminPanel</span>
        </a>

        <button
          className={`user-nav-open-btn ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="user-line"></div>
          <div className="user-line"></div>
          <div className="user-line"></div>
        </button>

        <div
          className={`user-navbar-menu ${menuOpen ? 'active' : ''}`}
          onClick={handleMenuClick}
        >
          <button
            className="user-nav-close-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            {React.createElement('ion-icon', { name: 'close-sharp' })}
          </button>

          <a href="/leader-dashboard" className="user-navbar-link" onClick={closeMenu}>
            🏆 Leader Dashboard
          </a>
          <a href="/rollover-balance" className="user-navbar-link" onClick={closeMenu}>
            💰 Rollover Balance
          </a>
          <a href="/banks-accounts" className="user-navbar-link" onClick={closeMenu}>
            🏦 Banks Accounts
          </a>
        </div>
      </div>
    </header>
  );
}
