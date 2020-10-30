import React from 'react'
import '../styles/FundHomepage.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import test from '../images/carousel.jpg'

function FundCardOne() {
  return (
    <>
      <Container>
        <Row className=" justify-content-center ">
          <div className="col-4 e_card">
            <div className="e_card_bg">
              <div className="e_wrap">
                <img src={test} alt="" />
              </div>

              <h5 className="e_card_title">紐約風拼接椅</h5>

              <p className="e_maker">by Eva</p>

              <p className="e_intro">
                柔軟的海軍陸戰隊內飾採用當代黃銅鏡框。布倫特的靈感來自80年代的孟菲斯，一個百變又無窮大的椅子，床，長凳，桌子，甚至......
              </p>

              <p className="e_date">還剩45天</p>

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
                    <span
                      class="popover"
                      data-toggle="tooltip"
                      data-placement="down"
                      title="42%"
                    ></span>
                  </div>
                </div>
              </div>

              <p className="e_price">$23,000</p>

              <button className="fund">贊助</button>
            </div>
          </div>

          {/*  第二張 */}

          <div className="col-4 e_card">
            <div className="e_card_bg">
              <div className="e_wrap">
                <img src={test} alt="" />
              </div>

              <h5 className="e_card_title">紐約風拼接椅</h5>

              <p className="e_maker">by Eva</p>

              <p className="e_intro">
                柔軟的海軍陸戰隊內飾採用當代黃銅鏡框。布倫特的靈感來自80年代的孟菲斯，一個百變又無窮大的椅子，床，長凳，桌子，甚至......
              </p>

              <p className="e_date">還剩45天</p>

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
                    <span
                      class="popover"
                      data-toggle="tooltip"
                      data-placement="down"
                      title="42%"
                    ></span>
                  </div>
                </div>
              </div>

              <p className="e_price">$23,000</p>

              <button className="fund">贊助</button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default FundCardOne
