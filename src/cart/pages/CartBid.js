import React, { useState, useEffect } from 'react'
import CartList from '../components/CartList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import './style/jay.scss'

function CartBid(props) {
  const {
    myCart,
    setMyCart,
    showLoading,
    setShowLoading,
    myCartDisplay,
    setMyCartDisplay,
  } = props
  // const [myCart, setMyCart] = useState([])
  // const [showLoading, setShowLoading] = useState(false)
  // const [myCartDisplay, setMyCartDisplay] = useState([])

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
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
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
        <Link to="/cartproduct" className="defaultlable">
          產品
        </Link>
        <Link to="/cartbid" className="activelable">
          競標
        </Link>
        <Link to="/cartsecondhand" className="defaultlable">
          中古商品
        </Link>
        <Link to="/cartclass" className="defaultlable">
          體驗課程
        </Link>
      </div>
      <hr className="jhr" />
      <div className="wrap">
        <h6 style={{ left: '780px' }}>單價</h6>
        <h6 style={{ left: '940px' }}>數量</h6>
        <h6 style={{ left: '1100px' }}>總計</h6>
        <h6 style={{ left: '1210px' }}>操作</h6>
      </div>
      <CartList
        myCart={myCart}
        setMyCart={setMyCart}
        showLoading={showLoading}
        setShowLoading={setShowLoading}
        myCartDisplay={myCartDisplay}
        setMyCartDisplay={setMyCartDisplay}
      />
      <hr className="jhr" />
      <div className="submit">
        <div
          style={{
            display: 'flex',
            letterSpacing: '3px',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}
        >
          <h6>小計(共3項)</h6>
          <h6 style={{ color: '#C67334' }}>${sum(myCart)}</h6>
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
            <Link className="j_btn2" to="#">
              確定
            </Link>
          </div>
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

export default CartBid
