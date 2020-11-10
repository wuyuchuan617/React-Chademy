import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Img from '../img/fixbefore.jpg'
import Img2 from '../img/fixedafter.jpg'
import Img3 from '../img/180.png'
import './Antique.css'
import BeforeAfterReact from 'before-after-react'
import BeforeAfterSlider from 'react-before-after-slider'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Antique() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  let history = useHistory()
  console.log(history)

  return (
    <div
      className="row justify-content-center no-gutters mt_mb_100 "
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="title1">
        <div className="titlech noto-serif text-center">中古市集</div>
        <div className="titleEN lora text-center">Antique</div>
      </div>
      <div className="antique justify-content-center">
        <BeforeAfterSlider
          className="mt-3 mb-3"
          before={Img}
          after={Img2}
          width={675}
          height={380}
        />

        <p className="text-center p14 m-2 ">中古售出</p>
        <p className="text-center p14 m-2  ">
          不小心弄壞椅子了嗎？別擔心，我們也有提供維修服務，
          <br />
          或者您想以二手價格賣出也沒有問題！本站所販售商品於原供應商（製造商、代理商）保固期內如有故障，請將故障品攜至提貨中心辦理送修
        </p>
        <div
          className="btn_lessmargin more"
          onClick={() => history.push('/secondhand_list')}
        >
          MORE
        </div>
      </div>
    </div>
  )
}

export default Antique
