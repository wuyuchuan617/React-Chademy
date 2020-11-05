import React, { useEffect } from 'react'
import '../styles/bloglist.css'
import imagewriter from '../images/48.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogListTwo() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="container">
      <div className="annie_message01">
        <h5>留言列表</h5>
      </div>
      <div className="a_message01list" data-aos="fade-up"></div>
      <div class="row d-flex justify-content-center no-gutters">
        <p class="col-3 a_message2">
          <img src={imagewriter} />
        </p>
        <div class="col-9 a_message3">
          <h6>非常棒的文章</h6>
          <p>
            常春藤、綠蘿一類的藤蔓植物都是空氣的淨化好手，可以吸收空氣中的甲醛、苯、尼古丁等有害化學物質。當然單純從裝飾的角度講，藤蔓的可塑性還是非常強，無論是擺放在桌上，或是吊掛，再或者組合柵欄、格子架裝飾都非常好看。
          </p>
          <p>Eva Chang</p>
          <p>於 2020/11/04 評價</p>
        </div>
      </div>
    </div>
  )
}

export default BlogListTwo
