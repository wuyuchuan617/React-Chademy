import '../styles/FundList.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import FundListCard from '../components/FundListCard'
import '../styles/FundHomepage.scss'

function FundList(props) {
  const [showFilter, setShowFilter] = useState(false)
  const [product, setProduct] = useState([])
  const [viewProduct, setViewProduct] = useState(6)
  const [lastProductId, setLastProductId] = useState(0)
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    let preViewProduct = viewProduct
    let newViewProduct = preViewProduct + 6

    console.log(newViewProduct)
    setViewProduct(newViewProduct)

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
    console.log('scrol' + document.querySelector('#productCards').offsetTop)
    console.log('now' + document.documentElement.scrollTop)
    const scrol = document.querySelector('#productCards').offsetTop
    let nowscrol = document.documentElement.scrollTop

    if (nowscrol < 1600) setShowFilter(true)
  }, [])

  async function getTotalFromSQL() {
    const url = 'http://localhost:3001/man_fund/fundlistnode'

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

  // jsx畫面

  return (
    <>
      <div class="context1">
        <div class="container" id="productCards">
          <div className="e_lablebox mt-5 mb-5">
            <Link to="/newfundproject" className="e_defaultlable">
              最新發起
            </Link>
            <Link to="/endsoonfund" className="e_activelable">
              即將結束
            </Link>
          </div>

          <div class="row  justify-content-center">
            {product.slice(0, viewProduct).map((item, index) => {
              return <FundListCard key={index} item={item} />
            })}
          </div>
          <div class="container">
            <div class="row">
              <button class="loadButton" onClick={handleClick}>
                LOAD MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FundList
