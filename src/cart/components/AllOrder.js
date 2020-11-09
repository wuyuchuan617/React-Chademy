import React, { useEffect } from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function AllOrder(props) {
  const { name, phone, city, area, adress } = props
  async function getAllorderFromServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/j_cart/list'

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
  }
  useEffect(() => {
    getAllorderFromServer()
  }, [])
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="#">我要退貨</Link>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
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
export default AllOrder
