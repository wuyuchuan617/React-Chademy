/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

function ReturnDetail(props) {
  const { myPO_NO } = props
  const [detailData, setDetailData] = useState([])
  const [imgData, setImgData] = useState([])
  const [orderStatus, setOrderStatus] = useState([])

  async function getOrderDetailFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/detaillist?PO_NO=${myPO_NO}`

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
  //拿order狀態
  async function getOrderStatusFromServer(value) {
    // const newTotal = { total: total + value }

    const url = `http://localhost:3001/j_cart/listproduct?PO_NO=${myPO_NO}`

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
    setOrderStatus(data)
  }
  //拿產品圖片
  async function getProductImgFromServer(value) {
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
    setImgData(data)
  }
  useEffect(() => {
    getOrderDetailFromServer()
    getProductImgFromServer()
    getOrderStatusFromServer()
  }, [])
  let imgname = '5cbb0ac7-6aee-4ee9-840b-d54e1c896bd2.jpg'
  let price = 0
  let nowstatus = ''
  return (
    <>
      {detailData.map((item) => {
        for (let i = 0; i < imgData.length; i++) {
          if (item.product_name === imgData[i].product_name) {
            imgname = imgData[i].photo
            price = imgData[i].price
          }
        }
        return (
          <div className="j_myorderbox1">
            <div className="j_wrapspace1">
              <img
                style={{
                  width: '300px',
                  height: '200px',
                  objectFit: 'cover',
                }}
                src={require('../../img/' + imgname)}
                alt=""
              />
              <h6 style={{ position: 'absolute', left: '700px' }}>
                {item.product_name}
              </h6>
              <h6 style={{ position: 'absolute', left: '1000px' }}>
                價錢:${price}
              </h6>
              {orderStatus.map((item) => {
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
                return <h6>{nowstatus}</h6>
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ReturnDetail
