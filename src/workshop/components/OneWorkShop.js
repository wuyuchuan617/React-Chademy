/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import heart from '../images/heart.svg'
import { withRouter, useParams } from 'react-router-dom'
import { BsFillHeartFill } from 'react-icons/bs'

function OneWorkShop(props) {
  const { item } = props
  return (
    <>
      <div
        className="boxoneday"
        onClick={() => {
          props.history.push('/WorkshopList/' + item.sid)
        }}
      >
        <div className="upper1">
          <img src={require('../../img/' + item.images)} />
          <p>HOT</p>
          <div className="box100">
            <img id="image" src={heart} />
          </div>
        </div>

        <div className="wordoneday">
          <div className="word1oneday">
            <h4>{item.activitie_name}</h4>
            <h6>開課日期:{item.start_date}</h6>
            <h6>地點:{item.address}</h6>
          </div>
          <div className="price">
            <h4>${item.sale_price}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(OneWorkShop)
