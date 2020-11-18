/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
// import ProductModal from '../components/ProductModal'

import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FundModal from '../components/FundModal'
import '../styles/FundItem.scss'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ProgressE from './ProgressE'
import small1 from '../images/dt2.jpeg'
import small2 from '../images/dt3.jpeg'
import small3 from '../images/dt4-1.jpeg'
import { AiFillInfoCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import { FaChessQueen } from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa'

import dt2 from '../images/dt2.jpeg'
import dt3 from '../images/dt3.jpeg'
import dt4 from '../images/dt4-1.jpeg'
import dt5 from '../images/Image 32.png'
import ItemModal from '../components/ItemModal'
import BreadcrumbwTwo from '../components/BreadcrumbwTwo'

function FundIFirst(props) {
  const { item, sid, cartamount, setCartAmount } = props
  const localData = {
    img: item.e_pic,
    id: item.e_proname,
    price: item.e_lowprice,
    amount: 1,
  }

  const isLogged = useSelector((state) => state.user.logged)

  const [myCart, setMyCart] = useState([])
  const [heart, setHeart] = useState(false)
  const [heartItem, setHeartItem] = useState({})
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)

  const [changeshow, setChangeShow] = useState(0)

  const [photo, setPhoto] = useState(`http://localhost:3001/img/${item.e_pic}`)

  useEffect(() => {
    setPhoto(`http://localhost:3001/img/${item.e_pic}`)
  }, [item])

  const heartFill = {
    color: '#C77334',
  }

  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      currentCart[index].amount++
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMyCart(currentCart)
  }

  async function getHeartFromServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_fund/heart/' + item.e_proname

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    if (data.length > 0) {
      setHeart(true)
    }
  }
  //從localstroage拿資料
  const updateStoryToLocalStorage = (item) => {
    console.log(item)
    const currentStory = JSON.parse(localStorage.getItem('showStory')) || []

    // find if the product in the localstorage with its id
    const index = currentStory.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      currentStory[index].amount++
    } else {
      currentStory.push(item)
    }

    localStorage.setItem('showStory', JSON.stringify(currentStory))
    console.log('------', currentStory)

    // 設定資料
  }
  async function updateTotalToServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_fund/addheart'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(heartItem),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data.success)
    setHeart(data.success)
  }

  async function deleteHeartToServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_fund/del/' + item.e_proname

    const request = new Request(url, {
      method: 'DELETE',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data)
  }

  // useEffect(() => {
  //   if (!heart) return
  //   updateTotalToServer()
  // }, [heart])

  useEffect(() => {
    getHeartFromServer()
    updateStoryToLocalStorage(localData)
    console.log('hihi')
  }, [])
  return (
    <>
      <FundModal visible={visible} setVisible={setVisible} photo={photo} />
      <div className="container firstTop">
        <BreadcrumbwTwo item={item} />
        <div className="row justify-content-between">
          <div className="col-8">
            <div className="product_photo" onClick={() => setVisible(true)}>
              <img src={photo} alt="" />
            </div>
            <div className="d-flex justify-content-between smallPhotos">
              <div className="product_photo_small">
                {/* <img src={require('../../img/' + item.photo)} alt="" /> */}
                <img
                  src={require('../../img/' + item.e_pic)}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={small1}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={small2}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={small3}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
            </div>

            <div className="share_area d-flex">
              <p className="share d-flex">分享至</p>
              <div className="box d-flex"></div>
              <div className="share-icon d-flex">
                <div className="fa ">
                  <FaFacebookMessenger />
                </div>

                <div className="fa ">
                  <FaFacebook />
                </div>

                <div className="fa ">
                  <FaShareAlt />
                </div>
              </div>
            </div>

            <hr />

            {/* <div className="line "></div> */}
          </div>
          <div className="col-4 right-part">
            <div className="d-flex product-name justify-content-between">
              <div className="subtitle3">
                {item.e_proname}{' '}
                <span className="by">
                  by Eva
                  <AiFillInfoCircle />
                </span>
              </div>
            </div>
            <div className="heart justify-content-end">
              <BsFillHeartFill
                onClick={async () => {
                  await setHeart(!heart)
                  if (heart === false) {
                    const newHeartItem = {
                      e_follow_product: item.e_proname,
                      e_member_id: 'AMY',
                      e_follow_status: 1,
                    }
                    await setHeartItem(newHeartItem)
                    updateTotalToServer()
                  } else {
                    deleteHeartToServer()
                    setHeart(false)
                    setHeartItem({})
                  }
                }}
                style={heart ? heartFill : ''}
              />
            </div>
            <div className="bigDesc">
              <div className="product-desc">
                <p className="w_comP">{item.e_prointro}</p>
              </div>

              <p className="e_price">${item.e_lowprice}</p>

              <div className="e_target">
                <p className="e_tar">目標金額：${item.e_goal}</p>
              </div>

              <div className="barwrapper">
                <div className="progress">
                  <div
                    className="progress_bar"
                    id="progress_bar"
                    role="progressbar"
                    aria-valuenow="42"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <ProgressE item={item} />
                  </div>
                </div>
              </div>

              <div className="e_ptarget">
                <p className="e_ptar">募資進度：${item.e_progress_money}</p>
              </div>

              <hr />

              <div className="e_left">
                <p className="e_leff">
                  <span>剩餘時間 : {item.e_day} 天</span>
                  <br />
                  {item.e_start_time}
                  <br />
                  <div className="e_lefff">至</div>
                  {item.e_end_time}
                </p>
              </div>

              <div className="e_man">
                <p className="e_mann">贊助人數 :{item.e_men}人</p>
              </div>

              <ItemModal
                show={show}
                setShow={setShow}
                setChangeShow={setChangeShow}
              />

              {isLogged ? (
                <button
                  className="e_cart-btn"
                  onClick={() => {
                    // setCartAmount(cartamount + 1)
                    // updateCartToLocalStorage({
                    //   product_no: item.sid,
                    //   id: item.e_proname,
                    //   img: item.e_pic,
                    //   amount: 1,
                    //   price: item.e_lowprice,
                    //   category: 4,
                    // })
                    setShow(true)
                    console.log('123')
                    console.log(show)
                    // setVisible(true)
                  }}
                >
                  贊助
                </button>
              ) : (
                <button
                  className="e_cart-btn"
                  onClick={() => {
                    props.history.push('/login')
                  }}
                >
                  贊助 請先登入
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-7">
            <h3 className="p_title">Easy Seat</h3>
            <p className="intro_p">
              柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
              Pedersen
              的有機設計通過精美的工藝設計加以呈現，將成為您起居室中的標誌性家居。
            </p>

            <img className="inner-pic" src={dt2} alt="" />

            <div className="ip2 d-flex">
              <img className="inner-pic2 d-flex" src={dt3} alt="" />

              <h4 className="pic2-h4 d-flex">Feast for the eyes</h4>
            </div>

            <p className="inner-pic2-p ">
              柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
              Pedersen 的有機設計通過精美的工藝設計加以呈現。
            </p>

            <div className="pic3">
              <img className="inner-pic3" src={dt4} alt="" />
            </div>

            <h4 className="pic3-h4">Genuine comfort</h4>
            <p className="pic3-p">
              柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
              Pedersen
              的有機設計通過精美的工藝設計加以呈現，將成為您起居室中的標誌性家居。
            </p>

            <div className="dim">
              <h4 className="details">Dimensions & Details</h4>
            </div>

            <div className="dim-p">
              <p className="pic4-p">
                椅高：83cm <br />
                寬度：53cm <br />
                材質：混合聚酯、絨毛 <br />
                顏色：綠、藍 <br />
                型號：CHALLE021GRE-UK <br />
              </p>
            </div>

            <img className="details-pic" src={dt5} alt="" />
          </div>

          <div className="col-5 e_co">
            <div className="small_card">
              <h4 className="e_account">
                <FaChessQueen />
                <span className="e_name">Eva</span>
              </h4>

              <h3 className="em">熱情贊助：＄105,000</h3>

              <h3 className="emp">期待拿到實體貨的那天～</h3>
              <h4 className="emday">
                <FaHandHoldingHeart />
                <span className="emdayp"> 五天前</span>
              </h4>
            </div>

            <div className="small_card">
              <h4 className="e_account">
                <FaChessQueen />
                <span className="e_name">Abby</span>
              </h4>

              <h3 className="em">熱情贊助：＄303,000</h3>

              <h3 className="emp">加油喔！</h3>
              <h4 className="emday">
                <FaHandHoldingHeart />
                <span className="emdayp"> 兩天前</span>
              </h4>
            </div>

            <div className="small_card">
              <h4 className="e_account">
                <FaChessQueen />
                <span className="e_name">Gaby</span>
              </h4>

              <h3 className="em">熱情贊助：＄513,000</h3>

              <h3 className="emp">希望盡快拿到椅子～</h3>
              <h4 className="emday">
                <FaHandHoldingHeart />
                <span className="emdayp"> 兩天前</span>
              </h4>
            </div>

            <div className="small_card">
              <h4 className="e_account">
                <FaChessQueen />
                <span className="e_name">Nike</span>
              </h4>

              <h3 className="em">熱情贊助：＄313,500</h3>

              <h3 className="emp">希望品質優良</h3>
              <h4 className="emday">
                <FaHandHoldingHeart />
                <span className="emdayp"> 兩天前</span>
              </h4>
            </div>

            <div className="small_card">
              <h4 className="e_account">
                <FaChessQueen />
                <span className="e_name">Momo</span>
              </h4>

              <h3 className="em">熱情贊助：＄508,000</h3>

              <h3 className="emp">力挺朋友</h3>
              <h4 className="emday">
                <FaHandHoldingHeart />
                <span className="emdayp"> 一天前</span>
              </h4>
            </div>

            <div className="small_card">
              <h4 className="e_account">
                <FaChessQueen />
                <span className="e_name">Linda</span>
              </h4>

              <h3 className="em">熱情贊助：＄613,000</h3>

              <h3 className="emp">力挺朋友+1</h3>
              <h4 className="emday">
                <FaHandHoldingHeart />
                <span className="emdayp">一天前</span>
              </h4>
            </div>

            <div className={changeshow === 0 ? 'small_card1' : 'small_card'}>
              <h4 className="e_account">
                <FaChessQueen />
                <span className="e_name">Ian</span>
              </h4>

              <h3 className="em">熱情贊助：＄123,011</h3>

              <h3 className="emp">加油</h3>
              <h4 className="emday">
                <FaHandHoldingHeart />
                <span className="emdayp"> 今天</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(FundIFirst)
