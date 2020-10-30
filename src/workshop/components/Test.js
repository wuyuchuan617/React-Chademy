import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imageone from '../images/03.png'
import imagetwo from '../images/03-1.png'
import heart from '../images/heart.svg'



function Test(props) {
  return (
    
      <div className="new-activity">
      <div className="container-fluid">
        <div className="title01">
          <h2>推薦課程_測試bootstrap箭頭版</h2>
        </div>

        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >

          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <div className="row">
                <div className="home-carousel col-lg-4 col-md-12">
                  <div className="boxoneday">
                        <div className="upper1">
                            <img src={imageone}/>       
                            <p>HOT</p>
                            <div className="box100">
                                <img id="image" src={heart}/></div>                        
                        </div>
    
    
                        <div className="wordoneday">
                            <div className="word1oneday">
                                <h4>一日玫瑰花體驗</h4>
                                <h6>開課日期:2020/09/15</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                            <div className="price">
                                <h4>$599</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-carousel col-lg-4 col-md-12">
                  <div className="boxoneday">
                        <div className="upper1">
                            <img src={imageone}/>       
                            <p>HOT</p>
                            <div className="box100">
                                <img id="image" src={heart}/></div>                        
                        </div>
    
    
                        <div className="wordoneday">
                            <div className="word1oneday">
                                <h4>一日玫瑰花體驗</h4>
                                <h6>開課日期:2020/09/15</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                            <div className="price">
                                <h4>$599</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-carousel col-lg-4 col-md-12">
                  <div className="boxoneday">
                        <div className="upper1">
                            <img src={imageone}/>       
                            <p>HOT</p>
                            <div className="box100">
                                <img id="image" src={heart}/></div>                        
                        </div>
    
    
                        <div className="wordoneday">
                            <div className="word1oneday">
                                <h4>一日玫瑰花體驗</h4>
                                <h6>開課日期:2020/09/15</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                            <div className="price">
                                <h4>$599</h4>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="carousel-item" data-interval="10000">
              <div className="row">
                <div className="home-carousel col-lg-4 col-md-12">
                  <div className="boxoneday">
                        <div className="upper1">
                            <img src={imagetwo}/>       
                            <p>HOT</p>
                            <div className="box100">
                                <img id="image" src={heart}/></div>                        
                        </div>
    
    
                        <div className="wordoneday">
                            <div className="word1oneday">
                                <h4>一日玫瑰花體驗</h4>
                                <h6>開課日期:2020/09/15</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                            <div className="price">
                                <h4>$599</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-carousel col-lg-4 col-md-12">
                  <div className="boxoneday">
                        <div className="upper1">
                            <img src={imagetwo}/>       
                            <p>HOT</p>
                            <div className="box100">
                                <img id="image" src={heart}/></div>                        
                        </div>
    
    
                        <div className="wordoneday">
                            <div className="word1oneday">
                                <h4>一日玫瑰花體驗</h4>
                                <h6>開課日期:2020/09/15</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                            <div className="price">
                                <h4>$599</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-carousel col-lg-4 col-md-12">
                  <div className="boxoneday">
                        <div className="upper1">
                            <img src={imagetwo}/>       
                            <p>HOT</p>
                            <div className="box100">
                                <img id="image" src={heart}/></div>                        
                        </div>
    
    
                        <div className="wordoneday">
                            <div className="word1oneday">
                                <h4>一日玫瑰花體驗</h4>
                                <h6>開課日期:2020/09/15</h6>
                                <h6>地點:台灣/台北市</h6>
                            </div>
                            <div className="price">
                                <h4>$599</h4>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <div className="slides-lbtn">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <div className="slides-rbtn">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </div>
      </a>

        </div>
      </div>
      </div>
    
  )
}

export default Test