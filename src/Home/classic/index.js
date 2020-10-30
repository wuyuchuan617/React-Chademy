import React from 'react'
import './Classic.css'
import Img from '../img/Cover_CircleDiningChairs_OvergaardDyrman_studio.jpg'

function classNameic() {
  return (


    
    <div className="row mt_mb_100">
            <div className="col-lg-8 classic">
                <img src={Img} alt="" className="mt-5" />
            </div>
            <div className="col-lg-4">
                <div className="title1 classictext">
                    <div className="straight2"></div>
                    <div className="cross2"></div>
                    <div className="titleset flex-end text-right mr-3">
                        <div className="titlech noto-serif">經典產品</div>
                        <div className="titleEN lora">classic</div>
                    </div>
                </div>
                <div className="titleslogan mt-5"></div>
                <p className="p32 text-center lora-italic">Created To Inspire</p>
                <p className="p32 text-center lora-italic">Crafted To Last</p>
                <p className="p14 ml-4 mt-4">傳承百年經典設計圖，突破最新技術，為21世紀經典代表。</p>
                <p className="p14 ml-4 mt-2">我們為每件產品感到自豪，因為每一件藝術品都是我們熱情與靈感的延伸。</p>
                <p className="p14 ml-4 mt-2">永恆追求品質與質感，手工製作，每一個小細節淬煉出獨一無二。</p>
            </div>
        </div>
  )
}

export default classNameic