import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'

function Breadcrumbw(props) {
  const { item } = props
  console.log(item)

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
        <Link to="/productlist" style={{ fontSize: '14px' }}>
          經典產品
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item style={{ fontSize: '14px' }}>
        {item.product_name}
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default withRouter(Breadcrumbw)
