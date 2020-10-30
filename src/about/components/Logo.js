import React from 'react'
import '../styles/about.css'
import imagelogo from '../images/LOGO-01.svg'


function Logo() {
  return (
    <div class="a_logowrap">
    <div className="row no-gutters">
          <div className="partannie">
              <div className="partannielogo"><img src={imagelogo}/></div>
        <p className="a_chademy">CHADEMY 椅子學院</p>
        <p className="a_chademyone">於 1952 年在台北誕生，如今已成為一個高檔的零售時尚品牌我們設計、生產並銷售一系列現代丹麥設計椅子，並開設課程提供現代設計的所有必備技能
        </p>
    </div>
</div>
  </div>
  )
}

export default Logo