/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/about.css'
import BrandBanner from '../components/BrandBanner'
import Logo from '../components/Logo'
import About from '../components/About'
import History from '../components/History'
import Member from '../components/Member'
import Virtual from '../components/Virtual'
import PhysicalStore from '../components/PhysicalStore'
import Partner from '../components/Partner'

import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Brand(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <BrandBanner />
      <Logo />
      <About />
      <History />
      <Member />
      <Virtual />
      <PhysicalStore />
      <Partner />
      <BackTop
        visibilityHeight="2000"
        style={{
          height: '40',
          width: '40',
          lineHeight: '33px',
          color: 'white',
          fontSize: '16px',
          borderRadius: '0',
          textAlign: 'center',
          backgroundColor: '#c77334',
        }}
      >
        <div>
          <UpOutlined
            style={{
              color: 'white',
              fontSize: '18px',
              borderRadius: '0',
              backgroundColor: '#c77334',
              marginTop: '-3px',
            }}
          />
        </div>
      </BackTop>
    </>
  )
}

export default Brand
