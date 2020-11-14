/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../styles/FundHomepage.scss'
// import { Container, Row, Col } from 'react-bootstrap'

import barstool from '../images/bar stool .png'

import chairs from '../images/chairs .png'
import armchair from '../images/armchair .png'
import diningchair from '../images/dining chair .png'
import loungechair from '../images/lounge chair.png'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function BookIcon(props) {
  const [changeword, setChangeWord] = useState(0)
  const { filterIcon, setFilterIcon } = props
  const { setSeries } = props

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className={changeword === 0 ? 'e_icon1' : 'e_icon'}
              onClick={() => {
                setChangeWord(0)
                setFilterIcon(0)
                setSeries(`category='1'`)
              }}
            >
              <div className="icon_img">
                <img className="chair_icon" src={barstool} alt="" />
              </div>
              <p className="chair_p">吧台椅</p>
            </div>
          </div>

          <div className="col">
            <div
              className={changeword === 1 ? 'e_icon1' : 'e_icon'}
              onClick={() => {
                setChangeWord(1)
                setFilterIcon(1)
                setSeries(`category='2'`)
              }}
            >
              <div className="icon_img">
                <img className="chair_icon" src={chairs} alt="" />
              </div>
              <p className="chair_p">單椅</p>
            </div>
          </div>

          <div className="col">
            <div
              className={changeword === 2 ? 'e_icon1' : 'e_icon'}
              onClick={() => {
                setChangeWord(2)
                setFilterIcon(2)
                setSeries(`category='3'`)
              }}
            >
              <div className="icon_img">
                <img className="chair_icon" src={armchair} alt="" />
              </div>
              <p className="chair_p"> 扶手椅</p>
            </div>
          </div>

          <div className="col">
            <div
              className={changeword === 3 ? 'e_icon1' : 'e_icon'}
              onClick={() => {
                setChangeWord(3)
                setFilterIcon(3)
                setSeries(`category='4'`)
              }}
            >
              <div className="icon_img">
                <img className="chair_icon" src={diningchair} alt="" />
              </div>
              <p className="chair_p"> 餐椅</p>
            </div>
          </div>

          <div className="col">
            <div
              className={changeword === 4 ? 'e_icon1' : 'e_icon'}
              onClick={() => {
                setChangeWord(4)
                setFilterIcon(4)
                setSeries(`category='5'`)
              }}
            >
              <div className="icon_img">
                <img className="chair_icon_sofa" src={loungechair} alt="" />
              </div>
              <p className="chair_p">沙發椅</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookIcon
