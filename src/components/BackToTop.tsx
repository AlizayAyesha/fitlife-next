'use client'

import React, { useState, useEffect } from 'react'

export default function BackToTop() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a href="#top" className={`back-top-btn ${active ? 'active' : ''}`} aria-label="back to top" data-back-top-btn>
      {React.createElement('ion-icon', { name: 'caret-up-sharp', 'aria-hidden': true })}
    </a>
  )
}
