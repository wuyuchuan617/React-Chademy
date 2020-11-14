import React, { useState } from 'react'

function TabW(props) {
  const [tab, setTab] = useState(1)

  return (
    <>
      <div className="container-fluid w_tabbb">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">新品上市</div>
            <div className="titleEN lora text-center">New Arrivals</div>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center w_triangle "
          id="w_share"
        >
          <div class="sec_2 pin">
            <div class="intro_tab">
              <div class="tab">
                <div
                  class={'intab tab1' + (tab === 1 ? ' intab_active' : '')}
                  onClick={() => {
                    setTab(1)
                  }}
                >
                  <p>視覺輕鬆了</p>
                </div>
                <div
                  class={'intab tab2' + (tab === 2 ? ' intab_active' : '')}
                  onClick={() => {
                    setTab(2)
                  }}
                >
                  <p>心舒服了</p>
                </div>
                <div
                  class={'intab tab3' + (tab === 3 ? ' intab_active' : '')}
                  onClick={() => {
                    setTab(3)
                  }}
                >
                  <p>生活 於是平衡了</p>
                </div>
              </div>
              <div class="intro">
                <p
                  style={{ opacity: 1 }}
                  className="titleEN noto-serif text-center"
                >
                  看得見的自由、舒適。 感受與家人好友相聚的單純喜悅。
                  給自己更多時間享受生活!
                </p>
                <p style={{ opacity: 1 }} className="titleEN lora ">
                  感謝工匠師傅們，帶給我們如此美好的體驗與感動。
                  用手，是為了注入體貼的溫度，而這樣的溫度是恆久的。
                  用心，是為了經歷時間的淬煉，造就更完美品質的態度。
                  我們追求的生活態度也是如此簡單與堅持。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center w_triangle2 "
          id="w_speed"
        ></div>
      </div>
    </>
  )
}

export default TabW
