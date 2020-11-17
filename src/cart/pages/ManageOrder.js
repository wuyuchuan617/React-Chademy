/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { Table, Tag, Space } from 'antd'

import { Modal, Button } from 'antd'
import DashBoardAside from '../components/DashBoardAside'

function ManagerOrder(props) {
  // const { setDashboard } = props
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const [detailData, setDetailData] = useState([])
  const [productData, setProductData] = useState([])
  const [address, setAddress] = useState('')
  const [thisPO_NO, setThisPO_NO] = useState('')
  const [reload, setReload] = useState(0)
  const [secondhandData, setSecondhandData] = useState([])
  const [fundData, setFundData] = useState([])
  const [bidData, setBidData] = useState([])
  const [experienceData, setExperienceData] = useState([])

  async function getProductFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/productlist`

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
    setProductData(data)
  }
  async function getSecondhandFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/secondhandlist`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('second', data)
    setSecondhandData(data)
  }
  //募資
  async function getFundFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/fundlist`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('fund', data)
    setFundData(data)
  }
  //體驗
  async function getExperienceFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/experiencelist`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('Experience', data)
    setExperienceData(data)
  }
  async function getBidFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/bidlist`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('bid', data)
    setBidData(data)
  }

  async function getOrderDetailFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/detaillist?PO_NO=${thisPO_NO}`

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
    setDetailData(data)
  }
  useEffect(() => {
    getOrderDetailFromServer()
    getProductFromServer()
  }, [thisPO_NO])

  async function cancelToServer(value) {
    const url = 'http://localhost:3001/j_cart/finishorder'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ PO_NO: thisPO_NO }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
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
      let filter = data[i].order_status
      switch (status) {
        case 1:
          status = (
            <div
              style={{ color: '#c77334', cursor: 'pointer' }}
              onClick={() => {
                setVisible(true)
                setAddress(data[i].delivery_adress)
                setThisPO_NO(PO_NO)
              }}
            >
              處理中
            </div>
          )
          break
        case 3:
          status = <div style={{ color: '#436464' }}>已完成</div>
          break
        default:
          status = <div style={{ color: '#b7bdb3' }}>已取消</div>
      }
      let object = {
        key: key,
        name: name,
        PO_NO: PO_NO,
        date: date,
        total: '$' + total,
        status: status,
        filter: filter,
      }
      newArray.push(object)
    }
    setData(newArray)
  }
  useEffect(() => {
    // setDashboard(true)
    getAllorderFromServer()
  }, [])
  useEffect(() => {
    // setDashboard(true)
    getAllorderFromServer()
  }, [reload])

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
      onFilter: (value, record) => record.filter.indexOf(value) === 0,
      sorter: (a, b) => a.filter - b.filter,
      // sortDirections: ['descend', 'ascend'],
    },
  ]
  let boximg = '5cbb0ac7-6aee-4ee9-840b-d54e1c896bd2.jpg'
  let price = 0
  return (
    <>
      <div style={{ display: 'flex' }}>
        <DashBoardAside />
        <div>
          <div style={{ paddingLeft: '30px', paddingTop: '15px' }}>
            <div className="j_text_center">
              <h3>全部訂單</h3>
            </div>

            <Table
              dataSource={data}
              columns={columns}
              size="large"
              pagination={{ position: ['bottomCenter'] }}
            />
          </div>
        </div>
      </div>
      <Modal
        title={address}
        centered
        visible={visible}
        onOk={() => {
          cancelToServer()
          setVisible(false)
          setReload(reload + 1)
        }}
        onCancel={() => setVisible(false)}
        width={1000}
        okText="出貨"
      >
        {detailData.map((item) => {
          for (let i = 0; i < productData.length; i++) {
            console.log('hi')
            if (item.product_name === productData[i].product_name) {
              price = productData[i].price
              boximg = productData[i].photo
              console.log('showimg')
            }
          }
          for (let j = 0; j < experienceData.length; j++) {
            console.log('hi')
            if (item.product_name === experienceData[j].activitie_name) {
              price = experienceData[j].sale_price
              boximg = experienceData[j].images
              console.log('showimg')
            }
          }
          for (let k = 0; k < fundData.length; k++) {
            console.log('hi')
            if (item.product_name === fundData[k].e_proname) {
              price = fundData[k].e_progress_money
              boximg = fundData[k].e_pic
              console.log('showimg')
            }
          }
          for (let l = 0; l < secondhandData.length; l++) {
            console.log('hi')
            if (item.product_name === secondhandData[l].product_name) {
              price = secondhandData[l].price
              boximg = secondhandData[l].photo
              console.log('showimg')
            }
          }
          for (let m = 0; m < bidData.length; m++) {
            console.log('hi')
            if (item.product_name === productData[m].productName) {
              price = productData[m].price
              boximg = productData[m].pic
              console.log('showimg')
            }
          }
          return (
            <div className="j_commitbox">
              <img
                style={{
                  width: '300px',
                  height: '200px',
                  objectFit: 'cover',
                }}
                src={'http://localhost:3001/img/' + boximg}
                alt=""
              />
              <h6
                style={{
                  lineHeight: '200px',
                  position: 'relative',
                  left: '50px',
                }}
              >
                {item.product_name}
              </h6>
              <h6
                style={{
                  lineHeight: '200px',
                  position: 'absolute',
                  left: '700px',
                }}
              >
                數量:{item.quantity}
              </h6>
              <h6
                style={{
                  lineHeight: '200px',
                  position: 'absolute',
                  left: '840px',
                }}
              >
                單價:{price}
              </h6>
            </div>
          )
        })}
      </Modal>
    </>
  )
}
export default ManagerOrder
