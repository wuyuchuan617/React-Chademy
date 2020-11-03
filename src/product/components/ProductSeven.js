import React, { useEffect, useState } from 'react'
import popularImg from '../images/777.jpg'
import { BsStarFill } from 'react-icons/bs'
import { Rate } from 'antd'
import series from '../images/series.jpg'
import ReviewCard from '../components/ReviewCard'

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
      {/* <div className="container ">
        <div className="row justify-content-center title">
          <h3>產品評價</h3>
        </div> */}
      {review.map((item, index) => {
        return <ReviewCard item={item} />
      })}
      {/* </div> */}
    </>
  )
}

export default ProductSeven
