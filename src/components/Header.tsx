'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [navbarActive, setNavbarActive] = useState(false)
  const [headerActive, setHeaderActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHeaderActive(true)
      } else {
        setHeaderActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive)
  }

  const closeNavbar = () => {
    setNavbarActive(false)
  }

  return (
    <header className={`header ${headerActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          {React.createElement('ion-icon', { name: 'barbell-sharp', 'aria-hidden': true })}
          <span className="span">Fitlife</span>
        </a>

        <nav className={`navbar ${navbarActive ? 'active' : ''}`} data-navbar>
          <button
            className="nav-close-btn"
            aria-label="close menu"
            data-nav-toggler
            onClick={closeNavbar}
          >
            {React.createElement('ion-icon', { name: 'close-sharp', 'aria-hidden': true })}
          </button>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link active" data-nav-link onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link" data-nav-link onClick={closeNavbar}>
                About Us
              </a>
            </li>
            <li>
              <a href="#class" className="navbar-link" data-nav-link onClick={closeNavbar}>
                Classes
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link onClick={closeNavbar}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <a href="#" className="btn btn-secondary">
          Join Now
        </a>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
          onClick={toggleNavbar}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  )
}
