import React, { useState, useEffect } from 'react'

import Navbar from '../Navbar'
import NavbarPerview from '../NavbarPerview'

import useWindowScroll from '../../utils/scroll'

export default function CHNavbar(props) {
  const { activaName, setActivaName } = props
  // <CHNavbar />   =>   wrong/你在 App 老爸沒給 CHNavbar兒子東西, 所以沒東西
  // <CHNavbar  setActivaName={setActivaName} />   =>   right
  const [navbarHeight, setNavbarHeight] = useState(0)

  // 處理滾動
  const { scrollY, scrollDirection } = useWindowScroll()
  // console.log('useWindowScroll: ', useWindowScroll())
  //開關購物車

  return (
    <div className={'CHNavbar_container'}>
      <Navbar
        scrollY={scrollY}
        scrollDirection={scrollDirection}
        activaName={activaName}
        setActivaName={setActivaName}
        navbarHeight={navbarHeight}
        setNavbarHeight={setNavbarHeight}
      />
      <NavbarPerview activaName={activaName} navbarHeight={navbarHeight} />
    </div>
  )
}
