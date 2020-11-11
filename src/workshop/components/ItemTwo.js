import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import imagefour from '../images/09-1.png'
import imagefive from '../images/09-2.png'
import imagesix from '../images/09-3.png'
import imageseven from '../images/09-4.png'
import heart from '../images/heart.svg'
import '../styles/slider.css'
import Carousel from 'react-elastic-carousel'

function ItemTwo(props) {
  return (
    <div className="wrapper2">
      <div className="title01">
        <h2>職人養成班</h2>
      </div>
      <div className="row justify-content-center">
        <Carousel itemsToScroll={2} itemsToShow={2}>
          <div className="box2train">
            <div className="upper2">
              <img src={imagefour} />
              <p>HOT</p>
              <div className="box200">
                <img id="image" src={heart} />
              </div>
            </div>

            <div className="wordtrain">
              <div className="word1train">
                <h4>假日12天正規養成班</h4>
                <h6>開課日期:2020/09/15-2020/10/30</h6>
                <h6>地點:台灣/台北市</h6>
              </div>
              <div className="price">
                <h4>$25,000</h4>
              </div>
            </div>
          </div>

          <div className="box2train">
            <div className="upper2">
              <img src={imagefour} />
              <p>HOT</p>
              <div className="box200">
                <img id="image" src={heart} />
              </div>
            </div>

            <div className="wordtrain">
              <div className="word1train">
                <h4>假日12天正規養成班</h4>
                <h6>開課日期:2020/09/15-2020/10/30</h6>
                <h6>地點:台灣/台北市</h6>
              </div>
              <div className="price">
                <h4>$25,000</h4>
              </div>
            </div>
          </div>

          <div className="box3train">
            <div className="upper3">
              <img src={imagefive} />

              <div className="box300">
                <img id="image" src={heart} />
              </div>
            </div>

            <div className="wordtrain">
              <div className="word1train">
                <h4>平日12天正規養成班</h4>
                <h6>開課日期:2020/09/15-2020/10/30</h6>
                <h6>地點:台灣/台北市</h6>
              </div>
              <div className="price">
                <h4>$25,000</h4>
              </div>
            </div>
          </div>

          <div className="box2train">
            <div className="upper2">
              <img src={imagesix} />

              <div className="box200">
                <img id="image" src={heart} />
              </div>
            </div>

            <div className="wordtrain">
              <div className="word1train">
                <h4>假日12天正規養成班</h4>
                <h6>開課日期:2020/09/15-2020/10/30</h6>
                <h6>地點:台灣/台北市</h6>
              </div>
              <div className="price">
                <h4>$25,000</h4>
              </div>
            </div>
          </div>

          <div className="box3train">
            <div className="upper3">
              <img src={imageseven} />

              <div className="box300">
                <img id="image" src={heart} />
              </div>
            </div>

            <div className="wordtrain">
              <div className="word1train">
                <h4>平日12天正規養成班</h4>
                <h6>開課日期:2020/09/15-2020/10/30</h6>
                <h6>地點:台灣/台北市</h6>
              </div>
              <div className="price">
                <h4>$25,000</h4>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default ItemTwo
