import React from 'react'
import './index.scoped.scss'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'

function CardMyFav(props) {
  const { cartamount, setCartAmount, data, setTypeofProduct } = props

  console.log(
    '%c DEBUG %cData',
    'color: #0092FA; font-weight: bold; ',
    'color: #fff; background: #0092FA; font-weight: bold; padding: 5px; border-radius: 3px',
    props,
    cartamount
  )

  const [myCart, setMyCart] = React.useState([])

  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    !!~index ? currentCart[index].amount++ : currentCart.push(item)
    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMyCart(currentCart)
  }

  return (
    <section className="CardMyFav_container">
      <div>
        <img src={`${window.location.origin}/img/${data.photo}`} alt="myfav" />
      </div>
      {/* 這裡要撈資料 */}
      <ul className="detail_list">
        <li>商品名稱：{data.product_name}</li>
        <li>商品編號：{data.product_no}</li>
        <li>金額：${data.price}</li>
        {/* <li>商品總類：{data.product_type}</li> */}
      </ul>
      <div className="btn_group">
        <span
          className="fav_btn"
          onClick={() => {
            setCartAmount(cartamount + 1)
            updateCartToLocalStorage({
              product_no: data.product_no,
              id: data.product_name,
              img: data.photo,
              amount: 1,
              price: data.price,
              category: data.product_type,
            })
            console.log(' => updateCartToLocalStorage ', cartamount)
          }}
        >
          <AiOutlineShoppingCart className="icon" />
          加入購物車
        </span>
        <span className="fav_btn">
          <FaRegTrashAlt className="icon" />
          移除此商品
        </span>
      </div>
    </section>
  )
}

export default CardMyFav
