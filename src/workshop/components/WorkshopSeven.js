import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imageevaluationone from '../images/40.png'
import imageevaluationtwo from '../images/41.png'
import imageevaluationthree from '../images/42.png'
import imageevaluationfour from '../images/43.png'
import imagestar from '../images/star.svg'
import imagestarone from '../images/star-02.svg'
import imagestartwo from '../images/star-03.svg'




function WorkshopSeven(props) {
  return (
    
     <div class="container-fluid">

        <div class="wrapper2">
            <div class="title01">
                <h2>課程評價</h2>
            </div>
            <div class="row justify-content-center">
          <div class="article col-md-3 mb-3">
            <div class="boxevaluation">
              <div class="upperevaluation">
                <img src={imageevaluationone}/>
              </div>
              <div class="wordevaluation">
                <div class="word1evaluation">
                  <img src={imagestar}/>
                  <h5>好課程推薦</h5>
                  <p>
                    這是我所見過最札實厲害的木工課程，在這12天的過程中，讓我獲益良多。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="article col-md-3 mb-3">
            <div class="boxevaluation">
              <div class="upperevaluation">
                <img src={imageevaluationtwo}/>
              </div>
              <div class="wordevaluation">
                <div class="word1evaluation">
                  <img src={imagestarone}/>
                  <h5>我的最愛</h5>
                  <p>
                    這是我所見過最札實厲害的木工課程，在這12天的過程中，讓我獲益良多。
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div class="article col-md-3 mb-3">
            <div class="boxevaluation">
              <div class="upperevaluation">
                <img src={imageevaluationthree}/>
              </div>
              <div class="wordevaluation">
                <div class="word1evaluation">
                  <img src={imagestartwo}/>
                  <h5>真心愛上</h5>
                  <p>
                    這是我所見過最札實厲害的木工課程，在這12天的過程中，讓我獲益良多。
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div class="article col-md-3 mb-3">
            <div class="boxevaluation">
              <div class="upperevaluation">
                <img src={imageevaluationfour}/>
              </div>
              <div class="wordevaluation">
                <div class="word1evaluation">
                  <img src={imagestarone}/>
                  <h5>最棒的課程</h5>
                  <p>
                    這是我所見過最札實厲害的木工課程，在這12天的過程中，讓我獲益良多。
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      <div class="row justify-content-center">
        <button class="more-btn">MORE</button>
      </div>



      
        

    
                
    </div>
</div>
    
  )
}

export default WorkshopSeven