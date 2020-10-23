import React from 'react'
// import './style/jay.scss'

function CartProduct(props) {
  return (
    <>
      <div className="myprogress">
        <div className="progressbar">
          <div className="activecircle"></div>
          <div className="layoutcircle">
            <div className="defaultcircle"></div>
          </div>
          <div className="layoutcircle">
            <div className="defaultcircle"></div>
          </div>
          <div className="layoutcircle">
            <div className="defaultcircle"></div>
          </div>
        </div>
        <div className="progresstitle">
          <div className="titlecenter1">
            <h4>購物車</h4>
          </div>
          <div className="titlecenter2">
            <h4>物流資訊</h4>
          </div>
          <div className="titlecenter3">
            <h4>付款資訊</h4>
          </div>
          <div className="titlecenter4">
            <h4>成功付款</h4>
          </div>
        </div>
      </div>
      <div className="lablebox">
        <div className="activelable">產品</div>
        <div className="defaultlable">競標</div>
        <div className="defaultlable">中古商品</div>
        <div className="defaultlable">體驗課程</div>
      </div>
    </>
  )
}

export default CartProduct
