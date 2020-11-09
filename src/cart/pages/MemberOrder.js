import React from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { countries, townships, postcodes } from '../components/Data'

function MemberOrder(props) {
  const { name, phone, city, area, adress } = props
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">我要退貨</a>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <div className="j_myorderbox">
        <div className="j_wrapspace">
          <h5>訂單編號:...</h5>
          <Dropdown
            overlay={menu}
            trigger={['click']}
            placement={'bottomRight'}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <h4>
                <GrMore />
              </h4>
            </a>
          </Dropdown>
        </div>
        <h6 style={{ marginTop: '30px' }}>訂購日期:</h6>
        <h6 style={{ marginTop: '30px' }}>商品種類:</h6>
        <div className="j_wrapspace" style={{ marginTop: '40px' }}>
          <img
            style={{
              width: '230px',
              height: '175px',
              backgroundColor: 'black',
            }}
          />
          <h6 style={{ lineHeight: '175px' }}>訂單金額</h6>
          <h6 style={{ lineHeight: '175px', cursor: 'pointer' }}>
            我要評論
            <BsPen />
          </h6>
        </div>
      </div>
    </>
  )
}
export default MemberOrder

// const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       <a href="http://www.alipay.com/">1st menu item</a>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <a href="http://www.taobao.com/">2nd menu item</a>
//     </Menu.Item>
//     <Menu.Divider />
//     <Menu.Item key="3">3rd menu item</Menu.Item>
//   </Menu>
// );

// ReactDOM.render(
// <Dropdown overlay={menu} trigger={['click']}>
//   <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//     Click me <DownOutlined />
//   </a>
// </Dropdown>,
//   mountNode,
// );
