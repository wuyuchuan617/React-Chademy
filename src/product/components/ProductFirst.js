import React, { useState, useEffect } from 'react'

import { BsFillHeartFill } from 'react-icons/bs'
import ProductModal from '../components/ProductModal'

import { Rate } from 'antd'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Breadcrumbw from '../components/Breadcrumbw'
import { Anchor } from 'antd'

const { Link } = Anchor

function ProductFirst(props) {
  const {
    item,
    review,
    sid,
    cartamount,
    setCartAmount,
    resetShow,
    setResetShow,
  } = props

  const isLogged = useSelector((state) => state.user.logged)

  const onChange = (link) => {
    console.log('Anchor:OnChange', link)
  }

  const [myCart, setMyCart] = useState([])
  // const [show, setShow] = useState(false)
  // const [productName, setProductName] = useState('')
  const [heart, setHeart] = useState(false)
  const [heartItem, setHeartItem] = useState({})
  const [visible, setVisible] = useState(false)
  const [avgStar, setAvgStar] = useState(0)
  const [member, setMember] = useState('')

  useEffect(() => {
    let aveStars = 0

    for (let i = 0; i < review.length; i++) {
      aveStars += parseInt(review[i].stars)
    }

    console.log(aveStars, review.length, parseInt(aveStars / review.length))

    if (review.length) setAvgStar(parseInt(aveStars / review.length))
  }, [review])

  const [photo, setPhoto] = useState(`http://localhost:3001/img/${item.photo}`)

  useEffect(() => {
    setPhoto(`http://localhost:3001/img/${item.photo}`)
  }, [sid])

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

  // const updateCartToLocalStorage = (value) => {
  //   // 從localstorage得到cart(json字串)
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || []

  //   console.log('currentCart', currentCart)

  //   // 把得到的cart(json字串)轉為陣列值，然後和新加入的物件值合併為新陣列
  //   const newCart = [...currentCart, value]

  //   // 設定回localstorage中(記得轉回json字串)
  //   localStorage.setItem('cart', JSON.stringify(newCart))

  //   console.log('newCart', newCart)
  //   // 設定資料
  //   // 設定至元件的狀態中
  //   setMycart(newCart)
  //   setProductName(value.name)
  // }

  async function getHeartFromServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_product/heart/' + item.product_name

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

    //   // 驗証成功後再設定…
    //   setTotal(total + value)
    // } catch (error) {
    //   setError(error)
    // }
  }

  async function updateTotalToServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_product/addheart'

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

    //   // 驗証成功後再設定…
    //   setTotal(total + value)
    // } catch (error) {
    //   setError(error)
    // }
  }

  async function deleteHeartToServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_product/del/' + item.product_name

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

    //   // 驗証成功後再設定…
    //   setTotal(total + value)
    // } catch (error) {
    //   setError(error)
    // }
  }

  function getCartFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .sid
    //d
    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMember(newMember)
  }

  useEffect(() => {
    updateTotalToServer()
  }, [heartItem.product_type])

  useEffect(() => {
    getHeartFromServer()
    getCartFromLocalStorage()
  }, [])

  return (
    <>
      <ProductModal visible={visible} setVisible={setVisible} photo={photo} />
      <div className="container firstTop">
        <div className="row  mt-5 wbread">
          <Breadcrumbw item={item} />
        </div>

        <div className="row justify-content-between">
          <div className="col-8">
            <div className="product_photo" onClick={() => setVisible(true)}>
              <img src={photo} alt="" />
            </div>
            <div className="d-flex justify-content-between smallPhotos">
              <div className="product_photo_small">
                {/* <img src={require('../../img/' + item.photo)} alt="" /> */}
                <img
                  src={`http://localhost:3001/img/` + item.photo}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={`http://localhost:3001/img/` + item.photo2}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={`http://localhost:3001/img/` + item.photo3}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
              <div className="product_photo_small">
                <img
                  src={`http://localhost:3001/img/` + item.photo4}
                  alt=""
                  onClick={(e) => {
                    setPhoto(e.target.src)
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-4 right-part">
            <div className="d-flex product-name justify-content-between">
              <div className="subtitle3">{item.product_name}</div>
            </div>

            <div className="stars d-flex">
              {/* {review.map((item, index, array) => {
                return ( */}
              <Rate
                disabled
                allowHalf
                style={{ color: '#C77334', fontSize: 24 + 'px' }}
                count={avgStar}
              />
              {/* )
              })} */}
              <Anchor affix={false} onChange={onChange}>
                <Link href="#w_review" title={`（ ${review.length}則評論 ）`}>
                  {/* <p> （ {review.length}則評論 ）</p> */}
                </Link>
              </Anchor>
            </div>
            <div className="heart justify-content-end">
              <BsFillHeartFill
                onClick={async () => {
                  await setHeart(!heart)
                  if (heart === false) {
                    const newHeartItem = {
                      follow_product: item.product_name,
                      product_no: item.product_no,
                      member_id: member,
                      product_type: 1,
                      price: item.price,
                    }
                    await setHeartItem(newHeartItem)
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
                <p className="w_comP">
                  Adelaide是一款優雅的小傑作，無論從哪個角度看都美貌不減，而且無比舒適。纖細的有機線條營造了輕盈有機外觀，邀請您坐下來欣賞精緻的丹麥設計。
                </p>
              </div>
              <div className="product-desc">
                <p className="w_comP">
                  Adelaide是一款優雅的小傑作，無論從哪個角度看都美貌不減，而且無比舒適。纖細的有機線條營造了輕盈有機外觀，邀請您坐下來欣賞精緻的丹麥設計。
                </p>
              </div>
              {/* <div className="choose-area">
                <p>選擇木頭：</p>
                <div className="d-flex">
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                </div>
              </div> */}
              {/* /*{' '}
              <div className="choose-area">
                <p>選擇皮革：</p>
                <div className="d-flex">
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                  <div className="choose-wood"></div>
                </div>
              </div> */}
              {/* <li className="share-facebook">
                <a
                  rel="nofollow noopener noreferrer"
                  data-shared="sharing-facebook-48785"
                  className="share-facebook sd-button share-icon no-text"
                  href="https://entertheloft.com/product/cylinder-high-by-studio-corkinho/?share=facebook&amp;nb=1"
                  target="_blank"
                  title="Click to share on Facebook"
                >
                  <span></span>
                  <span className="sharing-screen-reader-text">
                    Click to share on Facebook (Opens in new window)
                  </span>
                </a>
              </li> */}
              {/* <a
                href="https://www.facebook.com/sharer.php?u=https://www.cyberbiz.co/support/?p=855"
                target="_blank"
              >
                aaa
              </a> */}

              {/* <FacebookProvider appId="123456789">
                <Share href="http://www.facebook.com">
                  {({ handleClick, loading }) => (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleClick}
                    >
                      Share
                    </button>
                  )}
                </Share>
              </FacebookProvider> */}
              {/* <a href="https://lin.ee/unl5HeD">
                <img
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
                  alt="加入好友"
                  height="36"
                  border="0"
                />
              </a> */}
              <a
                target="_blank"
                href="//www.facebook.com/sharer.php?u=https://fernwehwoodworking.com/products/fernweh-woodworking-furniture-catalog-hard-copy"
                class="share__link"
              >
                <span class="icon icon-facebook" aria-hidden="true"></span>
                <span class="share__text">Share</span>
              </a>
              {isLogged ? (
                <div
                  className="btn_lessmargin more w_cart-btn"
                  onClick={() => {
                    setCartAmount(cartamount + 1)
                    updateCartToLocalStorage({
                      product_no: item.product_no,
                      id: item.product_name,
                      img: item.photo,
                      amount: 1,
                      price: item.price,
                      category: 1,
                    })
                  }}
                >
                  加入購物車
                </div>
              ) : (
                <div
                  className="btn_lessmargin more w_cart-btn"
                  onClick={() => {
                    props.history.push('/login')
                  }}
                >
                  加入購物車 請先登入
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductFirst)
