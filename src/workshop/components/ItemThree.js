import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import ThreeWorkShop from '../components/ThreeWorkShop'

function ItemThree(props) {
  const { threeWorkShop } = props
  return (
    <div className="container-fluid">
      <div className="wrapper2">
        <div className="title01">
          <h2>展覽活動</h2>
        </div>
        <div className="row">
          {threeWorkShop.map((item2, index) => {
            return <ThreeWorkShop key={index} item2={item2} />
          })}

          {/*<div className="article col-md-4 mb-4">
            <div className="boxexhibition">
              <div className="upper4">
                <img src={imageeight} />
                <p>HOT</p>
                <div className="box400">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordexhibition">
                <div className="word1exhibition">
                  <h4>有情門特展</h4>
                  <h6>展覽日期:2020/09/15-2020-09/30</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>免費促銷中</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxexhibition">
              <div className="upper4">
                <img src={imagenine} />

                <div className="box100">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordexhibition">
                <div className="word1exhibition">
                  <h4>懷德居特展</h4>
                  <h6>展覽日期:2020/09/15-2020-09/30</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>免費促銷中</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxexhibition">
              <div className="upper4">
                <img src={imageten} />

                <div className="box400">
                  <img id="image" src={heart} />
                </div>
              </div>

              <div className="wordexhibition">
                <div className="word1exhibition">
                  <h4>木平台創作展</h4>
                  <h6>展覽日期:2020/09/15-2020-09/30</h6>
                  <h6>地點:台灣/台北市</h6>
                </div>
                <div className="price">
                  <h4>免費促銷中</h4>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default ItemThree
