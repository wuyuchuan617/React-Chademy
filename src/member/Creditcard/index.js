// import React from 'react'
import React, { useState, useEffect } from 'react'
import './index.scss'

import MainScreen from '../MainScreen'

import { message } from 'antd'
import { transCardNumber } from '../../utils'

import { AiOutlinePlus } from 'react-icons/ai'

function Creditcard() {
  const [modalShow, setModalShow] = useState(false)
  const [creditcard, setCreditcard] = useState([])
  const [modalData, setModalData] = useState({})

  const handleOpenModal = (e, creditCardData = {}) => {
    setModalData(creditCardData)
    setModalShow(true)
  }

  const handleSubmit = async (event, data, insert) => {
    event.preventDefault()
    setModalShow(false)

    setUserCreditcardInfo(data)
  }

  async function setUserCreditcardInfo(data) {
    const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
    const { token, authToken } = user.users || {}

    const response = await fetch(
      'http://localhost:3001/members/setUserCreditcardInfo',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, data }),
      }
    )

    /**
      data: [{…}]
      msg: "會員信用卡資料已傳送"
      success: true
     */
    const res = await response.json()

    // 如果更新成功，把後端回傳更新過的資料，設定回去。
    if (res && res.data) {
      setCreditcard(res.data)
    }

    // 提示
    if (!res.success) {
      message.error(res.msg)
    } else {
      message.success(res.msg)
    }
  }

  async function getUserCreditcardInfo() {
    const url = 'http://localhost:3001/members/getUserCreditcardInfo'
    const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
    const { token, authToken } = user.users || {}

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    })

    /**
      data: [{…}]
      msg: "會員信用卡資料已傳送"
      success: true
     */
    const res = await response.json()
    console.log('RES ', res)

    // console.log(111, res)
    if (res && res.data) {
      setCreditcard(res.data)
    }
  }

  // didmount拿所有資料
  useEffect(() => {
    getUserCreditcardInfo()
  }, [])

  return (
    <>
      {creditcard.map((card) => (
        <div className="lineee justify-content-between">
          卡號：{transCardNumber(card.cardNumber)}
          <div className="icon_con">
            <AiOutlinePlus
              className="icon"
              onClick={(e) =>
                handleOpenModal(e, {
                  ...card,
                  cardNumber: transCardNumber(card.cardNumber),
                })
              }
            />
          </div>
        </div>
      ))}
      <div className="lineee justify-content-between">
        新增信用卡
        <div className="icon_con">
          <AiOutlinePlus className="icon" onClick={handleOpenModal} />
        </div>
      </div>
      {creditcard.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>尚未綁定</div>
      )}
      <MainScreen
        data={modalData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default Creditcard
