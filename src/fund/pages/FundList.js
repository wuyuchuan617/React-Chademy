/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import '../styles/FundList.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import FundListCard from '../components/FundListCard'
import '../styles/FundHomepage.scss'
import BookMark from '../components/BookMark'
import BookIcon from '../components/BookIcon'
import Dropdowna from '../components/Dropdowna'

import Button from 'antd/lib/button'
import QueueAnim from 'rc-queue-anim'
import Hpanimate from './Hpanimate'

import BannerE from '../components/BannerE'
import Breadcrumbw from '../components/Breadcrumbw'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'

function FundList(props) {
  const [showFilter, setShowFilter] = useState(false)

  const [filterMark, setFilterMark] = useState(0)
  const [filterIcon, setFilterIcon] = useState(0)

  const [product, setProduct] = useState([])
  const [viewProduct, setViewProduct] = useState(6)
  const [lastProductId, setLastProductId] = useState(0)
  const [visible, setVisible] = useState(false)

  // 以下為filter狀態
  const [category, setCategory] = useState([])
  const [chairSeat, setChairSeat] = useState([])
  const [chairColor, setChairColor] = useState([])
  const [search, setSearch] = useState('')
  const [price, setPrice] = useState('')
  const [sort, setSort] = useState(1)

  // 存系列狀態
  const [series, setSeries] = useState('')

  //存時間專案
  const [time, setTime] = useState('')

  // 價格排序
  const [orderBy, setOrderBy] = useState(0)
  const [orderBy2, setOrderBy2] = useState(0)
  // const [desc, setDesc] = useState('')

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
    getAscFromSQL()
  }, [orderBy])
  // 產品系列
  async function getSeriesFromSQL() {
    const url = 'http://localhost:3001/man_fund/series?' + series

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

  // 時間專案
  async function getTimeFromSQL() {
    const url = 'http://localhost:3001/man_fund/project_time?' + time

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

  // // 價錢排序
  // async function getAscFromSQL() {
  //   const url = 'http://localhost:3001/man_fund/project_price_asc'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   let data = await response.text()
  //   // const newData = await [...data]
  //   // console.log('data: ' + data)
  //   data = JSON.parse(data)
  //   console.log('data: ' + data)
  //   // console.log(Array.isArray(data))
  //   setAsc(data)
  //   localStorage.setItem('product', JSON.stringify(data))
  // }

  // // 價錢排序
  // async function getDescFromSQL() {
  //   const url = 'http://localhost:3001/man_fund/project_price_desc'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   let data = await response.text()
  //   // const newData = await [...data]
  //   // console.log('data: ' + data)
  //   data = JSON.parse(data)
  //   console.log('data: ' + data)
  //   // console.log(Array.isArray(data))
  //   setDesc(data)
  //   localStorage.setItem('product', JSON.stringify(data))
  // }

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

  async function getAscFromSQL() {
    const url = 'http://localhost:3001/man_fund/project_price_asc'

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
  async function getDescFromSQL() {
    const url = 'http://localhost:3001/man_fund/project_price_desc'

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

  // 系列
  useEffect(() => {
    getSeriesFromSQL()
  }, [series])

  useEffect(() => {
    getTimeFromSQL()
  }, [time])

  useEffect(() => {
    getDescFromSQL()
  }, [orderBy2])
  // // 價錢排序
  // useEffect(() => {
  //   getAscFromSQL()
  // }, [asc])

  // useEffect(() => {
  //   getDescFromSQL()
  // }, [desc])

  // jsx畫面
  useEffect(() => {
    getTotalFromSQL()
  }, [])

  return (
    <>
      <div className="context1">
        {/* <BannerE/> */}
        {/* {product.map((item, index) => { */}

        {/* })} */}

        <div className="container" id="productCards">
          <Breadcrumbw />
          <div className="e_lableboxx mt-5">
            <BookMark setFilterMark={setFilterMark} setTime={setTime} />
          </div>

          <div className="e_bifilter">
            <BookIcon setFilterIcon={setFilterIcon} setSeries={setSeries} />
          </div>

          <div className="dpd">
            <Dropdowna
              orderBy={orderBy}
              setOrderBy={setOrderBy}
              orderBy2={orderBy2}
              setOrderBy2={setOrderBy2}
            />
          </div>

          <div className="row  justify-content-center">
            {product.slice(0, viewProduct).map((item, index) => {
              return <FundListCard key={index} item={item} />
            })}
          </div>
          <div className="container">
            <div className="row">
              <button className="loadButton" onClick={handleClick}>
                LOAD MORE
              </button>
            </div>
          </div>
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

export default FundList
