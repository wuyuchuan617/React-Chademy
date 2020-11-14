/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/myproduct.css'
import { Rate, Upload, Layout } from 'antd'
import { notification, Space } from 'antd'
import '../styles/secondhandForm.css'

import Aside from '../../common_components/Aside/index'
import '../../common_components/Aside/index.scoped.scss'
import '../../member/MemberCenter/index.scoped.scss'

import MyproductTd from '../../secondhand/components/MyprdoctTd'

const { Header, Footer, Sider, Content } = Layout

const Myproduct = () => {
  const [member, setMember] = useState('')
  const [memberSid, setMemberSid] = useState('')
  const [myproduct, setMyprdouct] = useState([])

  //redux
  function getCartFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .name

    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMember(newMember)
  }

  //member sid
  function getCartFromLocalStorage2() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .sid

    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMemberSid(newMember)
    console.log('memberSid', memberSid)
  }

  /**
   * 撈指定會員資料
   */
  async function getItemFromSQL3() {
    const url = 'http://localhost:3001/man_secondhand/myproduct/' + memberSid

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response', response) // [object Response]
    console.log('data', data) // [object Object]

    setMyprdouct(data)
  }

  useEffect(() => {
    getCartFromLocalStorage()
    getCartFromLocalStorage2()
  }, [])

  useEffect(() => {
    getItemFromSQL3()
  }, [memberSid])

  useEffect(() => {
    getItemFromSQL3()
  }, [myproduct])

  return (
    <>
      <Layout className="memberCenter_container">
        <Header className="hander_container">
          <div className="title">我的評論</div>
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
          <Content style={{ padding: '0 50px' }}>
            <div className="i_title text-center">
              <h5>Hello, {member}</h5>
            </div>

            <div className="container mycontainer">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">商品編號</th>
                    <th scope="col">商品圖片</th>
                    <th scope="col">商品名稱</th>
                    <th scope="col">價錢</th>
                    <th scope="col">刪除</th>
                    <th scope="col">編輯</th>
                  </tr>
                </thead>
                <tbody>
                  {myproduct.map((item, index) => {
                    return (
                      <MyproductTd
                        key={index}
                        item={item}
                        myproduct={myproduct}
                      />
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Myproduct
