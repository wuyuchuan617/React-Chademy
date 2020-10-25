import React from 'react'
import CartList from '../components/CartList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
        <Link to="/cartproduct" className="activelable">
          產品
        </Link>
        <Link to="/cartproduct" className="defaultlable">
          競標
        </Link>
        <Link to="/cartproduct" className="defaultlable">
          中古商品
        </Link>
        <Link to="/cartproduct" className="defaultlable">
          體驗課程
        </Link>
      </div>
      <hr />
      <div className="wrap">
        <h6 style={{ left: '780px' }}>單價</h6>
        <h6 style={{ left: '940px' }}>數量</h6>
        <h6 style={{ left: '1100px' }}>總計</h6>
        <h6 style={{ left: '1210px' }}>操作</h6>
      </div>
      <CartList />
      <hr />
    </>
  )
}

export default CartProduct
