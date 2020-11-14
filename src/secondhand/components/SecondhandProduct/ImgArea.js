/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from 'react'
import Img1 from '../../img/F Chair1.jpg'
import Img2 from '../../img/F Chair2.jpg'
import Img3 from '../../img/F Chair3.jpg'
import Img4 from '../../img/F Chair4.jpg'
import Img5 from '../../img/F Chair5.jpg'
import { GlassMagnifier } from 'react-image-magnifiers'

function ImgArea(props) {
  const { item } = props
  return (
    <div className="i_img_area">
      <div className="i_img_set mb-5">
        {/* <img
          src={`http://localhost:3001/img/` + item.photo}
          alt=""
          className="mb-4"
        /> */}
        <GlassMagnifier
          imageSrc={`http://localhost:3001/img/` + item.photo}
          imageAlt="Example"
          className="i_mag"
        />

        {/* <img src={Img2} alt="" className="mb-4" />
        <img src={Img3} alt="" className="mb-4" />
        <img src={Img4} alt="" className="mb-4" />
        <img src={Img5} alt="" className="mb-4" /> */}
      </div>
    </div>
  )
}

export default ImgArea
