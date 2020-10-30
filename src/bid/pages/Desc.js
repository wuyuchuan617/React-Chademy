import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/desc.scss'
import {
  getBidDataAsync
} from '../../actions/index'
function Desc(props) {
  console.log('props', props)
  return (
    <>
      {/* countdown */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className=" d-flex align-items-center justify-content-center">
            <div className="col-sm-2 days d-flex flex-column">
              00<span>days</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>hours</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>minutes</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>seconds</span>
            </div>
          </div>
        </div>
      </div>
      {/* Desc */}
      <div className="container">
        <div className="row">
          <div className="picarea">
            <div className="mainpic"></div>
            <div className="sidepic d-flex">
              <div className="pic"></div>
              <div className="pic"></div>
              <div className="pic"></div>
              <div className="pic"></div>
            </div>
            <div className="info">
              <h4>產品簡介</h4>
              <div className="line2"></div>
              <p>
                坐進 Charlotte 扶手椅，仿佛置身於一個溫暖懷抱。Charlotte
                兼具舒適耐用和美觀設計的特性使其能夠輕鬆融入任何一個房間。設計師
                Henrik Pedersen
                著眼于自然形態、簡潔線條和舒適性，打造出一款具有突出個性的小巧扶手椅。
              </p>
            </div>
            <div className="info">
              <h4>產品規格</h4>
              <div className="line2"></div>
              <div className="justify-content-center d-flex">
                <div className="col-6">
                  <h4 className="text-center">尺寸</h4>
                  <table className="mx-auto">
                    <tbody className="text-right justify-content-center ">
                      <tr>
                        <th>Height</th>
                        <td>76cm</td>
                      </tr>
                      <tr>
                        <th>width</th>
                        <td>74cm</td>
                      </tr>
                      <tr>
                        <th>Depth</th>
                        <td>66cm</td>
                      </tr>
                      <tr>
                        <th>Seat Height</th>
                        <td>55cm</td>
                      </tr>
                      <tr>
                        <th>Armrest Height</th>
                        <td>54cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-6">
                  <h4 className="text-center">材質</h4>
                  <p className="text-center">
                    Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="line mx-4"></div>
          <div className="bidinfo">
            <h1>帆布椅</h1>
            <h4>目前金額</h4>
            <div className="line3 my-4"></div>
            <h2>$123,000</h2>
            <p>出價</p>
            <button className="price">$1,000</button>
            <button className="price">$5,000</button>
            <button className="price">$10,000</button>
            <h4>競標資訊</h4>
            <div className="line3 my-4"></div>
            <table>
              <tbody className="text-left justify-content-center ">
                <tr>
                  <th>競標日期</th>
                  <td>20/09/2020</td>
                </tr>
                <tr>
                  <th>競標時間</th>
                  <td>10:00 A.M.</td>
                </tr>
                <tr>
                  <th>起標價格</th>
                  <td>$100,000</td>
                </tr>
                <tr>
                  <th>競標人數</th>
                  <td>50人</td>
                </tr>
                <tr>
                  <th>觀看人數</th>
                  <td>300人</td>
                </tr>
              </tbody>
            </table>
            <button className="chat">進入競標聊天室</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Desc
