// ------------------以下引入套件----------------------------

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// ------------------以下引入Components----------------------------

import Filter from '../../common_components/Filter'
import ProductPopular from '../components/ProductPopular'
import ProductSeries from '../components/ProductSeries'
import ProductCard from '../components/ProductCard'
import CouponModal from '../components/CouponModal'
import ListNew from '../components/ListNew'
import Breadcrumb from '../../common_components/Breadcrumb'

// ------------------以下引入樣式----------------------------

import '../styles/productlist.css'

// ------------------以下引入images----------------------------

import bannerVideo from '../images/The-Passion-of-Making.mp4'

// ---------------以下開始Component ProductList-----------------

function ProductList(props) {
  // 判斷登入的狀態

  const isLogged = useSelector((state) => state.user.logged)

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
  useEffect(() => {
    getSeriesFromSQL()
  }, [series])

  // didmount拿所有資料
  useEffect(() => {
    localStorage.removeItem('product')
    if (product.length === 0) {
      getTotalFromSQL()
    }
  }, [])

  // useEffect(() => {
  //   if (category.length > 1) getFilterFromSQL()
  //   if (chairSeat.length > 1) getFilterFromSQL()
  // }, [category,chairSeat])

  // 彈跳視窗
  useEffect(() => {
    setTimeout(() => {
      console.log('This will run after 1 second!')
      setVisible(true)
    }, 100000)
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

      <video
        src={bannerVideo}
        className="w-100"
        autoplay="autoplay"
        muted="true"
        preload="auto"
      ></video>

      <Breadcrumb />

      <ProductPopular />
      <ListNew />

      <ProductSeries setSeries={setSeries} />

      <div className="context1">
        <div className="container" id="productCards">
          <div className="row d-flex justify-content-center">
            <p className="col-4 subtitle1">全部產品</p>

            <p className="col-8">
              在與人談論到居家靈感佈置陳列的時候，推崇自然風格的我們，總是鼓勵大家回到原點，以自己的角度出發，親自去挑選符合自己生活使用習慣的古董老件，而非跟隨流行的風格。
            </p>
          </div>

          <div className="row justify-content-center">
            {product.slice(0, viewProduct).map((item, index) => {
              return <ProductCard key={index} item={item} />
            })}
          </div>
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
