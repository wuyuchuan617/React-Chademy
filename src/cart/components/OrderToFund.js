import React, { useEffect, useState } from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Modal, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { FaSketch } from 'react-icons/fa'

function OrderToFund(props) {
  const { setMyPO_NO, setMyDate, getAll } = props
  const [member, setMember] = useState('')
  const [PO_NO, setPO_NO] = useState('')
  const [data, setData] = useState([])
  const [imgdata, setImgData] = useState([])
  const [productData, setProductData] = useState([])
  const [detailData, setDetailData] = useState([])
  const [visible, setVisible] = useState(false)
  function getNameFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .name

    setMember(newMember)
  }
  //拿商品資訊
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
  //拿產品圖片
  async function getProductImgFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/orderdetail`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setImgData(data)
  }

  //拿會員的全部訂單
  async function getAllorderFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/list?member=${member}`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setData(data)
  }
  async function getOrderDetailFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/detaillist?PO_NO=${PO_NO}`

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
    getProductFromServer()
    getProductImgFromServer()
    getNameFromLocalStorage()
  }, [])

  useEffect(() => {
    getOrderDetailFromServer()
  }, [PO_NO])
  useEffect(() => {
    getAllorderFromServer()
  }, [member, getAll])

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to={`/member-center/returnorder`}>我要退貨</Link>
      </Menu.Item>
    </Menu>
  )
  let nowstatus = ''
  let thisimg = '5cbb0ac7-6aee-4ee9-840b-d54e1c896bd2.jpg'
  let boximg = '5cbb0ac7-6aee-4ee9-840b-d54e1c896bd2.jpg'
  return (
    <>
      <div className="j_myorderbox" style={{ marginBottom: '15px' }}>
        <div className="j_wrapspace">
          <h5>訂單編號:PO1604924958983</h5>
        </div>
        <h6 style={{ marginTop: '30px' }}>訂購日期: 2020-11-15</h6>
        <h6 style={{ marginTop: '30px' }}>訂單狀況:已完成</h6>
        <div className="j_wrapspace" style={{ marginTop: '40px' }}>
          <img
            style={{
              width: '270px',
              height: '175px',
              objectFit: 'cover',
            }}
            src={
              'http://localhost:3001/img/1ff3dc79317f849722853f3c6b8acd49.jpg'
            }
            alt=""
          />
          <h6 style={{ lineHeight: '175px' }}>訂單金額:$20,000</h6>
          <Link to="/fundform">
            <h6 style={{ lineHeight: '175px', cursor: 'pointer' }}>
              我要募資
              <FaSketch />
            </h6>
          </Link>
        </div>
      </div>
    </>
  )
}
export default withRouter(OrderToFund)
