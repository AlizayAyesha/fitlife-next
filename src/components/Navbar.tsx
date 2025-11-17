'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false)
  const [headerActive, setHeaderActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
        <Link href="/" className="logo">
          {React.createElement('ion-icon', { name: 'barbell-sharp', 'aria-hidden': true })}
          <span className="span">Fitlife</span>
        </Link>

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
              <Link href="/" className="navbar-link active" data-nav-link onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="navbar-link" data-nav-link onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#class" className="navbar-link" data-nav-link onClick={closeNavbar}>
                Classes
              </Link>
            </li>
            <li>
              <Link href="/#blog" className="navbar-link" data-nav-link onClick={closeNavbar}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="navbar-link" data-nav-link onClick={closeNavbar}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions flex gap-0.5">
          <a href="/register" className="btn btn-secondary text-xs py-0.5 px-1">
            Register Now
          </a>
        </div>

        <button
          className={`nav-open-btn ${navbarActive ? 'active' : ''}`}
          aria-label="open menu"
          data-nav-toggler
          onClick={toggleNavbar}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
    </header>
  )
}
