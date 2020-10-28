import React, { useState, useEffect } from 'react'
import '../styles/workshop.css'
import imagework from '../images/11.jpg'
import imageworker from '../images/12.jpg'



function ItemFour(props) {
  return (
    
      <div className="container-fluid">

        <div className="wrapper3">
            <div className="title01">
                <h2>木工創客</h2>
            </div>
            <div className="row">
                <div className="article col-md-6 mb-12">
                    <div className="box5worker">
                        <div className="upper5">
                            <img src={imagework}/>                             
                        </div>
    
    
                        <div className="wordworker">
                            <div className="word1worker">
                                <h4>木工創客展覽室</h4>
                                <h6>營業時間:09:00-18:00</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article col-md-6 mb-12">
                    <div className="box5worker">
                        <div className="upper5">
                            <img src={imageworker}/>                              
                        </div>
    
    
                        <div className="wordworker">
                            <div className="word1worker">
                                <h4>木工創客實驗室</h4>
                                <h6>營業時間:09:00-18:00</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
          </div>
    
  )
}

export default ItemFour