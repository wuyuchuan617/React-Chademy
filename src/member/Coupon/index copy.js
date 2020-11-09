import React from 'react'
import './index.scss'

import { Form, Container, Button, Row } from 'react-bootstrap'
import { Tabs } from 'antd'
import Aside from '../../common_components/Aside'
import { Layout } from 'antd'

import imageCapon from '../chpr.png'
const { Header, Sider, Content } = Layout

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const { TabPane } = Tabs

function Coupon() {
  return (
    <>
      <Layout className="coupon_container">
        <Header>
          <h2 className="text-center">折價券</h2>
        </Header>
        <Layout>
          <Sider
            className="sider_container"
            style={{ background: 'transparent' }}
            light="light"
            width={256}
          >
            <Aside></Aside>
          </Sider>
          <Content className="all_con">
            {/* <h2 className="text-center title">折價券</h2> */}
            {/* <div className="text-center title2">個人資料</div> */}
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
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Coupon
