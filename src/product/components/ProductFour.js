import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductFour(props) {
  const { product } = props
  console.log(product)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 fourth-photo">
            <img src={require('../images/pc4.jpg')} alt="" />
          </div>
          <div className="col">
            <div className="quote">
              <p>
                “Creating a space that feels comfortably and authentically you
                is to create a home that tells a story of you.”
              </p>
            </div>
            <div className="author">
              <p>Alper Hermann</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductFour)
