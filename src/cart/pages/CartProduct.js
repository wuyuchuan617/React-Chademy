import React, { useState } from 'react'
import CartList from '../components/CartList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
// import './style/jay.scss'

function CartProduct(props) {
  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const handleShow = () => setShow(true)
  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))

    // 設定資料
    setMycart(newCart)
    setProductName(value.name)
    handleShow()
  }
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
            <h5>物流資訊</h5>
          </div>
          <div className="titlecenter3">
            <h5>付款資訊</h5>
          </div>
          <div className="titlecenter4">
            <h5>成功付款</h5>
          </div>
        </div>
      </div>
      <div className="lablebox">
        <Link to="/cartproduct" className="activelable">
          產品
        </Link>
        <Link to="/cartbid" className="defaultlable">
          競標
        </Link>
        <Link to="/cartsecondhand" className="defaultlable">
          中古商品
        </Link>
        <Link to="/cartclass" className="defaultlable">
          體驗課程
        </Link>
      </div>
      <hr style={{ margin: '30px auto 30px auto' }} />
      <div className="wrap">
        <h6 style={{ left: '780px' }}>單價</h6>
        <h6 style={{ left: '940px' }}>數量</h6>
        <h6 style={{ left: '1100px' }}>總計</h6>
        <h6 style={{ left: '1210px' }}>操作</h6>
      </div>
      <CartList />
      <hr style={{ margin: '30px auto 30px auto' }} />
      <div className="jsubmit">
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}
        >
          <h6>小計(共3項)</h6>
          <h6 style={{ color: '#C67334' }}>$ 75,000</h6>
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
            <input type="text" name="discount" id="discount"></input>
            <Link
              className="btn2"
              to="#"
              onClick={() =>
                updateCartToLocalStorage({
                  img: img1,
                  id: '歐洲銀行扶手沙發型餐椅',
                  amount: 1,
                  price: 25000,
                })
              }
            >
              確定
            </Link>
          </div>
          <h6 style={{ color: '#C67334' }}>$0</h6>
        </div>
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
          }}
        >
          <h6>寄送方式</h6>
          <h6 style={{ color: '#C67334' }}>$0</h6>
        </div>

        <select
          style={{
            fontSize: '18px',
            width: '275px',
            height: '40px',
          }}
        >
          <option>到店取貨(Free)</option>
          <option>宅配到府(+$500)</option>
        </select>
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
              backgroundColor: 'black',
              width: '250px',
              height: '1px',
            }}
          ></div>
        </div>
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            // marginTop: '30px',
          }}
        >
          <div></div>
          <h6 style={{ color: '#C67334' }}>$</h6>
        </div>
        <Link to="deliveryinfo" className="btn3">
          買單
        </Link>
      </div>
    </>
  )
}

export default CartProduct
