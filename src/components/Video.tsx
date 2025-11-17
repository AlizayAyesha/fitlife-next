'use client'
import React, { useState, useEffect } from 'react'

export default function Video() {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <section className="video-section">
        <div className="video-container-custom">
          <div
            className="video-card"
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}
          >
            <h2 className="video-title">Explore Fitness Life</h2>
            <div className="play-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <a
              href="#"
              className="video-link"
              onClick={(e) => e.stopPropagation()}
            >
              Watch More Videos
            </a>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="video-modal" onClick={() => setShowModal(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-close-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
