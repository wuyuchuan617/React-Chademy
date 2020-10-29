import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainseven from '../images/36.png'
import imagemaineight from '../images/37.png'



function WorkshopThree(props) {
  return (
    
      <div class="container-fluid">
        <div class="wrapper3">
            <div class="title01">
                <h2>豐富的木頭材料</h2>
            </div>
            <div class="row">
                <div class="article col-md-6 mb-12">
                    <div class="boxwood">
                        <div class="upper5">
                            <img src={imagemainseven}/>
     
                        </div>
                        <div class="word2">
                            <div class="word3">
                                <h4>原木材料DIY木工坊</h4>
                                <p>木百貨是專業的製材加工廠，專業進口生產木板、原木、實木板、薄木板、松木拼板等，透過大量生產規格化尺寸材料，提供最優惠的價格，可配合政府單位核銷流程。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="article col-md-6 mb-12">
                    <div class="boxwood">
                        <div class="upper5">
                            <img src={imagemaineight}/>
     
                        </div>
                        <div class="word2">
                            <div class="word3">
                                <h4>專業合成版</h4>
                                <p>工廠常備各式尺寸材料，歡迎同行大量採購整棧批發，大量另可訂購客製化尺寸，代客一般裁切、雷切代工裁切、砂光導角，連工帶料價格最便宜。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    </div>
    
  )
}

export default WorkshopThree