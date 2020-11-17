/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { countries, townships, postcodes } from '../components/Data'
import { Table, Tag, Space } from 'antd'
import { Menu } from 'antd'
import { Tree } from 'antd'
function DashBoardAside(props) {
  return (
    <>
      <div className="dashboard">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h4>管理後台</h4>
        </div>

        <h6 style={{ marginTop: '40px', marginBottom: '15px' }}>會員管理</h6>
        <p>資料編輯</p>
        <p>產品保固</p>
        <p>折價券</p>
        <p>補貨通知</p>
        <p style={{ marginBottom: '30px' }}>會員點數等級</p>
        <h6>訂單管理</h6>
        <p style={{ marginBottom: '30px' }}>全部訂單</p>
        <h6>產品上下架</h6>
        <p>精選商品</p>
        <p>中古商品</p>
        <p>體驗課程</p>
        <p>競標商品</p>
        <p>募資商品</p>
      </div>
    </>
  )
}
export default DashBoardAside
