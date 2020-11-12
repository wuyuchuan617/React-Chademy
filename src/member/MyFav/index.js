import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { Row } from 'react-bootstrap'
import { Tabs } from 'antd'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

import imagemyfav from '../chpr.png'

import request from '../../utils/request'
const { TabPane } = Tabs

function MyFav(props) {
  const [myfavlist, setmyfavlist] = useState([])
  const [activeKey, setActiveKey] = useState('1')

  async function fetchData() {
    const response = await request({
      url: `/members/getUserMyFav`,
      method: 'POST',
      data: {},
    })

    const { success, data } = response

    console.log('success, data ', success, data)
    if (success) {
      setmyfavlist(data)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        type="card"
        onChange={(activeKey) => {
          setActiveKey(activeKey)
        }}
      >
        {[
          { tab: '二手', key: '1' },
          { tab: '經典', key: '2' },
          { tab: '課程', key: '3' },
        ].map((tabItem) => (
          <TabPane tab={tabItem.tab} key={tabItem.key} centered>
            <Row>
              {/* item.status === Number(activeKey) &&  */}
              {myfavlist.map((item) => (
                <>
                  <div>
                    <img src={imagemyfav} alt="myfav" className="Capon_img" />
                  </div>
                  {/* 這裡要撈資料 */}
                  <ul className="myfav_detail_list">
                    <li>[販售者/設計師]{item.product_name}</li>
                    <li>商品編號：{item.product_no}</li>
                    <li>金額：${item.price}</li>
                    <li>商品總類：{item.product_type}</li>
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
                </>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </>
  )
}

export default MyFav
