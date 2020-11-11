import React from 'react'
// import { connect } from 'react-redux'
// import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import Carousel from 'react-elastic-carousel'
import imageone from '../images/03.png'
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
      <div class="wrapper2">
        <div class="title01">
          <h2>猜你喜歡</h2>
        </div>
        <div className="row justify-content-center">
          <Carousel itemsToScroll={3} itemsToShow={3}>
            <div className="boxoneday">
              <div className="upper1">
                <img src={imagetwo} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日竹編籃工作坊</h4>
                  <h6>開課日期:2020-09-12</h6>
                  <h6>地點:台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxoneday">
              <div className="upper1">
                <img src={imagethree} />
                <p>HOT</p>
                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日木湯匙工作坊</h4>
                  <h6>開課日期:2020-09-15</h6>
                  <h6>地點:台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxoneday">
              <div className="upper1">
                <img src={imagefour} />
                <p>HOT</p>
                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>菊花紋竹編墊課程</h4>
                  <h6>開課日期:2020-11-21</h6>
                  <h6>地點:台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxoneday">
              <div className="upper1">
                <img src={imagefive} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日玫瑰花體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxoneday">
              <div className="upper1">
                <img src={imagesix} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日玫瑰花體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>

            <div className="boxoneday">
              <div className="upper1">
                <img src={imageseven} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日玫瑰花體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
            <div className="boxoneday">
              <div className="upper1">
                <img src={imageeight} />
                <p>HOT</p>
                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日玫瑰花體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
            <div className="boxoneday">
              <div className="upper1">
                <img src={imagenine} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日玫瑰花體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
            <div className="boxoneday">
              <div className="upper1">
                <img src={imageten} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日玫瑰花體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
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
