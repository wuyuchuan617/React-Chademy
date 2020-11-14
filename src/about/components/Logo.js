import React, { useEffect } from 'react'
import '../styles/about.css'
import imagelogo from '../images/LOGO-01.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Logo() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="a_logowrap">
      <div
        className="row no-gutters"
        data-aos="fade-up"
        data-aos-delay="50000"
        data-aos-duration="2400"
      >
        <div className="partannie">
          <div className="partannielogo">
            <img alt="" src={imagelogo} />
          </div>
          <p className="a_chademy">CHADEMY 椅子學院</p>
          <p className="a_chademyone">
            於 1952
            年在台北誕生，如今已成為一個高檔的零售時尚品牌我們設計、生產並銷售一系列現代丹麥設計椅子，並開設課程提供現代設計的所有必備技能
          </p>
        </div>
      </div>
    </div>
  )
}

export default Logo
