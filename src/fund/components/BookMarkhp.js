import React, { useState } from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function BookMarkhp (props) {
  const [changecolor, setChangeColor] = useState(0)
  const { filterMark, setFilterMark } = props
  

  return (
    <>
      <div className="e_lablebox">
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
