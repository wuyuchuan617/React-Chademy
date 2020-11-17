/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import PendingOrder from '../components/PendingOrder'
import AllOrder from '../components/AllOrder'
import CancelOrder from '../components/CancelOrder'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import FinishedOrder from '../components/FinishedOrder'
import OrderToFund from '../components/OrderToFund'

function MemberOrder(props) {
  const { setMyDate, setMyPO_NO } = props
  const [filiterState, setFiliterState] = useState('全部')
  const [getAll, setGetAll] = useState(0)
  const [getPending, setGetPending] = useState(0)
  const [getFinish, setGetFinish] = useState(0)
  const [getCancel, setGetCancel] = useState(0)
  const menu = (
    <Menu>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
          onClick={() => {
            setFiliterState('全部')
            setGetAll(getAll + 1)
          }}
        >
          全部訂單
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
          onClick={() => {
            setFiliterState('已完成')
            setGetFinish(getFinish + 1)
          }}
        >
          已完成
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
          onClick={() => {
            setFiliterState('處理中')
            setGetPending(getPending + 1)
          }}
        >
          處理中
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
          onClick={() => {
            setFiliterState('已取消')
            setGetCancel(getCancel + 1)
          }}
        >
          已取消
        </div>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <h3>
        <span className="jspan1">訂單狀況({filiterState})</span>
      </h3>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            訂單狀況 <DownOutlined />
          </a>
        </Dropdown>
        <div
          style={{
            width: '100px',
            height: '40px',
            backgroundColor: '#c77334',
            textAlign: 'center',
            lineHeight: '40px',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={() => setFiliterState('課程')}
        >
          募資
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        {filiterState === '全部' ? (
          <AllOrder
            setMyPO_NO={setMyPO_NO}
            setMyDate={setMyDate}
            getAll={getAll}
            getPending={getPending}
            getCancel={getCancel}
            getFinish={getFinish}
          />
        ) : (
          ''
        )}
        {filiterState === '已完成' ? (
          <FinishedOrder setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
        {filiterState === '處理中' ? (
          <PendingOrder setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
        {filiterState === '已取消' ? (
          <CancelOrder setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
        {filiterState === '課程' ? (
          <OrderToFund setMyPO_NO={setMyPO_NO} setMyDate={setMyDate} />
        ) : (
          ''
        )}
      </div>
    </>
  )
}
export default MemberOrder
