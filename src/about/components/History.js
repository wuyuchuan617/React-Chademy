import React from 'react'
import '../styles/about.css'
import a_popularImg from '../images/58.png'
import a_popularImgtwo from '../images/59.png'
import a_popularImgthree from '../images/60.png'
import a_popularImgfour from '../images/61.png'
import a_popularImgfive from '../images/62.png'

function History() {
  return (
    <div className="container">
      <div className="title01">
        <h2>重大紀事</h2>
      </div>

      <div className="row no-gutters justify-content-between">
        <div className="article col-md-6 mb-12">
          <div className="a_history">
            <div className="row no-gutters">
              <div className="article col-md-12 mb-12 d-flex">
                <div className="a_historyImg">
                  <img src={a_popularImg} alt="" />
                </div>
                <div className="a_popularText col-8">
                  <p className="a_historytitle">工廠建立 / 1972</p>
                  <p className="a_historycontent">
                    功能設計要方便於消費者生活多樣的收納性，形式風格以能符合現代空間簡約、時尚的美學品味，卻不失家具的實用、實惠的本質，是CHADEMY努力的主張與態度。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="a_historytwo">
            <div className="row no-gutters">
              <div className="article col-md-12 mb-12 d-flex">
                <div className="a_historyImg">
                  <img src={a_popularImgtwo} alt="" />
                </div>
                <div className="a_popularText col-8">
                  <p className="a_historytitle">榮耀 / 1992</p>
                  <p className="a_historycontent">
                    功能設計要方便於消費者生活多樣的收納性，形式風格以能符合現代空間簡約、時尚的美學品味，卻不失家具的實用、實惠的本質，是CHADEMY努力的主張與態度。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="a_article2 col-md-6 mb-12">
          <div className="a_circle1"></div>
          <div className="a_circle2"></div>
          <div className="a_circle3"></div>
          <div className="a_circle4"></div>
          <div className="a_circle5"></div>
          <div className="a_historythree">
            <div className="row no-gutters">
              <div className="article col-md-12 mb-12 d-flex">
                <div className="a_historyImg">
                  <img src={a_popularImgthree} alt="" />
                </div>
                <div className="a_popularText col-8">
                  <p className="a_historytitle">起點 / 1952</p>
                  <p className="a_historycontent">
                    1952年創立自有品牌CHADEMY家具， 取名CHADEMY
                    的概念是來自奧地利宮廷音樂家Johann Strauss（約翰史特勞斯）。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="a_historyfour">
            <div className="row no-gutters">
              <div className="article col-md-12 mb-12 d-flex">
                <div className="a_historyImg">
                  <img src={a_popularImgfour} alt="" />
                </div>
                <div className="a_popularText col-8">
                  <p className="a_historytitle">設計師團隊 / 1982</p>
                  <p className="a_historycontent">
                    1952年創立自有品牌CHADEMY家具， 取名CHADEMY
                    的概念是來自奧地利宮廷音樂家。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="a_historyfive">
            <div className="row no-gutters">
              <div className="article col-md-12 mb-12 d-flex">
                <div className="a_historyImg">
                  <img src={a_popularImgfive} alt="" />
                </div>
                <div className="a_popularText col-8">
                  <p className="a_historytitle">實體門市 / 2006</p>
                  <p className="a_historycontent">
                    更為了貼近瞭解消費者的多元的生活，於2006年成「CHADEMY」門市通路，藉由家具在空間中配置的各項服務的過程，提案給消費者各種符合生活機能的家具；並將這樣與消費者互動的實質經驗，應用於家具研發，以相輔相成。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="membertitle">未來展望</div>
          <div className="membertitle2">
            期許拓展更多的門市以及產品，並且孕育更多對木工產業有意義的人才，創作叫好又叫座的商品，最重要的是，將富有教育意義的理念傳達給更多人知道。
          </div>

          <button className="more-btn">MORE</button>
        </div>
      </div>
    </div>
  )
}

export default History
