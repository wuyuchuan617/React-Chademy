import React, { useState } from 'react'
import { Affix, Button } from 'antd'

const Filter = () => {
  const [showChairs1, setShowChairs1] = useState(false)
  const [showChairs2, setShowChairs2] = useState(false)
  const [showChairs3, setShowChairs3] = useState(false)
  const [showChairs4, setShowChairs4] = useState(false)

  return (
    <Affix
      offsetTop={120}
      onChange={(affixed) => console.log('affixed' + affixed)}
    >
      <div className="i_filter_list">
        <div
          className="i_list d-flex justify-content-around align-items-center"
          onClick={() => {
            setShowChairs1(!showChairs1)
          }}
        >
          <p className="mr-5 mt-3">分類</p>
          <p className="ml-5 mt-3">＋</p>
        </div>
        {showChairs1 && (
          <ul class="ml-5">
            <li>高腳椅</li>
            <li>扶手椅</li>
            <li>單椅</li>
            <li>餐椅</li>
            <li>沙發椅</li>
          </ul>
        )}
        <div
          className="i_list d-flex justify-content-around align-items-center"
          onClick={() => {
            setShowChairs2(!showChairs2)
          }}
        >
          <p className="mr-5 mt-3">材質</p>
          <p className="ml-5 mt-3">＋</p>
        </div>
        {showChairs2 && (
          <ul class="ml-5">
            <li>布料</li>
            <li>皮革</li>
            <li>木質</li>
          </ul>
        )}

        <div
          className="i_list d-flex justify-content-around align-items-center"
          onClick={() => {
            setShowChairs3(!showChairs3)
          }}
        >
          <p className="mr-5 mt-3">骨架</p>
          <p className="ml-5 mt-3">＋</p>
        </div>
        {showChairs3 && (
          <ul class="ml-5">
            <li>木頭</li>
            <li>金屬</li>
            <li>塑膠</li>
          </ul>
        )}

        <div
          className="i_list d-flex justify-content-around align-items-center"
          onClick={() => {
            setShowChairs4(!showChairs4)
          }}
        >
          <p className="mr-5 mt-3">狀況</p>
          <p className="ml-5 mt-3">＋</p>
        </div>
        {showChairs4 && (
          <ul class="ml-5">
            <li>九成新</li>
            <li>八成新</li>
            <li>七成新</li>
          </ul>
        )}

        <div className="i_border_bottom"></div>
      </div>
    </Affix>
  )
}

export default Filter
