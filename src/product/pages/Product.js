/* eslint-disable react-hooks/exhaustive-deps */

// ------------------------------以下引入套件----------------------------

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// ------------------------以下引入Components----------------------------

import ProductFirst from '../components/ProductFirst'
import ProductSecond from '../components/ProductSecond'
import ProductThird from '../components/ProductThird'
import ProductFour from '../components/ProductFour'
import ProductFive from '../components/ProductFive'
// import ProductSix from '../components/ProductSix'
import ProductSeven from '../components/ProductSeven'
import Slider from '../components/Slider'
// import ProductEight from '../components/ProductEight'
// import ProductNine from '../components/ProductNine'
import ProductTen from '../components/ProductTen'
import PurchaseInfo from '../components/PurchaseInfo'
import Pinterest from '../components/Pinterest'
// import NewsLetter from '../components/NewsLetter'
import News from '../components/News'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'

// ------------------------以下引入樣式----------------------------

import '../styles/product.css'

// -----------------------以下開始Component Product-----------------

function Product(props) {
  // 判斷登入的狀態

  const isLogged = useSelector((state) => state.user.logged)

  // props解構
  const { setCartAmount, cartamount, resetShow, setResetShow } = props

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
            resetShow={resetShow}
            setResetShow={setResetShow}
          />
        )
      })}

      {product.map((item, index) => {
        return <ProductSecond key={index} item={item} product={product} />
      })}

      {product.map((item, index) => {
        return <ProductTen key={index} item={item} product={product} />
      })}

      {product.map((item, index) => {
        return <ProductThird key={index} item={item} product={product} />
      })}

      {product.map((item, index) => {
        return <ProductFour key={index} item={item} product={product} />
      })}

      <div className="parallax1"></div>

      {/* <div className="w_six_scroll">
        {product.map((item, index) => {
          return <ProductSix key={index} item={item} product={product} />
        })}
      </div> */}
      {product.map((item, index) => {
        return <ProductFive key={index} item={item} product={product} />
      })}

      <div className="container " id="w_review">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">產品評價</div>
            <div className="titleEN lora text-center">Comments</div>
          </div>
        </div>
        <div className="w_rew_scroll">
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
      <Pinterest />
      <News />

      {product.map((item, index) => {
        return <Slider key={index} item={item} />
      })}

      <div className="container">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">購物須知</div>
            <div className="titleEN lora text-center">Purchase Info</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <PurchaseInfo />
        </div>
      </div>
      {/* <NewsLetter /> */}

      <BackTop
        visibilityHeight="2000"
        style={{
          height: '40',
          width: '40',
          lineHeight: '33px',
          color: 'white',
          fontSize: '16px',
          borderRadius: '0',
          textAlign: 'center',
          backgroundColor: '#c77334',
        }}
      >
        <div>
          <UpOutlined
            style={{
              color: 'white',
              fontSize: '18px',
              borderRadius: '0',
              backgroundColor: '#c77334',
              marginTop: '-3px',
            }}
          />
        </div>
      </BackTop>
    </>
  )
}

// ---------------以下輸出component-----------------

export default Product
