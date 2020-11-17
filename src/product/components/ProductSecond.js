import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { Parallax } from 'rc-scroll-anim'

function ProductSecond(props) {
  const { product } = props
  console.log(product)
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col second-text"
            // data-aos="fade-right"
            // data-aos-duration="6000"
          >
            <Parallax
              animation={{ x: 0 }}
              style={{ transform: 'translateX(-150px)', margin: '10px auto' }}
              className="code-box-shape"
            >
              <p className="w_comP">
                如燕子般輕盈優雅，飛入你的生活 燕椅，有著優雅、輕盈的線條。
                柔軟的S型後腳，軟化了方正堅硬的居家氣氛，為空間增添視覺上的律動，展現出柔和卻不失實木溫潤的力量
              </p>
              <p className="w_comP">
                流暢、從容的輕盈線條
                每一張燕椅，最後皆由手工刻製細修，一氣呵成的曲線，從椅腦頂端順著側稜線，滑向後腳與後方精實的微弧面相接。燕椅，提供的不僅是基本的舒適乘坐機能，你更可以用身體與指尖親自感受由雙手完成的美妙手感。
              </p>
              <p className="w_comP">
                輕快、和諧的簡約造型，可搭配各種風格空間，適合擺在玄關、客廳、餐廳。在大空間裡並排擺放，木質的溫潤與優雅輕盈的氣氛，更顯寬敞大方。
              </p>
            </Parallax>
          </div>

          <div
            className="col-sm-12 col-lg-6 second-photo"
            // data-aos="fade-left"
            // data-aos-duration="6000"
          >
            <Parallax
              animation={{ x: 0 }}
              style={{ transform: 'translateX(150px)', margin: '10px auto' }}
              className="code-box-shape"
            >
              <img
                src={
                  'https://oandd.dk/wp-content/uploads/2018/12/TwoTone_SandBlack_WireDiningChair_OvergaardDyrman_6378-1024x689.jpg'
                }
                alt=""
              />
            </Parallax>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductSecond)
