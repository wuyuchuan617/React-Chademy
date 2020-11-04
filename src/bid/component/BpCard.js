import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Button, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter, useParams } from 'react-router-dom'
import Bid from '../pages/Bid'
// import chair from '../myfile/'
import '../styles/bid.scss'
import {format} from 'date-fns'
// import {  
//     getData,
//     getBidData,
//     initAct,
//     initActAsync,
//   } from '../../actions'
// const ENDPOINT = "http://127.0.0.1:8080";

function BpCard(props){
  const {item,newPic, price, setPrice, pname, setPname, enddate, setEnddate, endtime, setEndtime,data, setData} = props
  // const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);
 
  console.log(item.pic[0])
  let chair = `http://localhost:3000/uploads/${item.pic[1]}`
  
    return(
        <>
       
        <div className="col-6">            
            <Card className="m-1 rounded-0 p-0">
              <div className="grace-tag grace-tag-time d-flex align-items-center justify-content-center rounded-0">
                {/* <span><time dateTime={response}>{response}</time></span> */}
              </div>
              <div className="grace-tag-time d-flex align-items-center justify-content-center rounded-0 grace-tag-p">
              
                <span>${item.total_price}</span>
              </div>
              <Card.Img className="rounded-0" variant="top" src={chair} />
              <Card.Body>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <h2 className="grace-title text-left">
                      {item.productName}
                      </h2>
                      <p className="card-text my-1">{item.productName}單椅</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="g-grace-context">
                        <p className="card-text mb-2 mt-0 mx-2 grace-point">
                          截標日期
                        </p>
                        <p className="card-text my-2 mx-2 grace-point">
                          截標時間
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="card-text mb-2 mt-0 grace-point grace-time">
                          {item.bidDate}
                        </p>
                        <p className="card-text my-2 mt-0 grace-point grace-time">
                          {item.bidTime}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 py-2 align-self-end d-flex justify-content-end">
                    <div className="grace-btn2 rounded-0 d-flex justify-content-center align-items-center">
                      <span>
                      <Link to="/pages/desc/record">下標</Link>
                      </span>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>         
            </div>
            {/* <div className="col-6">            
            <Card className="m-1 rounded-0 p-0">
              <div className="grace-tag grace-tag-time d-flex align-items-center justify-content-center rounded-0">
                <span>16:10:11</span>
              </div>
              <div className="grace-tag-time d-flex align-items-center justify-content-center rounded-0 grace-tag-p">
                <span>$27,000</span>
              </div>
              <Card.Img className="rounded-0" variant="top" src={chair} />
              <Card.Body>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <h2 className="grace-title text-left">IMOLA</h2>
                      <p className="card-text my-1">IMOLA單椅</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="g-grace-context">
                        <p className="card-text mb-2 mt-0 mx-2 grace-point">
                          截標日期
                        </p>
                        <p className="card-text my-2 mx-2 grace-point">
                          截標時間
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="card-text mb-2 mt-0 grace-point grace-time">
                          2020/11/20
                        </p>
                        <p className="card-text my-2 mt-0 grace-point grace-time">
                          11:00 A.M.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 py-2 align-self-end d-flex justify-content-end">
                  <div className="grace-btn2 rounded-0 d-flex justify-content-center align-items-center">
                      <span>下標</span>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>          
          </div> */}
          </>
    )
}

export default BpCard