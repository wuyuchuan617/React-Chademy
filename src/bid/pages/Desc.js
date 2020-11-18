/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Slider from '../component/Slider'
import Bookmark from '../component/Bookmark'
import Record from '../component/Record'
import Setprice from '../component/Setprice'
import Carousel from 'react-elastic-carousel'
import Sidepic from '../component/Sidepic'
import Breadcrumb2 from '../component/Breadcrumb2'
import '../styles/desc.scss'
import { useParams } from 'react-router-dom'
import '../styles/designer.scss'
import { Button, Modal } from 'react-bootstrap'
import Win from '../component/Win'
import Countdown, { zeroPad } from 'react-countdown'
import Counter from '../component/Counter'
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import useInterval from 'use-interval'

function Desc(props) {
  let { id } = useParams()

  const {
    price,
    setPrice,
    pname,
    setPname,
    data,
    setMyCart,
    setCartAmount,
    cartamount,
    setTypeofProduct,
  } = props
  const [comma, setComma] = useState(null)
  const [startdate, setStartdate] = useState('')
  const [sid, setSid] = useState('')
  const [starttime, setStarttime] = useState('')
  const [enddate, setEnddate] = useState('')
  const [total, setTotal] = useState(0)
  const [endtime, setEndtime] = useState('')
  const [desc, setDesc] = useState([])
  const [material, setMaterial] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [productpic, setProductpic] = useState([])
  const [pic, setPic] = useState('')
  const [intro, setIntro] = useState('')
  const [name, setName] = useState('')
  const [member, setMember] = useState([])
  const [startprice, setStartprice] = useState([])
  const [part, setPart] = useState([])
  const [visiter, setVisiter] = useState([])
  const [sdate, setSdate] = useState('')
  const [edate, setEdate] = useState('')
  const [modalShow, setModalShow] = React.useState(false)
  const [noShowModel, setNoShowModel] = useState(false)
  const [changepage, setChangepage] = useState(2)
  const [inputValue, setInputValue] = useState('')
  const [recordComponent, setRecordComponent] = useState('')
  const [comma3, setComma3] = useState(null)
  const [changeColorStatus, setChangeColorStatus] = useState(false)
  const [show, setShow] = useState(false)
  const [addmoney, setAddmoney] = useState(0)
  const [chair, setChair] = useState(null) //for pic src
  const [lastOffset, setLastOffset] = useState(0) // 判斷 scrolltop

  const handleClose = () => {
    setShow(false)
    setNoShowModel(true)
  }
  const handleShow = () => setShow(true)
  // 判斷登入的狀態
  const isLogged = useSelector((state) => state.user.logged)
  // 設定競標資料索引值
  let tempDataIndex = 0

  async function initData() {
    const url = `http://localhost:3001/product/api/bid/${id}`

    const request = new Request(url, {
      method: 'GET',
      // body: JSON.stringify(newPrice),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setSid(data[0].sid)
    setSdate(data[0].sdate)
    setEdate(data[0].edate)
    setStartprice(data[0].startedPrice)
    setVisiter(data[0].visiter)
    setPart(data[0].participant)
    setStarttime(data[0].startingTime)
    setEndtime(data[0].bidTime)
    setStartdate(data[0].startingDate)
    setEnddate(data[0].bidDate)
    setProductpic(data[0].pic)
    setPname(data[0].productName)
    setPrice(data[0].current_price)
    setDesc(data[0].description)
    setMaterial(data[0].material)
    setDimensions(data[0].dimensions)
  }

  async function getDesigner() {
    const url = `http://localhost:3001/product/api/designer/${id}`

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setPic(data.designer_pic)
    setIntro(data.intro)
    setName(data.name)
  }
  async function getMember() {
    const url = `http://localhost:3001/product/api/member-record`

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()

    setMember(data)
  }

  const doSetRecordCompnent = () => {
    return (
      member.length > 0 &&
      member.map((item, index) => {
        if (item.bid_sid !== +id) return
        if (tempDataIndex > 5) return
        tempDataIndex++

        return (
          <Record
            key={index}
            index={index}
            item={item}
            price={price}
            comma={comma}
            {...props}
            getMember={getMember}
            changepage={changepage}
            changeColorStatus={changeColorStatus}
          />
        )
      })
    )
  }

  async function subscribe(inputValue) {
    const url = 'http://localhost:3001/product/api/sub'

    const subscriber = {
      member_sid: JSON.parse(localStorage.getItem('reduxState')).user.users.sid,
      product_sid: id,
      sub_price: inputValue,
      product_name: pname,
      total_price: price,
      name: JSON.parse(localStorage.getItem('reduxState')).user.users.name,
      sub_email: JSON.parse(localStorage.getItem('reduxState')).user.users
        .email,
    }
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(subscriber),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
  }

  async function addprice(value) {
    const url = 'http://localhost:3001/product/api/record'
    const copyPrice = price
    const newPrice = {
      member_sid: JSON.parse(localStorage.getItem('reduxState')).user.users.sid,
      product_sid: id,
      bid_sid: id,
      price: value,
      total_price: +copyPrice + value * 1,
      sid: id,
      name: JSON.parse(localStorage.getItem('reduxState')).user.users.name,
      email: JSON.parse(localStorage.getItem('reduxState')).user.users.email,
    }

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newPrice),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setPrice(+copyPrice + value * 1)
  }
  useEffect(() => {
    initData()
    getDesigner()
    getMember()
  }, [id])

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', fixed)
    const fixpoint = document.querySelector('.bidinfo')

    function fixed() {
      if (window.pageYOffset >= 297 && window.pageYOffset < 1370) {
        fixpoint.classList.add('g-fixed')
        fixpoint.classList.remove('g-unfixed')
      } else if (window.pageYOffset < 297) {
        fixpoint.classList.remove('g-fixed')
      } else if (window.pageYOffset >= 1370) {
        fixpoint.classList.remove('g-fixed')
        fixpoint.classList.add('g-unfixed')
      }

      setLastOffset(window.pageYOffset)
    }
  }, [lastOffset])

  useEffect(() => {
    const picarea = document.querySelector('.picarea')
    if (document.body.clientWidth <= 1199) {
      picarea.classList.remove('border-right')
    } else if (document.body.clientWidth > 1199) {
      picarea.classList.add('border-right')
    }
  }, [document.body.clientWidth])

  useEffect(() => {
    setChair(`http://localhost:3000/uploads/${productpic[0]}`)
  }, [productpic])

  //countdown
  function getTimeRemaining(enddate) {
    const s_time = new Date(startdate).getTime()
    const e_time = new Date(enddate).getTime()
    const total = e_time - s_time
    return total
  }

  useEffect(() => {
    const a = getTimeRemaining(enddate)
    setTotal(a)
  }, [enddate])

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state

      if (!noShowModel) {
        setTimeout(() => {
          setModalShow(true)
        }, 200)
      }
      return 'Sold out!'
    } else {
      // Render a countdown
      return (
        <div className="d-flex align-items-center justify-content-center ">
          <div className=" days d-flex flex-column">
            {zeroPad(days)}
            <span>days</span>
          </div>
          <div className=" days d-flex flex-column">
            {zeroPad(hours)}
            <span>hours</span>
          </div>
          <div className=" days d-flex flex-column">
            {zeroPad(minutes)}
            <span>minutes</span>
          </div>
          <div className="days d-flex flex-column">
            {zeroPad(seconds)}
            <span>seconds</span>
          </div>
        </div>
      )
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    const c = numberWithCommas(price)
    setComma(c)
    const d = numberWithCommas(startprice)
    setComma3(d)
    getNewPrice()
    getMember()
  }, [price])

  function showRecord() {
    setChangeColorStatus(true)
  }

  async function getNewPrice() {
    const url = `http://localhost:3001/product/api/bid/${id}`

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log('data', data)
    setPrice(data[0].current_price)
  }

  useEffect(() => {
    setRecordComponent(doSetRecordCompnent())
  }, [member])

  return (
    <>
      {/* countdown */}

      <div className="container">
        <div className="row justify-content-center counter">
          {/* <Countdown date={Date.now() + (+total) } renderer={renderer}> */}
          {new Date(startdate).getTime() > Date.now() ? (
            <div className="g-startbid">將於 {startdate}開始競標</div>
          ) : new Date(enddate).getTime() > Date.now() ? (
            <Countdown
              date={new Date(enddate).getTime()}
              renderer={renderer}
            ></Countdown>
          ) : (
            <div className="g-startbid">已結標</div>
          )}
        </div>

        {/* Desc */}

        <div className="row d-flex g-main-area ">
          <div className="picarea border-right g-main-border">
            <Breadcrumb2 sid={sid} pname={pname}/>
            <div className="mainpic">
              <img alt="" src={chair} />
            </div>
            <div className="sidepic d-flex">
              {productpic.map((item, index) => {
                if (productpic.length > 4) return (productpic.length = 4)
                return (
                  <Sidepic
                    key={index}
                    item={item}
                    productpic={productpic}
                    setProductpic={setProductpic}
                    setChair={setChair}
                  />
                )
              })}
            </div>

            <div className="info">
              <ScrollParallax
                animation={[
                  // { x: 0, opacity: 1, playScale: [0, 1.5] },
                  { y: 0, opacity: 1, playScale: [0, 1] },
                  { blur: '10px', playScale: [0, 3] },
                ]}
                style={{
                  transform: 'translateY(10px)',
                  filter: 'blur(0px)',
                  opacity: 0,
                }}
              >
                <h4 className="text-center">產品簡介</h4>
                <div className="line2"></div>
                <p className="g-intro-length">{desc}</p>
              </ScrollParallax>
            </div>
            <div className="info">
              <ScrollParallax
                animation={[
                  // { x: 0, opacity: 1, playScale: [0, 1.5] },
                  { y: 0, opacity: 1, playScale: [0, 1] },
                  { blur: '10px', playScale: [0, 1] },
                ]}
                style={{
                  transform: 'translateY(50px)',
                  filter: 'blur(0px)',
                  opacity: 0,
                }}
              >
                <h4 className="text-center">產品規格</h4>
                <div className="line2"></div>
                <div className="justify-content-center d-flex">
                  <div className="col-6">
                    <h4 className="text-center">尺寸</h4>
                    <p>{dimensions}</p>
                  </div>
                  <div className="col-6">
                    <h4 className="text-center ">材質</h4>
                    <div className="g-material">
                      <p className="text-left ">{material}</p>
                    </div>
                  </div>
                </div>
              </ScrollParallax>
            </div>

            <ScrollParallax
              animation={[
                // { x: 0, opacity: 1, playScale: [0, 1.5] },
                { y: 0, opacity: 1, playScale: [0, 1] },
                { blur: '10px', playScale: [0, 3] },
              ]}
              style={{
                transform: 'translateY(10px)',
                filter: 'blur(0px)',
                opacity: 0,
              }}
            >
              <Bookmark setChangepage={setChangepage} />

              <div className="">
                <div className="col">
                  <div className="g-bg p-3">
                    {changepage == 2 ? (
                      <table className="w-100 text-center mt-3">
                        <thead>
                          <tr className="w-100 text-center">
                            <th className="w-25">競標者</th>
                            <th className="w-25">下標金額</th>
                            <th className="w-25">總金額</th>
                            <th className="w-25">時間</th>
                          </tr>
                        </thead>
                        <tbody>{recordComponent}</tbody>
                      </table>
                    ) : (
                      <Setprice
                        changepage={changepage}
                        {...props}
                        comma={comma}
                        chair={chair}
                        // addprice={addprice}
                        enddate={enddate}
                        total={total}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        subscribe={subscribe}
                      />
                    )}
                  </div>
                </div>
              </div>
            </ScrollParallax>
          </div>

          <div className="bidinfo ml-2">
            {/* 動畫特效 */}
            {/* <ScrollParallax
              animation={[
                // { x: 0, playScale: [0, 1.5] },
                { y: 0, opacity: 1, playScale: [0, 1] },
                { blur: '10px', playScale: [0, 3] },
              ]}
              style={{
                transform: 'translateY(50px)',
                filter: 'blur(0px)',
                opacity: 0,
              }}
            > */}

            <h1>{pname}</h1>
            <h5 className="g-pDesc">{pname}單椅</h5>
            <h4>目前金額</h4>
            <div className="line3 my-4 w-100"></div>
            <h2 className="g-bidprice">${comma}</h2>
            {new Date(startdate).getTime() > Date.now() ? null : new Date(
                enddate
              ).getTime() < Date.now() ? null : (
              <p>出價</p>
            )}
            {new Date(startdate).getTime() > Date.now() ? null : new Date(
                enddate
              ).getTime() < Date.now() ? null : (
              <div className="g-addprice d-flex justify-content-between">
                <div
                  onClick={() => {
                    setAddmoney(1000)
                    handleShow()
                  }}
                  className="g-price d-flex justify-content-center align-items-center"
                >
                  $1,000
                </div>
                {/* 確定加價modal */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>確定要加價嗎？</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      不確定
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        addprice(addmoney)
                        handleClose()
                        showRecord()
                      }}
                    >
                      確定
                    </Button>
                  </Modal.Footer>
                </Modal>
                <div
                  onClick={() => {
                    setAddmoney(5000)
                    handleShow()
                  }}
                  className="g-price d-flex justify-content-center align-items-center"
                >
                  $5,000
                </div>
                <div
                  onClick={() => {
                    setAddmoney(10000)
                    handleShow()
                  }}
                  className="g-price d-flex justify-content-center align-items-center"
                >
                  $10,000
                </div>
              </div>
            )}
            <h4 className="pb-1">競標資訊</h4>
            <div className="line3 my-4  w-100"></div>
            <table>
              <tbody className="g-table text-left justify-content-center ">
                <tr>
                  <th>競標日期</th>
                  <td>
                    {sdate}~{edate}
                  </td>
                </tr>
                <tr>
                  <th>競標時間</th>
                  <td>
                    {starttime}~{endtime}
                  </td>
                </tr>
                <tr>
                  <th>起標價格</th>
                  <td>${comma3}</td>
                </tr>
                <tr>
                  <th>競標人數</th>
                  <td>{visiter}人</td>
                </tr>
                <tr>
                  <th>觀看人數</th>
                  <td>{part}人</td>
                </tr>
              </tbody>
            </table>
            <h2 className="g-smalltime text-center pt-4">
              <Counter total={total} enddate={enddate} startdate={startdate} />
            </h2>
            {new Date(startdate).getTime() > Date.now() ? null : new Date(
                enddate
              ).getTime() < Date.now() ? null : (
              <Button
                className="chat mt-0"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                直接購買
              </Button>
            )}
          </div>
        </div>

        {/* <QueueAnim delay={300} duration={2000} type={['right', 'left']} leaveReverse> */}
        <ScrollParallax
          animation={[
            // { x: 0, opacity: 1, playScale: [0, 1.5] },
            { y: 0, opacity: 1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 1] },
          ]}
          style={{
            transform: 'translateY(70px)',
            filter: 'blur(0px)',
            opacity: 0,
          }}
        >
          <div key="a" className="container g-designer-con">
            <div className="d-flex align-items-center ">
              <div className="designer-des d-flex align-items-center px-5">
                <div className="text-center">
                  <h3 className="design">DESIGN BY</h3>
                  <h1 className="name">{name}</h1>
                  <h3 className="brief">{intro}</h3>
                  <span>
                    <Link to="#">Learn more</Link>
                  </span>
                </div>
              </div>
              <div className="designer-img">
                <img alt="" src={pic} />
              </div>
            </div>
          </div>
        </ScrollParallax>
        {/* </QueueAnim> */}
        <ScrollParallax
          animation={[
            // { x: 0, opacity: 1, playScale: [0, 1.5] },
            { y: 0, opacity: 1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 1] },
          ]}
          style={{
            transform: 'translateY(70px)',
            filter: 'blur(0px)',
            opacity: 0,
          }}
        >
          <h2 className="grace-related-product text-center">相關產品</h2>
          <div className="row">
            <Carousel itemsToScroll={3} itemsToShow={3}>
              {data.map((item, index) => {
                if (data.length > 8) return (data.length = 8)
                return <Slider key={index} item={item} {...props} sid={sid} />
              })}
            </Carousel>
          </div>
        </ScrollParallax>
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

      <Win
        show={modalShow}
        onHide={() => setModalShow(false)}
        pname={pname}
        price={price}
        productpic={productpic}
        chair={chair}
        comma={comma}
        setNoShowModel={setNoShowModel}
        setTypeofProduct={setTypeofProduct}
        {...props}
      />
    </>
  )
}

export default Desc
