import React, { useState, useEffect } from 'react'
import '../styles/about.css'
import BrandBanner from '../components/BrandBanner'
import Logo from '../components/Logo'
import About from '../components/About'
import History from '../components/History'

import Member from '../components/Member'

import Virtual from '../components/Virtual'
import PhysicalStore from '../components/PhysicalStore'
import Partner from '../components/Partner'

function Brand(props) {
  return (
    <>
      <BrandBanner />
      <Logo />
      <About />
      <History />
      <Member />
      <Virtual />
      <PhysicalStore />
      <Partner />
    </>
  )
}

export default Brand
