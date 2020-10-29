import React from 'react'
import ItemBannerVideo from '../images/Rely_Draft_02_3.mp4'

function ItemBanner(props) {
  return (
    <>
      <div class="container-fluid">
        <video
          src={ItemBannerVideo}
          class="w-100"
          autoplay="autoplay"
          muted="true"
          preload="auto"
        ></video>
      </div>
    </>
  )
}

export default ItemBanner