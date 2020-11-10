import React, { useState } from 'react'
import Aside from '../../common_components/Aside/index'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PendingOrder from '../components/PendingOrder'
import AllOrder from '../components/AllOrder'
import CancelOrder from '../components/CancelOrder'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import FinishedOrder from '../components/FinishedOrder'

function MemberOrder(props) {
  const { setMyDate, setMyPO_NO } = props
  const [filiterState, setFiliterState] = useState('全部')
  const menu = (
    <Menu>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
          onClick={() => setFiliterState('全部')}
        >
          全部訂單
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
          onClick={() => setFiliterState('已完成')}
        >
          已完成
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
          onClick={() => setFiliterState('運送中')}
        >
          運送中
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
          onClick={() => setFiliterState('已取消')}
        >
          已取消
        </div>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <h3>我的訂單/訂單狀況({filiterState})</h3>
      <hr />
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          訂單狀況 <DownOutlined />
        </a>
      </Dropdown>
      <div style={{ marginTop: '30px' }}>
        {filiterState === '全部' ? (
          <AllOrder setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
        {filiterState === '已完成' ? (
          <FinishedOrder setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
        {filiterState === '運送中' ? (
          <PendingOrder setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
        {filiterState === '已取消' ? (
          <CancelOrder setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
      </div>
    </>
  )
}
export default MemberOrder
