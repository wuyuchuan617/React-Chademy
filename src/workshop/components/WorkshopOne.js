import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainone from '../images/34-1.png'
import imagemaintwo from '../images/34-2.png'
import imagemainthree from '../images/34-3.png'
import imagemainfour from '../images/34-4.png'
import imagemainfive from '../images/34-5.png'

function WorkshopOne(props) {
  const { item } = props

  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [workshopName, setWorkshopName] = useState('')

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
    setWorkshopName(value.name)
  }
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="workshop_photo">
            <img src={require('../../img/' + item.images)} alt="" />
          </div>
          <div class="d-flex justify-content-between">
            <div class="workshop_photo_small">
              <img src={imagemaintwo} />
            </div>
            <div class="workshop_photo_small">
              <img src={imagemainthree} />
            </div>
            <div class="workshop_photo_small">
              <img src={imagemainfour} />
            </div>
            <div class="workshop_photo_small">
              <img src={imagemainfive} />
            </div>
          </div>
        </div>

        <div class="col">
          <div class="d-flex workshop-name justify-content-between">
            <div>{item.activitie_name}</div>
            <div>
              <i class="fas fa-heart"></i>
            </div>
          </div>

          <div class="workshop-desc">
            <p>{item.introduction}</p>
            <h6>剩餘名額1</h6>
            <h1>課程價格_NT{item.sale_price}</h1>
          </div>

          <button
            class="cart-btn"
            onClick={() => {
              updateCartToLocalStorage({
                activitie_id: item.activitie_id,
                activitie_name: item.activitie_name,
                activitie_images: item.images,
                amount: 1,
                price: item.price,
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
