import React from 'react'
import series from '../images/series.jpg'

function ProductSeries(props) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <p className="subtitle1">產品系列</p>
        </div>
        <div className="row justify-content-center">
          <div className="col seriePhoto">
            <img src={series} alt="" />
            <p className="seriesTitle">單椅</p>
          </div>

          <div className=" col seriePhoto">
            <img src={series} alt="" />
            <p className="seriesTitle">扶手椅</p>
          </div>
          <div className="col seriePhoto">
            <img src={series} alt="" />
            <p className="seriesTitle">餐椅</p>
          </div>
          <div className="col seriePhoto">
            <img src={series} alt="" />
            <p className="seriesTitle">沙發椅</p>
          </div>
          <div className="col seriePhoto">
            <img src={series} alt="" />
            <p className="seriesTitle">吧台椅</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSeries
