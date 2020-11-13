/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../../styles/PopBmark.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import pop3 from '../../images/pop3.jpeg'
import diningchair from '../../images/dining chair .png'

import 'antd/dist/antd.css'
import { Progress } from 'antd'
import { Rate } from 'antd'

function PopBmarkThree(props) {
  return (
    <>
      <div className="container ">
        <div className="row e_pop justify-content-between d-flex">
          <div className="review-photo justify-content-center col-4">
            <img src={pop3} alt="" />
            <p className="e_pimg">$76,000</p>
          </div>

          <div className="col-7">
            <div className="d-flex justify-content-between ">
              <div>
                <Rate
                  disabled
                  allowHalf
                  style={{ color: '#C77334', fontSize: 24 + 'px' }}
                  defaultValue={4.5}
                />

                <p className="e_reviewSub">Boston椅</p>
              </div>
              <div className="d-flex">
                <div className="e_Photo align-items-end d-flex">
                  <img src={diningchair} alt="" />
                </div>

                <p className="e_comP  text-right d-flex">餐椅</p>
              </div>
            </div>
            <p className="e__review_comm">
              Boston單椅俐落流暢的線條，可一點都不減它的舒適坐感。儘管看上去造型纖薄，Boston超大尺寸的舒適感以及敢於自我展示的態度。
            </p>
            <div className="container ">
              <div className="row justify-content-between d-flex">
                <div className="col pbar d-flex">
                  <div style={{ width: 330 }}>
                    <Progress
                      percent={86}
                      size="small"
                      status="active"
                      style={{ height: 12 }}
                      strokeWidth={10}
                    />
                  </div>

                  {/* <p className="bar1">
                      達成率
                      <br />
                      80%
                    </p> */}
                  <div className="col-4 d-flex bar_div">
                    <p className="bar1">
                      達成率
                      <br />
                      86%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopBmarkThree
