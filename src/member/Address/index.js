// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
import './index.scoped.scss'

import { Button, Modal } from 'react-bootstrap'
import { countries, townships } from '../../cart/components/Data'

import { AiOutlinePlus } from 'react-icons/ai'

function Address() {
  const [city, setCity] = useState(-1)
  const [area, setArea] = useState(-1)
  const [modalShow, setModalShow] = useState(false)
  const [smShow, setSmShow] = useState(false)
  //   const [modalShow, setModalShow] = useState(false)

  //   const handleOpenModal = () => {
  //     console.log('Click')
  //     setModalShow(true)
  //   }

  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     setModalShow(false)
  //   }

  // useEffect(() => {
  //   console.log('city: ', city)
  // }, [city])

  return (
    <>
      <div className="lineee justify-content-between">
        新增地址
        <div className="icon_con">
          <AiOutlinePlus className="icon" onClick={() => setModalShow(true)} />
        </div>
      </div>

      <Modal
        // {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">新增地址</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>新增地址</h4>

          <select
            style={{
              width: '290px',
              height: '40px',
              marginBottom: '30px',
              marginRight: '20px',
            }}
            onChange={(e) => {
              setCity(+e.target.value)
              setArea(-1)
            }}
          >
            <option value={-1}>城市</option>
            {countries.map((v, i) => (
              <option key={i} value={i}>
                {v}
              </option>
            ))}
          </select>
          <select
            style={{
              width: '290px',
              height: '40px',
              marginBottom: '30px',
            }}
            value={area}
            onChange={(e) => {
              setArea(+e.target.value)
            }}
          >
            <option value={-1}>區域</option>
            {city > -1 &&
              townships[city].map((v, i) => (
                <option key={i} value={i}>
                  {v}
                </option>
              ))}
          </select>

          <input
            type="text"
            style={{
              width: '600px',
              height: '40px',
              marginBottom: '30px',
            }}
            placeholder="地址"
          />

          <Button
            variant="primary"
            type="submit"
            className="for_btn"
            // onClick={async () => {
            //   const response = await request({
            //     url: `/members/forgetPwd`,
            //     method: 'POST',
            //     data: { email },
            //   })

            //   if (!response.success) {
            //     message.error(response.msg)
            //   } else {
            //     message.success(response.msg)
            //   }
            // }}
          >
            發送
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Address
