import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'

import { Layout } from 'antd'

import Aside from '../common_components/Aside'

import WinWheel from './WinWheel'

// --------------------- 以下 import 會員頁面 --------------------

import MemberCenter from './MemberCenter'
import Coupon from './Coupon'
import Creditcard from './Creditcard'
import ResetEmail from './ResetEmail'
import ResetPass from './ResetPass'
import MyFav from './MyFav'
import Address from './Address'
import Commentt from './Commentt'
import CommentEdit from './CommentEdit'
import Evaluation from './Evaluation'
import MyFund from '../../src/fund/pages/MyFund'
// --------------------- 以下 import 訂單頁面 --------------------
import MemberOrder from '../cart/pages/MemberOrder'
import ReturnOrder from '../cart/pages/ReturnOrder'
// --------------------- 以下 import 我的商品 --------------------
import Myproduct from '../secondhand/pages/Myproduct'
const { Header, Sider, Content } = Layout

function MemberIndex({ cartamount, setCartAmount }) {
  const [title, setTitle] = useState('')
  const [myPO_NO, setMyPO_NO] = useState('')
  const [myDate, setMyDate] = useState('')

  const { path } = useRouteMatch()
  const location = useLocation()

  useEffect(() => {
    const handleTitle = () => {
      const titleCopnfig = [
        { path: '/coupon', title: '折價卷' },
        { path: '/creditcard', title: '信用卡' },
        { path: '/resetemail', title: '更換電子信箱' },
        { path: '/resetpass', title: '更改密碼' },
        { path: '/myfav', title: '追蹤清單' },
        { path: '/address', title: '地址' },
        { path: '/commentt', title: '評論' },
        { path: '/commentEdit', title: '編輯評論' },
        { path: '/evaluation', title: '我的評價' },
        { path: '/myfund', title: '我的募資' },
        { path: '/myorder', title: '訂單' },
        { path: '/returnorder', title: '退貨' },
        { path: '/myproduct', title: '我的商品' },
      ]

      // 當下的 url
      const currentPath = location.pathname.replace(path, '')

      // e.g. '/commentEdit/22'.indexOf('/commentEdit') => 後面有帶參數也可以找到
      // ~ => 把找不到(-1)，變成 0
      const { title = '個人資料' } =
        titleCopnfig.find((i) => ~currentPath.indexOf(i.path)) || {}

      setTitle(title)
    }

    handleTitle()

    // 如果 location.pathname 改變了，就重新設定 title
  }, [location, path])

  return (
    <>
      <Layout className="memberCenter_container">
        <Header className="hander_container">
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
            <Content className="member_content">
              {/* 會員中心 首頁 */}
              <Route exact path={path}>
                <MemberCenter />
              </Route>

              <Route path={`${path}/wheel`}>
                <WinWheel></WinWheel>
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
                <MyFav cartamount={cartamount} setCartAmount={setCartAmount} />
              </Route>

              <Route path={`${path}/address`}>
                <Address />
              </Route>

              <Route path={`${path}/commentt`}>
                <Commentt />
              </Route>

              <Route path={`${path}/commentEdit/:reviewSid`}>
                <CommentEdit />
              </Route>

              <Route path={`${path}/evaluation`}>
                <Evaluation />
              </Route>

              <Route path={`${path}/myfund`}>
                <MyFund />
              </Route>

              <Route path={`${path}/myorder`}>
                <MemberOrder
                  myPO_NO={myPO_NO}
                  setMyPO_NO={setMyPO_NO}
                  myDate={myDate}
                  setMyDate={setMyDate}
                />
              </Route>

              <Route path={`${path}/returnorder`}>
                <ReturnOrder myPO_NO={myPO_NO} myDate={myDate} />
              </Route>

              <Route path={`${path}/myproduct`}>
                <Myproduct />
              </Route>
            </Content>
          </Switch>
        </Layout>
      </Layout>
    </>
  )
}

export default MemberIndex
