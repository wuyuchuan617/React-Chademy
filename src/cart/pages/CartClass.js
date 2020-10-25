import React from 'react'
import CartList from '../components/CartList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import './style/jay.scss'

function CartClass(props) {
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
        <Link to="/cartproduct" className="defaultlable">
          產品
        </Link>
        <Link to="/cartbid" className="defaultlable">
          競標
        </Link>
        <Link to="/cartsecondhand" className="defaultlable">
          中古商品
        </Link>
        <Link to="/cartclass" className="activelable">
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
      <div className="submit">
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}
        >
          <h6>小計(共3項)</h6>
          <h6 style={{ color: '#C67334' }}>$ 75,000</h6>
        </div>
        <h6>折扣券</h6>
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              display: 'flex',
              letterSpacing: '3px',
            }}
          >
            <input type="text"></input>
            <Link className="btn2" to="#">
              確定
            </Link>
          </div>
          <h6 style={{ color: '#C67334' }}>$0</h6>
        </div>

        <select
          style={{
            fontSize: '18px',
            width: '275px',
            height: '40px',
          }}
        >
          <option>到店取貨(Free)</option>
          <option>宅配到府(+$500)</option>
        </select>
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            marginTop: '30px',
          }}
        >
          <div></div>
          <div
            style={{
              backgroundColor: 'black',
              width: '250px',
              height: '1px',
            }}
          ></div>
        </div>
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            // marginTop: '30px',
          }}
        >
          <div></div>
          <h6 style={{ color: '#C67334' }}>$</h6>
        </div>
        <Link to="#" className="btn3">
          買單
        </Link>
      </div>
    </>
  )
}

export default CartClass
