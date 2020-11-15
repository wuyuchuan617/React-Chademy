/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SameAdress from '../components/SameAdress'
import DefaultAddress from '../components/DefualtAddress'
import PhoneDrive from '../components/PhoneDrive'

import { countries, townships } from '../components/Data'
import Donated from '../components/Donated'
// import './style/jay.scss'

function DeliveryInfo(props) {
  const {
    name,
    setName,
    phone,
    setPhone,
    city,
    setCity,
    area,
    setArea,
    adress,
    setAdress,
  } = props
  const [showadress, setShowAdress] = useState(false)
  const [phoneDrive, setPhoneDrive] = useState(false)
  const [donated, setDonaeted] = useState(false)
  const [defaultform, setDefaultForm] = useState(true)
  const [checkName, setCheckName] = useState(false)

  function getNameFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .name

    setName(newMember)
    console.log(newMember)
  }
  useEffect(() => {
    getNameFromLocalStorage()
  }, [])
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
      <div className="deliveryform">
        <label>
          <h5>寄送地址</h5>
        </label>
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
          }}
          placeholder="姓名"
          required
          onChange={(e) => {
            // setName(e.target.value)
            e.target.value ? setCheckName(false) : setCheckName(true)
          }}
        />
        {checkName ? <small>不可空白</small> : ''}
        <input
          type="text"
          style={{
            width: '600px',
            height: '40px',
            marginTop: '30px',
          }}
          placeholder="手機"
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        />
        <select
          style={{
            width: '290px',
            height: '40px',
            marginTop: '30px',
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
            marginTop: '30px',
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
            marginTop: '30px',
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
            if (e.target.checked) {
              setShowAdress(true)
              setPhoneDrive(false)
              setDonaeted(false)
              setDefaultForm(false)
            } else {
              setShowAdress(false)
              setDefaultForm(true)
            }
          }}
          checked={showadress}
        />
        同寄送地址
        <input
          type="radio"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
          checked={phoneDrive}
          onClick={(e) => {
            if (e.target.checked) {
              setShowAdress(false)
              setPhoneDrive(true)
              setDonaeted(false)
              setDefaultForm(false)
            }
          }}
        />
        手機載具
        <input
          type="radio"
          name="sameabove"
          style={{
            marginLeft: '10px',
          }}
          checked={donated}
          onClick={(e) => {
            if (e.target.checked) {
              setShowAdress(false)
              setPhoneDrive(false)
              setDonaeted(true)
              setDefaultForm(false)
            }
          }}
        />
        捐贈發票
        {defaultform ? <DefaultAddress /> : ''}
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
          ''
        )}
        {phoneDrive ? <PhoneDrive /> : ''}
        {donated ? <Donated /> : ''}
        <Link to="/checkinfo" className="btn4">
          <div className="btn4">下一步</div>
        </Link>
      </div>
    </>
  )
}

export default DeliveryInfo
