/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagehistoryone from '../images/28.png'
import imagehistorytwo from '../images/29.png'
import imagehistorythree from '../images/30.png'
import imagehistoryfour from '../images/31.png'
import imagehistoryfive from '../images/32.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ItemSix(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="annie_wrapper800">
      <div className="title01">
        <div className="titlech noto-serif text-center">歷年成果</div>
        <div className="titleEN lora text-center">Past achievements</div>
      </div>
      <div className="row">
        <div
          className="article col-md-8 mb-12"
          data-aos="fade-up"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="box7history">
            <div className="upper7history">
              <img src={imagehistoryone} />
            </div>
          </div>
        </div>

        <div
          className="article col-md-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="box7history">
            <div className="upper7history">
              <img src={imagehistorytwo} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="article col-md-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="box7history">
            <div className="upper7history">
              <img src={imagehistorythree} />
            </div>
          </div>
        </div>
        <div
          className="article col-md-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="box7history">
            <div className="upper7history">
              <img src={imagehistoryfour} />
            </div>
          </div>
        </div>

        <div
          className="article col-md-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="box7history">
            <div className="upper7history">
              <img src={imagehistoryfive} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemSix
