import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import ItemBanner from '../components/ItemBanner'
import Itemone from '../components/ItemOne'
import Itemtwo from '../components/ItemTwo'
import Itemthree from '../components/ItemThree'
import Itemfour from '../components/ItemFour'
import Itemfive from '../components/ItemFive'

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
      <Itemone oneWorkShop={oneWorkShop} />
      <Itemtwo />
      <Itemthree threeWorkShop={threeWorkShop} />
      <Itemfour />
      <Itemfive />
    </>
  )
}

export default Workshop
