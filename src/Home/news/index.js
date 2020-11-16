import React, { useEffect } from 'react'
import './News.css'
import Img from '../img/References.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="row mt_mb_100" data-aos="fade-up" data-aos-duration="2000">
      <div className="title3">
        <div className="straight"></div>
        <div className="cross"></div>
        <div className="titleset">
          <div className="titlech noto-serif">最新消息</div>
          <div className="titleEN lora">News</div>
        </div>
      </div>
      <div className="col-lg-6 col-md-3 col-sm-12 imgarea ">
        <img src={Img} alt="" />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 mobile_news">
        <div className="newsset d-flex mt-4">
          <p className="mr-5 noto-sans p14">2020.09.21</p>
          <p className="noto-sans p14">官網改版更新，新視覺全新亮相</p>
        </div>
        <hr />
        <div className="newsset d-flex  mt-4">
          <p className="mr-5 noto-sans p14">2020.09.21</p>
          <p className="noto-sans p14">
            2020台北國際室內設計大展9月4日(一)於世貿一館隆重登場！
          </p>
        </div>
        <hr />
        <div className="newsset d-flex  mt-4 ">
          <p className="mr-5 noto-sans p14">2020.03.15</p>
          <p className="noto-sans p14">新型冠狀病毒防疫公告相</p>
        </div>
        <hr />
        <div className="newsset d-flex mt-4">
          <p className="mr-5 noto-sans p14">2020.02.01</p>
          <p className="noto-sans p14">周年官方活動-紐約家具設計中心</p>
        </div>
        <hr />
        <div className="newsset d-flex mt-4 ">
          <p className="mr-5 noto-sans p14">2019.09.18</p>
          <p className="noto-sans p14"> 木工創客新設計中心</p>
        </div>
      </div>
    </div>
  )
}

export default About
