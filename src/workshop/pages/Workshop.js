import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import ItemBanner from '../components/ItemBanner'
import Itemone from '../components/ItemOne'
import Itemtwo from '../components/ItemTwo'
import Itemthree from '../components/ItemThree'
import Itemfour from '../components/ItemFour'
import Itemfive from '../components/ItemFive'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BreadcrumbOne from '../components/BreadcrumbOne'

function Workshop(props) {
  const [oneWorkShop, setoneWorkShop] = useState([])

  async function getTotalFromSQL() {
    const url = 'http://localhost:3001/a_experience_mainlist/reactlist'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const newData = [...data]
    console.log('newData' + newData)
    console.log(Array.isArray(data))
    setoneWorkShop(newData)
  }
  useEffect(() => {
    getTotalFromSQL()
  }, [])

  const [threeWorkShop, setthreeWorkShop] = useState([])

  async function getTotalFromSQL2() {
    const url = 'http://localhost:3001/a_experience_mainlist/reactlistthree'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const newData = [...data]
    console.log('newData' + newData)
    console.log(Array.isArray(data))
    setthreeWorkShop(newData)
  }
  useEffect(() => {
    getTotalFromSQL2()
  }, [])

  return (
    <>
      <ItemBanner />
      <div class="wrap123 custom-container-width">
        <div className="row mt-5">
          <BreadcrumbOne />
        </div>
      </div>
      <Itemone oneWorkShop={oneWorkShop} />
      <Itemtwo />
      <Itemthree threeWorkShop={threeWorkShop} />
      <Itemfour />
      <Itemfive />
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

export default Workshop
