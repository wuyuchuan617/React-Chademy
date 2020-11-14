import React, { useEffect } from 'react'
import '../styles/about.css'
import a_imagebanner from '../images/45.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BrandBanner() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <header>
      <div className="a_slogan">
        <p
          className="a_banner"
          data-aos="zoom-in-up"
          data-aos-delay="50000"
          data-aos-duration="2400"
        >
          在與人談論到居家靈感佈置陳列的時候，推崇自然風格的我們，總是鼓勵大家回到原點，以自己的角度出發，親自去挑選符合自己生活使用習慣的古董老件，而非跟隨流行的風格，再去催眠自己喜歡
          、也適合那潮流。
        </p>
      </div>
      <div className="a_imagebanner">
        <img alt="" src={a_imagebanner} />
      </div>
    </header>
  )
}

export default BrandBanner
