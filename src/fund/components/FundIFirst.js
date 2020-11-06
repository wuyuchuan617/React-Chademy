import React, { useState, useEffect } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
// import ProductModal from '../components/ProductModal'

import { withRouter, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FundModal from '../components/FundModal'
import '../styles/FundItem.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ProgressE from './ProgressE'
import small1 from '../images/dt2.jpeg'
import small2 from '../images/dt3.jpeg'
import small3 from '../images/dt4-1.jpeg'

function FundIFirst(props) {
  const { item, sid, cartamount, setCartAmount } = props

  const isLogged = useSelector((state) => state.user.logged)

  const [myCart, setMyCart] = useState([])
  const [heart, setHeart] = useState(false)
  const [heartItem, setHeartItem] = useState({})
  const [visible, setVisible] = useState(false)

  const [photo, setPhoto] = useState(`http://localhost:3001/img/${item.e_pic}`)

  useEffect(() => {
    setPhoto(`http://localhost:3001/img/${item.e_pic}`)
  }, [item])

  const heartFill = {
    color: '#C77334',
  }

  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      currentCart[index].amount++
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMyCart(currentCart)
  }

  async function getHeartFromServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_fund/heart/' + item.e_proname

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    if (data.length > 0) {
      setHeart(true)
    }
  }
  async function updateTotalToServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_fund/addheart'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(heartItem),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data.success)
    setHeart(data.success)
  }

  async function deleteHeartToServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_fund/del/' + item.e_proname

    const request = new Request(url, {
      method: 'DELETE',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data)
  }

  useEffect(() => {
    updateTotalToServer()
  }, [heartItem.follow_status])

  useEffect(() => {
    getHeartFromServer()
  }, [])
  return (
    <>
      <FundModal visible={visible} setVisible={setVisible} photo={photo} />
      <div className="container firstTop">
        <div className="row justify-content-between">
          <div className="col-8">
            <div className="product_photo" onClick={() => setVisible(true)}>
              <img src={photo} alt="" />
            </div>
            <div className="d-flex justify-content-between smallPhotos">
              <div className="product_photo_small">
                {/* <img src={require('../../img/' + item.photo)} alt="" /> */}
                <img
                  src={require('../../img/' + item.e_pic)}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={small1}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={small2}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={small3}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-4 right-part">
            <div className="d-flex product-name justify-content-between">
              <div className="subtitle3">{item.e__proname}</div>
            </div>
            <div className="heart justify-content-end">
              <BsFillHeartFill
                onClick={async () => {
                  await setHeart(!heart)
                  if (heart === false) {
                    const newHeartItem = {
                      e_follow_product: item.e_proname,
                      e_member_id: 'AMY',
                      e_follow_status: 1,
                    }
                    await setHeartItem(newHeartItem)
                  } else {
                    deleteHeartToServer()
                    setHeart(false)
                    setHeartItem({})
                  }
                }}
                style={heart ? heartFill : ''}
              />
            </div>
            <div className="bigDesc">
              <div className="product-desc">
                <p className="w_comP">{item.e_prointro}</p>
              </div>
              {isLogged ? (
                <button
                  className="cart-btn"
                  onClick={() => {
                    setCartAmount(cartamount + 1)
                    updateCartToLocalStorage({
                      product_no: item.sid,
                      id: item.e_proname,
                      img: item.e_pic,
                      amount: 1,
                      price: item.e_lowprice,
                      category: 4,
                    })
                  }}
                >
                  贊助
                </button>
              ) : (
                <button
                  className="cart-btn"
                  onClick={() => {
                    props.history.push('/login')
                  }}
                >
                  贊助 請先登入
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(FundIFirst)
