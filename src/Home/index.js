import React, { useState, useEffect } from 'react'

import Header from './header'
import Catchcopy from './catchcopy'
import About from './about'
import classes from './style.module.scss'
import Antique from './antique'
import News from './news'
import Classic from './classic'
import Bidding from './bidding'
import Courses from './courses'
import Blogs from './blogs'
import EntryAnimation from './components/EntryAnimation'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <EntryAnimation />
      <Header />
      <div className="container ">
        <Catchcopy />
        <About />
        <News />
        <Classic />
        <Antique />
        <Bidding />
        <Courses />
        <Blogs />
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
      </div>
    </>
  )
}

export default Home
