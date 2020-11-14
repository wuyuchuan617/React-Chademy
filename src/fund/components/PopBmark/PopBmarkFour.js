import React from 'react'
import '../../styles/PopBmark.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import pop4 from '../../images/pop4.jpeg'
import armchair from '../../images/armchair .png'

import 'antd/dist/antd.css'
import { Progress } from 'antd'
import { Rate } from 'antd'

function PopBmarkFour(props) {
  return (
    <>
      <div className="container ">
        <div className="row e_pop justify-content-between d-flex">
          <div className="review-photo justify-content-center col-4">
            <img src={pop4} alt="" />
            <p className="e_pimg">$89,000</p>
          </div>

          <div className="col-7">
            <div className="d-flex justify-content-between ">
              <div>
                <Rate
                  disabled
                  allowHalf
                  style={{ color: '#C77334', fontSize: 24 + 'px' }}
                  defaultValue={5}
                />

                <p className="e_reviewSub">ADELAIDE</p>
              </div>
              <div className="d-flex">
                <div className="e_Photo align-items-end d-flex">
                  <img src={armchair} alt="" />
                </div>

                <p className="e_comP  text-right d-flex">扶手椅</p>
              </div>
            </div>
            <p className="e__review_comm">
              直立的木質椅腳，賦予椅子濃濃的北歐風格，並與椅身的曲線形成對比。別具匠心地結合了折痕線條、柔軟形狀和誇張邊緣，全包覆的椅身。
            </p>
            <div className="container ">
              <div className="row justify-content-between d-flex">
                <div className="col pbar d-flex">
                  <div style={{ width: 330 }}>
                    <Progress
                      percent={82}
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
                      82%
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

export default PopBmarkFour
