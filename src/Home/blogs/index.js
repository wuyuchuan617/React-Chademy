import React from 'react'
import './Blogs.css'
import Img from '../img/Journal_OvergaardDyrman.jpg'
import Img2 from '../img/ATD_Retail_2020_Rely_HW6_Object_SC42_Candleholder_SC40-41_Glass-Vase_SC36-1501x2000.jpg'

function Blogs() {
  return (
    
    <div className="row no-gutters">
            <div className="title mb-3">
                <div className="titlech noto-serif text-center">靈感探索</div>
                <div className="titleEN lora text-center">Blogs</div>
            </div>
            <div className="col-lg-6 blog_img">
                <img src={Img} alt="" /></div>
            <div className="col-lg-3 blog_text_1">
                <div className="blog_innertext">
                    <p className="noto-serif_p18">我的木工學習之路</p>
                    <p className="p14">喜歡木頭的溫潤、質樸；也喜歡創作屬於自己獨一無二的作品。在因緣際會下我參加了一個木工課程，老師們有著一、二十年木工經驗，個個身懷高超的木工技術，一出手就讓人佩服。</p>
                    <p className="p14">2020.05.28</p>
                </div>

            </div>
            <div className="col-lg-3 blog_text_2">
                <img src={Img2}
                    alt=""/>
                <div className="blog_innertext_2">
                    <p className="p14">主臥牆面櫃子的一部份因為要吊在牆上，所以有先考慮好固定方式。
                    </p>
                    <p className="p14">2020.08.30</p>
                </div>
            </div>
            <div className="btn_lessmargin2 more">MORE</div>
        </div>
  )
}

export default Blogs