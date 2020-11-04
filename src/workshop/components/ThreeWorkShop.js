import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import heart from '../images/heart.svg'

function ThreeWorkShop(props) {
  const { item2 } = props
  return (
    <>
      <div className="article col-md-4 mb-4">
        <div className="boxexhibition">
          <div className="upper4">
            <img src={require('../../img/' + item2.images)} />
            <p>HOT</p>
            <div className="box400">
              <img id="image" src={heart} />
            </div>
          </div>

          <div className="wordexhibition">
            <div className="word1exhibition">
              <h4>{item2.activitie_name}</h4>
              <h6>展覽日期:{item2.start_date}</h6>
              <h6>地點:{item2.address}</h6>
            </div>
            <div className="price">
              <h4>${item2.sale_price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThreeWorkShop
