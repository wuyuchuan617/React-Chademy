/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Finish(props) {
  const { orderNo, setCartAmount, cartamount } = props
  useEffect(() => {
    // localStorage.removeItem('cart')
    setCartAmount(cartamount + 1)
  }, [])

  return (
    <>
      <div className="myprogress">
        <div className="progressbar">
          {' '}
          <div className="layoutcircle">
            <div
              className="defaultcircle"
              style={{ backgroundColor: '#c77334' }}
            ></div>
          </div>
          <div className="layoutcircle">
            <div
              className="defaultcircle"
              style={{ backgroundColor: '#c77334' }}
            ></div>
          </div>
          <div className="layoutcircle">
            <div
              className="defaultcircle"
              style={{ backgroundColor: '#c77334' }}
            ></div>
          </div>
          <div className="activecircle"></div>
        </div>
        <div className="progresstitle">
          <div className="titlecenter1">
            <h5 style={{ color: '#707070' }}>購物車</h5>
          </div>
          <div className="titlecenter2">
            <h5 style={{ color: '#707070' }}>物流資訊</h5>
          </div>
          <div className="titlecenter3">
            <h5 style={{ color: '#707070' }}>付款資訊</h5>
          </div>
          <div className="titlecenter4">
            <h5>成功付款</h5>
          </div>
        </div>
      </div>

      <div className="j_showbox">
        <img
          alt=""
          src="http://localhost:3001/img/check-mark01.svg"
          style={{ width: '200px', height: '200px' }}
        />
        <h2 style={{ marginTop: '20px' }}>訂單成立</h2>
        <br />
        <h3>
          訂單編號:<span style={{ color: '#c77334' }}>{orderNo}</span>
        </h3>
        <h3>我們將為您儘快出貨</h3>

        <div className="j_wrap">
          <Link to="/productlist" className="j_btn6">
            <div className="j_btn6">繼續購物</div>
          </Link>
          <Link to="/member-center/myorder" className="j_btn6">
            <div className="j_btn6">查看訂單</div>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Finish
