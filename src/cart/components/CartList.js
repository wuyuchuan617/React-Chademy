import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
import { MdAdd } from 'react-icons/md'
import { FiMinus } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
// import './style/jay.scss'

function CartList(props) {
  const [myCart, setMyCart] = useState([])
  const [showLoading, setShowLoading] = useState(false)
  const [myCartDisplay, setMyCartDisplay] = useState([])

  //拿資料時載入loading
  const loading = <></>
  //從local storage 拿資料放在myCart
  function getCartFromLocalStorage() {
    setShowLoading(true)
    const newCart = localStorage.getItem('cart') || '[]'
    // console.log(newCart)
    setMyCart(JSON.parse(newCart))
    // console.log(JSON.parse(newCart))
  }
  //載入時拿local storage資料
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 500)
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
  const display = (
    <>
      <div className="cartlist">
        <ul>
          {myCartDisplay.map((item, i) => {
            return (
              <li>
                <div className="listitem">
                  <img src={item.img} />
                  <h6 style={{ left: '30px' }}>{item.id}</h6>
                  <h6 style={{ left: '120px' }}>${item.price}</h6>
                  <div className="listqty">
                    <h6
                      style={{ left: '10px' }}
                      onClick={() => updateCartToLocalStorage(item)}
                    >
                      <MdAdd />
                    </h6>
                    <h6 style={{ left: '50px' }}>{item.amount}</h6>
                    <h6
                      style={{ left: '80px' }}
                      onClick={() => updateCartToLocalStorage(item, false)}
                    >
                      <FiMinus />
                    </h6>
                  </div>
                  <h6 style={{ left: '330px', color: '#C67334' }}>$2500</h6>
                  <Link to="#" onClick={() => handleDelete(item.id)}>
                    <h6 style={{ left: '420px' }}>
                      <BsTrash />
                    </h6>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
  // const handleAdd = (id) => {
  //   const index = myCart.findIndex((v) => myCart.id === )
  // }
  const handleDelete = (id) => {
    const newCart = myCart.filter((item, index) => item.id !== id)
    setMyCart(newCart)
  }
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
