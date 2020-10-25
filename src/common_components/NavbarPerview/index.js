import React from 'react'
import './index.scss'
import Card from '../Card'

// import {
//   // Navbar,
//   // Nav,
//   //   Form,
//   //   FormControl,
//   Button,
//   Accordion,
//   Card,
//   ListGroup,

//   //   NavDropdown,
// } from 'react-bootstrap'

export default function NavbarPerview(props) {
  const { activaName, navbarHeight } = props

  // console.log('NavbarPerview', activaName, navbarHeight)

  return (
    <section
      className={`navbarPerview_container container ${
        activaName ? 'isActive' : ''
      }`}
      style={{ top: `${navbarHeight}px` }}
    >
      {[
        'about',
        'product',
        'antique',
        'bidding',
        'workshop',
        'funding',
        'blog',
      ].includes(activaName) && <Card />}

      {/* {activaName === 'about' && <Card />}
      {activaName === 'product' && <Card />}
      {activaName === 'antique' && <Card />}
      {activaName === 'bidding' && <Card />}
      {activaName === 'workshop' && <Card />}
      {activaName === 'funding' && <Card />}
      {activaName === 'blog' && <Card />} */}
    </section>
  )
}
