import React, { useState } from 'react'
import './index.scss'

import Navbar from '../Navbar'
import NavbarPerview from '../NavbarPerview'

import useWindowScroll from '../../utils/scroll'

export default function CHNavbar(props) {
  const [activeName, setActiveName] = useState('')
  const [navbarHeight, setNavbarHeight] = useState(0)
  const { cartamount, setCartAmount, setTypeofProduct } = props

  // 處理滾動
  const { scrollY, scrollDirection } = useWindowScroll()

  return (
    <div
      className={'CHNavbar_container'}
      onMouseLeave={() => setActiveName('')}
    >
      <Navbar
        scrollY={scrollY}
        scrollDirection={scrollDirection}
        activeName={activeName}
        setActiveName={setActiveName}
        navbarHeight={navbarHeight}
        setNavbarHeight={setNavbarHeight}
        cartamount={cartamount}
        setCartAmount={setCartAmount}
        setTypeofProduct={setTypeofProduct}
      >
        <NavbarPerview
          activeName={activeName}
          navbarHeight={navbarHeight}
          setActiveName={setActiveName}
        />
      </Navbar>
    </div>
  )
}
