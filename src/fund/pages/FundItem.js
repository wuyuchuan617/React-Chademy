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
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import Img from '../images/big.jpeg'
import Img1 from '../images/big2.jpeg'
import Img2 from '../images/big3.jpeg'
import Img3 from '../images/out.jpeg'
import Img4 from '../images/luxu.jpg'
import Img5 from '../images/moed.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

function FundItem(props) {
  const [localData, setLocalData] = useState([])
  const isLogged = useSelector((state) => state.user.logged)

  const { setCartAmount, cartamount, resetShow, setResetShow } = props
  // const { setCartAmount, cartamount } = props

  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

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

      {/* <div className="container"> */}
      <img alt="" src={Img} className="containerimg" />

      <article className="e_range">
        <div className="parallax">
          <div className="bg__foo"></div>
          <div className="bg__bar"></div>
          <div className="bg__baz"></div>
          <div className="bg__bazz"></div>
        </div>
        <header className="bgih">
          <h1 className="bgi">​I want YOU to Fund Your Dream.</h1>
        </header>
        <section>
          <div class="container">
            <p>
              My goal is for you to be successful….is for you to live the life
              you want to live.…and you’ve got something inside of you.
            </p>
          </div>
        </section>
        <section class="parallax">
          <div class="bg__break">
            <div class="capture">
              Caption for this beautiful break image, Caption for this beautiful
              break image, Caption for this beautiful break image, Caption for
              this beautiful break image.
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <p>
              Now imagine that you had a personal crowdfunding team in your
              pocket, and you were on a step-by-step 8-week plan to learn
              exactly how to plan, build, launch, promote and successfully FUND
              YOUR DREAM -- using skills you already have.
            </p>
          </div>
        </section>
      </article>

      <div className="container dfn">
        <div className="row justify-content-between d-flex  dtt ">
          <div className="e_img_wrap">
            <img
              alt=""
              src={Img3}
              className="cimg"
              data-aos="zoom-in-up"
              data-aos-delay="50000"
              data-aos-duration="2400"
            />
            <p className="e_st1">OUTDOOR</p>
          </div>
          <div className="e_img_wrap">
            <img
              alt=""
              src={Img4}
              className="cimg"
              data-aos="zoom-in-up"
              data-aos-delay="50000"
              data-aos-duration="2400"
            />
            <p className="e_st2">LUXURY</p>
          </div>
          <div className="e_img_wrap">
            <img
              alt=""
              src={Img5}
              className="cimg"
              data-aos="zoom-in-up"
              data-aos-delay="50000"
              data-aos-duration="2400"
            />
            <p className="e_st3">MORDERN</p>
          </div>
        </div>
      </div>

      {/* </div> */}

      <div className="container mt-5 vp">
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

export default FundItem
