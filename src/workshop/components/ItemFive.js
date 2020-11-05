import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import imagea from '../images/19.png'
import imageb from '../images/12-1.png'
import imagec from '../images/12-2.png'
import imaged from '../images/12-3.png'

function ItemFive(props) {
  return (
    <div className="container-fluid">
      <div className="wrapper2">
        <div className="title01">
          <h2>文章特輯</h2>
        </div>
        <div className="row">
          <div className="article col-md-6 mb-12">
            <div class="box6title row no-gutters">
              <div class="col-md-5">
                <img src={imagea} />
              </div>
              <div class="col-md-7">
                <div class="wordtitle">
                  <div class="word1title">
                    <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                    <h6>發表時間:2020/09/15</h6>
                  </div>
                </div>
                <div class="row justify-content-end">
                  <button class="more-btn">MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-6 mb-12">
            <div class="box6title row no-gutters">
              <div class="col-md-5">
                <img src={imageb} />
              </div>
              <div class="col-md-7">
                <div class="wordtitle">
                  <div class="word1title">
                    <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                    <h6>發表時間:2020/09/15</h6>
                  </div>
                </div>
                <div class="row justify-content-end">
                  <button class="more-btn">MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-6 mb-12">
            <div class="box6title row no-gutters">
              <div class="col-md-5">
                <img src={imagec} />
              </div>
              <div class="col-md-7">
                <div class="wordtitle">
                  <div class="word1title">
                    <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                    <h6>發表時間:2020/09/15</h6>
                  </div>
                </div>
                <div class="row justify-content-end">
                  <button class="more-btn">MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-6 mb-12">
            <div class="box6title row no-gutters">
              <div class="col-md-5">
                <img src={imaged} />
              </div>
              <div class="col-md-7">
                <div class="wordtitle">
                  <div class="word1title">
                    <h4>木頭知識入門-如何辨別好木頭與壞木頭</h4>
                    <h6>發表時間:2020/09/15</h6>
                  </div>
                </div>
                <div class="row justify-content-end">
                  <button class="more-btn">MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemFive
