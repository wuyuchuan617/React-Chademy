import React from 'react'
// import { connect } from 'react-redux'
// import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import Carousel from 'react-elastic-carousel'
// import imageone from '../images/03.png'
import imagetwo from '../images/03-1.png'
import imagethree from '../images/03-2.png'
import imagefour from '../images/03-3.png'
import imagefive from '../images/03-4.png'
import imagesix from '../images/03-5.png'
import imageseven from '../images/03-6.png'
import imageeight from '../images/03-7.png'
import imagenine from '../images/03-8.png'
import imageten from '../images/03-9.png'
import heart from '../images/heart.svg'
import '../styles/slider.css'
import '../styles/workshop.css'

function WorkshopEight(props) {
  return (
    <>
      <div className="annie_wrapper100">
        <div className="title01">
          <div className="titlech noto-serif text-center">相關課程</div>
          <div className="titleEN lora text-center">Correlated Course</div>
        </div>
        <div className="row justify-content-center">
          <Carousel itemsToScroll={3} itemsToShow={3}>
            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imagetwo} />

                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>一日竹編籃工作坊</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imagethree} />
                <p>HOT</p>
                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>一日木湯匙工作坊</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imagefour} />
                <p>HOT</p>
                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>菊花紋竹編墊課程</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imagefive} />

                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>寵物營養學講座&寵物餐桌DIY</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imagesix} />

                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>木趣彈珠台</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imageseven} />

                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>多功能旋轉收納架DIY</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imageeight} />
                <p>HOT</p>
                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>木趣彈珠台</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imagenine} />

                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>多功能旋轉收納架DIY</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
            <div className="boxonedayfilter">
              <div className="upper1filter">
                <img alt="" src={imageten} />

                <div className="box100filter">
                  <img alt="" id="image" src={heart} />
                </div>
              </div>

              <div className="wordonedayfilter">
                <div className="word1onedayfilter">
                  <h4>起司杯墊多種功能一次滿足</h4>
                  <h6>開課日期:2020/11/21</h6>
                </div>
                <div className="pricefilter">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
          </Carousel>
          {/* </div> */}
          {/* <div className="arrow col-sm-1">
            <a
              role="button"
              className="relative-btn-right d-flex justify-content-center align-items-center aaa"
            >
              <IoIosArrowDropright color="#707070" size={30} />
            </a>
          </div> */}
        </div>
      </div>
    </>
  )
}

// export default connect(mapStateToProps, {
//   swipeLeft,
//   swipeRight,
//   initAct,
// })(Slider)
export default WorkshopEight
