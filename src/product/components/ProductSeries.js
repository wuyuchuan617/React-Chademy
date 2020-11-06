// ------------------------------以下引入套件--------------------------

import React from 'react'

// ------------------以下引入images---------------------------

import series from '../images/series.jpg'

function ProductSeries(props) {
  const { setSeries } = props

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <p className="subtitle1">產品系列</p>
        </div>
        <div className="row justify-content-center">
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='chair'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">單椅</p>
          </div>

          <div
            className=" col seriePhoto"
            onClick={() => {
              setSeries(`category='armchair'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">扶手椅</p>
          </div>
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='dining'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">餐椅</p>
          </div>
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='lounge'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">沙發椅</p>
          </div>
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='stool'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">吧台椅</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSeries
