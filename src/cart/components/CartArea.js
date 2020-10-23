import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import './style/jay.scss'

function CartArea(props) {
  return (
    <>
      <div
        className={props.showCart ? 'colsecartdiv' : ''}
        onClick={() => props.setShowCart(false)}
      ></div>
      <div className={props.showCart ? 'showcartbox' : 'closecartbox'}>
        <Link
          to="/cartproduct"
          className="btn1"
          onClick={() => props.setShowCart(false)}
        >
          前往購物車
        </Link>
      </div>
    </>
  )
}

export default CartArea
