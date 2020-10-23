import React from 'react'
import series from '../images/series.jpg'
import { BsStarFill } from 'react-icons/bs'

function ProductFirst(props) {
  return (
    <>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-8">
            <div class="product_photo">
              <img src={series} alt="" />
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
              <div class="subtitle3">歐洲銀行扶手沙發型餐椅</div>
              <div>
                <i class="fas fa-heart"></i>
              </div>
            </div>
            <div class="stars d-flex">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <p> （ 300則評論 ）</p>
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

              <button class="cart-btn">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductFirst
