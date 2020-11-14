/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'

function Breadcrumb1(props) {
  const { item } = props
  console.log(item)

  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/product':
      path = '經典產品'
      break
    case '/brand':
      path = '品牌故事'
      break
    case '/secondhand_list':
      path = '中古市集'
      break
    default:
      path = ''
  }

  return (
    // <>
    //   <nav aria-label="breadcrumb">
    //     <ol className="breadcrumb">
    //       <li className="breadcrumb-item">
    //         <Link to="/">首頁</Link>
    //       </li>
    //       <li className="breadcrumb-item active" aria-current="page">
    //         {path}
    //       </li>
    //     </ol>
    //   </nav>
    // </>
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/" style={{ fontSize: '14px' }}>
          首頁
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/secondhand_list" style={{ fontSize: '14px' }}>
          中古市集
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item style={{ fontSize: '14px' }}>
        {item.product_name}
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default withRouter(Breadcrumb1)
