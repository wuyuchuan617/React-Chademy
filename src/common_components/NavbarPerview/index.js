import React, { useEffect } from 'react'
import './index.scoped.scss'

import Card from '../Card'

export default function NavbarPerview(props) {
  const { activeName, navbarHeight, setActiveName } = props
  const ref = React.useRef(null)

  const closeNavbar = () => setActiveName('')

  useEffect(() => {
    let timer

    if (!activeName) {
      // 當滑鼠移開 Navbar 之後，先顯示 transition 的效果，再隱藏。
      timer = setTimeout(() => {
        ref.current.style.display = 'none'
      }, 500)
    } else {
      ref.current.style.display = 'block'
    }

    return () => clearTimeout(timer)
  }, [activeName])

  return (
    <div
      ref={ref}
      className={`shit ${activeName ? 'isActive' : ''}`}
      onClick={closeNavbar}
      onMouseEnter={() => setActiveName('about')}
    >
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
    </div>
  )
}
