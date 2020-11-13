import React, { useState, useEffect } from 'react'
import { countries, townships, postcodes } from '../components/Data'
import { Table, Tag, Space } from 'antd'

function ManagerOrder(props) {
  const { showDashBoard, setDashboard } = props
  const [data, setData] = useState([])
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
      let object = {
        key: key,
        name: name,
        PO_NO: PO_NO,
        date: date,
        total: total,
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
        <div
          style={{
            width: '245px',
            height: '100vh',
            backgroundColor: 'black',
          }}
        ></div>
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
