import React from 'react'
import './index.scss'

import { Row } from 'react-bootstrap'
import { Tabs } from 'antd'

import imageCapon from '../chpr.png'

const { TabPane } = Tabs

function Coupon(props) {
  console.log(props)
  // props.setTitle('折價卷')

  return (
    <>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="已使用" key="1" centered>
          <Row>
            <div>
              <img src={imageCapon} alt="Capon" className="Capon_img" />
            </div>
            {/* 這裡要撈資料 */}
            <ul className="coupon_detail_list">
              <li>使用期限：2020/12/12</li>
              <li>優惠券編號：123456</li>
              <li>折扣金額：$300</li>
            </ul>
            <div className="cou">
              <div className="cou_btn">已使用</div>
            </div>
          </Row>
        </TabPane>
        <TabPane tab="未使用" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="已逾期" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  )
}

export default Coupon
