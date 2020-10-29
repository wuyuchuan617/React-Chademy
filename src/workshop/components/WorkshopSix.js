import React, { useState, useEffect } from 'react'
import '../styles/workshoplist.css'
import imagehistoryone from '../images/28.png'
import imagehistorytwo from '../images/29.png'
import imagehistorythree from '../images/30.png'
import imagehistoryfour from '../images/31.png'
import imagehistoryfive from '../images/32.png'


function ItemSix(props) {
  return (
    
     <div class="container-fluid">

        <div class="wrapper3">
            <div class="title01">
                <h2>歷年成果</h2>
            </div>
            <div class="row">
                <div class="article col-md-8 mb-12">
                    <div class="box7history">
                        <div class="upper7history">
                            <img src={imagehistoryone}/>                          
                        </div> 
                    </div>
                  </div>
                  
                <div class="article col-md-4 mb-12">
                    <div class="box7history">
                        <div class="upper7history">
                            <img src={imagehistorytwo}/>                         
                        </div>
                    </div>
                </div>
            </div>
                  
               <div class="row">
                <div class="article col-md-4 mb-12">
                    <div class="box7history">
                        <div class="upper7history">
                            <img src={imagehistorythree}/>
                        </div>          
                    </div>
                </div>
                <div class="article col-md-4 mb-12">
                    <div class="box7history">
                        <div class="upper7history">
                            <img src={imagehistoryfour}/>
                        </div>     
                        </div>
                    </div>
                
                <div class="article col-md-4 mb-12">
                    <div class="box7history">
                        <div class="upper7history">
                            <img src={imagehistoryfive}/>
                        </div>    
                    </div>
                </div>
               
            </div>
        </div>
          </div>
          
    
  )
}

export default ItemSix