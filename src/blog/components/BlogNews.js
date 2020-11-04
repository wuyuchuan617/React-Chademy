import React, { useEffect } from 'react'
import '../styles/blog.css'
import ImgBlogOne from '../images/01_blog.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogNews() {
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
              漂流木家具
            </div>
          </div>
          <div className="a_blogtext m-auto">
            <p className=" a_blogp14 m-4 ">
              「我們只是把無用的東西，轉變成可以召喚情感的家具。」鄭漢文校長說著。原愛木工坊是由台東新興國小的學童家長創立的，專製作漂流木家具。鄭校長原是新興國小的校長，他說，最原始的目的只有2個，一是創造工作機會，讓家長可以待在家鄉好好照顧孩子，一是將海邊沒人要的漂流木變成小桌小椅，把無用變有用，垃圾變黃金。
            </p>
            <p className=" a_blogp14 m-4  ">
              原愛工坊的家具都是漂流木製成，所以每張桌椅的尺寸都不太一樣，因為是手工製作，又要等木頭乾，通常下定單後約1個多月才能拿到貨。不過，他們本身並不積極，姥姥曾下過單做個小餐桌，說要等回覆「有沒有人手做」，結果被放鳥。
            </p>
            <p className=" a_blogp14 m-4  ">
              漂流木家具真的不錯看，頗自然，不上漆不用貼膠，保留木頭最原始的色彩與觸感，不像一般木夾板家具會有甲醛傷害健康；每件家具都用卡榫製做，不用一根釘子，保留手作的質樸感（雖然就因為手作，製作時間較長，所以他們的產量很少）。
            </p>
          </div>

          <div className="btn_a_blog more">MORE</div>
        </div>
        <div className="col-lg-6 col-sm-12 a_blog">
          <img src={ImgBlogOne} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BlogNews
