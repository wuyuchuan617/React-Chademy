import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import imagea from '../images/19.png'
import imageb from '../images/12-1.png'
import imagec from '../images/12-2.png'
import imaged from '../images/12-3.png'
import '../styles/slider.css'
import Carousel from 'react-elastic-carousel'

function ItemFive(props) {
  return (
    <div className="wrapper2">
      <div className="title01">
        <h2>文章特輯</h2>
      </div>
      <div className="row justify-content-center">
        <Carousel itemsToScroll={2} itemsToShow={2}>
          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imagea} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imageb} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imagec} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imaged} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                  <h6>發表時間:2020/09/15</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default ItemFive
