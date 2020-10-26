import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function ProductFive(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div class="container">
        <div class="row post-abs">
          <div class="top-area"></div>
          <div class="top-area">
            <h3>WHO WE ARE</h3>
            <p>Founded On Friendship, Guided By Curiosity</p>
          </div>
          <div class="designer-photo">
            <img src={require('../../img/' + item.photo)} alt="" />
          </div>
        </div>
        <div class="row">
          <div class="sec-area"></div>
          <div class="sec-area">
            <p>
              Founded in 2013 by friends and university classmates Jasper
              Overgaard and Christian Dyrman, the Overgaard & Dyrman studio
              exists as a collaborative platform for creating original and
              meaningful lifestyle objects. At the core of every O&D project,
              there is a spirit of shared curiosity and creative partnership.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductFive)
