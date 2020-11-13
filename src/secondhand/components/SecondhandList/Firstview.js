import React, { useEffect } from 'react'
import Img from '../../img/WireLoungeSofa_OvergaardDyrman_2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Firstview() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="i_fv">
      <img src={Img} alt="Img" />
      <div className="i_slogan">
        <p className="i_title1" data-aos="fade-left" data-aos-duration="3000">
          歡迎光臨我們的中古市集
        </p>
        <p className="i_subtitle" data-aos="fade-left" data-aos-duration="3000">
          瞭解我們豐富多樣的多功能設計傢俱，並以最新的北歐風格和設計激發您的靈感
        </p>
      </div>
    </div>
  )
}

export default Firstview
