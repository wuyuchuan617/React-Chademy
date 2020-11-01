// import React from 'react'
import React, { useState, useEffect } from 'react'

import './index.scoped.scss'

import request from '../../utils/request'

// src/utils/request.js
import { Form, Button, Container, Row, Modal } from 'react-bootstrap'

import {
  // BrowserRouter as Router,
  // Route,
  Link,
  // Switch,
  useHistory,
} from 'react-router-dom'

import Forget from '../Forget'

import imageLogin from '../chpr.png'

function Login(props) {
  const [smShow, setSmShow] = useState(false)

  const [login, setLogin] = useState({
    title: '',
    msg: '',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalShow, setModalShow] = useState(false)

  let history = useHistory()
  function handleClick() {
    history.push('/')
  }

  async function loginApi(event) {
    // 阻止預設的行為
    event.preventDefault()

    const response = await request({
      url: '/members/login',
      method: 'post',
      data: {
        // 登入先寫死 方便測試
        email: 'zzfegfc76@agzwfwsn.com',
        password: '123456',
      },
    })

    const { success, msg, data } = response

    console.log('response: ', response)

    // 如果成功
    if (success) {
      // 資料（物件）轉成 JSON，儲存登入資訊
      localStorage.setItem('userInfo', JSON.stringify(data))

      // 設定小彈窗的內容
      setLogin({
        title: '登入成功',
        msg: msg,
      })

      // 顯示小彈窗
      setSmShow(true)

      // n 秒後轉導至 /
      setTimeout(() => {
        handleClick()
      }, 2000)

      // alert(msg)
    } else {
      // alert(msg)
      setLogin({
        title: '登入失敗',
        msg: msg,
      })
      setSmShow(true)
    }
  }

  // const handleChange = (e) => {
  //   setEmail(e.target.value)
  //   console.log('mail: ', e.target.value)
  // }

  return (
    <>
      <Container className="row login_container">
        {/* <div>
          <Button
            variant="primary"
            type="submit"
            onClick={async () => {
              const response = await request({
                url: `/members/getTest?test=${encodeURI('中文')}`,
                method: 'GET',
              })

              console.log(123)

              const { success, msg, data } = response

              console.log('response: ', response)
            }}
            className="log_in"
          >
            GET
          </Button>

          <Button
            variant="primary"
            type="submit"
            onClick={async () => {
              const response = await request({
                url: '/members/loginTest',
                method: 'POST',
                data: { teste: 'REACT TEST 123' },
              })

              console.log(123)

              const { success, msg, data } = response

              console.log('response: ', response)
            }}
            className="log_in"
          >
            TEST
          </Button>
        </div> */}

        <img src={imageLogin} alt="login" className="login_img" />
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>會員登入</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="login_btn"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                console.log('mail: ', e.target.value)
              }}
              // isInvalid={email}
              // onChange={handleChange}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="login_btn"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                console.log('password: ', e.target.value)
              }}
            />
          </Form.Group>
          <Row className="justify-content-between">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="記住我" />
            </Form.Group>
            <div variant="primary" onClick={() => setModalShow(true)}>
              忘記密碼?
            </div>
            <Forget show={modalShow} onHide={() => setModalShow(false)} />
          </Row>
          <Button
            variant="primary"
            type="submit"
            onClick={loginApi}
            className="log_in"
          >
            登入
          </Button>

          <Row className="justify-content-center">
            <Link to="/register" className="register_link">
              尚未成為會員？前往註冊
            </Link>
          </Row>
        </Form>

        {/* ref: https://github.com/react-bootstrap/react-bootstrap/issues/3518 */}
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {login.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{login.msg}</Modal.Body>
        </Modal>
      </Container>
    </>
  )
}

export default Login
