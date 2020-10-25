import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
// import './style/jay.scss'

function CartList(props) {
  return (
    <>
      <div className="cartlist">
        <ul>
          <li>
            <div className="listitem">
              <img src={img1} />
              <h6>歐洲銀行扶手沙發型餐椅</h6>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CartList
