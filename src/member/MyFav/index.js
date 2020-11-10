import React from 'react'
import './index.scoped.scss'

import { Row } from 'react-bootstrap'
import { Tabs } from 'antd'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

import imageCapon from '../chpr.png'

const { TabPane } = Tabs

function MyFav(props) {
  return (
    <>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="二手" key="1" centered>
          <Row>
            <div>
              <img src={imageCapon} alt="Capon" className="Capon_img" />
            </div>
            {/* 這裡要撈資料 */}
            <ul className="coupon_detail_list">
              <li>[販售者/設計師]產品名稱</li>
              <li>商品編號：123456</li>
              <li>金額：$300</li>
              <li>商品總類：二手</li>
            </ul>
            <div className="cou">
              <div className="cou_btn">
                <AiOutlineShoppingCart className="icon" />
                加入購物車
              </div>
              <div className="cou_btn">
                <AiOutlineShoppingCart className="icon" />
                移除此商品
              </div>
            </div>
          </Row>
        </TabPane>
        <TabPane tab="體驗" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="一般商品" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  )
}

export default MyFav
