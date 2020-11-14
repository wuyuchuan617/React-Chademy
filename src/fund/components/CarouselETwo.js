import React from 'react'
import '../styles/FundHomepage.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import FundCardTwo from './fundcard/FundCardTwo'
import FundCardThree from './fundcard/FundCardThree'
import FundCardFour from './fundcard/FundCardFour'

import 'antd/dist/antd.css'
import { Carousel } from 'antd'

function CarouselE() {
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
            <FundCardTwo />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <FundCardThree />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <FundCardFour />
          </h3>
        </div>
      </Carousel>
    </>
  )
}

export default CarouselE
