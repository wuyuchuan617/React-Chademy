/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import imagea from '../images/19.png'
import imageb from '../images/12-1.png'
import imagec from '../images/12-2.png'
import imaged from '../images/12-3.png'
import imagee from '../images/12-4.png'
import imagef from '../images/12-5.png'
import imageg from '../images/12-6.png'
import imageh from '../images/12-7.png'
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
                  <h4>雕刻技藝-五大常見的雕刻技術</h4>
                  <h6>發表時間:2020/09/28</h6>
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
                  <h4>設計師專訪-作品成長的點滴</h4>
                  <h6>發表時間:2020/10/15</h6>
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
                  <h4>木頭製造工坊-自由創作的夢想空間</h4>
                  <h6>發表時間:2020/10/20</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imagee} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>紋理的奧妙-真假區別</h4>
                  <h6>發表時間:2020/10/21</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imagef} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>文創傳情-一日工作坊之成果</h4>
                  <h6>發表時間:2020/10/22</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imageg} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>廢棄物利用-化腐朽為神奇</h4>
                  <h6>發表時間:2020/10/28</h6>
                </div>
              </div>
              <div className="row justify-content-end">
                <button className="more-btn">MORE</button>
              </div>
            </div>
          </div>

          <div className="box6title row no-gutters">
            <div className="col-md-5">
              <img src={imageh} />
            </div>
            <div className="col-md-7">
              <div className="wordtitle">
                <div className="word1title">
                  <h4>木平台-難得一見的展覽</h4>
                  <h6>發表時間:2020/11/15</h6>
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
