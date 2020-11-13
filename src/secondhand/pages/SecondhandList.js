import React, { useState, useEffect } from 'react'

import Firstview from '../components/SecondhandList/Firstview'
import Filter from '../components/SecondhandList/Filter'
import ProductList from '../components/SecondhandList/ProductList'
import Breadcrumb from '../../common_components/Breadcrumb'
import '../styles/secondhandList.css'
import { useSelector } from 'react-redux'

function SecondhandList(props) {
  const [product, setProduct] = useState([])
  const [viewProduct, setViewProduct] = useState(8)
  const [lastProductId, setLastProductId] = useState(0)
  const [reload, setReload] = useState(0)
  // props解構
  const { setCartAmount, cartamount, resetShow, setResetShow } = props
  // 判斷登入的狀態
  const isLogged = useSelector((state) => state.user.logged)
  // 存從資料庫拿到的所有review資料
  const [review, setReview] = useState([])
  /**
   * 用來判斷是不是最後一筆資料
   */
  const [isLast, setIsLast] = useState(false)

  /**
   * 用來搜尋DB的資料
   */
  const [query, setQuery] = useState({
    type: '',
    sid: null,
    pageNo: 0,
    isPage: false,
  })

  /**
   * 提供function傳給左方filter使用
   */
  const searchProduct = (type, sid) => {
    console.log(type, sid)
    if (!type || !sid) {
      return
    }

    setIsLast(false)
    setQuery({ type, sid, pageNo: 0, isPage: false })
  }

  /**
   * more的時候
   */
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

    const nextQuery = { ...query, pageNo: query.pageNo + 1, isPage: true }
    setQuery(nextQuery)
  }

  /**
   * 搜尋API使用
   */
  async function getTotalFromSQL2(props) {
    const url = 'http://localhost:3001/man_secondhand/product'

    fetch(url, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        ...query,
        page_no: query.pageNo,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((body) => {
        console.log(body.data)
        if (body.data.length < 8) {
          setIsLast(true)
        }
        if (query.isPage) {
          setProduct(product.concat(body.data))
        } else {
          setProduct(body.data)
        }
      })
  }

  /**
   * 當query變更，再次搜尋
   */
  useEffect(() => {
    console.log(query)
    getTotalFromSQL2()
  }, [query])

  useEffect(() => {
    const arr = product.slice(0, viewProduct)
    if (arr.length > 0) setLastProductId(arr[arr.length - 1].sid)
  }, [viewProduct, product])

  return (
    <>
      <Firstview />
      <div className="container custom-container-width">
        <div className="row mt-5">
          <Breadcrumb />
        </div>
        <div className="row mt-5">
          <Filter searchProduct={searchProduct} />
          <div className="i_product d-flex flex-wrap">
            {product.slice(0, viewProduct).map((item, index) => {
              return (
                <ProductList
                  key={index}
                  item={item}
                  setCartAmount={setCartAmount}
                  cartamount={cartamount}
                  isLogged={isLogged}
                  resetShow={resetShow}
                  setResetShow={setResetShow}
                  reload={reload}
                  review={review}
                  setReview={setReview}
                />
              )
            })}
            <div className="i_end">
              <hr />
              {!isLast && (
                <div
                  className="i_btn1 text-center mt-4"
                  onClick={() => {
                    handleClick()
                    setReload(reload + 1)
                  }}
                >
                  more
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondhandList
