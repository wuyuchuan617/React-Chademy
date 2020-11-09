import React from 'react'
// import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

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

  const router = useHistory()

  // 點擊的時候，導過去
  const hanldeClick = ({ key }) => {
    router.push(key)
  }

  return (
    <>
      <div className="aside_container" style={{ width: 256 }}>
        <Menu defaultSelectedKeys={['1']} mode="inline" onClick={hanldeClick}>
          {/* defaultOpenKeys={['sub1']} */}
          {/* theme="dark" */}
          {/* inlineCollapsed={collapsed} */}

          <SubMenu key="sub1" title="我的帳戶">
            {[
              { path: '/member-center', name: '個人資料' },
              { path: '/member-center/resetemail', name: '電子信箱' },
              { path: '/member-center/creditcard', name: '信用卡' },
              { path: '/member-center/address', name: '地址' },
              { path: '/member-center/resetpass', name: '更改密碼' },
            ].map((item) => (
              <Menu.Item key={item.path}>
                <div>{item.name}</div>
              </Menu.Item>
            ))}
          </SubMenu>

          {[
            { path: '/member-center/myorder', name: '訂單' },
            { path: '/member-center/myfav', name: '追蹤清單' },
            { path: '/member-center/coupon', name: '折價券' },
            { path: '/評論', name: '評論' },
            { path: '/我的評價', name: '我的評價' },
          ].map((item) => (
            <Menu.Item key={item.path}>
              <div>{item.name}</div>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </>
  )
}

export default Aside
