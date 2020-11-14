/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/bloglist.css'
// import imageblog from '../images/06_blog.jpg'
import ImgBlogfour from '../images/04_blog.jpg'
import ImgBlogfive from '../images/05_blog.jpg'
import ImgBlogseven from '../images/07_blog.jpg'
import ImgBlogeight from '../images/08_blog.jpeg'
import ImgBlognine from '../images/09_blog.jpeg'
import ImgBlogten from '../images/10_blog.jpeg'
import ImgBlogele from '../images/11_blog.jpeg'
import ImgBlogtwe from '../images/12_blog.jpg'
import ImgBlogthi from '../images/13_blog.jpeg'
import ImgBlogfourt from '../images/14_blog.jpeg'
import imageblogfif from '../images/18_blog.jpeg'
import imageblogfarmer from '../images/20_blog.jpeg'
import imageblogstone from '../images/21_blog.jpeg'
import imageblognature from '../images/22_blog.jpeg'
import imagewriter from '../images/48.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogListOne(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const { item } = props

  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [workshopName, setWorkshopName] = useState('')

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
    setWorkshopName(value.name)
  }

  return (
    <div className="a_blogwrap">
      <div className="container">
        <div className="row">
          <div className="a_blogblog col-9">
            <div
              className="a_blog_image"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
            >
              <img alt="" src={require('../../img/' + item.images)} />
            </div>
            <div className="d-flex a_blog-name justify-content-between">
              <div>{item.title}</div>
            </div>
            <div className="a_blog-desc">
              <p>{item.introduction}</p>
            </div>

            <div className="d-flex a_blog-name-title justify-content-between">
              <div>特點一：Hygge（丹麥式簡約）</div>
            </div>
            <div className="a_blog-desc-title">
              <p>
                Hygge
                是丹麥文化中一個有代表性的形容詞，它比極簡風格要質樸舒適，又比田園風格要簡約乾淨。
                在丹麥語中 Hygge
                類似舒適、溫馨的意思，而具體到家裝，則體現出簡約、質樸、自然、舒適的風格。針織品、原木材質、植物和適量的金屬裝飾是關鍵元素。其中，以各種造型別緻的設計師作品以及DIY
                床頭櫃尤其熱門。選擇一款材質特別、具有設計感的床頭櫃確實是提升臥室整體風格的有效辦法。在
                Pinterest 上既有入駐商家提供圖片中的產品鏈接，也有手作達人的 DIY
                製作教程，不少教程都配有視頻和分步圖解，滿足各種使用者的需求。
              </p>
              <div className="a_blogblog_image">
                <img alt="" src={imageblogfif} />
              </div>
            </div>

            <div className="d-flex a_blog-name-title justify-content-between">
              <div>特點二：農家風</div>
            </div>
            <div className="a_blog-desc-title">
              <p>
                做舊、質樸、自然的農家風。這一風格的裝飾要素是一些做舊的物件，比如說箱子、牆壁掛飾、擺件、具有農家味的裝飾物，比如說各種各樣的籐編、竹編製品以及各類植物和瓜果蔬菜等。當然木材也也是關鍵性的元素之一，可以用它作為牆磚，也可以用原木直接製作風格質樸的桌椅。
              </p>
              <div className="a_blogblog_image">
                <img alt="" src={imageblogfarmer} />
              </div>
            </div>

            <div className="d-flex a_blog-name-title justify-content-between">
              <div>特點三：大理石牆紙</div>
            </div>
            <div className="a_blog-desc-title">
              <p>
                總體來說 2020
                年“自然”會是家裝趨勢的一個核心關鍵詞，各種天然風格的材質格外受到歡迎。分析大理石風格壁紙持續走熱的緣由，一方面是受到早前極簡主義流行餘威的影響，另一方面它又能很好地從冷靜的極簡過渡到當下更有人情味的自然風格裝飾趨勢。
              </p>
              <div className="a_blogblog_image">
                <img alt="" src={imageblogstone} />
              </div>
            </div>

            <div className="d-flex a_blog-name-title justify-content-between">
              <div>特點四：壓克力</div>
            </div>
            <div className="a_blog-desc-title">
              <p>
                同樣是受到極簡主義餘威的影響。無論是運用亞克力的家具還是裝飾品，都值得嘗試。它其實屬於一款非常百搭的材質，無論是融入到復古典雅的裝修風格中來形成一種時間風格上的衝突，還是用於打造摩登簡約的家裝都很合適。尤其是黃銅製作的迷你花盆，無論是單一材料製作的簡單款式，還是與其他材質組合的設計都很別緻。除了花盆、桌椅、檯燈、收納籃子一類實用的產品，黃銅製作的裝飾品擺件也值得考慮。
              </p>
              <div className="a_blogblog_image">
                <img alt="" src={imageblognature} />
              </div>
            </div>

            <div className="d-flex a_blog-name-title justify-content-between">
              <div>總結</div>
            </div>
            <div className="a_blog-desc-title">
              <p>
                用最簡單的方法，掌握居家家飾的設計，總體來說，能從這些趨勢中感受到上一波極簡主義浪潮的影響，以及自然舒適裝修風格的持續走熱。
              </p>
            </div>

            <div className="a_blog-desc-connection">
              <div className="a_blog-desc-connectiontitle">文章標籤</div>
              <p>家具</p>
              <p>自然風格</p>
              <p>文青風</p>
              <p>簡約家居</p>
              <p>歐式風格</p>
            </div>

            <div className="a_blog-desc-writer">
              <div className="a_blog-desc-writertitle">創作者介紹</div>

              <div className="row d-flex justify-content-center no-gutters">
                <p className="col-3 a_blog2">
                  <img alt="" src={imagewriter} />
                </p>
                <div className="col-9 a_blog3">
                  <h6>EVA CHANG</h6>
                  <p>
                    台北人，現居新竹，喜歡新竹比台北多，在古董裡慢慢生活的女子。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="d-flex a_blog-popular_name justify-content-between">
              <div>人氣排行</div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogfour} />

                <div className="box300blog">
                  <p>1</p>
                </div>
                <div className="word1trainblog">
                  <h5>高級紅木家居</h5>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogfive} />

                <div className="box300blog">
                  <p>2</p>
                </div>
                <div className="word1trainblog">
                  <h5>懷舊復古家居</h5>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogseven} />

                <div className="box300blog">
                  <p>3</p>
                </div>
                <div className="word1trainblog">
                  <h5>檜木香13號房子</h5>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogeight} />

                <div className="box300blog">
                  <p>4</p>
                </div>
                <div className="word1trainblog">
                  <h5>童趣座椅</h5>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlognine} />

                <div className="box300blog">
                  <p>5</p>
                </div>
                <div className="word1trainblog">
                  <h5>彎木椅</h5>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogfourt} />

                <div className="box300blog">
                  <p>6</p>
                </div>
                <div className="word1trainblog">
                  <h5>優雅的營造空間</h5>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogthi} />

                <div className="box300blog">
                  <p>7</p>{' '}
                  <div className="word1trainblog">
                    <h5>簡單質樸之幸福</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogtwe} />

                <div className="box300blog">
                  <p>8</p>
                  <div className="word1trainblog">
                    <h5>療育與自然的結合</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogele} />

                <div className="box300blog">
                  <p>9</p>
                </div>
                <div className="word1trainblog">
                  <h5>畢卡索設計風格家居</h5>
                </div>
              </div>
            </div>
            <div
              className="box3blog"
              data-aos="fade-down"
              data-aos-delay="30000"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="upper3blog">
                <img alt="" src={ImgBlogten} />

                <div className="box300blog">
                  <p>10</p>
                </div>
                <div className="word1trainblog">
                  <h5>黑絨毛的質感</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogListOne
