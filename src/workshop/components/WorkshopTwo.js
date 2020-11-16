/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainsix from '../images/35.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function WorkshopTwo(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="annie_wrapper800">
      <div className="row">
        <div
          className="col"
          data-aos="fade-right"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="workshop_image">
            <img src={imagemainsix} />
          </div>
        </div>

        <div
          className="col"
          data-aos="fade-left"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="title01">
            <div className="titlech noto-serif text-center">完善的木工教室</div>
            <div className="titleEN lora text-center">Perfect Factory</div>
          </div>

          <div className="workshop-desc">
            <p>八種電動工具</p>
            <p>(1)5分鑿刀</p>
            <p>(2)1吋鑿刀</p>
            <p>(3)3分三角筍鑿</p>
            <p>(4)鑿刀套</p>
            <p>(5)油罐</p>
            <p>(6)240mm雙面鋸</p>
            <p>(7)1.8吋手工鉋刀</p>
            <p>(8)鳩尾規</p>
            <p>教室亦提供代購服務，可於第一堂課選購。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopTwo
