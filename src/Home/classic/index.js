import React, { useEffect } from 'react'
import './Classic.css'
import Img from '../img/Cover_CircleDiningChairs_OvergaardDyrman_studio.jpg'
import Img11 from '../img/11.jpg'
import Img22 from '../img/22.jpg'
// import Img33 from '../img/33.jpg'
import 'aos/dist/aos.css'
import { useHistory, withRouter } from 'react-router-dom'

const Classic = () => {
  useEffect(() => {
    let box = document.querySelector('.pot2')
    window.setInterval(() => box.classList.toggle('active'), 1000)
    let box2 = document.querySelector('.pod2')
    window.setInterval(() => box2.classList.toggle('active'), 1000)
    let box3 = document.querySelector('.pox2')
    window.setInterval(() => box3.classList.toggle('active'), 1000)
  }, [])
  let history = useHistory()
  return (
    <div className="row mt_mb_100" data-aos-duration="2000" data-aos="fade-up">
      <div className="col-lg-8 classic">
        <div className="title1 classictext mobile">
          <div className="straight2"></div>
          <div className="cross2"></div>
          <div className="titleset flex-end text-right mr-3">
            <div className="titlech noto-serif">經典產品</div>
            <div className="titleEN lora">classic</div>
          </div>
        </div>
        <img src={Img} alt="" className="mt-5" />

        <div className="pot"></div>
        <div className="pot2 active"></div>

        <div className="pot pod"></div>
        <div className="pod2 active"></div>
        <div className="pod3 "></div>

        <div className="pot3 "></div>
        <div className="pot pox"></div>
        <div className="pox2"></div>
        <div
          className="pot3 "
          onClick={() => history.push('/product/157')}
        ></div>

        <div className="hover_card">
          <img alt="" src={Img11} />
          <div className="text">
            <p>經典高腳椅</p>
            <p>永恆追求品質與質感，手工製作，每一個小細節淬煉出獨一無二。</p>
          </div>
        </div>
        <div className="hover_card2">
          <img alt="" src={Img22} />
          <div className="text">
            <p>經典高腳椅</p>
            <p>永恆追求品質與質感，手工製作，每一個小細節淬煉出獨一無二。</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="title1 classictext mobile2">
          <div className="straight2"></div>
          <div className="cross2"></div>
          <div className="titleset flex-end text-right mr-3">
            <div className="titlech noto-serif">經典產品</div>
            <div className="titleEN lora">classic</div>
          </div>
        </div>
        <div className="titleslogan mt-5">
          <p className="p32 text-center lora-italic">Created To Inspire</p>
          <p className="p32 text-center lora-italic">Crafted To Last</p>
        </div>
        <div className="classic_mobile">
          <p className="p14 ml-4 mt-4">
            傳承百年經典設計圖，突破最新技術，為21世紀經典代表。
          </p>
          <p className="p14 ml-4 mt-2">
            我們為每件產品感到自豪，因為每一件藝術品都是我們熱情與靈感的延伸。
          </p>
          <p className="p14 ml-4 mt-2">
            永恆追求品質與質感，手工製作，每一個小細節淬煉出獨一無二。
          </p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Classic)
