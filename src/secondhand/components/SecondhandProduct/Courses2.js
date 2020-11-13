import React, { useEffect } from 'react'
import '../../../Home/courses/Courses.css'
import Img from '../../../Home/img/sub_lightyourlife_20aw.jpg'
import Img2 from '../../../Home/img/ATD_Retail_2020_Flowerpot_VP7_The-Moor_AP5_Rely_HW9_Linen-Cushion__In-Between__-1500x2000.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useHistory } from 'react-router-dom'
function Courses2() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  let history = useHistory()
  console.log(history)
  return (
    <div
      className="row no-gutters mt_mb_100"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="col-lg-4 col-sm-12 course">
        <img src={Img} alt="" />
        <p className="noto-serif_p18 mt-3">活動體驗</p>
        <p className="p14">
          技術精進 聚沙成塔
          <br />
          築夢延伸 實踐目標
        </p>
        <p className="p14">
          {' '}
          多樣化的木工培訓課程，打造自己的作品
          <br />
          發揚木工創客之精神
        </p>
        <p className="p14">專業課程+募資 實踐夢想</p>
        <div
          className="btn_left more"
          onClick={() => history.push('/Workshop')}
        >
          MORE
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 courseimg">
        <img src={Img2} alt="" />
      </div>
      <div className="col-lg-4 col-sm-12 i_fund">
        <div className="i_fund_text">
          <p className="noto-serif_p18">募資計畫</p>
          <p className="p14">
            新的創意 心的夢想
            <br />
            耀上舞台 一躍而飛
            <br />
            培訓課程所培育之新銳設計師 大膽之作
            <br />
            敬邀您一同欣賞
          </p>
          <p className="p14">支持新創 發現潛力</p>
          <div
            className="btn_left more"
            onClick={() => history.push('/fundhomepage')}
          >
            MORE
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses2
