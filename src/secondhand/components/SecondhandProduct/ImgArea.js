import React from 'react'
import Img1 from '../../img/F Chair1.jpg'
import Img2 from '../../img/F Chair2.jpg'
import Img3 from '../../img/F Chair3.jpg'
import Img4 from '../../img/F Chair4.jpg'
import Img5 from '../../img/F Chair5.jpg'

function ImgArea() {
  return (
    <div className="i_img_area">
      <div className="i_img_set">
        <img src={Img1} alt="" className="mb-4" />
        <img src={Img2} alt="" className="mb-4" />
        <img src={Img3} alt="" className="mb-4" />
        <img src={Img4} alt="" className="mb-4" />
        <img src={Img5} alt="" className="mb-4" />
      </div>
    </div>
  )
}

export default ImgArea
