import React from 'react'
// import React, { useState, useEffect } from 'react'

import './index.scoped.scss'

import { Menu } from 'antd'
// import {
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined,
// } from '@ant-design/icons'

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const { SubMenu } = Menu

function Aside() {
  //   const [collapsed, setCollapsed] = useState(false)
  //   const toggleCollapsed = () => setCollapsed(!collapsed)

  return (
    <>
      <div className="aside_container" style={{ width: 256 }}>
        <Menu defaultSelectedKeys={['1']} mode="inline">
          {/* defaultOpenKeys={['sub1']} */}
          {/* theme="dark" */}
          {/* inlineCollapsed={collapsed} */}

          <SubMenu key="sub1" title="我的帳戶">
            {['個人資料', '電子信箱', '信用卡', '地址', '更改密碼'].map(
              (item) => (
                <Menu.Item key={item}>
                  <div>{item}</div>
                </Menu.Item>
              )
            )}
          </SubMenu>

          {/* <SubMenu key="sub1" title="我的帳戶">
            <Menu.Item key="5">個人資料</Menu.Item>
            <Menu.Item key="6">電子信箱</Menu.Item>
            <Menu.Item key="7">信用卡</Menu.Item>
            <Menu.Item key="8">地址</Menu.Item>
          </SubMenu> */}

          {['訂單', '追蹤清單', '折價券', '評論', '我的評價'].map((item) => (
            <Menu.Item key={item}>
              <div>{item}</div>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </>
  )
}

export default Aside
