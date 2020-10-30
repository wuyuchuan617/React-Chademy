import React from 'react'

import Firstview from '../components/SecondhandFrom/Firstview'
import Title from '../components/SecondhandFrom/Title'
import ImgArea from '../components/SecondhandFrom/ImgArea'
import TextArea from '../components/SecondhandFrom/TextArea'

import '../styles/secondhandForm.css'

function SecondhandForm() {
  return (
    <>
      <Firstview />
      <div className="container custom-container-width">
        <Title />
        <div class="row no-gutters">
          <ImgArea />
          <TextArea />
        </div>
      </div>
    </>
  )
}

export default SecondhandForm
