import React from 'react'
import './Bidding.css'
import Img from '../img/Cover_CircleDiningChair_22.jpg'

function Bidding() {
  return (
    
    <div className="row no-gutters mt_mb_100">
            <div className="col-lg-6 col-sm-12">
                <div className="title1">
                    <div className="titlech noto-serif text-center">精品競標</div>
                    <div className="titleEN lora text-center">Bidding</div>
                </div>
                <div className="bidtext m-auto">
                    <p className=" p14 m-3 ">想收藏獨一無二的藝品嗎?
                        全新的設計、華麗的面料和最流行的色彩。</p>
                    <p className=" p14 m-3  ">
                        要完成新潮的外觀搭配是一件頗具挑戰性的事情，所幸的是，我們的設計師能讓這一切變得輕鬆簡單。
                    </p>
                    <p className=" p14 m-3  ">
                        無需再躊躇。我們剛剛推出這些令人興奮的設計——以競標的方式來獲得獨一無二，絕無僅有!
                    </p>
                </div>

                <div className="btn_auto more">MORE</div>
            </div>
            <div className="col-lg-6 col-sm-12 bid">
                <img src={Img} alt="" />
            </div>
        </div>
  )
}

export default Bidding