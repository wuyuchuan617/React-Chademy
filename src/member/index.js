import React, { useState, useEffect } from 'react'
import './index.scss'

import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'

import { Layout } from 'antd'

import Aside from '../common_components/Aside'

// --------------------- 以下 import 會員頁面 --------------------

import MemberCenter from './MemberCenter'
import Coupon from './Coupon'
import Creditcard from './Creditcard'
import ResetEmail from './ResetEmail'
import ResetPass from './ResetPass'
import MyFav from './MyFav'
import Address from './Address'
// --------------------- 以下 import 訂單頁面 --------------------
import MemberOrder from '../cart/pages/MemberOrder'

const { Header, Sider, Content } = Layout

function MemberIndex() {
  const [title, setTitle] = useState('')

  const { path } = useRouteMatch()
  const location = useLocation()

  useEffect(() => {
    const handleTitle = () => {
      const titleObj = {
        '/coupon': '折價卷',
        '/creditcard': '信用卡',
        '/resetemail': '更換電子信箱',
        '/resetpass': '更改密碼',
        '/myfav': '追蹤清單',
        '/address': '地址',
      }

      const title = titleObj[location.pathname.replace(path, '')] || '個人資料'

      console.log(location)
      setTitle(title)

      console.log(
        999,
        title,
        location.pathname.replace(path, ''),
        '  location.pathname.replace'
      )
    }

    handleTitle()

    // 如果 location.pathname 改變了，就重新設定 title
  }, [location.pathname, path])

  console.log(' MemberIndex: ', path)

  return (
    <>
      <Layout className="coupon_container">
        <Header>
          <h2 className="text-center">{title}</h2>
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

          {/* 方法一：缺點 app 要寫很多 route */}
          {/* <Content className="all_con">{children}</Content> */}

          {/* 方法二： 嵌套的 route, https://reactrouter.com/web/example/nesting */}
          <Switch>
            <Content>
              {/* 會員中心 首頁 */}
              <Route exact path={path}>
                <MemberCenter />
              </Route>

              <Route path={`${path}/coupon`}>
                <Coupon />
              </Route>

              <Route path={`${path}/creditcard`}>
                <Creditcard />
              </Route>

              <Route path={`${path}/resetemail`}>
                <ResetEmail />
              </Route>

              <Route path={`${path}/resetpass`}>
                <ResetPass />
              </Route>

              <Route path={`${path}/myfav`}>
                <MyFav />
              </Route>
              <Route path={`${path}/address`}>
                <Address />
              </Route>
              <Route path={`${path}/myorder`}>
                <MemberOrder />
              </Route>
            </Content>
          </Switch>
        </Layout>
      </Layout>
    </>
  )
}

export default MemberIndex
