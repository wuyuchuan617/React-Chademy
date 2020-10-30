import React from 'react'
import ImgArea from '../components/SecondhandProduct/ImgArea'
import TextArea from '../components/SecondhandProduct/TextArea'
import Filter from '../components/SecondhandProduct/Filter'
import '../styles/secondhandProduct.css'

function SecondhandProduct() {
  return (
    <>
      <div class="container custom-container-width">
        <div class="row mt-5">麵包屑</div>
        <div class="row d-flex flex-wrap">
          <ImgArea />
          <TextArea />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default SecondhandProduct
