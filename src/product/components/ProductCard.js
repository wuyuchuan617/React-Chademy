import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function ProductCard(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div class="productCard col-lg-4 col-md-6 col-sm-12" id={item.sid}>
        <div class="productCardImg">
          <img
            src={require('../../img/' + item.photo)}
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
