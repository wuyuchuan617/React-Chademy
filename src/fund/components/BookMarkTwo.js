/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import useSelection from 'antd/lib/table/hooks/useSelection'

function BookMarkTwo(props) {
  const { setShowProject, setShowColor } = props
  const [changecolor, setChangeColor] = useState(0)
  return (
    <>
      <div className="e_lablebox2">
        <div
          className={changecolor === 0 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setShowProject(0)
            setChangeColor(0)
          }}
        >
          專案ㄧ
        </div>
        <div
          className={changecolor === 1 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setShowProject(1)
            setChangeColor(1)
          }}
        >
          專案二
        </div>
        <div
          className={changecolor === 2 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setShowProject(2)
            setChangeColor(2)
          }}
        >
          專案三
        </div>
        <div
          className={changecolor === 3 ? 'e_activelable' : 'e_defaultlable'}
          onClick={() => {
            setShowProject(3)
            setChangeColor(3)
          }}
        >
          專案四
        </div>
      </div>
    </>
  )
}

export default BookMarkTwo
