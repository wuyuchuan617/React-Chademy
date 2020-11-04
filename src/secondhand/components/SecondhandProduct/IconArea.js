import React from 'react'
import Img1 from '../../img/fast.png'
import Img2 from '../../img/car.png'
import Img3 from '../../img/cod.png'
import Img4 from '../../img/phone.png'

const IconArea = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="i_icon_area d-flex flex-wrap justify-content-around">
          <div className="col-lg-3 col-sm-6 col-xs-6  ">
            <div className="i_box">
              <div className="i_box_area car_fix">
                <img src={Img2} alt="" />
              </div>
              <p className="text-center">完全免運費</p>
            </div>
          </div>
          <div className=" col-lg-3 col-sm-6 col-xs-6 ">
            <div className="i_box">
              <div className="i_box_area fast_fix">
                <img src={Img1} alt="" />
              </div>
              <p className="text-center">3天內即可收到</p>
            </div>
          </div>
          <div className=" col-lg-3 col-sm-6 col-xs-6">
            <div className="i_box">
              <div className="i_box_area cod_fix">
                <img src={Img3} alt="" />
              </div>
              <p className="text-center">貨到付款也ok!</p>
            </div>
          </div>

          <div className=" col-lg-3 col-sm-6 col-xs-6">
            <div className="i_box">
              <div className="i_box_area">
                <img src={Img4} alt="" />
              </div>

              <p className="text-center num">
                <a href="tel:02-2345-3689">需要任何幫助？</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconArea
