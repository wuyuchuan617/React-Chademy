import React from 'react'

function NoReviewCard(props) {
  const { item } = props

  return (
    <>
      <div className="row reviewNO justify-content-between d-flex">
        <div className="review-photo justify-content-center col-4">
          <img src={`http://localhost:3001/img/` + item.photo} alt="" />
        </div>
        <div className="col-7">
          <div className="d-flex justify-content-between ">
            <p>尚未有評論</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoReviewCard
