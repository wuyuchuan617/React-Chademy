import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
import SameAdress from '../components/SameAdress'
import { countries, townships, postcodes } from '../components/Data'
// import './style/jay.scss'

function DeliveryInfo(props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState(-1)
  const [area, setArea] = useState(-1)
  const [adress, setAdress] = useState('')
  const [showadress, setShowAdress] = useState(false)
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
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="手機"
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          style={{
            width: '290px',
            height: '40px',
            marginBottom: '30px',
            marginRight: '20px',
          }}
          value={city}
          onChange={(e) => {
            setCity(+e.target.value)
            setArea(-1)
          }}
        >
          <option value={-1}>城市</option>
          {countries.map((v, i) => (
            <option key={i} value={i}>
              {v}
            </option>
          ))}
        </select>
        <select
          style={{
            width: '290px',
            height: '40px',
            marginBottom: '30px',
          }}
          onChange={(e) => {
            setArea(+e.target.value)
          }}
        >
          <option value={-1}>區域</option>
          {city > -1 &&
            townships[city].map((v, i) => (
              <option key={i} value={i}>
                {v}
              </option>
            ))}
        </select>
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginBottom: '30px',
          }}
          placeholder="地址"
          onChange={(e) => setAdress(e.target.value)}
        />
        <label>
          <h5>發票地址</h5>
        </label>
        <input
          type="checkbox"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
          onClick={(e) => {
            e.target.checked ? setShowAdress(true) : setShowAdress(false)
          }}
        />
        同寄送地址
        <input
          type="checkbox"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
        />
        手機載具
        <input
          type="checkbox"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
        />
        捐贈發票
        {showadress ? (
          <SameAdress
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            city={city}
            setCity={setCity}
            area={area}
            setArea={setArea}
            adress={adress}
            setAdress={setAdress}
          />
        ) : (
          <SameAdress />
        )}
        <Link to="/checkinfo" className="btn4">
          <div className="btn4">下一步</div>
        </Link>
      </div>
    </>
  )
}

export default DeliveryInfo
