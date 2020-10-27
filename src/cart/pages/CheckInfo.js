import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
// import './style/jay.scss'

function CheckInfo(props) {
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
      <hr />
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

export default CheckInfo
