import React from 'react'

function ProductCard(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div class="productCard col-lg-4 col-md-6 col-sm-12">
        <div class="productCardImg">
          <img src={require('../../img/' + item.photo)} alt="" />
        </div>
        <p>{item.product_name}</p>
        <p>${item.price}</p>
      </div>
    </>
  )
}

export default ProductCard
