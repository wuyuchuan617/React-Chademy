import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import Img from '../../img/elementaire-chair_910x1100_brandmodel.jpg'
import { Rate } from 'antd'

function ProductList(props) {
  const { item } = props

  return (
    <div className="i_card" id={item.sid}>
      <div className="i_card_img">
        <img
          src={`http://localhost:3001/img/` + item.photo}
          alt=""
          onClick={() => {
            props.history.push('/secondhand_product/' + item.sid)
          }}
        />
      </div>
      <div className="i_card_info mt-4 d-flex justify-content-between">
        <div className="i_user">
          <div className="i_user_name">
            <img src={Img} alt="" />
            <p>Linda325</p>
          </div>
          <div className="i_user_star mt-2">
            <Rate
              allowHalf
              defaultValue={2.5}
              style={{ color: ' #c77334' }}
              className="ant-rate-star-second"
            />
          </div>
        </div>
        <div className="i_item">
          <div className="i_item_name">
            <p
              onClick={() => {
                props.history.push('/secondhand_product/' + item.sid)
              }}
            >
              {item.productname}
            </p>
          </div>
          <div className="i_item_price ">
            <p className="text-right">${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ProductList)
