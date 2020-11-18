/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import heart from '../images/heart.svg'
import { withRouter, useParams } from 'react-router-dom'

function FilterResultCard(props) {
  const { item } = props
  return (
    <>
      <div className="col-4">
        <div
          className="boxonedayfilter"
          onClick={() => {
            props.history.push('/WorkshopList/' + item.sid)
          }}
        >
          <div className="upper1filter">
            <img src={require('../../img/' + item.images)} />

            <div className="box100filter">
              <img id="image" src={heart} />
            </div>
          </div>

          <div className="wordonedayfilter">
            <div className="word1onedayfilter">
              <h4>主題名稱:{item.activitie_name}</h4>
              <h6>開課日期:{item.start_date}</h6>
            </div>
            <div className="pricefilter">
              <h4>促銷價格:${item.sale_price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(FilterResultCard)
