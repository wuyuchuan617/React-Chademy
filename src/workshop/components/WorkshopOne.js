/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BsFillHeartFill } from 'react-icons/bs'
import '../styles/workshoplist.css'
import imagemainone from '../images/34-1.png'
import imagemaintwo from '../images/34-2.png'
import imagemainthree from '../images/34-3.png'
import imagemainfour from '../images/34-4.png'
import imagemainfive from '../images/34-5.png'

function WorkshopOne(props) {
  const { item, cartamount, setCartAmount } = props

  const [mycart, setMycart] = useState([])
  const [productName, setProductName] = useState('')

  const [heart, setHeart] = useState(false)

  const heartFill = {
    color: '#C77334',
  }

  const [visible, setVisible] = useState(false)

  const [photo, setPhoto] = useState(`http://localhost:3001/img/${item.images}`)
  useEffect(() => {
    setPhoto(`http://localhost:3001/img/${item.images}`)
  }, [item])

  const updateCartToLocalStorage = (value) => {
    // 從localstorage得到cart(json字串)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    console.log('currentCart', currentCart)

    // 把得到的cart(json字串)轉為陣列值，然後和新加入的物件值合併為新陣列
    const newCart = [...currentCart, value]

    // 設定回localstorage中(記得轉回json字串)
    localStorage.setItem('cart', JSON.stringify(newCart))

    console.log('newCart', newCart)
    // 設定資料
    // 設定至元件的狀態中
    setMycart(newCart)
    setProductName(value.name)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="workshop_photo" onClick={() => setVisible(true)}>
            <img src={require('../../img/' + item.images)} alt="" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="workshop_photo_small">
              <img
                src={imagemaintwo}
                alt=""
                onClick={(e) => {
                  setPhoto(e.target.src)
                }}
              />
            </div>
            <div className="workshop_photo_small">
              <img
                src={imagemainthree}
                alt=""
                onClick={(e) => {
                  setPhoto(e.target.src)
                }}
              />
            </div>
            <div className="workshop_photo_small">
              <img
                src={imagemainfour}
                alt=""
                onClick={(e) => {
                  setPhoto(e.target.src)
                }}
              />
            </div>
            <div className="workshop_photo_small">
              <img
                src={imagemainfive}
                alt=""
                onClick={(e) => {
                  setPhoto(e.target.src)
                }}
              />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="d-flex workshop-name justify-content-between">
            <div>{item.activitie_name}</div>
          </div>

          <div className="heart justify-content-end">
            <BsFillHeartFill
              onClick={() => {
                setHeart(!heart)
              }}
              style={heart ? heartFill : ''}
            />
          </div>

          <div className="workshop-desc">
            <p>{item.introduction}</p>
            <p>開課日期:2020/11/21 - 2020/01/03 </p>
            <p>地點:台北市 </p>
            <h6>剩餘名額1</h6>
            <h1>課程價格_${item.sale_price}</h1>
          </div>

          <button
            className="a_cart-btn"
            onClick={() => {
              setCartAmount(cartamount + 1)
              updateCartToLocalStorage({
                product_no: item.activitie_id,
                id: item.activitie_name,
                img: item.images,
                amount: 1,
                price: item.sale_price,
                category: 2,
              })
            }}
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkshopOne
