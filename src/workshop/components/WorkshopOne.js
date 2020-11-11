import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainone from '../images/34-1.png'
import imagemaintwo from '../images/34-2.png'
import imagemainthree from '../images/34-3.png'
import imagemainfour from '../images/34-4.png'
import imagemainfive from '../images/34-5.png'

function WorkshopOne(props) {
  const { item, cartamount, setCartAmount } = props

  const [mycart, setMyCart] = useState([])
  const [show, setShow] = useState(false)
  const [workshopName, setWorkshopName] = useState('')

  //從localstroage拿資料
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
