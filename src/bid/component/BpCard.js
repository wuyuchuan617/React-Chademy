/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useCallback } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import '../styles/bid.scss'
import Countdown, { zeroPad } from 'react-countdown'

function BpCard(props) {
  const { item, totalb, setTotalb } = props
  const [comma2, setComma2] = useState(null)
  // function getTimeRemaining(startdate, enddate) {
  //   const s_time = new Date(startdate).getTime()
  //   const e_time = new Date(enddate).getTime()
  //   const total = e_time - s_time
  //   return total
  // }
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    let a = new Date(item.bidDate).getTime() - Date.now()
    setTotalb(a)
  }, [])
  const Completionist = () => <span>Sold Out!</span>

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )
    }
  }

  let chair = `http://localhost:3000/uploads/${item.pic[1]}`
  //add comma in price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  useEffect(() => {
    const newprice = item.current_price
    const c = numberWithCommas(newprice)
    setComma2(c)
  }, [item.current_price])

  return (
    <>
      <div key="a" className="col-4 m-2 p-0">
        
          <Link to={`/pages/desc/record/${item.sid}`} className="grace">
            <Card className="grace-move-card rounded-0 p-0">
              {item.bid_sid === 2 ? null : (
                <div className=" grace-tag grace-tag-both d-flex align-items-center justify-content-center rounded-0">
                  {totalb ? (
                    <Countdown
                      date={new Date(item.bidDate).getTime()}
                      renderer={renderer}
                    ></Countdown>
                  ) : (
                    ''
                  )}
                </div>
              )}
              {item.bid_sid === 0 ? (
                <div className=" grace-tag grace-tag-both d-flex align-items-center justify-content-center rounded-0">
                  即將競標
                </div>
              ) : null}
              {item.bid_sid === 2 ? null : (
                <div className="grace-tag-both d-flex align-items-center justify-content-center rounded-0 grace-tag-p">
                  ${comma2}
                </div>
              )}
              <Card.Img className="rounded-0" variant="top" src={chair} />

              {item.bid_sid !== 2 ? null : <div className="g_mask"></div>}
              {item.bid_sid !== 2 ? null : (
                <div className=" grace-tag-close grace-tag-both d-flex align-items-center justify-content-center rounded-0">
                  已結標
                </div>
              )}
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
                    {item.bid_sid === 2 || item.bid_sid === 0 ? (
                      <div 
                      className="grace-disabled rounded-0 d-flex justify-content-center align-items-center"></div>
                    ) : (
                      <div className="grace-btn2 rounded-0 d-flex justify-content-center align-items-center">
                        <span>下標</span>
                      </div>
                    )}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        

        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>已結標</Modal.Title>
          </Modal.Header>
          <Modal.Body>此商品已結標</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              確定
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </>
  )
}

export default BpCard
