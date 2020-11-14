import React from 'react'
import '../../styles/PopBmark.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import pop1 from '../../images/pop1.jpeg'
import chairs from '../../images/chairs .png'

import 'antd/dist/antd.css'
import { Progress } from 'antd'
import { Rate } from 'antd'

function PopBmarkOne(props) {
  return (
    <>
      <div className="container ">
        <div className="row e_pop justify-content-between d-flex">
          <div className="review-photo justify-content-center col-4">
            <img src={pop1} alt="" width="100%" />
            <p className="e_pimg">$92,000</p>
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

                <p className="e_reviewSub">MODENA</p>
              </div>
              <div className="d-flex">
                <div className="e_Photo align-items-end d-flex">
                  <img src={chairs} alt="" />
                </div>

                <p className="e_comP  text-right d-flex">單椅</p>
              </div>
            </div>

            <p className="e__review_comm">
              將不同材料和色彩，和諧的混搭在一起，替空間營造充滿活力的氛圍。永不過時的外觀將一直讓您的餐廳提升格調。可旋轉且附有輪子的椅腳，使這款椅子非常靈活。
            </p>
            <div className="container ">
              <div className="row justify-content-between d-flex">
                <div className="col pbar d-flex">
                  <div style={{ width: 330 }}>
                    <Progress
                      percent={89}
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
                      89%
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

export default PopBmarkOne
