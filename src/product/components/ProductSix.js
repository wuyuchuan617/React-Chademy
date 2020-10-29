import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import hotel from '../images/hotel.jpg'
function ProductSix(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div class="container">
        <div class="row justify-content-center title">
          <p>Boutique Hotel Project</p>
        </div>
        <div class="row">
          <div class="col hotel-left">
            <p>Miramonti Boutique Hotel</p>
            <p>HAFLING-MERAN, ITALY</p>

            <div class="left-icon">
              <img src={hotel} alt="" />
            </div>
          </div>
          <div class="col right-img">
            <img src={require('../../img/' + item.photo)} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductSix)
