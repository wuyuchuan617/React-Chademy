import React, { useState, useEffect } from 'react'
import '../styles/about.css'
import imagemap from '../images/47.png'

function PhysicalStore(props) {
  return (
    <div className="container">
      <div className="title01">
        <h2>實體門市</h2>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="row d-flex justify-content-center">
            <p className="col-12 a_PhysicalStoresubtitle4">尋找最近的門市</p>
            <p className="col-3 a_PhysicalStoresubtitle2">台北店</p>
            <p className="col-9 a_PhysicalStoresubtitle3">
              <div>地址 : 台北市內湖區新湖一路185號</div>
              <div>連絡電話 : 02-3366-6699</div>
              <div>營業時間 : 09:00-21:00</div>
            </p>
            <p className="col-3 a_PhysicalStoresubtitle2">桃園店</p>
            <p className="col-9 a_PhysicalStoresubtitle3">
              <div>地址 : 桃園市蘆竹區中正路1號</div>
              <div>連絡電話 : 02-3366-6699</div>
              <div>營業時間 : 09:00-21:00</div>
            </p>
            <p className="col-3 a_PhysicalStoresubtitle2">高雄店</p>
            <p className="col-9 a_PhysicalStoresubtitle3">
              <div>地址 : 高雄市左營區裕誠路423號</div>
              <div>連絡電話 : 02-3366-6699</div>
              <div>營業時間 : 09:00-21:00</div>
            </p>
          </div>
        </div>

        <div className="col-7">
          <div className="a_PhysicalStore_image">
            <img src={imagemap} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhysicalStore
