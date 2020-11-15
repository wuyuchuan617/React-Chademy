import React from 'react'
import { withRouter } from 'react-router-dom'
function RecommendResult(props) {
  const { item } = props

  return (
    <>
      <div className=" productCard col-lg-4 col-md-6 col-sm-12">
        <div className="productCardImg_recom">
          <img
            src={`http://localhost:3001/img/` + item.photo}
            alt=""
            onClick={() => {
              props.history.push('/product/' + item.sid)
            }}
          />
        </div>

        <p>{item.product_name}</p>
        <p>${item.price}</p>
      </div>
    </>
  )
}

export default withRouter(RecommendResult)
