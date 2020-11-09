import React, { useEffect, useState } from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function PendingOrder(props) {
  const { name, phone, city, area, adress } = props
  const [member, setMember] = useState('')
  const [data, setData] = useState([])
  function getCartFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .name

    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMember(newMember)
  }
  async function getAllorderFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/listpending?member=${member}`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('hi', data)
    setData(data)
  }
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  useEffect(() => {
    getAllorderFromServer()
  }, [member])

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="#">我要退貨</Link>
      </Menu.Item>
    </Menu>
  )
  let nowstatus = ''
  return (
    <>
      {data.map((item) => {
        let link = '/review?' + item.PO_NO
        switch (item.order_status) {
          case 1:
            nowstatus = '處理中'
            break
          case 3:
            nowstatus = '已完成'
            break
          default:
            nowstatus = '已取消'
        }
        return (
          <div className="j_myorderbox" style={{ marginBottom: '15px' }}>
            <div className="j_wrapspace">
              <h5>訂單編號:{item.PO_NO}</h5>
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
            <h6 style={{ marginTop: '30px' }}>
              訂購日期:{item.order_date.substr(0, 10)}
            </h6>
            <h6 style={{ marginTop: '30px' }}>訂單狀況:{nowstatus}</h6>
            <div className="j_wrapspace" style={{ marginTop: '40px' }}>
              <img
                style={{
                  width: '270px',
                  height: '175px',
                  backgroundColor: 'black',
                }}
              />
              <h6 style={{ lineHeight: '175px' }}>訂單金額:{item.total}</h6>
              <Link to={link}>
                <h6 style={{ lineHeight: '175px', cursor: 'pointer' }}>
                  我要評論
                  <BsPen />
                </h6>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default PendingOrder
