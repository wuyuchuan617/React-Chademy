import React, { useEffect, useState } from 'react'
import popularImg from '../images/777.jpg'
import { BsStarFill } from 'react-icons/bs'
import { Rate } from 'antd'
import series from '../images/series.jpg'

function ProductSeven(props) {
  const { item } = props

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
          <p className="w_review_comm">{item.review_comment}</p>
        </div>
      </div>
    </>
  )
}

export default ProductSeven
