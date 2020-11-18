/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// ------------------以下引入套件----------------------------

import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage'
// ------------------以下引入Components----------------------------

import Filter from '../../common_components/Filter'
import BannerVideo from '../components/BannerVideo'
import ProductPopular from '../components/ProductPopular'
import ProductSeries from '../components/ProductSeries'
import ProductCard from '../components/ProductCard'
import CustomCard from '../components/CustomCard'
import CouponModal from '../components/CouponModal'
import ListNew from '../components/ListNew'
import NewsLetter from '../components/NewsLetter'
import Pinterest from '../components/Pinterest'
import ProductRecommend from '../components/ProductRecommend'
import TabletBanner from '../components/TabletBanner'
import TabW from '../components/TabW'
// import Breadcrumb from '../../common_components/Breadcrumb'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import { scrollScreen } from 'rc-scroll-anim'

// ------------------以下引入樣式----------------------------

import '../styles/productlist.css'

// ------------------以下引入images----------------------------

import bannerVideo from '../images/The-Passion-of-Making.mp4'

// ---------------以下開始Component ProductList-----------------

function ProductList(props) {
  // 判斷登入的狀態

  // const isLogged = useSelector((state) => state.user.logged)

  // ---------------以下開始useState狀態設定-----------------

  // 存從資料庫拿到的資料到localstorge
  console.log('product localstorge', localStorage.getItem('product'))

  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem('product')) || []
  )
  console.log('product ', product)

  // 存要顯示幾筆資料
  const [viewProduct, setViewProduct] = useState(15)

  // 存要顯示幾筆資料的最後一個id值
  const [lastProductId, setLastProductId] = useState(0)

  // 存filter打開關閉狀態
  const [showFilter, setShowFilter] = useState(false)

  // 折價券Modal
  const [visible, setVisible] = useState(false)

  // 存filter滑到產品高度顯示狀態
  const [scrollFilter, setScrollFilter] = useState(null)

  // 以下為filter狀態
  const [category, setCategory] = useState([])
  const [chairSeat, setChairSeat] = useState([])
  const [chairColor, setChairColor] = useState([])
  const [search, setSearch] = useState('')
  const [price, setPrice] = useState('')
  const [sort, setSort] = useState(1)

  // 存系列狀態
  const [series, setSeries] = useState('')

  // ---------------以下開始component內變數-----------------

  // 抓篩選條件

  let categoryUrl = 'category=' + category.join(',')
  console.log(categoryUrl)

  let chairSeatUrl = 'chairSeat=' + chairSeat.join(',')
  console.log(chairSeatUrl)

  let chairColorUrl = 'chairColor=' + chairColor.join(',')
  console.log(chairColorUrl)

  let searchUrl = 'chairSearch=' + search
  console.log(searchUrl)

  let sortUrl = `sortSearch=${sort}`
  console.log(sortUrl)

  // 篩選條件併成一個陣列
  let allUrl = []
  if (category.length > 0) allUrl.push(categoryUrl)
  if (chairSeat.length > 0) allUrl.push(chairSeatUrl)
  if (chairColor.length > 0) allUrl.push(chairColorUrl)
  if (search.length > 0) allUrl.push(searchUrl)
  if (sort) allUrl.push(sortUrl)

  // ---------------以下開始component內function-----------------

  const handleClick2 = () => {
    // setTimeout(() => {
    document
      .getElementById('w_custom_link')
      .scrollIntoView({ behavior: 'smooth', block: 'center' })
    // }, 500)
  }

  // onClick load more btn 增加15比顯示資料
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

  // ---------------以下開始fetch SQL get data function-----------------

  // 產品系列
  async function getSeriesFromSQL() {
    const url = 'http://localhost:3001/man_product/series?' + series

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

  // 拿所有資料庫
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

  // 捲到一定高度再顯示filter，還在測試研究中
  useEffect(() => {
    // let scroll = document.getElementById('productCards').offsetTop()
    // console.log('scrolltop' + scroll)
    // setScrollFilter(scroll)
    // let nowscrol = document.documentElement.scrollTop
    // if (nowscrol < 1600) setShowFilter(true)
  }, [scrollFilter])

  // 系列
  // useEffect(() => {
  //   getSeriesFromSQL()
  // }, [series])

  // didmount拿所有資料
  useEffect(
    () => {
      localStorage.removeItem('product')
      if (product.length === 0) {
        getTotalFromSQL()
      }
      // scrollScreen.init({s
      //   duration: 500,
      //   // loop: true,
      //   docHeight: 4000,
      // })
      // if (window.pageYOffset > 4000) {
      //   scrollScreen.unMount()
    },
    // scrollScreen.unMount()
    []
  )

  // useEffect(() => {
  //   if (category.length > 1) getFilterFromSQL()
  //   if (chairSeat.length > 1) getFilterFromSQL()
  // }, [category,chairSeat])

  // 彈跳視窗
  useEffect(() => {
    setTimeout(() => {
      console.log('This will run after 1 second!')
      setVisible(true)
    }, 50000)
  }, [])

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
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
        setSort={setSort}
        getFilterFromSQL={getFilterFromSQL}
        getTotalFromSQL={getTotalFromSQL}
      />

      <BannerVideo handleClick2={handleClick2} />

      <ProductPopular />
      {/* <div id="w_custom_link"> */}
      <CustomCard />
      {/* </div> */}
      <ListNew />

      <ProductSeries setSeries={setSeries} />

      <div className="context1">
        <div className="container productCards" id="productCards">
          <div className="row">
            <div className="w_title1">
              <div className="titlech noto-serif text-center">全部產品</div>
              <div className="titleEN lora text-center">All Product</div>
            </div>
          </div>

          <div className="row justify-content-center">
            {product.slice(0, viewProduct).map((item, index) => {
              return <ProductCard key={index} item={item} />
            })}
          </div>
        </div>
      </div>
      <div className="context1">
        <div className="container">
          <div className="row">
            <div
              className="btn_lessmargin more  w_loadButton2"
              onClick={handleClick}
            >
              MORE
            </div>
            {/* <button className="w_loadButton" onClick={handleClick}>
            LOAD MORE
          </button> */}
          </div>
        </div>
      </div>

      <ProductRecommend />
      <NewsLetter />
      {/* <Pinterest /> */}
      {/* <TabW /> */}
      {/* <TabletBanner /> */}

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

      <CouponModal visible={visible} setVisible={setVisible} />
    </>
  )
}

// ---------------以下輸出component-----------------

export default ProductList
