import React from 'react'
import '../styles/FundHomepage.scss'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { Container, Row, Col } from 'react-bootstrap'
// import test from '../images/carousel.jpg'
import ProgressE from '../components/ProgressE'
import { withRouter } from 'react-router-dom'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function FundListCard(props) {
  const { item } = props
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div
        className="col-lg-5 col-md-6 col-sm-12 e_card d-flex"
        id={item.sid}
        onClick={() => {
          props.history.push('/funditem/' + item.sid)
        }}
      >
        <div
          className="e_card_bg"
          // onClick={() => {
          //   props.history.push('/funditem/' + item.sid)
          // }}
          data-aos="zoom-in-up"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          <div className="e_wrap">
            <img src={`http://localhost:3001/img/` + item.e_pic} alt="" />
          </div>

          <h5 className="e_card_title">{item.e_proname}</h5>

          <p className="e_maker">{item.e_designer_sid}</p>

          <div className="intro_wrap">
            <p className="e_intro">{item.e_prointro}</p>
          </div>
          <p className="e_date">還剩{item.e_day}天</p>

          <div className="barwrapper">
            <div className="progress">
              <div
                className="progress_bar"
                id="progress_bar"
                role="progressbar"
                aria-valuenow="42"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <ProgressE item={item} />
              </div>
            </div>
          </div>

          <p className="e_price">${item.e_lowprice}</p>

          <div className="btn_div">
            <button className="fund">贊助</button>
          </div>
        </div>
        <div className="e_wrappp">
          <img src={`http://localhost:3001/img/` + item.e_pic} alt="" />
        </div>
      </div>
    </>
  )
}

export default withRouter(FundListCard)
