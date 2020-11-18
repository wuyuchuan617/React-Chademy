/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react'
import '../styles/blog.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import imageone from '../images/30-1_blog.jpg'
import imagetwo from '../images/30-2_blog.png'
import imagethree from '../images/30-3_blog.png'

function BookArticles(props) {
  const { oneBlog } = props
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className="container">
      <div className="title01">
        <div className="titlech noto-serif text-center">訂閱方案</div>
        <div className="titleEN lora text-center">
          Online Magazine Subscription
        </div>

        <div className="row justify-content-center">
          <div
            className="article col-md-4 mb-6"
            data-aos="fade-right"
            data-aos-delay="50000"
            data-aos-duration="2400"
          >
            <div className="boxonedayArticles">
              <div className="upper1Articles">
                <img src={imageone} />
              </div>

              <div className="wordonedayArticles">
                <div className="word1onedayArticles">
                  <h4>標準版</h4>
                  <h4>$120 / Month</h4>
                </div>
              </div>
            </div>
          </div>

          <div
            className="article col-md-4 mb-6"
            data-aos="fade-down"
            data-aos-delay="50000"
            data-aos-duration="2400"
          >
            <div className="boxonedayArticles">
              <div className="upper1Articles">
                <img src={imagetwo} />
                <p>On Sale</p>
              </div>

              <div className="wordonedayArticles">
                <div className="word1onedayArticles">
                  <h4>進階版</h4>
                  <h4>$1000 / Year</h4>
                </div>
              </div>
            </div>
          </div>

          <div
            className="article col-md-4 mb-6"
            data-aos="fade-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
          >
            <div className="boxonedayArticles">
              <div className="upper1Articles">
                <img src={imagethree} />
              </div>

              <div className="wordonedayArticles">
                <div className="word1onedayArticles">
                  <h4>線上版</h4>
                  <h4>$30 / Month</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookArticles
