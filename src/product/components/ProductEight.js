import React from 'react'
import popularImg from '../images/777.jpg'

function ProductEight(props) {
  return (
    <>
      <div class="container related-product">
        <div class="row justify-content-center title">
          <h3>其他人也喜歡</h3>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="related-img">
              <img src={popularImg} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductEight
