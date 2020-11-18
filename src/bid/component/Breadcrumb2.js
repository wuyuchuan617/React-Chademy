import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'

function Breadcrumb1(props) {
  const{sid,pname}=props

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
    case `/pages/desc/record/${sid}`:
      path = `${pname}`
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
    <Breadcrumb className="text-left g-bread2">
      <Breadcrumb.Item>
        <Link to="/" exact style={{ fontSize: '14px' }}>
          首頁
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/pages/bid" style={{ fontSize: '14px' }}>
          精品競標
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item style={{ fontSize: '14px' }}>{path}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default withRouter(Breadcrumb1)
