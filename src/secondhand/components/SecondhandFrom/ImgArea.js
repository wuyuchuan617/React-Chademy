import React from 'react'
import Img from '../../img/Cover_CircleDiningChair_22.jpg'

function ImgArea() {
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="i_upload">
        <div className="i_btn2 text-center">上傳照片</div>
      </div>
      <p className="text-center i_notice">＊可以點選或拖曳上傳圖片</p>
      <div className="i_upload_img">
        <img src={Img} alt="" />
      </div>
    </div>
  )
}

export default ImgArea
