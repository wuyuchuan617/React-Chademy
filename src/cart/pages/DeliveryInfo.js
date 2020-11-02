import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
// import './style/jay.scss'

function DeliveryInfo(props) {
  return (
    <>
      <div className="myprogress">
        <div className="progressbar">
          {' '}
          <div className="layoutcircle">
            <div
              className="defaultcircle"
              style={{ backgroundColor: '#436464' }}
            ></div>
          </div>
          <div className="activecircle"></div>
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
      <hr className="jhr" />
      <div className="wrap">
        <h6 style={{ left: '780px' }}>單價</h6>
        <h6 style={{ left: '940px' }}>數量</h6>
        <h6 style={{ left: '1100px' }}>總計</h6>
      </div>
      <div className="cartlist">
        <ul>
          <li>
            <div className="listitem">
              <img src={img1} />
              <h6 style={{ left: '30px' }}>歐洲銀行扶手沙發型餐椅</h6>
              <h6 style={{ left: '120px' }}>$</h6>
              <h6 style={{ left: '330px' }}>1</h6>
              <h6 style={{ left: '450px', color: '#C67334' }}>$2500</h6>
            </div>
          </li>
          <li>
            <div className="listitem">
              <img src={img1} />
              <h6 style={{ left: '30px' }}>歐洲銀行扶手沙發型餐椅</h6>
              <h6 style={{ left: '120px' }}>$</h6>
              <h6 style={{ left: '330px' }}>1</h6>
              <h6 style={{ left: '450px', color: '#C67334' }}>$2500</h6>
            </div>
          </li>
        </ul>
      </div>
      <hr className="jhr" />
      <div className="deliveryform">
        <label>
          <h5>寄送地址</h5>
        </label>
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="姓名"
        />
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="手機"
        />
        <select
          style={{
            width: '290px',
            height: '40px',
            marginBottom: '30px',
            marginRight: '20px',
          }}
        >
          <option>城市</option>
        </select>
        <select
          style={{
            width: '290px',
            height: '40px',
            marginBottom: '30px',
          }}
        >
          <option>區域</option>
        </select>
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="地址"
        />
        <label>
          <h5>發票地址</h5>
        </label>
        <input
          type="radio"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
        />
        同寄送地址
        <input
          type="radio"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
        />
        手機載具
        <input
          type="radio"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
        />
        捐贈發票
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="姓名"
        />
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="手機"
        />
        <select
          style={{
            width: '290px',
            height: '40px',
            marginBottom: '30px',
            marginRight: '20px',
          }}
        >
          <option>城市</option>
        </select>
        <select
          style={{
            width: '290px',
            height: '40px',
            marginBottom: '30px',
          }}
        >
          <option>區域</option>
        </select>
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="地址"
        />
        <Link to="/checkinfo" className="btn4">
          <div className="btn4">下一步</div>
        </Link>
      </div>
    </>
  )
}

export default DeliveryInfo
