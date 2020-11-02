import React from 'react'
import popularImg from '../images/777.jpg'

function ProductEight(props) {
  return (
    <>
      <div className="container related-product">
        <div className="row justify-content-center title">
          <h3>猜你喜歡</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>西班牙馬貝拉-野獸派酒吧椅</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>山毛櫸曲木扶手椅</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>Gastone Rinaldi 金屬牛皮椅</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>Casala 玫瑰木高背餐椅</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductEight
