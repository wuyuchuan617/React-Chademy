import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagemainone from '../images/34-1.png'
import imagemaintwo from '../images/34-2.png'
import imagemainthree from '../images/34-3.png'
import imagemainfour from '../images/34-4.png'
import imagemainfive from '../images/34-5.png'



function WorkshopOne(props) {
  return (
    
              <div class="container">
        <div class="row">
            <div class="col">
                <div class="workshop_photo">
                   <img src={imagemainone}/>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="workshop_photo_small">
                       <img src={imagemaintwo}/>
                    </div>
                    <div class="workshop_photo_small">
                       <img src={imagemainthree}/>
                    </div>
                    <div class="workshop_photo_small">
                        <img src={imagemainfour}/>
                    </div>
                    <div class="workshop_photo_small">
                        <img src={imagemainfive}/>
                    </div>
                </div>
            </div>


            <div class="col">
                <div class="d-flex workshop-name justify-content-between">
                    <div>假日12天正規養成班</div>
                    <div>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>

                <div class="workshop-desc">
                    <p>從最基本的手工具、研磨刀具開始教起，前期學習使用手工具練習、十字搭接、魯班鎖、木料概論；後期學習機器原理與加工應用，配合專業圖面從取料手續開始製作板凳作品完成。初次參加木工職人正規課程的學員皆需參與基礎課程，不需具備木工基礎，歡迎第一次接觸木工的朋友報名參加！</p>
                    <h6>剩餘名額1</h6>
                    <h1>課程價格_NT25,000</h1>
                </div>

                
                <button class="cart-btn">加入購物車</button>

            </div>
        </div>
    </div>
    
  )
}

export default WorkshopOne