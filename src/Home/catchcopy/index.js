import React, { useEffect } from 'react'
import './Catchcopy.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Catchcopy() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div
      className="row no-gutters mt_mb_100"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="i_homeinfo i_homepart">
        <p className="i_homelora-lighter">CHADEMY 椅子學院</p>
        <p className="i_homesubinfo i_homenoto-sans i_homep14">
          於 1952
          年在台北誕生，如今已成為一個高檔的零售時尚品牌我們設計、生產並銷售一系列現代丹麥設計椅子，並開設課程提供現代設計的所有必備技能
        </p>
      </div>
    </div>
  )
}

export default Catchcopy
