/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import imageone from '../images/03.png'
import imagetwo from '../images/03-1.png'
import imagethree from '../images/03-2.png'
import heart from '../images/heart.svg'
import OneWorkShop from '../components/OneWorkShop'
import '../styles/slider.css'
import Carousel from 'react-elastic-carousel'

function ItemOne(props) {
  const { oneWorkShop } = props
  return (
    <div className="wrapper2">
      <div className="title01">
        <h2>一日木工體驗</h2>
      </div>
      <div className="row justify-content-center">
        <Carousel itemsToScroll={3} itemsToShow={3}>
          {oneWorkShop.map((item, index) => {
            return <OneWorkShop key={index} item={item} />
          })}

          {/* <div className="wordoneday">
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
                <img src={imageone} />
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
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxoneday">
              <div className="upper1">
                <img src={imagetwo} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日竹編體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxoneday">
              <div className="upper1">
                <img src={imagethree} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordoneday">
                <div className="word1oneday">
                  <h4>一日木湯匙體驗</h4>
                  <h6>開課日期:2020/09/15</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>$599</h4>
                </div>
              </div>
            </div>
          </div> */}
        </Carousel>
      </div>
    </div>
  )
}

export default ItemOne
