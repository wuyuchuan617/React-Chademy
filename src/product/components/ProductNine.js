import React from 'react'
import car from '../images/car.png'

function ProductNine(props) {
  return (
    <>
      <div className="container related-product">
        <div className="row justify-content-center title">
          <h3>其他人也喜歡</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={car} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={car} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={car} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="related-img">
              <img src={car} alt="" />
            </div>
            <p>HAFLING-MERAN, ITALY</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductNine
