/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Menu, Dropdown, message } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../styles/FundList.scss'

function Dropdowna(props) {
  const { setAsc, setOrderBy, orderBy, setOrderBy2, orderBy2 } = props

  // const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`)
  // }

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          setOrderBy(orderBy + 1)
        }}
      >
        由低到高
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          setOrderBy2(orderBy2 + 1)
        }}
      >
        由高到低
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          價格 <DownOutlined />
        </a>
      </Dropdown>
    </>
  )
}

export default Dropdowna
