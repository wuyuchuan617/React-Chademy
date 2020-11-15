/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Win(props) {
  const {
    pname,
    chair,
    price,
    comma,
    setCartAmount,
    cartamount,
    productpic,
    setNoShowModel,
  } = props
  //add to cart fn
  const [myCart, setMyCart] = useState([])
  const [pc, setPc] = useState('')
  const updateCartToLocalStorage = (item, isAdded = true) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

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
  useEffect(() => {
    setPc(productpic[0])
  }, [productpic])

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center"
          >
            恭喜競標成功🎉🎉🎉🎉🎉
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">
            恭喜您用最優惠的價格<span style={{ color: '#c77334' }}>${comma}</span>成功競標以以下商品，請至購物車結帳！
          </h4>
          <p className="text-center">{pname}</p>
          <div className="g-modal-pic mx-auto">
            <img src={chair} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="w_cart-btn rounded-0"
            onClick={() => {
              setNoShowModel(true)
              props.onHide()
              setCartAmount(cartamount + 1)
              updateCartToLocalStorage({
                id: pname,
                img: pc,
                amount: 1,
                price: price,
                category: 4,
              })
            }}
          >
            加入購物車
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Win
