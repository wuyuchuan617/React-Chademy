/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import stu1 from '../images/stu1.png'
import stu2 from '../images/stu2.png'
import stu3 from '../images/stu3.jpeg'
import stu4 from '../images/stu4.png'

import { Carousel } from 'antd'
import 'antd/dist/antd.css'

function Edesign() {
  const contentStyle = {
    height: '20rem',
    // color: '#fff',
    // lineHeight: '160px',
    // textAlign: 'center',
    // background: '#364d79',
  }

  return (
    <>
      <Container className="justify-content-center ">
        <Row className="justify-content-center no-gutters">
          <Col>
            <div className="green">
              <p className="p_stu">
                本學院培育之新銳設計師，大膽之作 <br />
                敬邀您一同欣賞
              </p>
            </div>
            <div className="wrap1">
              <img src={stu3} alt="" />
            </div>
            <div className="orange">
              <p className="p_stu">
                本學院培育之新銳設計師，大膽之作 <br />
                敬邀您一同欣賞
              </p>
            </div>
          </Col>

          <Col>
            <div className="wrap1">
              {/* <img src={stu4} alt="" className="stu4" /> */}

              <img src={stu1} alt="" className="stu1" />
            </div>
            <div className="blue">
              <p className="p_stu">
                本學院培育之新銳設計師，大膽之作 <br />
                敬邀您一同欣賞
              </p>
            </div>
            <div className="wrap1">
              <img src={stu2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Edesign
