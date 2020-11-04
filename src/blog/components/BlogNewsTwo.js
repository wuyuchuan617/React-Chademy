import React, { useEffect } from 'react'
import '../styles/blog.css'
import ImgBlogTwo from '../images/02_blog.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogNewsTwo() {
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
              卡榫的種類
            </div>
          </div>
          <div className="a_blogtext m-auto">
            <p className=" a_blogp14 m-4 ">
              榫卯，是古典家具之魂，一榫一卯之間，一轉一折之際，凝結著中國幾千年傳統家具文化的精粹，沉澱著流光回轉中的經典家具款式的復合傳承。
            </p>
            <p className=" a_blogp14 m-4  ">
              隨著科技的發展，家具的靈魂榫卯結搆早已被人們所淡忘，取而代之的是大工業生產階段中的釘子和膠水，因為成本壓縮后所獲得的利益更為誘人。
            </p>
            <p className=" a_blogp14 m-4  ">
              實木加工常會以榫接方式作為連結材料的方式，榫接具有外觀優美、結構穩固的優點，這是用螺絲和釘子難以取代的。
              木工技術發展至今已數千年之久，榫接的發展也是，每個地區、每位師傅可能都有自己常用或特別的榫接方式。因此，榫接方式也有很多形式，本文中僅介紹幾種常見榫接形式，讓大家對於木工榫接有基本認識。
            </p>
          </div>

          <div className="btn_a_blog more">MORE</div>
        </div>
        <div className="col-lg-6 col-sm-12 a_blog">
          <img src={ImgBlogTwo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BlogNewsTwo
