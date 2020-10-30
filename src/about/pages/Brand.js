import React, { useState, useEffect } from 'react'
import '../styles/about.css'
import BrandBanner from '../components/BrandBanner'
import Logo from '../components/Logo'
import About from '../components/About'
import Virtual from '../components/Virtual'
import PhysicalStore from '../components/PhysicalStore'
import Partner from '../components/Partner'


function Brand(props) {
  return (
      <>
    <BrandBanner />
      <Logo />
      <About />
      <Virtual />
      <PhysicalStore />
      <Partner />

    
    </>
  )
}





export default Brand