import React from 'react'

import video from '../img/Circle-Chair-Final.mp4'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="slogan">
        <p className="lora">Thinking learning and design.</p>
        <p className="subslogan lora">
          Create your own fascinating masterpiece.
        </p>
      </div>
      <div className="video">
        <video
          width="100%"
          loop="true"
          autoplay="autoplay"
          muted="true"
          preload="auto"
          src={video}
          alt=""
        />
      </div>
    </header>
  )
}

export default Header
