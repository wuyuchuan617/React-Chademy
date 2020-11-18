/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import CartList from '../components/CartList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
import { Form, Select } from 'antd'
// import './style/jay.scss'

function CartFund(props) {
  const { typeofProduct, setTypeofProduct } = props
  const [myDiscount, setMyDiscount] = useState(0)
  const [inputDiscount, setInputDiscount] = useState('')
  const [deliveryCharge, setDeliveryCharge] = useState(0)
  const {
    subtotal,
    setSubtoal,
    totalPrice,
    setTotalPrice,
    myCart,
    setMyCart,
    showLoading,
    setShowLoading,
    myCartDisplay,
    setMyCartDisplay,
    cartamount,
    setCartAmount,
  } = props
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    setSubtoal(total)
    return total
  }
  useEffect(() => {
    setTotalPrice(subtotal + myDiscount + deliveryCharge)
    setTypeofProduct(3)
  }, [])
  // const [myCart, setMyCart] = useState([])
  // const [showLoading, setShowLoading] = useState(false)
  // const [myCartDisplay, setMyCartDisplay] = useState([])
  useEffect(() => {
    setShowLoading(false)
    let newMyCartDisplay = []

    //尋找myCartDisplay
    for (let i = 0; i < myCart.length; i++) {
      //尋找myCartDisplay中有沒有此myCart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMyCartDisplay.findIndex((v) => v.id === myCart[i].id)
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newmyCartDisplay[index].amount++
        //假設是加數量的
        newMyCartDisplay[index].amount += myCart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...myCart[i] }
        newMyCartDisplay = [...newMyCartDisplay, newItem]
      }
    }
    console.log(newMyCartDisplay)
    setMyCartDisplay(newMyCartDisplay)
  }, [myCart])

  useEffect(() => {
    setTotalPrice(subtotal + myDiscount + deliveryCharge)
  }, [subtotal, myDiscount, deliveryCharge])
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
            <h5 style={{ color: '#707070' }}>物流資訊</h5>
          </div>
          <div className="titlecenter3">
            <h5 style={{ color: '#707070' }}>付款資訊</h5>
          </div>
          <div className="titlecenter4">
            <h5 style={{ color: '#707070' }}>成功付款</h5>
          </div>
        </div>
      </div>
      <div className="lablebox">
        <Link
          to="/cartproduct"
          className="defaultlable"
          onClick={() => setTypeofProduct(1)}
        >
          產品
        </Link>
        <Link
          to="/cartbid"
          className="defaultlable"
          onClick={() => setTypeofProduct(4)}
        >
          競標
        </Link>
        <Link
          to="/cartsecondhand"
          className="defaultlable"
          onClick={() => setTypeofProduct(5)}
        >
          中古商品
        </Link>
        <Link
          to="/cartclass"
          className="defaultlable"
          onClick={() => setTypeofProduct(2)}
        >
          體驗課程
        </Link>
        <Link
          to="/cartfund"
          className="activelable"
          onClick={() => setTypeofProduct(3)}
        >
          募資
        </Link>
      </div>
      <hr className="jhr" />
      <div className="wrap">
        <h6 style={{ left: '240px' }}>商品圖片</h6>
        <h6 style={{ left: '500px' }}>商品名稱</h6>
        <h6 style={{ left: '700px' }}>單價</h6>
        <h6 style={{ left: '900px' }}>數量</h6>
        <h6 style={{ left: '1100px' }}>總計</h6>
        <h6 style={{ left: '1210px' }}>操作</h6>
      </div>
      <hr className="jhr" />
      <CartList
        myCart={myCart}
        setMyCart={setMyCart}
        showLoading={showLoading}
        setShowLoading={setShowLoading}
        myCartDisplay={myCartDisplay}
        setMyCartDisplay={setMyCartDisplay}
        typeofProduct={typeofProduct}
        setTypeofProduct={setTypeofProduct}
        cartamount={cartamount}
        setCartAmount={setCartAmount}
      />
      <div className="submit">
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}
        >
          <h6>小計(共{myCart.length}項)</h6>
          <h6 style={{ color: '#C67334' }}>${sum(myCart)}</h6>
        </div>
        <label for="discount">
          <h6>折扣券</h6>
        </label>
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
            <input
              type="text"
              name="discount"
              id="discount"
              onChange={(e) => setInputDiscount(e.target.value)}
            ></input>
            <div
              className="j_btn2"
              onClick={() => {
                if (inputDiscount === 'CHADEMY10') {
                  setMyDiscount(-subtotal * 0.1)
                }
              }}
            >
              <h6>確定</h6>
            </div>
          </div>
          <h6 style={{ color: '#C67334' }}>${myDiscount}</h6>
        </div>
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}
        >
          <Select
            placeholder="寄送方式"
            style={{
              //   fontSize: '18px',
              width: '275px',
              marginTop: '0',
              //   height: '40px',
            }}
            onChange={() => {
              if (deliveryCharge === 0) {
                setDeliveryCharge(500)
              } else {
                setDeliveryCharge(0)
              }
            }}
          >
            <Select.Option onClick={() => setDeliveryCharge(0)}>
              到店取貨(Free)
            </Select.Option>
            <Select.Option onClick={() => setDeliveryCharge(500)}>
              宅配到府(+$500)
            </Select.Option>
          </Select>
          <h6 style={{ color: '#C67334', marginTop: '35px' }}>
            ${deliveryCharge}
          </h6>
        </div>

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
              marginTop: '40px',
              marginBottom: '30px',
              backgroundColor: 'black',
              width: '1200px',
              height: '1px',
            }}
          ></div>
        </div>
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
          }}
        >
          <div></div>
          <h6 className="jtotal">${totalPrice}</h6>
        </div>
        <Link to="deliveryinfo" className="btn3">
          <h5>結帳</h5>
        </Link>
      </div>
    </>
  )
}

export default CartFund
