import React from 'react'
import ItemBannerVideo from '../images/Rely_Draft_02_3.mp4'

function ItemBanner(props) {
  return (
    <>
      <header>
        <div
          className="a_homeslogan"
          data-aos="fade-down"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <p className="lora">Where are you going</p>
          <p className="a_homesubslogan lora">
            Many courses for you to choose.
          </p>
        </div>
        <video
          src={ItemBannerVideo}
          className="w-100"
          autoplay="autoplay"
          muted="true"
          preload="auto"
        ></video>
      </header>
    </>
  )
}

export default ItemBanner
