import React from 'react'
import '../../styles/FundHomepage.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import test from '../../images/dt5.jpeg'
import tesx from '../../images/dt6.jpeg'

import '../../styles/ProgressE.scss'
import 'antd/dist/antd.css'
import { Progress } from 'antd'

function FundCardSeven() {
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

              <h5 className="e_card_title">MARIPOSA</h5>

              <p className="e_maker">by Top</p>

              <div className="intro_wrap">
                <p className="e_intro">
                  它當代的設計風格與曲線，讓舒適度倍增。Mariposa不僅擁有漂亮的外觀，更具舒適坐感。
                </p>
              </div>

              <p className="e_date">還剩93天</p>

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
                        percent={37}
                        size="small"
                        status="active"
                        style={{ height: 12 }}
                        strokeWidth={10}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="e_price">$38,000</p>

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

              <h5 className="e_card_title">ADELAIDEl</h5>

              <p className="e_maker">by Nico</p>

              <div className="intro_wrap">
                <p className="e_intro">
                  這款現代椅子兼具優雅的曲線造型與卓越的舒適度，將為您的家增添一抹優雅特質。
                </p>
              </div>

              <p className="e_date">還剩91天</p>

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
                        percent={48}
                        size="small"
                        status="active"
                        style={{ height: 12 }}
                        strokeWidth={10}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="e_price">$47,000</p>

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

export default FundCardSeven
