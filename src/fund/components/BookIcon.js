import React, { useState } from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'

import barstool from '../images/bar stool .png'

import chairs from '../images/chairs .png'
import armchair from '../images/armchair .png'
import diningchair from '../images/dining chair .png'
import loungechair from '../images/lounge chair.png'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function BookIcon(props) {
  const [changeword, setChangeWord] = useState(0)
  const { filterIcon, setFilterIcon } = props
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={barstool} alt="" />
              </div>
              <p
                className={changeword === 0 ? 'chair_p2' : 'chair_p'}
                onClick={() => {
                  setChangeWord(0)
                  setFilterIcon(0)
                }}
              >
                吧台椅
              </p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={chairs} alt="" />
              </div>
              <p
                className={changeword === 1 ? 'chair_p2' : 'chair_p'}
                onClick={() =>{

                 setChangeWord(1)
                 setFilterIcon(1)
                 }
                 }
              >
                單椅
              </p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={armchair} alt="" />
              </div>
              <p
                className={changeword === 2 ? 'chair_p2' : 'chair_p'}
                onClick={() =>{ 
                  setChangeWord(2)
                  setFilterIcon(2)
                }}
              >
                {' '}
                扶手椅
              </p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon" src={diningchair} alt="" />
              </div>
              <p
                className={changeword === 3 ? 'chair_p2' : 'chair_p'}
                onClick={() => {
                  setChangeWord(3)
                  setFilterIcon(3)
                  }}
              >
                {' '}
                餐椅
              </p>
            </div>
          </div>

          <div className="col">
            <div className="icon">
              <div className="icon_img">
                <img className="chair_icon_sofa" src={loungechair} alt="" />
              </div>
              <p
                className={changeword === 4 ? 'chair_p2' : 'chair_p'}
                onClick={() => {
                  setChangeWord(4)
                  setFilterIcon(4)
                  }}
              >
                {' '}
                沙發椅
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookIcon
