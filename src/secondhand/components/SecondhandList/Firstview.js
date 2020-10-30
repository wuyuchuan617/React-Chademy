import React from 'react'
import Img from '../../img/WireLoungeSofa_OvergaardDyrman_2.jpg'

function Firstview() {
  return (
    <div className="i_fv">
      <img src={Img} alt="Img" />
      <div className="i_slogan">
        <p className="i_title1">歡迎光臨我們的中古市集</p>
        <p className="i_subtitle">
          瞭解我們豐富多樣的多功能設計傢俱，並以最新的北歐風格和設計激發您的靈感
        </p>
      </div>
    </div>
  )
}

export default Firstview
