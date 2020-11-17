/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import { FiMinus } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
// import './style/jay.scss'

function CartList(props) {
  const {
    myCart,
    setMyCart,
    showLoading,
    setShowLoading,
    typeofProduct,
    cartamount,
    setCartAmount,
  } = props
  const [tempCart, setTempCart] = useState([])
  const [reload, setReload] = useState(0)

  //拿資料時載入loading
  const loading = <></>
  //從local storage 拿資料放在myCart
  function getCartFromLocalStorage() {
    setShowLoading(true)
    const newCart = localStorage.getItem('cart') || '[]'
    let cartArray = JSON.parse(newCart)
    let putArray = []
    let putArray1 = []
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].category === typeofProduct) {
        putArray.push(cartArray[i])
        console.log('hello')
      }
    }
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].category !== typeofProduct) {
        putArray1.push(cartArray[i])
        console.log('hello')
      }
    }

    // console.log(newCart)
    setMyCart(putArray)
    setTempCart(putArray1)
    // console.log(JSON.parse(newCart))
  }
  //載入時拿local storage資料
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  useEffect(() => {
    getCartFromLocalStorage()
  }, [reload])

  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMyCart(currentCart)
  }

  // const handleAdd = (id) => {
  //   const index = myCart.findIndex((v) => myCart.id === )
  // }
  const handleDelete = (id) => {
    let putArray = tempCart
    const newCart = myCart.filter((item, index) => item.id !== id)
    if (newCart !== []) setMyCart(newCart)
    if (myCart !== []) {
      for (let i = 0; i < newCart.length; i++) {
        putArray.push(newCart[i])
      }
      console.log('myarray', putArray)
    }

    localStorage.setItem('cart', JSON.stringify(putArray))
    const newTempCart = localStorage.getItem('cart') || '[]'
    setTempCart(newTempCart)
    setCartAmount(cartamount + 1)
    setReload(reload + 1)
  }
  const display = (
    <>
      <div className="cartlist">
        <ul>
          {myCart.map((item, i) => {
            if (item.category === typeofProduct) {
              return (
                <li key={item.id}>
                  <div className="listitem">
                    {/* src={require('../../img/' + item.photo)} */}
                    <img src={'http://localhost:3001/img/' + item.img} alt="" />
                    <h6 style={{ left: '500px' }}>{item.id}</h6>
                    <h6 style={{ left: '700px' }}>${item.price}</h6>
                    <div className="listqty">
                      <h6
                        style={{ left: '10px', cursor: 'pointer' }}
                        onClick={() => {
                          if (item.amount === 1) return
                          updateCartToLocalStorage(item, false)
                        }}
                      >
                        <FiMinus />
                      </h6>

                      <h6 style={{ left: '50px' }}>{item.amount}</h6>
                      <h6
                        className="j_add"
                        style={{ left: '80px' }}
                        onClick={() => updateCartToLocalStorage(item)}
                      >
                        <MdAdd />
                      </h6>
                    </div>
                    <h6 style={{ left: '1100px', color: '#C67334' }}>
                      ${item.price * item.amount}
                    </h6>
                    <Link
                      to="#"
                      onClick={() =>
                        window.confirm('確定刪除？')
                          ? handleDelete(item.id)
                          : ''
                      }
                    >
                      <h6 style={{ left: '1220px', fontSize: '20px' }}>
                        <BsTrash />
                      </h6>
                    </Link>
                  </div>
                  <hr />
                </li>
              )
            }
          })}
        </ul>
      </div>
    </>
  )
  return showLoading ? loading : display
  // <>
  //   <div className="cartlist">
  //     {/* <div>{myCart && myCart[0] ? myCart[0].id : ''}</div> */}
  //     {/* <div>{myCart[0] ? myCart[0] : ''}</div> */}
  //     <ul>
  //       <li>
  //         <div className="listitem">
  //           <img src={img1} />
  //           <h6 style={{ left: '30px' }}>歐洲銀行扶手沙發型餐椅</h6>
  //           <h6 style={{ left: '120px' }}>$</h6>
  //           <div className="listqty">
  //             <h6 style={{ left: '10px' }}>
  //               <MdAdd />
  //             </h6>
  //             <h6 style={{ left: '50px' }}>1</h6>
  //             <h6 style={{ left: '80px' }}>
  //               <FiMinus />
  //             </h6>
  //           </div>
  //           <h6 style={{ left: '330px', color: '#C67334' }}>$2500</h6>
  //           <h6 style={{ left: '420px' }}>
  //             <BsTrash />
  //           </h6>
  //         </div>
  //       </li>
  //     </ul>
  //   </div>
  // </>
}
export default CartList
