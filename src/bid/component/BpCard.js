import React, { useState, useEffect,useCallback } from "react";
import socketIOClient from "socket.io-client";
import { Button, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter, useParams } from 'react-router-dom'
import Bid from '../pages/Bid'
import { Parallax } from 'rc-scroll-anim';
import '../styles/bid.scss'
import Countdown from 'react-countdown';
// import {  
//     getData,
//     getBidData,
//     initAct,
//     initActAsync,
//   } from '../../actions'
// const ENDPOINT = "http://127.0.0.1:8080";

function BpCard(props){
  const {item,total,setTotal,data, setData,remainSecond,setRemainSecond} = props
  // const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);
 
        //countdown
        const Completionist = () => <span>Sold Out!</span>;

        // Renderer callback with condition
        const renderer = ({ hours, minutes, seconds, completed }) => {
          if (completed) {
            // Render a completed state
            return <Completionist />;
          } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
          }
        };
    
  let chair = `http://localhost:3000/uploads/${item.pic[1]}`
  
    return(
        <>
       
        <div key="a" className="col-4 m-2 p-0"> 
       <Link to={`/pages/desc/record/${item.sid}`}
       className="grace">
            <Card className="grace-move-card rounded-0 p-0">
              <div className=" grace-tag grace-tag-time d-flex align-items-center justify-content-center rounded-0">
              {total ? 
          <Countdown date={Date.now() + (+total)} renderer={renderer}>
    </Countdown>:''}
              </div>
              <div className="grace-tag-time d-flex align-items-center justify-content-center rounded-0 grace-tag-p">
              
                <span>${item.current_price}</span>
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
                      下標
                      </span>
                    </div>
                    
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>         
            </Link>
            </div>
           
            </>
    )
}

export default BpCard