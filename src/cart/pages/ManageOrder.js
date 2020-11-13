import React, { useState, useEffect } from 'react'
import { countries, townships, postcodes } from '../components/Data'
import { Table, Tag, Space } from 'antd'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

function ManagerOrder(props) {
  const { showDashBoard, setDashboard } = props
  const [data, setData] = useState([])
  const [openKeys, setOpenKeys] = React.useState(['sub1'])

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  //拿全部訂單
  async function getAllorderFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/alllist`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    const newArray = []
    for (let i = 0; i < data.length; i++) {
      let key = i
      let name = data[i].member
      let PO_NO = data[i].PO_NO
      let date = data[i].order_date
      let total = data[i].total
      let status = data[i].order_status
      switch (status) {
        case 1:
          status = <div style={{ color: 'red' }}>處理中</div>
          break
        case 3:
          status = <div style={{ color: 'green' }}>已完成</div>
          break
        default:
          status = <div style={{ color: 'grey' }}>已取消</div>
      }
      let object = {
        key: key,
        name: name,
        PO_NO: PO_NO,
        date: date,
        total: '$' + total,
        status: status,
      }
      newArray.push(object)
    }
    setData(newArray)
  }
  useEffect(() => {
    setDashboard(true)
    getAllorderFromServer()
  }, [])

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]

  const columns = [
    {
      title: '會員名稱',
      dataIndex: 'name',
      key: 'name',
      width: '200px',
    },
    {
      title: '訂單編號',
      dataIndex: 'PO_NO',
      key: 'PO_NO',
      width: '300px',
    },
    {
      title: '訂購日期',
      dataIndex: 'date',
      key: 'date',
      width: '217px',
    },
    {
      title: '總金額',
      dataIndex: 'total',
      key: 'total',
      width: '239px',
    },
    {
      title: '訂單狀況',
      dataIndex: 'status',
      key: 'status',
      width: '180px',
    },
  ]
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="dashboard">
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h4>管理後台</h4>
          </div>

          {/* <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 245 }}
            theme="dark"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu> */}
        </div>
        <div style={{ paddingLeft: '15px', paddingTop: '15px' }}>
          <Table
            dataSource={data}
            columns={columns}
            size="large"
            pagination={{ position: ['bottomCenter'] }}
          />
        </div>
      </div>
    </>
  )
}
export default ManagerOrder
