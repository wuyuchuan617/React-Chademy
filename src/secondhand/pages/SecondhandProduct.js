import React, { useEffect, useState } from 'react'
import ImgArea from '../components/SecondhandProduct/ImgArea'
import TextArea from '../components/SecondhandProduct/TextArea'
import Filter from '../components/SecondhandProduct/Filter'
import '../styles/secondhandProduct.css'
import { withRouter, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

function SecondhandProduct(props) {
  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_secondhand/secondhandlist/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setProduct(data)
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])
  return (
    <>
      <div class="container custom-container-width">
        <div class="row mt-5 mb-4">
          <Breadcrumb />
        </div>
        <div class="row d-flex flex-wrap">
          {product.map((item, index) => {
            return <ImgArea key={index} item={item} product={product} />
          })}
          {product.map((item, index) => {
            return <TextArea key={index} item={item} product={product} />
          })}
        </div>
        <Filter />
      </div>
    </>
  )
}

export default SecondhandProduct
