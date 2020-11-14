/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/FundHomepage.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import FundCardFive from './fundcard/FundCardFive'
import FundCardSix from './fundcard/FundCardSix'
import FundCardSeven from './fundcard/FundCardSeven'

import 'antd/dist/antd.css'
import { Carousel } from 'antd'

function CarouselEThree() {
  function onChange(a, b, c) {
    console.log(a, b, c)
  }

  const contentStyle = {
    // height: '700px',
    // color: '#fff',
    // lineHeight: '160px',
    // textAlign: 'center',
    background: '#edece8',
  }
  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <FundCardFive />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <FundCardSix />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <FundCardSeven />
          </h3>
        </div>
      </Carousel>
    </>
  )
}

export default CarouselEThree
