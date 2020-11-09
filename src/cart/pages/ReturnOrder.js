import React from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function ReturnOrder(props) {
  const { name, phone, city, area, adress } = props
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="returnorder">我要退貨</Link>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <hr />

      <div className="j_myorderbox">
        <div className="j_wrapspace">
          <h5>訂單編號:...</h5>
          <Dropdown
            overlay={menu}
            trigger={['click']}
            placement={'bottomRight'}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <h4>
                <GrMore />
              </h4>
            </a>
          </Dropdown>
        </div>
        <h6 style={{ marginTop: '30px' }}>訂購日期:</h6>
        <h6 style={{ marginTop: '30px' }}>商品種類:</h6>
        <div className="j_wrapspace" style={{ marginTop: '40px' }}>
          <img
            style={{
              width: '230px',
              height: '175px',
              backgroundColor: 'black',
            }}
          />
          <h6 style={{ lineHeight: '175px' }}>訂單金額</h6>
          <h6 style={{ lineHeight: '175px', cursor: 'pointer' }}>
            我要評論
            <BsPen />
          </h6>
        </div>
      </div>
    </>
  )
}
export default ReturnOrder
