import React from 'react'

import './index.scss'

import { Form, Button, Col, Container, Modal } from 'react-bootstrap'

function Forget(props) {
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
          <Form.Control type="text" className="for_in" />
        </Form.Group>
        <Button variant="primary" type="submit" className="for_btn">
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
