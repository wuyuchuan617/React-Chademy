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
  const {item,totalb,setTotal,data, setData,s_date,e_date,setTotalb} = props
  // const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);
// console.log(totalb)
        //countdown
        // let aap= null
        let ss = item.startingDate
        let ee = item.bidDate
        // console.log('ss',ss)
        // console.log('ee',ee)
        function getTimeRemaining(startdate,enddate){ 
          // const s_time = Date.parse(startdate);
          // const e_time = Date.parse(enddate);
          const s_time = new Date(startdate).getTime();
          const e_time = new Date(enddate).getTime();
          const total = e_time - s_time
          return total
        }
        useEffect(()=>{
          let a = new Date(item.bidDate).getTime() - Date.now()
          setTotalb(a) 
          // console.log('a',a)
        },[])
        const Completionist = () => <span>Sold Out!</span>;
        // console.log('totalb',totalb)

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
  // console.log('dateee', new Date(item.bidDate).getTime() - Date.now())
  // console.log('dateee234', Date.now())
    return(
        <>
       
        <div key="a" className="col-4 m-2 p-0"> 
       <Link to={`/pages/desc/record/${item.sid}`}
       className="grace">
            <Card className="grace-move-card rounded-0 p-0">
            {(item.bid_sid===2 )?null:(
              <div className=" grace-tag grace-tag-both d-flex align-items-center justify-content-center rounded-0">
              {totalb ? 
          <Countdown date={new Date(item.bidDate).getTime()} renderer={renderer}>
    </Countdown>:''}
              </div>
              )}
              {(item.bid_sid=== 0 )?(
              <div className=" grace-tag grace-tag-both d-flex align-items-center justify-content-center rounded-0">
              即將競標
              </div>
              ):null}
              {(item.bid_sid===2 )?null:(
              <div className="grace-tag-both d-flex align-items-center justify-content-center rounded-0 grace-tag-p">${item.current_price}</div>
              )}
              <Card.Img className="rounded-0" variant="top" src={chair} />
              
              {(item.bid_sid!==2)?null:(
              <div className="g_mask"></div>)}
              {(item.bid_sid!==2)?null:(
              <div className=" grace-tag-close grace-tag-both d-flex align-items-center justify-content-center rounded-0">已結標</div>)}
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
                          {item.edate}
                        </p>
                        <p className="card-text my-2 mt-0 grace-point grace-time">
                          {item.bidTime}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 py-2 align-self-end d-flex justify-content-end">
                  {(item.bid_sid===2 ||item.bid_sid===0 )?null:(

                    <div className="grace-btn2 rounded-0 d-flex justify-content-center align-items-center"><span>下標</span>
                    </div>
                    )}
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