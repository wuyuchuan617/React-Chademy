import React, { useState, useEffect } from 'react'
import series from '../images/series.jpg'
import { BsStarFill } from 'react-icons/bs'
import { BsFillHeartFill } from 'react-icons/bs'
import ProductModal from '../components/ProductModal'
import popularImg from '../images/777.jpg'

function ProductFirst(props) {
  const { item } = props

  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const [heart, setHeart] = useState(false)
  const [heartItem, setHeartItem] = useState({})
  const [visible, setVisible] = useState(false)

  const [photo1, setPhoto1] = useState(require('../../img/' + item.photo))

  const heartFill = {
    color: '#C77334',
  }

  const updateCartToLocalStorage = (value) => {
    // 從localstorage得到cart(json字串)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    console.log('currentCart', currentCart)

    // 把得到的cart(json字串)轉為陣列值，然後和新加入的物件值合併為新陣列
    const newCart = [...currentCart, value]

    // 設定回localstorage中(記得轉回json字串)
    localStorage.setItem('cart', JSON.stringify(newCart))

    console.log('newCart', newCart)
    // 設定資料
    // 設定至元件的狀態中
    setMycart(newCart)
    setProductName(value.name)
  }

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

  useEffect(() => {
    updateTotalToServer()
  }, [heartItem.follow_status])

  useEffect(() => {
    getHeartFromServer()
  }, [])

  return (
    <>
      <ProductModal visible={visible} setVisible={setVisible} photo1={photo1} />
      <div class="container firstTop">
        <div class="row justify-content-between">
          <div class="col-8">
            <div class="product_photo" onClick={() => setVisible(true)}>
              <img src={photo1} alt="" />
            </div>
            <div class="d-flex justify-content-between smallPhotos">
              <div class="product_photo_small">
                {/* <img src={require('../../img/' + item.photo)} alt="" /> */}
                <img
                  src={require('../../img/' + item.photo)}
                  alt=""
                  onClick={(e) => {
                    setPhoto1(e.target.src)
                  }}
                />
              </div>
              <div class="product_photo_small">
                <img
                  src={series}
                  alt=""
                  onClick={(e) => {
                    setPhoto1(e.target.src)
                  }}
                />
              </div>
              <div class="product_photo_small">
                <img
                  src={popularImg}
                  alt=""
                  onClick={(e) => {
                    setPhoto1(e.target.src)
                  }}
                />
              </div>
              <div class="product_photo_small">
                <img
                  src={series}
                  alt=""
                  onClick={(e) => {
                    setPhoto1(e.target.src)
                  }}
                />
              </div>
            </div>
          </div>
          <div class="col-4 right-part">
            <div class="d-flex product-name justify-content-between">
              <div class="subtitle3">{item.product_name}</div>
            </div>

            <div class="stars d-flex">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <p> （ 300則評論 ）</p>
            </div>
            <div class="heart justify-content-end">
              <BsFillHeartFill
                onClick={async () => {
                  await setHeart(!heart)
                  if (heart === false) {
                    const newHeartItem = {
                      follow_product: item.product_name,
                      member_id: 'AMY',
                      follow_status: 1,
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
            <div class="bigDesc">
              <div class="product-desc">
                <p className="w_comP">
                  Adelaide是一款優雅的小傑作，無論從哪個角度看都美貌不減，而且無比舒適。纖細的有機線條營造了輕盈有機外觀，邀請您坐下來欣賞精緻的丹麥設計。
                </p>
              </div>

              <div class="product-desc">
                <p className="w_comP">
                  Adelaide是一款優雅的小傑作，無論從哪個角度看都美貌不減，而且無比舒適。纖細的有機線條營造了輕盈有機外觀，邀請您坐下來欣賞精緻的丹麥設計。
                </p>
              </div>

              <div class="choose-area">
                <p>選擇木頭：</p>
                <div class="d-flex">
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                </div>
              </div>

              <div class="choose-area">
                <p>選擇皮革：</p>
                <div class="d-flex">
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                  <div class="choose-wood"></div>
                </div>
              </div>

              <button
                class="cart-btn"
                onClick={() => {
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductFirst
