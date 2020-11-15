/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FundFirst from '../components/FundIFirst'
import '../styles/FundItem.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import SliderE from '../components/SliderE'
// import BreadcrumbwTwo from '../components/BreadcrumbwTwo'

function FundItem(props) {
  const [localData, setLocalData] = useState([])
  const isLogged = useSelector((state) => state.user.logged)
  

  const { setCartAmount, cartamount, resetShow, setResetShow } = props
  // const { setCartAmount, cartamount } = props

  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  // 瀏覽紀錄
  const [viewrecord, setViewRecord] = useState([])
  const [productName, setProductName] = useState('')

  const [view, setView] = useState([])

  const updateStoryToLocalStorage = (item) => {
    console.log(item)
    const currentStory = JSON.parse(localStorage.getItem('showStory')) || []

    setView(currentStory)
    console.log('view', view)
  }
  // const updateViewToLocalStorage = (value) => {
  // 從localstorage得到cart(json字串)
  // const currentCart = JSON.parse(localStorage.getItem('fund')) || []

  // console.log('currentCart', currentCart)

  // 把得到的cart(json字串)轉為陣列值，然後和新加入的物件值合併為新陣列
  // const newCart = [...currentCart,
  //   product_no: product.e_proname,
  //   img: product.e_pic,
  //   price: product.e_lowprice,
  //   ]

  // 設定回localstorage中(記得轉回json字串)
  //   localStorage.setItem('fund', JSON.stringify(newCart))

  //   console.log('newCart', newCart)
  //   // 設定資料
  //   // 設定至元件的狀態中
  //   setMycart(newCart)
  //   setProductName(value.name)
  // }

  // ---------------以下開始fetch SQL get data function-----------------

  // 到資料庫拿一筆資料
  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_fund/reactitem/' + sid

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

    setProduct(data.slice(0))
  }
  useEffect(() => {
    getItemFromSQL()
  }, [sid])
  useEffect(() => {
    updateStoryToLocalStorage()
  }, [sid])

  // useEffect(() => {
  //   updateViewToLocalStorage()
  // }, localStorage.setItem(JSON.stringify(newCart)))

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem('showStory')) || []
    setLocalData(localdata)
    console.log('localdata', localdata)
  }, [])

  // const chair = `http://localhost:3001/img/${item.img}`
  return (
    <>
      <div className="container">
        {/* {product.map((item, index) => {
          return <BreadcrumbwTwo key={index} item={item} product={product} />
        })} */}
      </div>
      {/* <BreadcrumbwTwo item={item} /> */}
      {product.map((item, index) => {
        return (
          <FundFirst
            key={index}
            item={item}
            product={product}
            sid={sid}
            setCartAmount={setCartAmount}
            cartamount={cartamount}
            isLogged={isLogged}
            resetShow={resetShow}
            setResetShow={setResetShow}
          />
        )
      })}

      <div className="container">
        <div className="row">
          <div className="e-related-product ">
            <h2 className="grace-related-product text-center ">瀏覽紀錄</h2>
          </div>
          {/*  */}
          {/* <div className="row"> */}
          <Carousel itemsToScroll={3} itemsToShow={3}>
            {localData.map((item) => {
              return (
                <div className="col grace-wrap mx-1">
                  <div className="e-pic">
                    <img alt="" src={`http://localhost:3001/img/` + item.img} />
                  </div>
                  <div className="d-flex flex-column grace-slider-text">
                    <span className="grace-slider-pname"> {item.id}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              )
            })}
          </Carousel>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default FundItem
