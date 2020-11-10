import React, { useEffect, useState } from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Modal, Button } from 'antd'
function FinishedOrder(props) {
  const { name, phone, city, area, adress } = props
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

    const url = `http://localhost:3001/j_cart//listfinish?member=${member}`

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
    getAllorderFromServer()
  }, [member])
  useEffect(() => {
    getOrderDetailFromServer()
  }, [PO_NO])
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="#">我要退貨</Link>
      </Menu.Item>
    </Menu>
  )
  let nowstatus = ''
  let thisimg = '5cbb0ac7-6aee-4ee9-840b-d54e1c896bd2.jpg'
  let boximg = '5cbb0ac7-6aee-4ee9-840b-d54e1c896bd2.jpg'
  return (
    <>
      {data.map((item) => {
        for (let i = 0; i < imgdata.length; i++) {
          if (item.PO_NO === imgdata[i].PO_NO) {
            for (let j = 0; j < productData.length; j++) {
              if (imgdata[i].product_name === productData[j].product_name) {
                thisimg = productData[j].photo
              }
            }
          }
        }

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
              訂購日期:
              {item.order_date}
            </h6>
            <h6 style={{ marginTop: '30px' }}>訂單狀況:{nowstatus}</h6>
            <div className="j_wrapspace" style={{ marginTop: '40px' }}>
              <img
                style={{
                  width: '270px',
                  height: '175px',
                  objectFit: 'cover',
                }}
                src={require('../../img/' + thisimg)}
                alt=""
              />
              <h6 style={{ lineHeight: '175px' }}>訂單金額:{item.total}</h6>

              <h6
                style={{ lineHeight: '175px', cursor: 'pointer' }}
                onClick={() => {
                  setVisible(true)
                  setPO_NO(item.PO_NO)
                }}
              >
                我要評論
                <BsPen />
              </h6>
            </div>
          </div>
        )
      })}
      <Modal
        title={PO_NO}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        {detailData.map((item) => {
          let link =
            '/review?PO_NO=' + item.PO_NO + '&product_name=' + item.product_name
          for (let i = 0; i < productData.length; i++) {
            console.log('hi')
            if (item.product_name === productData[i].product_name) {
              boximg = productData[i].photo
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
                src={require('../../img/' + boximg)}
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
              <a href={link}>
                <h6
                  style={{
                    lineHeight: '200px',
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '50px',
                  }}
                >
                  <BsPen />
                </h6>
              </a>
            </div>
          )
        })}
      </Modal>
    </>
  )
}
export default FinishedOrder