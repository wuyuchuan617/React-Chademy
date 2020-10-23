import React from 'react'
// import './style/jay.scss'

function CartArea(props) {
  return (
    <>
      <div
        className={props.showCart ? 'colsecartdiv' : ''}
        onClick={() => props.setShowCart(false)}
      ></div>
      <div className={props.showCart ? 'showcartbox' : 'closecartbox'}>
        <button className="btn1">前往購物車</button>
      </div>
    </>
  )
}

export default CartArea
