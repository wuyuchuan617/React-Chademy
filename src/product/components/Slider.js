// ------------------------------以下引入套件----------------------------

import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// ------------------------以下引入樣式----------------------------

import '../styles/slider.scss'

// -----------------------以下開始Component Slider-----------------

function Slider(props) {
  // props解構，item是從product傳下來的單一產品{}
  const { item } = props

  // -----------------------以下開始useState狀態設定-----------------

  const [relateProducts, setEelateProducts] = useState([])

  // ---------------以下開始fetch SQL get data function-----------------

  // 用此產品分類找到多筆相同分類的產品
  async function getItemFromSQL() {
    const url =
      'http://localhost:3001/man_product/relate?category=' + item.category

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

    setEelateProducts(data)
  }

  useEffect(() => {
    getItemFromSQL()
  }, [item])

  // -----------------------------以下開始 JSX 畫面-----------------

  return (
    <>
      <h2 className="grace-related-product text-center">相關產品</h2>

      <div className="container">
        <div className="row">
          <Carousel itemsToScroll={3} itemsToShow={3}>
            {relateProducts.map((item, index) => {
              return (
                <div className="col grace-wrap mx-1">
                  <div className="productCardImg">
                    <img
                      src={require('../../img/' + item.photo)}
                      alt=""
                      onClick={() => {
                        props.history.push('/product/' + item.sid)
                      }}
                    />
                  </div>
                  <div className="d-flex flex-column grace-slider-text">
                    <span>{item.product_name}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  )
}

// ---------------以下輸出component-----------------

export default withRouter(Slider)
