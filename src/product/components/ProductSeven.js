// ------------------------------以下引入套件---------------------------

import React, { useEffect, useState } from 'react'

// ------------------以下引入Components----------------------------

import ReviewCard from '../components/ReviewCard'
import NoReviewCard from '../components/NoReviewCard'

// -----------------------以下開始Component ProductSeven-----------------

function ProductSeven(props) {
  // props解構，item是從product傳下來
  // review, setReview state是從product傳下來
  const { item, review, setReview } = props

  // ---------------以下開始fetch SQL get data function-----------------

  // 用產品名稱搜尋該筆產品的所有評論
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
  }, [item])

  // -----------------------------以下開始 JSX 畫面-----------------

  return (
    <>
      {review.length ? (
        review.map((item, index) => {
          return <ReviewCard item={item} />
        })
      ) : (
        <NoReviewCard item={item} />
      )}
    </>
  )
}

// ---------------以下輸出component-----------------

export default ProductSeven
