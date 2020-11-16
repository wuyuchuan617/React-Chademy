/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imageevaluationone from '../images/40.png'
import imageevaluationtwo from '../images/41.png'
import imageevaluationthree from '../images/42.png'
import imageevaluationfour from '../images/43.png'
import imagestar from '../images/star.svg'
import imagestarone from '../images/star-02.svg'
import imagestartwo from '../images/star-03.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function WorkshopSeven(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="annie_wrapper900">
      <div className="title01">
        <div className="titlech noto-serif text-center">課程評價</div>
        <div className="titleEN lora text-center">Course Evaluation</div>
      </div>
      <div className="row justify-content-center">
        <div
          className="article col-md-3 mb-3"
          data-aos="fade-down"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="boxevaluation">
            <div className="upperevaluation">
              <img src={imageevaluationone} />
            </div>
            <div className="wordevaluation">
              <div className="word1evaluation">
                <img src={imagestar} />
                <h5>好課程推薦</h5>
                <p>
                  這是我所見過最札實厲害的木工課程，在這12天的過程中，讓我獲益良多。尤其是
                  <span>課程結合募資</span>，實現了我的夢想。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="article col-md-3 mb-3"
          data-aos="fade-down"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="boxevaluation">
            <div className="upperevaluation">
              <img src={imageevaluationtwo} />
            </div>
            <div className="wordevaluation">
              <div className="word1evaluation">
                <img src={imagestarone} />
                <h5>我的最愛</h5>
                <p>
                  厲害的課程，<span>這種課程+募資的結合</span>
                  ，讓我在上課時非常無敵累，但是與團隊成員合作，讓我覺得非常開心，如果時間久一點，可以學更多。不推不行啊!!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="article col-md-3 mb-3"
          data-aos="fade-down"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="boxevaluation">
            <div className="upperevaluation">
              <img src={imageevaluationthree} />
            </div>
            <div className="wordevaluation">
              <div className="word1evaluation">
                <img src={imagestartwo} />
                <h5>真心愛上</h5>
                <p>
                  <span>這種課程加上募資的組合方案</span>
                  ，讓我在上課時非常無敵累，但是與團隊成員合作，讓我覺得非常開心，如果時間久一點，可以學更多。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="article col-md-3 mb-3"
          data-aos="fade-down"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="boxevaluation">
            <div className="upperevaluation">
              <img src={imageevaluationfour} />
            </div>
            <div className="wordevaluation">
              <div className="word1evaluation">
                <img src={imagestarone} />
                <h5>最棒的課程</h5>
                <p>
                  這是我所見過最札實厲害的木工課程，在這12天的過程中，讓我獲益良多。
                  <span>
                    尤其是課程結合募資，讓我作品能夠量產的夢想又更進了一步，謝謝Chademy有這個平台，實現夢想。
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <button className="more-btn">MORE</button>
      </div>
    </div>
  )
}

export default WorkshopSeven
