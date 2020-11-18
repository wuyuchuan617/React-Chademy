/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function BookMarkhp(props) {
  const [changecolor, setChangeColor] = useState(0)
  const { filterMark, setFilterMark } = props

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <div
        className="e_lablebox mt-9"
        data-aos="zoom-in-up"
        data-aos-delay="50000"
        data-aos-duration="2400"
      >
        <div
          className={changecolor === 0 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setChangeColor(0)
            setFilterMark(0)
          }}
        >
          最新發起
        </div>

        <div
          className={changecolor === 1 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setChangeColor(1)
            setFilterMark(1)
          }}
        >
          即將結束
        </div>
      </div>
    </>
  )
}

export default BookMarkhp
