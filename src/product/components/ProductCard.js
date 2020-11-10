import React from 'react'
import { withRouter } from 'react-router-dom'
import popularImg from '../images/777.jpg'

function ProductCard(props) {
  const { item } = props

  return (
    <>
      <div className="productCard col-lg-4 col-md-6 col-sm-12" id={item.sid}>
        <div className="productCardImg">
          <img
            src={require('../../img/' + item.photo)}
            alt=""
            onClick={() => {
              props.history.push('/product/' + item.sid)
            }}
          />
        </div>

        <div className="productCardImgHover">
          <img
            src={item.photo_hover}
            alt=""
            onClick={() => {
              props.history.push('/product/' + item.sid)
            }}
          />
        </div>

        <p>{item.product_name}</p>
        <p>${item.price}</p>
      </div>
    </>
  )
}

export default withRouter(ProductCard)
