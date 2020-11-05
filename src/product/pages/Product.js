// ------------------------------以下引入套件----------------------------

import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// ------------------------以下引入Components----------------------------

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
import PurchaseInfo from '../components/PurchaseInfo'

// ------------------------以下引入樣式----------------------------

import '../styles/product.css'

// -----------------------以下開始Component Product-----------------

function Product(props) {
  // 判斷登入的狀態
  const isLogged = useSelector((state) => state.user.logged)

  // props解構
  const { setCartAmount, cartamount } = props

  // -----------------------以下開始useState狀態設定-----------------

  // 存單一筆資料
  const [product, setProduct] = useState([])

  // 存從資料庫拿到的所有review資料
  const [review, setReview] = useState([])

  // -------------------------以下開始component內變數-----------------

  // 抓url sid
  let { sid } = useParams()
  console.log('sid' + sid)

  // ---------------以下開始fetch SQL get data function-----------------

  // 到資料庫拿一筆資料
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

  // ---------------------------以下開始useEffect-----------------

  useEffect(() => {
    getItemFromSQL()
  }, [sid])

  // -----------------------------以下開始 JSX 畫面-----------------

  return (
    <>
      {product.map((item, index) => {
        return (
          <ProductFirst
            key={index}
            item={item}
            product={product}
            sid={sid}
            review={review}
            setCartAmount={setCartAmount}
            cartamount={cartamount}
            isLogged={isLogged}
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
      {product.map((item, index) => {
        return <Slider key={index} item={item} />
      })}

      <div className="container">
        <div className="row">
          <PurchaseInfo />
        </div>
      </div>
    </>
  )
}

// ---------------以下輸出component-----------------

export default Product
