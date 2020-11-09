// import React from 'react'
import React, { useState } from 'react'
import './index.scss'

import MainScreen from '../MainScreen'

import { AiOutlinePlus } from 'react-icons/ai'

function Creditcard() {
  const [modalShow, setModalShow] = useState(false)

  const handleOpenModal = () => {
    console.log('Click')
    setModalShow(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setModalShow(false)
  }

  return (
    <>
      <div className="lineee justify-content-between">
        新增信用卡
        <div className="icon_con">
          <AiOutlinePlus className="icon" onClick={handleOpenModal} />
        </div>
      </div>
      {/* <div className="con">尚未綁定</div> */}
      <MainScreen
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default Creditcard
