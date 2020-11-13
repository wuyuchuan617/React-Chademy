/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagetrainone from '../images/22.png'
import imagetraintwo from '../images/23.png'
import imagetrainthree from '../images/24.png'
import imagetrainfour from '../images/25.png'
import imagetrainfive from '../images/26.png'
import imagetrainsix from '../images/27.png'

function WorkshopFive(props) {
  return (
    <div className="container-fluid">
      <div className="wrapper2">
        <div className="title01">
          <h2>札實的課程訓練</h2>
        </div>
        <div className="row">
          <div className="article col-md-4 mb-4">
            <div className="boxtrain">
              <div className="upper6">
                <img src={imagetrainone} />
              </div>
              <div className="word2">
                <div className="word3">
                  <h4>丈量繪圖</h4>
                  <p>
                    按照製作的產品量製產品尺寸，包含長、寬、高等，並繪製於同比例的白紙上。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxtrain">
              <div className="upper6">
                <img src={imagetraintwo} />
              </div>
              <div className="word2">
                <div className="word3">
                  <h4>裁切木頭</h4>
                  <p>透過木頭工具，裁切所需要的尺寸。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxtrain">
              <div className="upper6">
                <img src={imagetrainthree} />
              </div>
              <div className="word2">
                <div className="word3">
                  <h4>木頭拼貼</h4>
                  <p>
                    裁切完的各式各樣的木頭，透過白膠等黏著劑，將木頭進行拼貼工法。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="article col-md-4 mb-4">
            <div className="boxtrain">
              <div className="upper6">
                <img src={imagetrainfour} />
              </div>
              <div className="word2">
                <div className="word3">
                  <h4>木製卡榫工法</h4>
                  <p>透過自然的木頭工法，讓椅子組件完美的卡合以及組裝。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxtrain">
              <div className="upper6">
                <img src={imagetrainfive} />
              </div>
              <div className="word2">
                <div className="word3">
                  <h4>磨光與上漆</h4>
                  <p>
                    將完成的產品雛型進行磨光、上保護漆或亮光漆，重複反覆數次後，將木頭產品的質感更上一層樓。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-4">
            <div className="boxtrain">
              <div className="upper6">
                <img src={imagetrainsix} />
              </div>
              <div className="word2">
                <div className="word3">
                  <h4>結業與募資合作</h4>
                  <p>
                    完成的作品，有機會餐與本平台的募資，進而將成品發揚光大。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopFive
