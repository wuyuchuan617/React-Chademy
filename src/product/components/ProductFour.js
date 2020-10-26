import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function ProductFour(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-6 fourth-photo">
            <img src={require('../../img/' + item.photo)} alt="" />
          </div>
          <div class="col">
            <div class="quote">
              <p>
                “Creating a space that feels comfortably and authentically you
                is to create a home that tells a story of you.”
              </p>
            </div>
            <div class="author">
              <p>Alper Hermann</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductFour)
