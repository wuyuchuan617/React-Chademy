import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
import { MdAdd } from 'react-icons/md'
import { FiMinus } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
// import './style/jay.scss'

function CartList(props) {
  const [myCart, setMycart] = useState([])
  const [showLoading, setShowLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  //拿資料時載入loading
  const loading = <></>
  //從local storage 拿資料放在myCart
  function getCartFromLocalStorage() {
    setShowLoading(true)
    const newCart = localStorage.getItem('cart') || '[]'
    console.log(newCart)
    setMycart(JSON.parse(newCart))
    console.log(JSON.parse(newCart))
  }
  //載入時拿local storage資料
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 500)
  }, [myCart])
  const display = (
    <>
      <div className="cartlist">
        <ul>
          {myCart.map((v, i) => {
            return (
              <li>
                <div className="listitem">
                  <img src={v.img} />
                  <h6 style={{ left: '30px' }}>{v.id}</h6>
                  <h6 style={{ left: '120px' }}>${v.price}</h6>
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
                  <Link to="#" onClick={() => handleDelete(v.id)}>
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
  const handleDelete = (id) => {
    const newCart = myCart.filter((item, index) => item.id !== id)
    setMycart(newCart)
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
