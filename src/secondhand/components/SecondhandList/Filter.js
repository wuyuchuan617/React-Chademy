import React, { useState } from 'react'

const Filter = () => {
  const [showChairs, setShowChairs] = useState(false)

  return (
    <div className="i_filter_list">
      <div
        className="i_list d-flex justify-content-around align-items-center"
        onClick={() => {
          setShowChairs(!showChairs)
        }}
      >
        <p className="mr-5 mt-3">分類</p>
        <p className="ml-5 mt-3">＋</p>
      </div>
      {showChairs && (
        <ul>
          <li>高腳椅</li>
          <li>扶手椅</li>
          <li>單椅</li>
          <li>餐椅</li>
          <li>沙發椅</li>
        </ul>
      )}
      <div className="i_list d-flex justify-content-around align-items-center">
        <p className="mr-5 mt-3">材質</p>
        <p className="ml-5 mt-3">＋</p>
      </div>
      <ul>
        <li>布料</li>
        <li>皮革</li>
        <li>木質</li>
      </ul>
      <div className="i_list d-flex justify-content-around align-items-center">
        <p className="mr-5 mt-3">骨架</p>
        <p className="ml-5 mt-3">＋</p>
      </div>
      <ul>
        <li>木頭</li>
        <li>金屬</li>
        <li>塑膠</li>
      </ul>
      <div className="i_list d-flex justify-content-around align-items-center">
        <p className="mr-5 mt-3">狀況</p>
        <p className="ml-5 mt-3">＋</p>
      </div>
      <ul>
        <li>九成新</li>
        <li>八成新</li>
        <li>七成新</li>
      </ul>
      <div className="i_border_bottom"></div>
    </div>
  )
}

export default Filter
