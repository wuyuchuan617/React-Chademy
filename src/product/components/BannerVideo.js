import React from 'react'
import bannerVideo from '../images/The-Passion-of-Making.mp4'

function BannerVideo(props) {
  return (
    <>
      <video
        src={bannerVideo}
        className="w-100 w_video"
        autoplay="autoplay"
        muted="true"
        preload="auto"
      ></video>
      <button
        data-href="#section-1600160888360-end"
        className="Slideshow__ScrollButton RoundButton RoundButton--medium"
        aria-label="Scroll to content"
        data-animate-bottom=""
      >
        <svg
          className="Icon Icon--arrow-bottom"
          role="presentation"
          viewBox="0 0 21 11"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            points="0.5 0.5 10.5 10.5 20.5 0.5"
            stroke-width="1.25"
          ></polyline>
        </svg>
      </button>
    </>
  )
}

export default BannerVideo
