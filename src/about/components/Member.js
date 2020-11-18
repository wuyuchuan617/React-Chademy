/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/about.css'
import imagemember from '../images/48.png'
import imagemember1 from '../images/48-1.png'
import imagemember2 from '../images/48-2.png'
import imagemember3 from '../images/48-3.png'
import imagemember4 from '../images/48-4.png'
import imagemember5 from '../images/48-5.png'
import imagemember6 from '../images/48-6.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Member() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="container">
      <div className="title01">
        <div className="titlech noto-serif text-center">團隊成員</div>
        <div className="titleEN lora text-center">Members</div>
      </div>
      <div className="row no-gutters">
        <div className="article col-md-6 mb-12">
          <div className="a_boxmemberone">
            <div
              className="row d-flex justify-content-center"
              data-aos="fade-right"
              data-aos-delay="50000"
              data-aos-duration="2400"
              data-aos-once="true"
            >
              <p className="col-3 a_member2">
                <img src={imagemember} />
                Alice Chen
              </p>
              <p className="col-9 a_member3">
                台北人，現居台北，喜歡新竹比台北多，在古董裡慢慢生活的女子。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
              </p>
            </div>

            <div className="a_boxmembertwo">
              <div
                className="row d-flex justify-content-center"
                data-aos="fade-right"
                data-aos-delay="50000"
                data-aos-duration="2400"
                data-aos-once="true"
              >
                <p className="col-3 a_member2">
                  <img src={imagemember1} />
                  John Chang
                </p>
                <p className="col-9 a_member3">
                  德國人，現居台北，喜歡新竹比台北多，在古董裡慢慢生活的男子。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
                </p>
              </div>

              <div className="a_boxmemberthree">
                <div
                  className="row d-flex justify-content-center"
                  data-aos="fade-right"
                  data-aos-delay="50000"
                  data-aos-duration="2400"
                  data-aos-once="true"
                >
                  <p className="col-3 a_member2">
                    <img src={imagemember2} />
                    Max Chang
                  </p>
                  <p className="col-9 a_member3">
                    德國人，現居台北，喜歡新竹比台北多，在古董裡慢慢生活的男子。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article col-md-6 mb-12">
          <div className="a_boxmemberfour">
            <div
              className="row d-flex justify-content-center"
              data-aos="fade-left"
              data-aos-delay="50000"
              data-aos-duration="2400"
              data-aos-once="true"
            >
              <p className="col-3 a_member2">
                <img src={imagemember3} />
                David Wang
              </p>
              <p className="col-9 a_member3">
                英國人，現居台北，喜歡新竹比台北多，在古董裡慢慢生活的男子。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
              </p>
            </div>
            <div className="a_boxmemberfive">
              <div
                className="row d-flex justify-content-center"
                data-aos="fade-left"
                data-aos-delay="50000"
                data-aos-duration="2400"
                data-aos-once="true"
              >
                <p className="col-3 a_member2">
                  <img src={imagemember4} />
                  Ann Wang
                </p>
                <p className="col-9 a_member3">
                  土生土長的台北人，在古董裡慢慢生活的女子。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
                </p>
              </div>
              <div className="a_boxmembersix">
                <div
                  className="row d-flex justify-content-center"
                  data-aos="fade-left"
                  data-aos-delay="50000"
                  data-aos-duration="2400"
                  data-aos-once="true"
                >
                  <p className="col-3 a_member2">
                    <img src={imagemember5} />
                    Jeff Lin
                  </p>
                  <p className="col-9 a_member3">
                    土生土長的台北人，，在古董裡慢慢生活的男子。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
                  </p>
                </div>
                <div className="a_boxmemberseven">
                  <div
                    className="row d-flex justify-content-center"
                    data-aos="fade-left"
                    data-aos-delay="50000"
                    data-aos-duration="2400"
                    data-aos-once="true"
                  >
                    <p className="col-3 a_member2">
                      <img src={imagemember6} />
                      Cute Boy
                    </p>
                    <p className="col-9 a_member3">
                      Chademy的吉祥物。興趣是做料理、烘焙、電影和音樂，最喜歡的動物是米克斯犬。認為理想人生是過不苟且、不將就、不隨波逐流的生活。享受在遙遠的國度做尋常的小事，環遊世界的古董旅行至今累積30幾個國家，未完待續。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay="50000"
        data-aos-duration="2400"
        data-aos-once="true"
      >
        <div className="anniea_title02">
          <div className="titlech noto-serif text-center">加入我們</div>
          <div className="titleEN lora text-center">Join Chademy</div>
        </div>
        <div className="membertitle2">
          我們設定目標，並以我們共同的價值觀為工作準擇。僅管我們的員工各司其職，我們的目標和價值觀卻是一致的，這些價值觀會貫徹我們的整個工作過程，來指導我們做出正確的决定。
        </div>
      </div>

      <div className="row justify-content-center">
        <button className="more-btn">MORE</button>
      </div>
    </div>
  )
}

export default Member
