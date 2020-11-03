import React, { useEffect, useState } from 'react'
import popularImg from '../images/777.jpg'
import { BsStarFill } from 'react-icons/bs'
import { Rate } from 'antd'
import series from '../images/series.jpg'

function ProductSeven(props) {
  const { item } = props
  const [review, setReview] = useState([])

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_product/review/' + item.product_name

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setReview(data)
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center title">
          <h3>產品評價</h3>
        </div>
        <div className="row review justify-content-between d-flex">
          <div className="review-photo justify-content-center col-4">
            {review.map((item, index) => {
              return (
                <img src={`http://localhost:3001/img/` + item.photo} alt="" />
              )
            })}
          </div>
          <div className="col-7">
            <div className="d-flex justify-content-between ">
              <div>
                {/* <div className="stars "> */}
                {review.map((item, index) => {
                  return (
                    <Rate
                      disabled
                      // allowHalf
                      style={{ color: '#C77334', fontSize: 24 + 'px' }}
                      defaultValue={item.stars}
                    />
                  )
                })}

                {/* </div> */}
                {review.map((item, index) => {
                  return <p className="w_reviewSub">{item.review_title}</p>
                })}
              </div>
              <div>
                <div className="memberPhoto align-items-end">
                  <img src={series} alt="" />
                </div>
                {review.map((item, index) => {
                  return (
                    <p className="w_comP w_review_date text-right">
                      {item.review_time}
                    </p>
                  )
                })}
              </div>
            </div>
            {review.map((item, index) => {
              return <p className="w_review_comm">{item.review_comment}</p>
            })}
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="more-btn">MORE</button>
        </div>
      </div>
    </>
  )
}

export default ProductSeven
