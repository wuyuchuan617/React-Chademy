import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
import { MdAdd } from 'react-icons/md'
import { FiMinus } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
// import './style/jay.scss'

function CartList(props) {
  const [myCart, setMycart] = useState()

  const [mycartDisplay, setMycartDisplay] = useState([])
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'
    console.log(newCart)
    // console.log(Array.isArray(newCart))
    setMycart(JSON.parse(newCart))
    console.log(JSON.parse(newCart))
    //console.log(myCart)
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  // let newMycartDisplay = []
  // for (let i = 0; i < mycart.length; i++) {
  //   //尋找mycartDisplay中有沒有此mycart[i].id
  //   //有找到會返回陣列成員的索引值
  //   //沒找到會返回-1
  //   const index = newMycartDisplay.findIndex(
  //     (value) => value.id === mycart[i].id
  //   )
  //   //有的話就數量+1
  //   if (index !== -1) {
  //     //每次只有加1個數量
  //     //newMycartDisplay[index].amount++
  //     //假設是加數量的
  //     newMycartDisplay[index].amount += mycart[i].amount
  //   } else {
  //     //沒有的話就把項目加入，數量為1
  //     const newItem = { ...mycart[i] }
  //     newMycartDisplay = [...newMycartDisplay, newItem]
  //   }
  // }
  // console.log(newMycartDisplay)
  // setMycartDisplay(newMycartDisplay)
  return (
    <>
      <div className="cartlist">
        <div>{myCart && myCart[0] ? myCart[0].id : ''}</div>
        {/* <div>{myCart[0] ? myCart[0] : ''}</div> */}
        <ul>
          {/* {myCart.map(() => {
            return (
              <li>
                <div className="listitem">
                  <img src={img1} />
                  <h6 style={{ left: '30px' }}>歐洲銀行扶手沙發型餐椅</h6>
                  <h6 style={{ left: '120px' }}>$</h6>
                  <div className="listqty">
                    <h6 style={{ left: '10px' }}>
                      <MdAdd />
                    </h6>
                    <h6 style={{ left: '50px' }}>1</h6>
                    <h6 style={{ left: '80px' }}>
                      <FiMinus />
                    </h6>
                  </div>
                  <h6 style={{ left: '330px', color: '#C67334' }}>$2500</h6>
                  <h6 style={{ left: '420px' }}>
                    <BsTrash />
                  </h6>
                </div>
              </li>
            )
          })} */}
          <li>
            <div className="listitem">
              <img src={img1} />
              <h6 style={{ left: '30px' }}>歐洲銀行扶手沙發型餐椅</h6>
              <h6 style={{ left: '120px' }}>$</h6>
              <div className="listqty">
                <h6 style={{ left: '10px' }}>
                  <MdAdd />
                </h6>
                <h6 style={{ left: '50px' }}>1</h6>
                <h6 style={{ left: '80px' }}>
                  <FiMinus />
                </h6>
              </div>
              <h6 style={{ left: '330px', color: '#C67334' }}>$2500</h6>
              <h6 style={{ left: '420px' }}>
                <BsTrash />
              </h6>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CartList
