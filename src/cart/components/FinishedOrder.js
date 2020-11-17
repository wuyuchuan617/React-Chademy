/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Modal, Button } from 'antd'
import { withRouter } from 'react-router-dom'

function FinishOrder(props) {
  const { setMyPO_NO, setMyDate, getAll } = props
  const [member, setMember] = useState('')
  const [PO_NO, setPO_NO] = useState('')
  const [data, setData] = useState([])
  const [imgdata, setImgData] = useState([])
  const [productData, setProductData] = useState([])
  const [secondhandData, setSecondhandData] = useState([])
  const [fundData, setFundData] = useState([])
  const [bidData, setBidData] = useState([])
  const [experienceData, setExperienceData] = useState([])
  const [detailData, setDetailData] = useState([])
  const [typeofProduct, setTypeofProduct] = useState(1)
  const [visible, setVisible] = useState(false)
  function getNameFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .name

    setMember(newMember)
  }
  //拿會員的全部訂單
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
    console.log('pono', data)
    setData(data)
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
    // console.log('hi', data)
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
    // console.log('hi', data)
    setDetailData(data)
  }
  useEffect(() => {
    getProductFromServer()
    getProductImgFromServer()
    getSecondhandFromServer()
    getFundFromServer()
    getExperienceFromServer()
    getBidFromServer()
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
      {data.map((item) => {
        for (let i = 0; i < imgdata.length; i++) {
          if (item.PO_NO === imgdata[i].PO_NO) {
            for (let j = 0; j < productData.length; j++) {
              if (imgdata[i].product_name === productData[j].product_name) {
                thisimg = productData[j].photo
              }
            }
            for (let k = 0; k < bidData.length; k++) {
              if (imgdata[i].product_name === bidData[k].productName) {
                thisimg = bidData[k].pic
              }
            }
            for (let l = 0; l < secondhandData.length; l++) {
              if (imgdata[i].product_name === secondhandData[l].product_name) {
                thisimg = secondhandData[l].photo
              }
            }
            for (let m = 0; m < fundData.length; m++) {
              if (imgdata[i].product_name === fundData[m].e_proname) {
                thisimg = fundData[m].e_pic
              }
            }
            for (let o = 0; o < experienceData.length; o++) {
              if (
                imgdata[i].product_name === experienceData[o].activitie_name
              ) {
                thisimg = experienceData[o].images
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
          <div
            key={item.sid}
            className="j_myorderbox"
            style={{ marginBottom: '15px' }}
          >
            <div className="j_wrapspace">
              <div style={{ display: 'flex' }}>
                <img
                  style={{
                    width: '450px',
                    height: '293px',
                    objectFit: 'cover',
                  }}
                  src={'http://localhost:3001/img/' + thisimg}
                  alt=""
                />
                <div style={{ marginLeft: '20px' }}>
                  <h5 style={{ marginTop: '10px' }}>訂單編號:{item.PO_NO}</h5>
                  <h6 style={{ marginTop: '50px' }}>
                    訂購日期:
                    {item.order_date}
                  </h6>
                  <h6 style={{ marginTop: '30px' }}>訂單狀況:{nowstatus}</h6>
                  <h6 style={{ marginTop: '30px' }}>訂單金額:{item.total}</h6>
                </div>
                <div className="j_box1">
                  <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    placement={'bottomRight'}
                    onClick={() => {
                      setMyPO_NO(item.PO_NO)
                      setMyDate(item.order_date)
                    }}
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
                  <h6
                    style={{ marginTop: '200px', cursor: 'pointer' }}
                    onClick={() => {
                      setVisible(true)
                      setTypeofProduct(item.category)
                      setPO_NO(item.PO_NO)
                    }}
                  >
                    我要評論
                    <BsPen />
                  </h6>
                </div>
              </div>
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
          let link = '/review/' + item.PO_NO + '&' + item.product_name
          if (typeofProduct === 5) {
            link = '/review_member'
          }
          for (let i = 0; i < productData.length; i++) {
            if (item.product_name === productData[i].product_name) {
              boximg = productData[i].photo
            }
          }
          for (let j = 0; j < bidData.length; j++) {
            if (item.product_name === bidData[j].productName) {
              boximg = bidData[j].pic
            }
          }
          for (let k = 0; k < secondhandData.length; k++) {
            if (item.product_name === secondhandData[k].product_name) {
              boximg = secondhandData[k].photo
            }
          }
          for (let l = 0; l < fundData.length; l++) {
            if (item.product_name === fundData[l].e_proname) {
              boximg = fundData[l].e_pic
            }
          }
          for (let m = 0; m < experienceData.length; m++) {
            if (item.product_name === experienceData[m].activitie_name) {
              boximg = experienceData[m].images
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
              {/* <Link to={link}> */}
              <h6
                style={{
                  lineHeight: '200px',
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '50px',
                }}
                onClick={async () => {
                  await setVisible(false)
                  props.history.push(link)
                }}
              >
                <BsPen />
              </h6>
              {/* </Link> */}
            </div>
          )
        })}
      </Modal>
    </>
  )
}
export default withRouter(FinishOrder)
