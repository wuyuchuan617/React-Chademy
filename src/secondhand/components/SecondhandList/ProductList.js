import React from 'react'

import Img from '../../img/elementaire-chair_910x1100_brandmodel.jpg'

function ProductList() {
  return (
    <div className="i_product d-flex flex-wrap">
      <div className="i_card">
        <div className="i_card_img">
          <img src={Img} alt="" />
        </div>
        <div className="i_card_info mt-4 d-flex justify-content-between">
          <div className="i_user">
            <div className="i_user_name">
              <img src={Img} alt="" />
              <p>Linda325</p>
            </div>
            <div className="i_user_star mt-2">★★★★★</div>
          </div>
          <div className="i_item">
            <div className="i_item_name">
              <p>Vienna(凡爾賽椅)</p>
            </div>
            <div className="i_item_price ">
              <p className="text-right">$2,380</p>
            </div>
          </div>
        </div>
      </div>

      <div className="i_end">
        <hr />
        <div className="i_btn1 text-center mt-4">more</div>
      </div>
    </div>
  )
}

export default ProductList
