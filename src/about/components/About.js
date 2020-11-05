import React, { useState, useEffect } from 'react'
import '../styles/about.css'
import imagemain from '../images/46.png'

function About(props) {
  return (
    <div class="a_aboutwrap">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="a_about_image">
              <img src={imagemain} />
            </div>
          </div>

          <div class="col">
            <div class="d-flex a_about-name justify-content-between">
              <div>About CHADEMY</div>
            </div>

            <div class="a_about-desc">
              <p>
                1952年創立自有品牌CHADEMY家具， 取名CHADEMY
                的概念是來自奧地利宮廷音樂家Johann
                Strauss（約翰史特勞斯），他是第一位將宮廷音樂帶入平民社會的奧地利音樂家，正如同永進期許STRAUSS家具團隊，除了擁有著三代的木工技術、歷鍊過國際大廠合作的洗禮之外，將因應台灣生活形態的改變，為滿足顧客對家居空間的需求不同而作的家具設計，能真正融入生活。
              </p>
              <p>
                一路踏著堅實的步履，從木製家具製作出口，而建立良好的工業製作基礎。在旺盛的出口工業發展後，產業由於全球性的變化，永進積極尋求轉型以求更大發揮空間。由第三代接手，承襲永進原有的木器傳統、工業設計製作基礎及原料處理經驗，再加上全力開發曲木的生產技術及自有設計的發展，使得永進的商品跨足全球，包括北歐、歐洲及日本等等先進國家，並成為國際家具公司的指定製造商。同一時期，永進即開始思考及建構自創品牌的概念及步驟，並展開對國內市場的佈局及商品的規劃及通路的開發。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
