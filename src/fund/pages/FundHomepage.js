import React from 'react'
import e_video from '../images/oljn5-343em.mp4'


import '../styles/FundHomepage.scss'
// import 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import BookMark from '../components/BookMark'
import BookMarkTwo from '../components/BookMarkTwo'

import CarouselE from '../components/CarouselE'
import Edesign from '../components/Edesign'

function FundHomepage() {
  return (
    <>
      <header>
        <h1 className="e_slogan">椅子是佈置藝術更是生活的代表</h1>
        <div className="video">
          <video
            width="100%"
            loop="true"
            autoplay="autoplay"
            muted="true"
            preload="auto"
            src={e_video}
            alt=""
          />
        </div>
        <p class="p_video">
          本學院培育之新銳設計師，大膽之作
          <br />
          敬邀您一同欣賞
        </p>
      </header>

      <Container>
        <Col className="">
          <button name="explore" className="explore">
            探索
          </button>
        </Col>
      </Container>

      

      <BookMark />
      <CarouselE />
      <button className="e_more">more</button>

      <h1 className="e_popular">熱門募資專案</h1>
      <BookMarkTwo />
      <h1 className="e_popular">設計學院</h1>
      <Edesign />
    </>
  )
}

export default FundHomepage
