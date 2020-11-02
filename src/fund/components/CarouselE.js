import React from 'react'
import '../styles/FundHomepage.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import FundCardOne from './FundCardOne'

import 'antd/dist/antd.css'
import { Carousel } from 'antd'


function CarouselE() {
  function onChange(a, b, c) {
    console.log(a, b, c)
  }

  const contentStyle = {
    // height: '600px',
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
            <FundCardOne />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}><FundCardOne /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><FundCardOne /></h3>
        </div>
      </Carousel>
      
    </>
  )
}

export default CarouselE
