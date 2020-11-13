import React, { useState, uesEffect } from 'react'
import { VscTrash } from 'react-icons/vsc'
import { FiEdit3 } from 'react-icons/fi'
import { useHistory, withRouter } from 'react-router-dom'
const MyproductTd = (props) => {
  const { item, myproduct } = props
  let history = useHistory()
  console.log(history)

  //delete
  async function deleteDataToServer(e) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_secondhand/del/' + item.sid

    const request = new Request(url, {
      method: 'DELETE',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data)
  }

  return (
    <>
      <tr>
        <td className="i_tdpd">{item.product_no}</td>
        <td className="i_tdimg">
          <img src={`http://localhost:3001/img/` + item.photo} />
        </td>
        <td className="i_tdpd">{item.productname}</td>
        <td className="i_tdpd">{item.price}</td>
        <td className="i_tdpd">
          <VscTrash className="mystyles" onClick={deleteDataToServer} />
        </td>
        <td className="mystyles">
          <FiEdit3
            className="mystyles"
            onClick={() => history.push('/secondhand_form_edit/' + item.sid)}
          />
        </td>
      </tr>
    </>
  )
}

export default withRouter(MyproductTd)
