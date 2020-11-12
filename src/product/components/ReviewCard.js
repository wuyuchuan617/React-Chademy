// ------------------------------以下引入套件---------------------------

import React, { useEffect, useState } from 'react'
import { Rate } from 'antd'

// ------------------以下引入images----------------------------

import series from '../images/series.jpg'

// -----------------------以下開始Component Slider-----------------

function ReviewCard(props) {
  // props解構，item是從product傳下來再從ProductSeven傳下來的單一產品{}
  const { item } = props

  // -----------------------------以下開始 JSX 畫面-----------------

  return (
    <>
      <div className="row review justify-content-between d-flex">
        <div className="review-photo justify-content-center col-4">
          <img src={`http://localhost:3001/img/` + item.photo} alt="" />
        </div>
        <div className="col-7">
          <div className="d-flex justify-content-between ">
            <div>
              <Rate
                disabled
                // allowHalf
                style={{ color: '#C77334', fontSize: 24 + 'px' }}
                defaultValue={item.stars}
              />

              <p className="w_reviewSub">{item.review_title}</p>
            </div>
            <div>
              <div className="memberPhoto align-items-end">
                <img src={series} alt="" />
              </div>

              <p className="w_comP w_review_date text-right">
                {item.review_time}
              </p>
            </div>
          </div>
          <p className="w_review_comm p14">{item.review_comment}</p>
        </div>
      </div>
    </>
  )
}

// ---------------以下輸出component-----------------

export default ReviewCard
