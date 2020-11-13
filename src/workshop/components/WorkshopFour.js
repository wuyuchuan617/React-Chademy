/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainten from '../images/38.png'
import imagemaineleven from '../images/39.png'
import imagemaintwe from '../images/33.png'

function WorkshopFour(props) {
  return (
    <div className="container">
      <div className="row post-abs">
        <div className="a-top-area"></div>
        <div className="a-top-area">
          <h3>Calvin 專業師資</h3>
          <p>
            自家經營專業技術師父，給您有保障的服務，我們注重每一個施工品質及工作細節，並且要求做到最好，以自已要居住的心理為出發點，把每一個裝潢的個案，都當作自己的家。
            三十年以上老師傅經驗,與各大室內設計師配合,深獲專業設計師信任，我們專業技術您可以放心，家是自己要住的，沒有更好，只有最好。
            任職於『勞動力發展署雲嘉南分署』（原南區職訓），眾多工作中，也負責家具木工職類的選手培訓多年，大約15年前，木工職人的老師們，都是在徐老師的指導訓練下，才能有今天承傳木作技藝的實力。
          </p>
          <img src={imagemainten} />
          <img src={imagemaineleven} />
        </div>

        <div className="a-designer-photo">
          <img src={imagemaintwe} />
        </div>
      </div>
      <div className="row">
        <div className="a-sec-area"></div>
        <div className="a-sec-area"></div>
      </div>
    </div>
  )
}

export default WorkshopFour
