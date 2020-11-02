import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import WorkshopOne from '../components/WorkshopOne'
import WorkshopTwo from '../components/WorkshopTwo'
import WorkshopThree from '../components/WorkshopThree'
import WorkshopFour from '../components/WorkshopFour'
import WorkshopFive from '../components/WorkshopFive'
import WorkshopSix from '../components/WorkshopSix'
import WorkshopSeven from '../components/WorkshopSeven'

function WorkshopList(props) {
  return (
    <>
      <WorkshopOne />
      <WorkshopTwo />
      <WorkshopThree />
      <WorkshopFour />
      <WorkshopFive />
      <WorkshopSix />
      <WorkshopSeven />
    </>
  )
}





export default WorkshopList