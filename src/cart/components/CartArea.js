/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
// import './style/jay.scss'

function CartArea(props) {
  const [cartList, setCartList] = useState([])
  const {
    myCart,
    setShowCart,
    showCart,
    resetShow,
    cartamount,
    setTypeofProduct,
  } = props
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'
    // console.log(newCart)
    setCartList(JSON.parse(newCart))
    // console.log(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  useEffect(() => {
    getCartFromLocalStorage()
  }, [cartamount])

  return (
    <>
      <div
        className={showCart ? 'colsecartdiv' : ''}
        onClick={() => setShowCart(false)}
      ></div>
      <div className={showCart ? 'showcartbox' : 'closecartbox'}>
        <div className="j_justify">
          <h4 style={{ marginTop: '15px', marginLeft: '25px' }}>購物車</h4>
          <hr style={{ marginBottom: '8px' }} />
        </div>

        <div className="containercart">
          <ul style={{ marginTop: '70px' }}>
            {cartList.map((item) => {
              return (
                <li>
                  <div
                    style={{
                      width: '500px',
                      height: '130px',
                      display: 'flex',
                      // marginTop: '5px',
                      // marginBottom: '5px',
                      margin: '25px auto 25px auto',
                    }}
                  >
                    <div
                      style={{
                        width: '250px',
                        height: '130px',
                        padding: '5px',
                      }}
                    >
                      <img
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src={'http://localhost:3001/img/' + item.img}
                      />
                    </div>

                    <div
                      style={{
                        width: '300px',
                        height: '130px',
                        marginLeft: '5px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                        }}
                      >
                        <h5>{item.id}</h5>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '15px',
                        }}
                      >
                        <h6>價格</h6>
                        <h6 style={{ position: 'relative', right: '25px' }}>
                          ${item.price}
                        </h6>
                      </div>

                      <div
                        style={{
                          position: 'relative',
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '0px',
                        }}
                      >
                        <h6>數量</h6>
                        <h6 style={{ position: 'relative', right: '25px' }}>
                          {item.amount}
                        </h6>
                      </div>
                      <div
                        style={{
                          position: 'relative',
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '0px',
                        }}
                      >
                        <h6>小計</h6>
                        <h6
                          style={{
                            position: 'relative',
                            right: '25px',
                            color: '#C67334',
                          }}
                        >
                          ${item.price * item.amount}
                        </h6>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <Link
          to="/cartproduct"
          className="btn1"
          onClick={() => {
            setShowCart(false)
            setTypeofProduct(1)
          }}
        >
          <h5>前往購物車</h5>
        </Link>
      </div>
    </>
  )
}

export default CartArea
