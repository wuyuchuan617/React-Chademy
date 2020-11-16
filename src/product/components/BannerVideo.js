import React, { useEffect } from 'react'
import bannerVideo from '../images/The-Passion-of-Making.mp4'

function BannerVideo(props) {
  // const handleClick2 = () => {
  //   setTimeout(() => {
  //     document
  //       .getElementById('w_custom_link')
  //       .scrollIntoView({ behavior: 'smooth', block: 'center' })
  //   }, 500)
  // }
  const { handleClick2 } = props

  useEffect(() => {
    const w_video = document.querySelector('.w_video')

    w_video.currentTime = 2
  }, [])

  return (
    <>
      <video
        src={bannerVideo}
        className="w_video "
        autoplay="autoplay"
        muted="true"
        preload="auto"
      ></video>
      <h3 class="SectionHeader__SubHeading Heading u-h6">
        New Launches November 2020
      </h3>
      <img
        alt=""
        src={require('../images/handwriting.svg')}
        class="w_hand_write"
        alt=""
      ></img>
      <button
        data-href="#section-1600160888360-end"
        className="Slideshow__ScrollButton RoundButton RoundButton--medium"
        aria-label="Scroll to content"
        data-animate-bottom=""
        onClick={() => {
          handleClick2()
        }}
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
