/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import video from '../img/Circle-Chair-Final.mp4'
import './Header.css'

function Header() {
  const [play, setPlay] = useState('')

  useEffect(() => {
    const iw_video = document.querySelector('.iw_video')
    setTimeout(() => {
      iw_video.play()
    }, 7000)
  }, [])
  return (
    <header>
      <div className="i_homeslogan">
        <p className="lora">Thinking learning and design.</p>
        <p className="i_homesubslogan lora">
          Create your own fascinating masterpiece.
        </p>
      </div>
      <div className="i_video">
        <video
          className="iw_video"
          width="100%"
          loop={true}
          // autoPlay="false"
          muted={true}
          preload="auto"
          src={video}
          alt=""
        />
      </div>
    </header>
  )
}

export default Header
