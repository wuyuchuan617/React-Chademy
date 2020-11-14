/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function BookMark(props) {
  const [changecolor, setChangeColor] = useState(0)
  const { filterMark, setFilterMark } = props
  const { setTime } = props

  return (
    <>
      <div className="e_lablebox">
        <div
          className={changecolor === 0 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setChangeColor(0)
            setFilterMark(0)
            setTime(`time='1'`)
          }}
        >
          最新發起
        </div>

        <div
          className={changecolor === 1 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setChangeColor(1)
            setFilterMark(1)
            setTime(`time='2'`)
          }}
        >
          即將結束
        </div>
      </div>
    </>
  )
}

export default BookMark
