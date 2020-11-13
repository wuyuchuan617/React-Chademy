/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './styles/footer.css'
import facebook from './images/facebook-brands.svg'
import instagram from './images/instagram-brands.svg'
import linkedin from './images/linkedin-brands.svg'
import line from './images/line-brands.svg'
import pinterest from './images/pinterest-brands.svg'
import youtube from './images/youtube-brands.svg'
import logo from './images/8be4c66-2.svg'

function MyFooter(props) {
  return (
    <>
      <div onClick={props.onClick} className="container-fluid footer w_footer">
        <div className="row logo">
          <div className="logo-img">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="row justify-content-between">
          <div>
            <div className="d-flex subtitle">
              <p>品 牌 故 事</p>
              <p>經 典 產 品</p>
              <p>古 董 市 集</p>
              <p>精 品 競 標</p>
              <p>設 計 學 院</p>
              <p>新 創 募 資</p>
              <p>靈 感 探 索</p>
            </div>
            <div className="d-flex subtitle2">
              <div>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
              </div>
              <div>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
              </div>
              <div>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
              </div>
              <div>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
              </div>
              <div>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
              </div>
              <div>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
              </div>
              <div>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
                <p>品牌價值</p>
              </div>
            </div>
          </div>
          <div className="icon-area ">
            <h6>Social Media</h6>
            <div className="d-flex">
              <div className="icons">
                <img src={facebook} alt="" />
              </div>
              <div className="icons">
                <img src={instagram} alt="" />
              </div>
              <div className="icons">
                <img src={pinterest} alt="" />
              </div>
              <div className="icons">
                <img src={line} alt="" />
              </div>
              <div className="icons">
                <img src={linkedin} alt="" />
              </div>
              <div className="icons">
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="company">
            <p>© 2020 - Chademy Co. Ltd</p>
          </div>
          <div className="d-flex rules">
            <p>購物須知</p>
            <p>配送方式</p>
            <p>退貨規則</p>
            <p>常見問題</p>
            <p>法律條款</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyFooter
