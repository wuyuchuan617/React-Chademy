import React, { useState, useEffect } from 'react'

// 引入封裝過的 axios
import request from '../../utils/request'
import { userInfo } from '../../utils'

// import { notification, Space } from 'antd'

// style 引入順序，後者會蓋前者
import '../../secondhand/styles/myproduct.css'
import '../../member/index.scoped.scss'
import '../../secondhand/styles/secondhandForm.css'

import MyproductTd from '../components/MyFundTd'
import NoData from '../../common_components/NoData'

// import { Layout } from 'antd'
// const { Content } = Layout

const Myproduct = () => {
  const { name, sid } = userInfo()

  // const [member, setMember] = useState('')
  const [myproduct, setMyprdouct] = useState([])
  // const [memberSid, setMemberSid] = useState('')

  // //redux
  // function getCartFromLocalStorage() {
  //   const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
  //     .name

  //   console.log('newMember', newMember)
  //   console.log(typeof newMember)
  //   setMember(newMember)
  // }

  // //member sid
  // function getCartFromLocalStorage2() {
  //   const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
  //     .sid

  //   console.log('newMember', newMember)
  //   console.log(typeof newMember)
  //   setMemberSid(newMember)
  //   console.log('memberSid', memberSid)
  // }

  /**
   * 撈指定會員資料
   */
  // async function getItemFromSQL3() {
  //   const url = 'http://localhost:3001/man_fund/fundlistnode/' + memberSid

  //   const request = new Request(url, {
  //     method: 'GET',

  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //   // const response = await fetch(request).then((v) => console.log(v))
  //   const response = await fetch(request)
  //   const data = await response.json()

  //   console.log('response', response) // [object Response]
  //   console.log('data', data) // [object Object]

  //   setMyprdouct(data)
  // }

  // useEffect(() => {
  //   getCartFromLocalStorage()
  //   getCartFromLocalStorage2()
  // }, [])

  // useEffect(() => {
  //   getItemFromSQL3()
  // }, [memberSid])

  useEffect(() => {
    async function fetchData() {
      // 封裝的 axios，請求會帶上 token，因此前端不用多帶 user_sid
      // 後端直接可以透過 req.session.sid 知道誰登入
      const response = await request({
        url: `/man_fund/fundlistnode`,
        method: 'POST',
      })
      const { success, data } = response

      console.log('success, data ', success, data)
      if (success) {
        setMyprdouct(data)
      }
    }

    fetchData()
  }, [name, sid])

  return (
    <>
      <div className="i_title text-center">
        <h5>Hello, {name}</h5>
      </div>

      <div className="container mycontainer">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">募資編號</th>
              <th scope="col">產品圖片</th>
              <th scope="col">專案名稱</th>
              <th scope="col">最低價格</th>
              <th scope="col">刪除</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            {myproduct.length > 0 ? (
              myproduct.map((item, index) => {
                return (
                  <MyproductTd key={index} item={item} myproduct={myproduct} />
                )
              })
            ) : (
              <NoData tips="沒有募資清單"></NoData>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Myproduct
