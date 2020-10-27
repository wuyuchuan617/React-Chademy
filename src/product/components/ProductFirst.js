import React, { useState } from 'react'
import series from '../images/series.jpg'
import { BsStarFill } from 'react-icons/bs'
import { BsFillHeartFill } from 'react-icons/bs'

function ProductFirst(props) {
  const { item } = props

  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const [heart, setHeart] = useState(false)

  const heartFill = {
    color: '#C77334',
  }

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
    <>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-8">
            <div class="product_photo">
              <img src={require('../../img/' + item.photo)} alt="" />
            </div>
            <div class="d-flex justify-content-between smallPhotos">
              <div class="product_photo_small">
                <img src={series} alt="" />
              </div>
              <div class="product_photo_small">
                <img src={series} alt="" />
              </div>
              <div class="product_photo_small">
                <img src={series} alt="" />
              </div>
              <div class="product_photo_small">
                <img src={series} alt="" />
              </div>
            </div>
          </div>
          <div class="col-4 right-part">
            <div class="d-flex product-name justify-content-between">
              <div class="subtitle3">{item.product_name}</div>
            </div>

            <div class="stars d-flex">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <p> （ 300則評論 ）</p>
            </div>
            <div class="heart justify-content-end">
              <BsFillHeartFill
                onClick={() => {
                  setHeart(!heart)
                }}
                style={heart ? heartFill : ''}
              />
            </div>
            <div class="bigDesc">
              <div class="product-desc">
                <p>
                  Adelaide是一款優雅的小傑作，無論從哪個角度看都美貌不減，而且無比舒適。纖細的有機線條營造了輕盈有機外觀，邀請您坐下來欣賞精緻的丹麥設計。
                </p>
              </div>

              <div class="product-desc">
                <p>
                  Adelaide是一款優雅的小傑作，無論從哪個角度看都美貌不減，而且無比舒適。纖細的有機線條營造了輕盈有機外觀，邀請您坐下來欣賞精緻的丹麥設計。
                </p>
              </div>

              <div class="choose-area">
                <p>選擇木頭：</p>
                <div class="d-flex">
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                </div>
              </div>

              <div class="choose-area">
                <p>選擇皮革：</p>
                <div class="d-flex">
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                </div>
              </div>

              <button
                class="cart-btn"
                onClick={() => {
                  updateCartToLocalStorage({
                    product_no: item.product_no,
                    product_name: item.product_name,
                    product_photo: item.photo,
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
      </div>
    </>
  )
}

export default ProductFirst
