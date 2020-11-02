import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import './style/jay.scss'

function CheckInfo(props) {
  const [showCreditCard, setShowCreditCard] = useState(true)
  const [showATM, setShowATM] = useState(false)
  const [showIns, setShowIns] = useState(false)
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
        </div>
      </div>
    </>
  )
}

export default CheckInfo
