import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import WorkshopOne from '../components/WorkshopOne'
import WorkshopTwo from '../components/WorkshopTwo'
import WorkshopThree from '../components/WorkshopThree'
import WorkshopFour from '../components/WorkshopFour'
import WorkshopFive from '../components/WorkshopFive'
import WorkshopSix from '../components/WorkshopSix'
import WorkshopSeven from '../components/WorkshopSeven'
import WorkshopEight from '../components/WorkshopEight'
import { withRouter, useParams } from 'react-router-dom'

function WorkshopList(props) {
  const [workshop, setWorkshop] = useState([])
  const {
    cartamount,
    setCartAmount,
    resetShow,
    setResetShow,
    setMycart,
  } = props

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/a_experience_mainlist/reactitem/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setWorkshop(data.slice(0))
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])

  return (
    <>
      {workshop.map((item, index) => {
        return (
          <WorkshopOne
            key={index}
            item={item}
            workshop={workshop}
            setCartAmount={setCartAmount}
          />
        )
      })}

      <WorkshopTwo />
      <WorkshopThree />
      <WorkshopFour />
      <WorkshopFive />
      <WorkshopSix />
      <WorkshopSeven />
      <WorkshopEight />
    </>
  )
}

export default WorkshopList
