import React from 'react'
import Img from '../../img/Cover_CircleDiningChair_22.jpg'

function ImgArea() {
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="i_upload ml100">
        <div className="i_btn2 text-center">
          <input type="file" className="file_upload"></input>
          上傳圖片
        </div>
      </div>
      <p className="text-center i_notice ml100">＊可以點選或拖曳上傳圖片</p>
      <div className="i_upload_img ml100">
        <img src={Img} alt="" />
      </div>
    </div>
  )
}

export default ImgArea
