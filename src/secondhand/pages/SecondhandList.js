import React, { useState, useEffect } from 'react'

import Firstview from '../components/SecondhandList/Firstview'
import Filter from '../components/SecondhandList/Filter'
import ProductList from '../components/SecondhandList/ProductList'
import Breadcrumb from '../../common_components/Breadcrumb'
import '../styles/secondhandList.css'

function SecondhandList() {
  const [product, setProduct] = useState([])
  const [viewProduct, setViewProduct] = useState(8)
  const [lastProductId, setLastProductId] = useState(8)

  const handleClick = () => {
    let preViewProduct = viewProduct
    let newViewProduct = preViewProduct + 8

    console.log(newViewProduct)
    setViewProduct(newViewProduct)
    //const arr = product.slice(0, preViewProduct)
    //setLastProductId(arr[arr.length - 1].sid)
    if (document.getElementById(lastProductId)) {
      //alert(lastProductId)
      document
        .getElementById(lastProductId)
        .scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  async function getTotalFromSQL(props) {
    const url = 'http://localhost:3001/man_secondhand/secondhandlist'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const newData = [...data]
    console.log('newData' + newData)
    console.log(Array.isArray(data))
    setProduct(newData)
  }

  useEffect(() => {
    getTotalFromSQL()
  }, [])

  useEffect(() => {
    const arr = product.slice(0, viewProduct)
    if (arr.length > 0) setLastProductId(arr[arr.length - 1].sid)
  }, [viewProduct, product])

  return (
    <>
      <Firstview />
      <div class="container custom-container-width">
        <Breadcrumb />
        <div className="row mt-5">
          <Filter />
          <div className="i_product d-flex flex-wrap">
            {product.map((item, index) => {
              return <ProductList key={index} item={item} />
            })}
            <div className="i_end">
              <hr />
              <div className="i_btn1 text-center mt-4" onClick={handleClick}>
                more
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondhandList
