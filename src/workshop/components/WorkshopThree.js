/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainseven from '../images/36.png'
import imagemaineight from '../images/37.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function WorkshopThree(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="annie_wrapper900">
      <div className="title01">
        <div className="titlech noto-serif text-center">豐富的木頭材料</div>
        <div className="titleEN lora text-center">Abundant Materials</div>
      </div>
      <div className="row">
        <div
          className="article col-md-6 mb-12"
          data-aos="zoom-in"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="boxwood">
            <div className="upper5">
              <img src={imagemainseven} />
            </div>
            <div className="word2">
              <div className="word3">
                <h4>原木材料DIY木工坊</h4>
                <p>
                  木百貨是專業的製材加工廠，專業進口生產木板、原木、實木板、薄木板、松木拼板等，透過大量生產規格化尺寸材料，提供最優惠的價格，可配合政府單位核銷流程。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="article col-md-6 mb-12"
          data-aos="zoom-in"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="boxwood">
            <div className="upper5">
              <img src={imagemaineight} />
            </div>
            <div className="word2">
              <div className="word3">
                <h4>專業合成版</h4>
                <p>
                  工廠常備各式尺寸材料，歡迎同行大量採購整棧批發，大量另可訂購客製化尺寸，代客一般裁切、雷切代工裁切、砂光導角，連工帶料價格最便宜。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopThree
