/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function TextArea(props) {
  const isLogged = useSelector((state) => state.user.logged)

  const {
    item,
    sid,
    cartamount,
    setCartAmount,
    resetShow,
    setResetShow,
  } = props

  const [mycart, setMycart] = useState([])
  const [productName, setProductName] = useState('')

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
    <div className="i_text_area">
      <div className="i_product_set">
        <div className="i_product_name">{item.product_name}</div>
        <div className="i_product_no">{item.product_no}</div>
        <div className="i_like">♥︎</div>
      </div>
      <div className="i_product_description mt-5">
        <p>
          靈感來自大自然的Ottawa餐椅，樹葉的造型和曲線設計，讓它成為獨一無二的設計傢具。坐下的瞬間您便會發現，Ottawa餐椅不僅擁有特別的外型，還無比舒適。
          同時，無包覆的塑型椅身，突顯了俐落線條和簡約樣式。
        </p>
        <p>{item.description}</p>
        <p>剩餘數量:{item.stock}</p>
      </div>
      <div className="i_price_set d-flex justify-content-between mt-5">
        <div className="i_price_name">
          <p>商品價格</p>
        </div>
        <div className="i_price">
          <p>NT{item.price}</p>
        </div>
      </div>
      <div
        className="i_btn5 text-center mt-4"
        onClick={() => {
          setCartAmount(cartamount + 1)
          updateCartToLocalStorage({
            product_no: item.product_no,
            id: item.productname,
            img: item.photo,
            amount: 1,
            price: item.price,
            category: 5,
          })
        }}
      >
        加入購物車
      </div>
    </div>
  )
}

export default TextArea
