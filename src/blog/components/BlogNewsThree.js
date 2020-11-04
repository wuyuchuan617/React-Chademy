import React, { useEffect } from 'react'
import '../styles/blog.css'
import ImgBlogThree from '../images/03_blog.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogNewsThree() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="container">
      <div className="row no-gutters mt_mb_100" data-aos="fade-up">
        <div className="a_blogbox col-lg-6 col-sm-12">
          <div className="a_blogtitle1">
            <div className="a_blogtitlech noto-serif text-center">
              懷德居簡介
            </div>
          </div>
          <div className="a_blogtext m-auto">
            <p className=" a_blogp14 m-4 ">
              2004 年懷德居首創「家具知識館」，2006 年續辦「木工實驗學校」，2008
              年成立「文化基金會」，我們默默為台灣的木工教育耕耘了數十載。懷德居耗時五年，在臺北大學三峽校區的鳶園綠地打造「木師基地」，2018
              秋季竣工，2019 春季正式開課。
            </p>
            <p className=" a_blogp14 m-4  ">
              "未來的木師們將在這裡工作，從日出到日落。
              懷德居自山中起家，領航木工教育，在夢的最初與最終嘗試不息。"
            </p>
            <p className=" a_blogp14 m-4  ">
              我們已經做好準備，敦聘專業師資，歡迎您來報名搶頭香。這是台灣體制外木工教育劃時代的創舉，還請大家多多指教並支持。
            </p>
          </div>

          <div className="btn_a_blog more">MORE</div>
        </div>
        <div className="col-lg-6 col-sm-12 a_blog">
          <img src={ImgBlogThree} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BlogNewsThree
