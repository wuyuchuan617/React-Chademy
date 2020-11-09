// import React from 'react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import './index.scoped.scss'
import request from '../../utils/request'

import { Form, Button, Container, Row, Modal } from 'react-bootstrap'

import Forget from '../Forget'

import imageLogin from '../chpr.png'

function Login(props) {
  const dispatch = useDispatch()

  const [smShow, setSmShow] = useState(false)
  const [validated, setValidated] = useState(false)

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

  async function loginApi() {
    // 1. 發送請求
    const response = await request({
      url: '/members/login',
      method: 'post',
      data: {
        email,
        password,
        // 登入先寫死 方便測試
        // email: 'zzfegfc76@agzwfwsn.com',
        // password: '123456',
      },
    })

    // 2. 接收 response
    const { success, msg, data } = response

    console.log('response: ', response)

    // 如果成功
    if (success) {
      // localStorage.setItem('user', JSON.stringify(data))
      // 以上 [資料（物件）轉成 JSON，儲存登入資訊] >> 改為 redux 處理

      // 3. 調用 dispatch => 觸發 store.subscribe
      dispatch({ type: 'SIGN_IN', payload: data })

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

  const handleSubmit = (event) => {
    const form = event.currentTarget

    event.preventDefault()
    event.stopPropagation()

    console.log('Submit')

    // 通過驗證
    if (form.checkValidity()) {
      loginApi()
    }

    setValidated(true)
  }

  return (
    <>
      <Container className="row login_container">
        <img src={imageLogin} alt="login" className="login_img" />

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="form"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>會員登入</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="login_btn"
              required
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              郵件格式錯誤
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="login_btn"
              required
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            請輸入密碼
          </Form.Control.Feedback>

          <Row
            style={{ marginLeft: '0', marginRight: '0' }}
            className="justify-content-between"
          >
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="記住我" />
            </Form.Group>
            <div variant="primary" onClick={() => setModalShow(true)}>
              忘記密碼?
            </div>
            <Forget show={modalShow} onHide={() => setModalShow(false)} />
          </Row>

          <Button variant="primary" type="submit" className="log_in">
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
