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
            <h5>購物車</h5>
          </div>
          <div className="titlecenter2">
            <h5>物流資訊</h5>
          </div>
          <div className="titlecenter3">
            <h5>付款資訊</h5>
          </div>
          <div className="titlecenter4">
            <h5>成功付款</h5>
          </div>
        </div>
      </div>
      <div className="lablebox">
        <div className="activelable">產品</div>
        <div className="defaultlable">競標</div>
        <div className="defaultlable">中古商品</div>
        <div className="defaultlable">體驗課程</div>
      </div>
      <hr />
      <div className="wrap">
        <div className="layoutdiv1">
          <h6>單價</h6>
        </div>

        <h6>數量</h6>
        <h6>總計</h6>
        <h6>操作</h6>
      </div>
      <hr />
    </>
  )
}

export default CartProduct
