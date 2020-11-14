import React, { useEffect } from 'react'
import '../styles/about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Virtual() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="container">
      <div className="title01">
        <div className="titlech noto-serif text-center">虛擬門市</div>
        <div className="titleEN lora text-center">Virtual Store</div>
      </div>

      <div className="row d-flex justify-content-center">
        <p
          className="col-3 a_subtitle2"
          data-aos="fade-right"
          data-aos-delay="50000"
          data-aos-duration="2400"
          data-aos-once="true"
        >
          360 VR展現
        </p>
        <p
          className="col-9 a_subtitle3"
          data-aos="fade-left"
          data-aos-delay="50000"
          data-aos-duration="2400"
          data-aos-once="true"
        >
          舒適安坐家中，以虛擬實境方式造訪門店，細賞我們的精品傢俱系列。千里之外也可遍覽店內陳設，近距離觀賞各款產品細節。特別提醒您，我們的室內設計師也能線上服務。
          <div>
            在您查看我們的傢俱系列的同時，也可以通過電話、電郵或視頻電話來探討您所需的風格設計。
          </div>
        </p>
      </div>
      <div
        className="row justify-content-center"
        data-aos="slide-up"
        data-aos-delay="50000"
        data-aos-duration="2400"
        data-aos-once="true"
      >
        <div style={{ marginTop: 100 + 'px !important' }} className="vr">
          <iframe
            title="iframe"
            width="1100"
            height="620"
            src="https://my.matterport.com/show/?m=xFhQSwSpQ4r&amp;help=1"
            frameborder="0"
            allowfullscreen="true"
            allow="vr"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Virtual
