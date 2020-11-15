import React, { useState, uesEffect } from 'react'
import { VscTrash } from 'react-icons/vsc'
import { FiEdit3 } from 'react-icons/fi'
import { useHistory, withRouter } from 'react-router-dom'
import { Modal, Button } from 'antd'
const MyproductTd = (props) => {
  const { item, myproduct } = props
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState(
    '您無法復原或回復您永久移除的檔案，確定要刪除'
  )

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setModalText('您無法復原或回復您永久移除的檔案，確定要刪除?')
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }
  let history = useHistory()
  console.log(history)

  //delete
  async function deleteDataToServer(e) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_fund/del/' + item.sid

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
        <td className="i_tdpd">{item.sid}</td>
        <td className="i_tdimg">
          <img src={`http://localhost:3001/img/` + item.e_pic} />
        </td>
        <td className="i_tdpd">{item.e_proname}</td>
        <td className="i_tdpd">{item.e_lowprice}</td>
        <td className="i_tdpd">
          <VscTrash className="mystyles" onClick={showModal} />
        </td>
        <Modal
          title=""
          visible={visible}
          headStyle={{ backgroundColor: '#EDECE8' }}
          bodyStyle={{ backgroundColor: '#EDECE8' }}
          footerStyle={{ backgroundColor: '#EDECE8' }}
          onOk={() => {
            deleteDataToServer()
            setVisible(false)
            handleOk()
          }}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
        </Modal>
        <td className="mystyles">
          <FiEdit3
            className="mystyles"
            onClick={() => history.push('/secondhand_form_edit/' + item.member_sid)}
          />
        </td>
      </tr>
    </>
  )
}

export default withRouter(MyproductTd)
