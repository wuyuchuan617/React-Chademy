/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import imagework from '../images/11.jpg'
import imageworker from '../images/12.jpg'
import imageworkerthree from '../images/11-1.png'
import imageworkerfour from '../images/11-2.png'
import '../styles/slider.css'
import Carousel from 'react-elastic-carousel'

function ItemFour(props) {
  return (
    <div className="annie_wrapper200">
      <div className="title01">
        <div className="titlech noto-serif text-center">木工創客</div>
        <div className="titleEN lora text-center">Wood Maker</div>
      </div>
      <div className="row justify-content-center">
        <Carousel itemsToScroll={2} itemsToShow={2}>
          <div className="box5worker">
            <div className="upper5">
              <img alt="" src={imagework} />
            </div>

            <div className="wordworker">
              <div className="word1worker">
                <h4>木工創客展覽室</h4>
                <h6>營業時間:09:00-18:00</h6>
                <h6>地點:台灣/台北市</h6>
              </div>
            </div>
          </div>

          <div className="box5worker">
            <div className="upper5">
              <img alt="" src={imageworker} />
            </div>

            <div className="wordworker">
              <div className="word1worker">
                <h4>木工創客實驗室</h4>
                <h6>營業時間:09:00-21:00</h6>
                <h6>地點:台北市</h6>
              </div>
            </div>
          </div>

          <div className="box5worker">
            <div className="upper5">
              <img alt="" src={imageworkerthree} />
            </div>

            <div className="wordworker">
              <div className="word1worker">
                <h4>雷雕廠房</h4>
                <h6>營業時間:09:00-21:00</h6>
                <h6>地點:台北市</h6>
              </div>
            </div>
          </div>

          <div className="box5worker">
            <div className="upper5">
              <img alt="" src={imageworkerfour} />
            </div>

            <div className="wordworker">
              <div className="word1worker">
                <h4>木工上漆室</h4>
                <h6>營業時間:09:00-21:00</h6>
                <h6>地點:台北市</h6>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default ItemFour
