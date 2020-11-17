/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import bookmark from '../styles/bookmark.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Bookmark(props) {
  const { setChangepage } = props

  const addcolor = (event) => {
    const a = document.querySelectorAll('.g_activelable')
    if (event.target.closest('.grace1').querySelector('.g_activelable2'))
      event.target
        .closest('.grace1')
        .querySelector('.g_activelable2')
        .classList.remove('g_activelable2')

    event.target.classList.add('g_activelable2')
    // setColor()
  }
  // if(color){addcolor()}

  return (
    <>
      <div className=" ">
        <div className="col d-flex grace1">
          <div
            onClick={(event) => {
              addcolor(event)
              setChangepage(2)
            }}
            className="col g_lablebox g_activelable g_activelable2"
          >
            出價紀錄
          </div>
          <div
            onClick={(event) => {
              addcolor(event)
              setChangepage(1)
            }}
            className="col g_lablebox g_activelable"
          >
            價格通知
          </div>
        </div>
      </div>

    </>
  )
}

export default Bookmark
