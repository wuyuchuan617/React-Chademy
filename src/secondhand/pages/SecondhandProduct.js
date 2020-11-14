/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ImgArea from '../components/SecondhandProduct/ImgArea'
import TextArea from '../components/SecondhandProduct/TextArea'
import Filter from '../components/SecondhandProduct/Filter'
import '../styles/secondhandProduct.css'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import IconArea from '../components/SecondhandProduct/IconArea'
import Courses2 from '../components/SecondhandProduct/Courses2'
import Slider from '../components/SecondhandProduct/Slider'
import { useSelector } from 'react-redux'
// import { Modal, Button } from 'antd'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'

function SecondhandProduct(props) {
  // 判斷登入的狀態

  const isLogged = useSelector((state) => state.user.logged)

  // props解構
  const { setCartAmount, cartamount, resetShow, setResetShow } = props
  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_secondhand/secondhandlist/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setProduct(data)
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])
  return (
    <>
      <div className="container custom-container-width">
        <div className="row mt-5 mb-4">
          {product.map((item, index) => {
            return <Breadcrumb key={index} item={item} product={product} />
          })}
        </div>
        <div className="row d-flex flex-wrap">
          {product.map((item, index) => {
            return <ImgArea key={index} item={item} product={product} />
          })}
          {product.map((item, index) => {
            return (
              <TextArea
                key={index}
                item={item}
                product={product}
                setCartAmount={setCartAmount}
                cartamount={cartamount}
                isLogged={isLogged}
                resetShow={resetShow}
                setResetShow={setResetShow}
              />
            )
          })}
        </div>
        <Filter />
      </div>
      <IconArea />
      <div className="container custom-container-width">
        {product.map((item, index) => {
          return <Slider key={index} item={item} />
        })}
        <Courses2 />
      </div>
      <BackTop
        visibilityHeight="2000"
        style={{
          height: '40',
          width: '40',
          lineHeight: '33px',
          color: 'white',
          fontSize: '16px',
          borderRadius: '0',
          textAlign: 'center',
          backgroundColor: '#c77334',
        }}
      >
        <div>
          <UpOutlined
            style={{
              color: 'white',
              fontSize: '18px',
              borderRadius: '0',
              backgroundColor: '#c77334',
              marginTop: '-3px',
            }}
          />
        </div>
      </BackTop>
    </>
  )
}

export default SecondhandProduct
