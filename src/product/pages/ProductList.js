// ------------------以下引入套件----------------------------

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LazyLoad from 'react-lazyload'

// ------------------以下引入Components----------------------------

import Filter from '../../common_components/Filter'
import ProductPopular from '../components/ProductPopular'
import ProductSeries from '../components/ProductSeries'
import ProductCard from '../components/ProductCard'
import CouponModal from '../components/CouponModal'
import Breadcrumb from '../../common_components/Breadcrumb'

// ------------------以下引入樣式----------------------------

import '../styles/productlist.css'

// ------------------以下引入images----------------------------

import bannerVideo from '../images/The-Passion-of-Making.mp4'

// ---------------以下開始Component ProductList-----------------

function ProductList(props) {
  // 判斷登入的狀態
  // const isLogged = useSelector((state) => state.isLogged)
  // console.log('會員是否登入: ', isLogged)

  const isLogged = useSelector((state) => state.user.logged)

  // ---------------以下開始useState狀態設定-----------------

  // 存從資料庫拿到的資料
  console.log('cart localstorge', localStorage.getItem('product'))

  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem('product')) || []
  )
  console.log('product ', product)
  // 存要顯示幾筆資料
  const [viewProduct, setViewProduct] = useState(15)

  const [lastProductId, setLastProductId] = useState(0)

  // 存filter打開關閉狀態
  const [showFilter, setShowFilter] = useState(false)

  // 存filter滑到產品高度顯示狀態
  const [visible, setVisible] = useState(false)

  // 以下為filter狀態
  const [category, setCategory] = useState([])
  const [chairSeat, setChairSeat] = useState([])
  const [chairColor, setChairColor] = useState([])

  // ---------------以下開始component內變數-----------------

  // 抓篩選條件

  let categoryUrl = 'category=' + category.join(',')
  console.log(categoryUrl)

  let chairSeatUrl = 'chairSeat=' + chairSeat.join(',')
  console.log(chairSeatUrl)

  let chairColorUrl = 'chairColor=' + chairColor.join(',')
  console.log(chairColorUrl)

  let allUrl = []
  if (category.length > 0) allUrl.push(categoryUrl)
  if (chairSeat.length > 0) allUrl.push(chairSeatUrl)
  if (chairColor.length > 0) allUrl.push(chairColorUrl)

  // ---------------以下開始component內function-----------------

  const handleClick = () => {
    let preViewProduct = viewProduct
    let newViewProduct = preViewProduct + 15

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

  useEffect(() => {
    const arr = product.slice(0, viewProduct)
    if (arr.length > 0) setLastProductId(arr[arr.length - 1].sid)
  }, [viewProduct, product])

  useEffect(() => {
    console.log('scrol' + document.querySelector('#productCards').scrollTop)
    console.log('now' + document.documentElement.scrollTop)
    const scrol = document.querySelector('#productCards').offsetTop
    let nowscrol = document.documentElement.scrollTop

    if (nowscrol < 1600) setShowFilter(true)
  }, [])

  // ---------------以下開始fetch SQL get data function-----------------

  // 篩選資料庫
  async function getFilterFromSQL() {
    const url =
      'http://localhost:3001/man_product/reactfilter?' + allUrl.join('&')

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    let data = await response.text()
    // const newData = await [...data]
    // console.log('data: ' + data)
    data = JSON.parse(data)
    console.log('data: ' + data)
    // console.log(Array.isArray(data))
    setProduct(data)
    localStorage.setItem('product', JSON.stringify(data))
  }

  async function getTotalFromSQL() {
    const url = 'http://localhost:3001/man_product/reactlist'

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
    localStorage.setItem('product', JSON.stringify(newData))
  }

  // ---------------以下開始useEffect-----------------

  useEffect(() => {
    if (product.length === 0) {
      getTotalFromSQL()
    }
  }, [])

  // useEffect(() => {
  //   if (category.length > 1) getFilterFromSQL()
  //   if (chairSeat.length > 1) getFilterFromSQL()
  // }, [category,chairSeat])

  // useEffect(() => {
  //   setTimeout(() => {}, 1000)
  // }, [])

  // 彈跳視窗
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //     setVisible(true)
  //   }, 10000)
  // }, [])

  // ---------------以下開始 JSX 畫面-----------------

  return (
    <>
      <Filter
        showFilter={showFilter}
        category={category}
        setCategory={setCategory}
        chairSeat={chairSeat}
        setChairSeat={setChairSeat}
        chairColor={chairColor}
        setChairColor={setChairColor}
        getFilterFromSQL={getFilterFromSQL}
      />
      {/* <div className="container-fluid"> */}
      <video
        src={bannerVideo}
        className="w-100"
        autoplay="autoplay"
        muted="true"
        preload="auto"
      ></video>
      <Breadcrumb />
      {/* </div> */}
      {/* <LazyLoad height={200} offset={100}> */}
      <ProductPopular />
      {/* </LazyLoad> */}
      <ProductSeries />
      <div className="context1">
        <div className="container" id="productCards">
          <div className="row d-flex justify-content-center">
            <p className="col-4 subtitle1">全部產品</p>

            <p className="col-8">
              在與人談論到居家靈感佈置陳列的時候，推崇自然風格的我們，總是鼓勵大家回到原點，以自己的角度出發，親自去挑選符合自己生活使用習慣的古董老件，而非跟隨流行的風格。
            </p>
          </div>
          {/* <LazyLoad height={2000} offset={100} once={true}> */}
          <div className="row justify-content-center">
            {product.slice(0, viewProduct).map((item, index) => {
              return <ProductCard key={index} item={item} />
            })}
          </div>
          {/* </LazyLoad> */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <button className="loadButton" onClick={handleClick}>
            LOAD MORE
          </button>
        </div>
      </div>
      <CouponModal visible={visible} setVisible={setVisible} />
    </>
  )
}

// ---------------以下輸出component-----------------

export default ProductList
