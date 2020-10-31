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
      <div class="row justify-content-center">
        <div style={{ marginTop: 100 + 'px !important' }} className="vr">
          <iframe
            width="853"
            height="480"
            src="https://my.matterport.com/show/?m=xFhQSwSpQ4r&amp;help=1"
            frameborder="0"
            allowfullscreen="true"
            allow="vr"
          ></iframe>
        </div>
      </div>
      <PhysicalStore />
      <Partner />
    </>
  )
}

export default Brand
