import React from 'react'
import '../../styles/FundHomepage.scss'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import test from '../../images/a3.jpeg'
import tesx from '../../images/a4.jpeg'

import '../../styles/ProgressE.scss'
import 'antd/dist/antd.css'
import { Progress } from 'antd'

function FundCardThree() {
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

              <h5 className="e_card_title">LUCCA</h5>

              <p className="e_maker">by Candy</p>

              <div className="intro_wrap">
                <p className="e_intro">
                  舒適的Lucca椅可以根據您自己的舒適度和品味喜好來進行安排。曲線形狀、柔和而迷人的表達使之成為您起...
                </p>
              </div>

              <p className="e_date">還剩15天</p>

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
                        percent={89}
                        size="small"
                        status="active"
                        style={{ height: 12 }}
                        strokeWidth={10}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="e_price">$79,000</p>

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

              <h5 className="e_card_title">CHARLOTTE</h5>

              <p className="e_maker">by Jay</p>

              <div className="intro_wrap">
                <p className="e_intro">
                  Charlotte
                  兼具舒適耐用和美觀設計的特性使其能夠輕鬆融入任何一個房間。幾乎無需維護，並擁有時尚外觀，是享受美好戶外時刻的完美陳設。
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
                        percent={87}
                        size="small"
                        status="active"
                        style={{ height: 12 }}
                        strokeWidth={10}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="e_price">$57,000</p>

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

export default FundCardThree
