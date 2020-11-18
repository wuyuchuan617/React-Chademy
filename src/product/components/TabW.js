import React, { useState } from 'react'
// import PurchaseInfo from '../components/PurchaseInfo'
function TabW(props) {
  const [tab, setTab] = useState(1)

  return (
    <>
      <div className="container-fluid w_tabbb">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">創作理念</div>
            <div className="titleEN lora text-center">Mission</div>
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
              {tab === 1 ? (
                <div
                  class="intro"
                  style={{ backgroundColor: 'white', transition: '1s' }}
                >
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

                  <p style={{ opacity: 1 }} className="titleEN lora ">
                    Punch/S is a series of tableware trying to play with the
                    possibilities of clay. We use the traditional clay that was
                    normally used in the retro Taiwan life. The wavy texture is
                    the mark of hand-punching before the clay is dried. The
                    light finishing comes from the chemical action between
                    natural oxidized mineral and the clay that makes each item
                    one of a kind. Available in 4 colors: eggshell white,
                    classic taupe, honey yellow, ice blue.
                  </p>
                </div>
              ) : (
                ''
              )}

              {tab === 2 ? (
                <div class="intro">
                  <p
                    style={{ opacity: 1 }}
                    className="titleEN noto-serif text-center"
                  >
                    找尋理所當然的設計
                  </p>
                  <p style={{ opacity: 1 }} className="titleEN lora ">
                    以一種有趣但俐落的方式，製作一個時鐘。我們使用一整塊實木切削一體成形，鐘面木紋所構成的美麗畫面，每一個都是獨一無二的。再以一片精準切割的厚植鞣牛革環繞包覆，時鐘便自然的靜止於桌面上。
                    ​
                    Q皮革時鐘，是路力與同樣來自台灣的甲蟲仙生-製革室的協作，手藝精湛的他們不只圈起皮革，也加入了迷人的手縫皮革細節。
                  </p>
                  <p style={{ opacity: 1 }} className="titleEN lora ">
                    The design that as if it is supposed to be Q skin clock is
                    designed in an intriguing and clever way. We craft the
                    hollow shape with a block of wood that brings every piece a
                    unique wood grain in the clock. Every clock is wrapped with
                    a piece of vegetable tanned leather that makes it stand
                    silently. ​ Q leather clock is a collaborative work with
                    Leather Stag Beetle from Taiwan. They accomplished the clock
                    by ending it up with delicately stitching detail on the
                    bottom.
                  </p>
                </div>
              ) : (
                ''
              )}

              {tab === 3 ? (
                <div class="intro" style={{ backgroundColor: '#5f6b6b' }}>
                  <p
                    style={{ opacity: 1, color: 'white' }}
                    className="titleEN noto-serif text-center"
                  >
                    看得見的自由、舒適。 感受與家人好友相聚的單純喜悅。
                    給自己更多時間享受生活!
                  </p>
                  <p
                    style={{ opacity: 1, color: 'white' }}
                    className="titleEN lora "
                  >
                    B
                    是一系列消光釉色處理的容器，我們與位於台灣的陶瓷鎮-鶯歌的陶瓷廠協作，用最安靜的器型，在不影響釉藥呈色的白瓷之上，給美麗的釉表現各自微妙的細節。
                    2種大小適當的容量：120ml /
                    330ml。基本的器型，滿足基本需求，比一般的容器矮一些，更穩重。釉色選自大自然的天藍、卵石灰、雪及石黑。
                    每一種釉色都來自於天然礦物的發色，給予容器各自獨特的質感與細節。適合於輕鬆的下午盛裝點心與飲品享用。
                  </p>
                  <p
                    style={{ opacity: 1, color: 'white' }}
                    className="titleEN lora "
                  >
                    B is a series of porcelain vessels finished with semi-gloss
                    glaze handcrafted by a pottery workshop in Yinge Town, North
                    Taiwan. Made with porcelain to prevent the clay from
                    reacting with each beautiful glaze. This will let each glaze
                    grow its color and detail honestly. B has enough volume and
                    shaped to be low-profile and steady.
                  </p>
                </div>
              ) : (
                ''
              )}
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
