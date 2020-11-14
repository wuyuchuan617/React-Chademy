/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import './index.scss'

import request from '../../utils/request'

import { Form, Button, Col, Modal } from 'react-bootstrap'

import { message } from 'antd'

function Forget(props) {
  const [email, setEmail] = useState('')
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">忘記密碼</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>請求重置密碼</h4>
        <p>請提供您的帳戶電郵，收發電子郵件，來重置您的密碼。</p>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>電子信箱</Form.Label>
          <Form.Control
            type="email"
            className="for_in"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="for_btn"
          onClick={async () => {
            const response = await request({
              url: `/members/forgetPwd`,
              method: 'POST',
              data: { email },
            })

            if (!response.success) {
              message.error(response.msg)
            } else {
              message.success(response.msg)
            }
          }}
        >
          發送
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Forget
