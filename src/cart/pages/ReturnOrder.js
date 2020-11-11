import React, { useState, useEffect } from 'react'
import Aside from '../../common_components/Aside/index'
import { GrMore } from 'react-icons/gr'
import { BsPen } from 'react-icons/bs'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ReturnDetail from '../components/ReturnDetail'
import { TreeSelect } from 'antd'
import { Input } from 'antd'

function ReturnOrder(props) {
  const { myPO_NO, myDate } = props
  const { TreeNode } = TreeSelect
  const { TextArea } = Input

  async function cancelToServer(value) {
    const url = 'http://localhost:3001/j_cart/cancelorder'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ PO_NO: myPO_NO }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
  }
  return (
    <>
      <hr />
      <h5>訂單編號:{myPO_NO}</h5>
      <h5>訂單日期:{myDate}</h5>
      <ReturnDetail myPO_NO={myPO_NO} />
      <label>退貨原因</label>
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder=""
        allowClear
        treeDefaultExpandAll
      >
        <TreeNode value="商品瑕疵" title="商品瑕疵"></TreeNode>
        <TreeNode value="不符合預期" title="不符合預期"></TreeNode>
      </TreeSelect>
      <label>給予建議</label>
      <TextArea rows={4} />
      <Link className="j_btn7">
        <div
          className="j_btn7"
          onClick={() => {
            cancelToServer()
          }}
        >
          確認退貨
        </div>
      </Link>
    </>
  )
}
export default ReturnOrder
