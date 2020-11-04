import React, { useState, useEffect } from 'react'
import ProductFirst from '../components/ProductFirst'
import ProductSecond from '../components/ProductSecond'
import ProductThird from '../components/ProductThird'
import ProductFour from '../components/ProductFour'
import ProductFive from '../components/ProductFive'
import ProductSix from '../components/ProductSix'
import ProductSeven from '../components/ProductSeven'
import Slider from '../components/Slider'
import ProductEight from '../components/ProductEight'
import ProductNine from '../components/ProductNine'
import { withRouter, useParams } from 'react-router-dom'

import '../styles/product.css'

function Product(props) {
  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_product/reactitem/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setProduct(data.slice(0))
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])

  const [review, setReview] = useState([])

  return (
    <>
      {product.map((item, index) => {
        return (
          <ProductFirst
            key={index}
            item={item}
            product={product}
            review={review}
          />
        )
      })}

      {product.map((item, index) => {
        return <ProductSecond key={index} item={item} product={product} />
      })}

      {product.map((item, index) => {
        return <ProductThird key={index} item={item} product={product} />
      })}

      {product.map((item, index) => {
        return <ProductFour key={index} item={item} product={product} />
      })}

      <div className="w_six_scroll">
        {product.map((item, index) => {
          return <ProductSix key={index} item={item} product={product} />
        })}
      </div>
      {product.map((item, index) => {
        return <ProductFive key={index} item={item} product={product} />
      })}

      <div className="container ">
        <div className="row justify-content-center title">
          <h3>產品評價</h3>
        </div>
        <div class="w_rew_scroll">
          {product.map((item, index) => {
            return (
              <ProductSeven
                key={index}
                item={item}
                review={review}
                setReview={setReview}
              />
            )
          })}
        </div>
      </div>
      <Slider />
      <ProductNine />
    </>
  )
}

export default Product
