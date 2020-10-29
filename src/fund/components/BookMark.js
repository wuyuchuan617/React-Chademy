import React from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'

import barstool from '../images/bar stool .png'

import chairs from '../images/chairs .png'
import armchair from '../images/armchair .png'
import diningchair from '../images/dining chair .png'
import loungechair from '../images/lounge chair.png'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function BookMark() {
  return (
    <>
      <div className="e_lablebox">
        <Link to="/newfundproject" className="e_defaultlable">
          最新發起
        </Link>
        <Link to="/endsoonfund" className="e_activelable">
          即將結束
        </Link>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={barstool} alt="" />
              </div>
              <p className="chair_p"> 吧台椅</p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={chairs} alt="" />
              </div>
              <p className="chair_p"> 單椅</p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={armchair} alt="" />
              </div>
              <p className="chair_p"> 扶手椅</p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={diningchair} alt="" />
              </div>
              <p className="chair_p"> 餐椅</p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon_sofa" src={loungechair} alt="" />
              </div>
              <p className="chair_p"> 沙發椅</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookMark
