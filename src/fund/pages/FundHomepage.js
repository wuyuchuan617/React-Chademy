import React, { useState } from 'react'

import e_video from '../images/oljn5-343em.mp4'

import '../styles/FundHomepage.scss'
// import 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import BookMark from '../components/BookMark'
import BookIcon from '../components/BookIcon'
import BookMarkTwo from '../components/BookMarkTwo'
import PopBmarkOne from '../components/PopBmark/PopBmarkOne'
import PopBmarkTwo from '../components/PopBmark/PopBmarkTwo'
import PopBmarkThree from '../components/PopBmark/PopBmarkThree'
import PopBmarkFour from '../components/PopBmark/PopBmarkFour'

import CarouselE from '../components/CarouselE'
import CarouselETwo from '../components/CarouselETwo'
import CarouselEThree from '../components/CarouselEThree'
import Edesign from '../components/Edesign'

function FundHomepage() {
  const [showProject, setShowProject] = useState(0)
  const [filterMark, setFilterMark] = useState(0)
  const [filterIcon, setFilterIcon] = useState(0)
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
        <p className="p_video">
          本學院培育之新銳設計師，大膽之作
          <br />
          敬邀您一同欣賞
        </p>
      </header>
      <Container>
        <Col>
          <Row>
            <button name="explore" className="explore">
              探索
            </button>
          </Row>
        </Col>
      </Container>
      <BookMark setFilterMark={setFilterMark} />
      <BookIcon setFilterIcon={setFilterIcon} />
      {filterMark === 0 && filterIcon === 0 ? <CarouselE /> : ''}
      {filterMark === 0 && filterIcon === 1 ? <CarouselE /> : ''}
      {filterMark === 0 && filterIcon === 2 ? <CarouselE /> : ''}
      {filterMark === 0 && filterIcon === 3 ? <CarouselEThree /> : ''}
      {filterMark === 0 && filterIcon === 4 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 0 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 1 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 2 ? <CarouselETwo /> : ''}
      {filterMark === 1 && filterIcon === 3 ? <CarouselE /> : ''}
      {filterMark === 1 && filterIcon === 4 ? <CarouselE /> : ''}

      <div className="e_more_div" z-index="10">
        <button className="e_more">more</button>
      </div>
      <h1 className="e_popular">熱門募資專案</h1>
      <BookMarkTwo setShowProject={setShowProject} />
      {showProject === 0 ? <PopBmarkOne /> : ''}
      {showProject === 1 ? <PopBmarkTwo /> : ''}
      {showProject === 2 ? <PopBmarkThree /> : ''}
      {showProject === 3 ? <PopBmarkFour /> : ''}
      <h1 className="e_popular">設計學院</h1>
      <Edesign />
    </>
  )
}

export default FundHomepage
