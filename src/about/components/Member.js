import React from 'react'
import '../styles/about.css'
import imagemember from '../images/48.png'


function Member() {
  return (
      <div class="container">
            <div className="title01">
                <h2>團隊成員</h2>
            </div>
          <div class="row d-flex justify-content-center">
              <div className="article col-md-6 mb-12">
                  

                  
              <p class="col-3 a_subtitle2">360 VR展現</p>
            <p class="col-9 a_subtitle3">
              舒適安坐家中，以虛擬實境方式造訪門店，細賞我們的精品傢俱系列。千里之外也可遍覽店內陳設，近距離觀賞各款產品細節。特別提醒您，我們的室內設計師也能線上服務。在您查看我們的傢俱系列的同時，也可以通過電話、電郵或視頻電話來探討您所需的風格設計。
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 a_subtitle4"><img src={imagevirtual}/></div>
          </div>
          </div>
          
      </div>
            
  )
}

export default Member