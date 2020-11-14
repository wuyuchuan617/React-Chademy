import React from 'react'
import './index.scoped.scss'

import Card from '../Card'

export default function NavbarPerview(props) {
  const { activeName, navbarHeight, setActiveName } = props

  return (
    // <div
    //   ref={ref}
    //   className={`shit ${activeName ? 'isActive' : ''}`}
    //   onClick={closeNavbar}
    //   onMouseEnter={() => setActiveName('about')}
    // >
    <section
      className={`navbarPreview_container ${activeName ? 'isActive' : ''}`}
      style={{ top: `${navbarHeight}px` }}
    >
      <Card />
      {/*
          // 根據不同 type 開啟不同 card
          {[
            'about',
            'product',
            'antique',
            'bidding',
            'workshop',
            'funding',
            'blog',
          ].includes(activeName) && <Card />}
         */}
    </section>
    // </div>
  )
}
