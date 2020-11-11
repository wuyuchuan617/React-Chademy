import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagehistoryone from '../images/28.png'
import imagehistorytwo from '../images/29.png'
import imagehistorythree from '../images/30.png'
import imagehistoryfour from '../images/31.png'
import imagehistoryfive from '../images/32.png'

function ItemSix(props) {
  return (
    <div className="container-fluid">
      <div className="wrapper3">
        <div className="title01">
          <h2>歷年成果</h2>
        </div>
        <div className="row">
          <div className="article col-md-8 mb-12">
            <div className="box7history">
              <div className="upper7history">
                <img src={imagehistoryone} />
              </div>
            </div>
          </div>

          <div className="article col-md-4 mb-12">
            <div className="box7history">
              <div className="upper7history">
                <img src={imagehistorytwo} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="article col-md-4 mb-12">
            <div className="box7history">
              <div className="upper7history">
                <img src={imagehistorythree} />
              </div>
            </div>
          </div>
          <div className="article col-md-4 mb-12">
            <div className="box7history">
              <div className="upper7history">
                <img src={imagehistoryfour} />
              </div>
            </div>
          </div>

          <div className="article col-md-4 mb-12">
            <div className="box7history">
              <div className="upper7history">
                <img src={imagehistoryfive} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemSix
