/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../../styles/FundHomepage.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import test from '../../images/a5.jpeg'
import tesx from '../../images/a6.jpeg'

import '../../styles/ProgressE.scss'
import 'antd/dist/antd.css'
import { Progress } from 'antd'

function FundCardFour() {
  return (
    <>
      <Container>
        <Row className=" justify-content-center ">
          {/* 第一張 */}
          <div className="col-4 e_card">
            <div className="e_card_bg">
              <div className="e_wrap">
                <img src={test} alt="" />
              </div>

              <h5 className="e_card_title">ELBA</h5>

              <p className="e_maker">by Cindy</p>

              <div className="intro_wrap">
                <p className="e_intro">
                  低矮底座和曲線扶手，賦予其悠閒性格，也能當作角落或是小坪數客廳的單椅使用。美觀設計的特性使其能夠輕鬆融入任何一個房間。
                </p>
              </div>

              <p className="e_date">還剩8天</p>

              <div className="barwrapper">
                <div className="progress">
                  <div
                    className="progress_bar"
                    id="progress_bar"
                    role="progressbar"
                    aria-valuenow="42"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div style={{ width: 330 }}>
                      <Progress
                        percent={91}
                        size="small"
                        status="active"
                        style={{ height: 12 }}
                        strokeWidth={10}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="e_price">$69,000</p>

              <div className="btn_div">
                <button className="fund">贊助</button>
              </div>
            </div>
          </div>

          {/*  第二張 */}

          <div className="col-4 e_card">
            <div className="e_card_bg">
              <div className="e_wrap">
                <img src={tesx} alt="" />
              </div>

              <h5 className="e_card_title">OSAKA</h5>

              <p className="e_maker">by Joy</p>

              <div className="intro_wrap">
                <p className="e_intro">
                  傾斜的扶手賦予沙發獨特造型，並使其現代風格隨之延伸到室內空間。
                  纖巧的鋁合金椅腳，也讓外觀更顯輕盈。
                </p>
              </div>

              <p className="e_date">還剩13天</p>

              <div className="barwrapper">
                <div className="progress">
                  <div
                    className="progress_bar"
                    id="progress_bar"
                    role="progressbar"
                    aria-valuenow="42"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {/* <ProgressE item={item} /> */}
                    <div style={{ width: 330 }}>
                      <Progress
                        percent={88}
                        size="small"
                        status="active"
                        style={{ height: 12 }}
                        strokeWidth={10}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="e_price">$67,000</p>

              <div className="btn_div ">
                <button className="fund">贊助</button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default FundCardFour
