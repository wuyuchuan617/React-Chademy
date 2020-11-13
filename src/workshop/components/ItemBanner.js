import React from 'react'
import ItemBannerVideo from '../images/Rely_Draft_02_3.mp4'

function ItemBanner(props) {
  return (
    <>
      <div className="container-fluid">
        <video
          src={ItemBannerVideo}
          className="w-100"
          autoPlay="autoplay"
          muted={true}
          preload="auto"
        ></video>
      </div>
    </>
  )
}

export default ItemBanner
