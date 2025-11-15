import React from 'react'
import Image from 'next/image'

export default function Video() {
  return (
    <section className="section video" aria-label="video">
      <div className="container">
        <div
          className="video-card has-before has-bg-image"
          style={{ backgroundImage: "url('/images/video-banner.jpg')" }}
        >
          <h2 className="h2 card-title">Explore Fitness Life</h2>
          <button className="play-btn" aria-label="play video">
            {React.createElement('ion-icon', { name: 'play-sharp', 'aria-hidden': true })}
          </button>
          <a href="#" className="btn-link has-before">
            Watch More
          </a>
        </div>
      </div>
    </section>
  )
}
