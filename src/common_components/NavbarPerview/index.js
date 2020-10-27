import React from 'react'
import './index.scoped.scss'

import Card from '../Card'

export default function NavbarPerview(props) {
  const { activeName, navbarHeight, setActiveName } = props

  const closeNavbar = () => setActiveName('')

  return (
    <div
      className={`shit ${activeName ? 'isActive' : ''}`}
      onClick={closeNavbar}
    >
      <section
        className={`navbarPerview_container ${activeName ? 'isActive' : ''}`}
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
        ].includes(activeName) && <Card />}
      </section>
    </div>
  )
}
