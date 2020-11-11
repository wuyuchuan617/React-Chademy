import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainsix from '../images/35.png'

function WorkshopTwo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="workshop_image">
            <img src={imagemainsix} />
          </div>
        </div>

        <div className="col">
          <div className="d-flex workshop-name justify-content-between">
            <div>完善的木工教室</div>
          </div>

          <div className="workshop-desc">
            <p>
              教室提供完整的重型設備與電動工具 (1)5分鑿刀 (2)1吋鑿刀
              (3)3分三角筍鑿 (4)鑿刀套 (5)油罐 (6)240mm雙面鋸 (7)1.8吋手工鉋刀
              (8)鳩尾規
              教室亦提供代購服務，可於第一堂課選購，費用約計5,000~7000元，若您已有相關工具請於第一堂課帶來與老師確認是否合用。教室亦會準備一些公用工具供新生入門學習使用。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkshopTwo
