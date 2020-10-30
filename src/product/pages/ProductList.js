import React, { useEffect, useState } from 'react'
import Filter from '../../common_components/Filter'
import ProductPopular from '../components/ProductPopular'
import ProductSeries from '../components/ProductSeries'
import ProductCard from '../components/ProductCard'
import CouponModal from '../components/CouponModal'
import '../styles/productlist.css'
import bannerVideo from '../images/The-Passion-of-Making.mp4'

function ProductList(props) {
  const [product, setProduct] = useState([])
  const [viewProduct, setViewProduct] = useState(15)
  const [lastProductId, setLastProductId] = useState(0)
  const [showFilter, setShowFilter] = useState(false)
  const [visible, setVisible] = useState(false)

  // 以下為filter狀態
  const [category, setCategory] = useState([])

  let categoryUrl = '?category=' + category.join(',')
  console.log(categoryUrl)

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

  // 篩選資料庫
  async function getFilterFromSQL() {
    const url = 'http://localhost:3001/man_product/reactfilter' + categoryUrl

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
  }

  useEffect(() => {
    getTotalFromSQL()
  }, [])

  useEffect(() => {
    setTimeout(() => {}, 1000)
  }, [])
  //console.log('product' + product)

  // 彈跳視窗
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //     setVisible(true)
  //   }, 1000)
  //   // return () => clearTimeout()
  // }, [])

  return (
    <>
      <Filter
        showFilter={showFilter}
        category={category}
        setCategory={setCategory}
        getFilterFromSQL={getFilterFromSQL}
      />
      {/* <div class="container-fluid"> */}
      <video
        src={bannerVideo}
        class="w-100"
        autoplay="autoplay"
        muted="true"
        preload="auto"
      ></video>
      {/* </div> */}
      <ProductPopular />
      <ProductSeries />
      <div class="context1">
        <div class="container" id="productCards">
          <div class="row d-flex justify-content-center">
            <p class="col-4 subtitle1">全部產品</p>

            <p class="col-8">
              在與人談論到居家靈感佈置陳列的時候，推崇自然風格的我們，總是鼓勵大家回到原點，以自己的角度出發，親自去挑選符合自己生活使用習慣的古董老件，而非跟隨流行的風格。
            </p>
          </div>
          <div class="row justify-content-center">
            {product.slice(0, viewProduct).map((item, index) => {
              return <ProductCard key={index} item={item} product={product} />
            })}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <button class="loadButton" onClick={handleClick}>
            LOAD MORE
          </button>
        </div>
      </div>
      <CouponModal visible={visible} setVisible={setVisible} />
    </>
  )
}

export default ProductList
