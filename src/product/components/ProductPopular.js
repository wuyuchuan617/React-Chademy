import React from 'react'
import '../styles/productlist.css'
import popularImg from '../images/777.jpg'

function ProductPopular(props) {
  return (
    <>
      <div className="container">
        <div className="row popular justify-content-between">
          <div className="popular2  col-lg-6 col-sm-12 d-flex ">
            <div className="popularImg">
              <img src={popularImg} alt="" />
            </div>
            <div className="popularText justify-content-center">
              <p className="classic">熱銷經典</p>
              <p className="bestSell">BEST SELLERS</p>
              <button className="popularButton">SHOP NOW</button>
            </div>
          </div>
          <div className="popular2 col-lg-6 col-sm-12 d-flex ">
            <div className="popularImg">
              <img src={popularImg} alt="" />
            </div>
            <div className="popularText justify-content-center">
              <p className="classic">熱銷經典</p>
              <p className="bestSell">BEST SELLERS</p>
              <button className="popularButton">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPopular
