import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { countries, townships, postcodes } from '../components/Data'
// import './style/jay.scss'

function CheckInfo(props) {
  const [showCreditCard, setShowCreditCard] = useState(true)
  const [showATM, setShowATM] = useState(false)
  const [showIns, setShowIns] = useState(false)
  const { myCart, name, phone, city, area, adress } = props
  const city2 = city === -1 ? 0 : city
  const area2 = area === -1 ? 0 : area
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDay()
  const newcity = countries[city2]
  const newarea = townships[city2][area2]
  const submitData = {
    PO_NO: `PO${year}${month}${day}`,
    member: name,
    qualify: 1,
    delivery_adress: `${newcity}${newarea}${adress}`,
    invoice_adress: `${newcity}${newarea}${adress}`,
    order_date: `${year}-${month}-${day}`,
    order_status: 1,
    delivery_status: 1,
    point: 20,
    total: 200,
  }
  async function updateTotalToServer(value) {
    const url = 'http://localhost:3001/j_cart/addorder'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(submitData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
  }
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
      <hr className="jhr" />
      <div className="checkinfo">
        <div className="creditcard"></div>
        <div className="inputcheckinfo">
          <div style={{ display: 'flex' }}>
            <div
              className={showCreditCard ? 'activelable' : 'defaultlable'}
              onClick={() => {
                setShowCreditCard(true)
                setShowATM(false)
                setShowIns(false)
              }}
            >
              <h6>信用卡</h6>
            </div>
            <div
              className={showATM ? 'activelable' : 'defaultlable'}
              onClick={() => {
                setShowCreditCard(false)
                setShowATM(true)
                setShowIns(false)
              }}
            >
              <h6>ATM轉帳</h6>
            </div>
            <div
              className={showIns ? 'activelable' : 'defaultlable'}
              onClick={() => {
                setShowCreditCard(false)
                setShowATM(false)
                setShowIns(true)
              }}
            >
              <h6>分期付款</h6>
            </div>
          </div>
          <input
            type="text"
            style={{
              marginTop: '30px',
            }}
            placeholder="卡號"
          />
          <input
            type="text"
            style={{
              marginTop: '30px',
            }}
            placeholder="持卡人"
          />
          <input
            type="text"
            style={{
              marginTop: '30px',
            }}
            placeholder="到期日"
          />
          <input
            type="text"
            style={{
              marginTop: '30px',
            }}
            placeholder="安全碼"
          />
          <Link to="#" onClick={() => updateTotalToServer()}>
            <div className="j_btn5">完成付款</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CheckInfo
