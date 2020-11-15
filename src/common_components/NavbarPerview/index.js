/* eslint-disable no-unused-vars */
import React from 'react'
import './index.scoped.scss'

import Card from '../Card'

const operPreviewList = [
  'about',
  'Brand',
  'product',
  'antique',
  'bidding',
  'Workshop',
  'funding',
  'Blog',
]

export default function NavbarPerview(props) {
  const { activeName, navbarHeight } = props

  return (
    <></>
    // <section
    //   className={`navbarPreview_container ${activeName ? 'isActive' : ''}`}
    //   style={{ '--navbar-height': `${activeName ? navbarHeight : -1000}px` }}
    // >
    //   比對 activeName，有匹配的 type 才開啟
    //   {operPreviewList.includes(activeName) && <Card />}
    // </section>
  )
}
