import React, { useState } from 'react'

import './index.scoped.scss'

import { Form, Button, Col, Container, Modal } from 'react-bootstrap'

import { useHistory } from 'react-router-dom'

import request from '../../utils/request'

// //註冊

// if (register.name === "") {
//   setRegister({
//     name: '',}
// }

//   if (this.checkEmail(email) === false) {
//     //驗證信箱錯誤時的訊息
//     let email = document.querySelector('#email')
//     let err_email = document.querySelector('#err_email')
//     email.classList.add('err_border')
//     err_email.classList.add('err_text')
//     this.setState({ err_email: '信箱格式有誤' })
//     // return
//   }
//   // console.log(1, isPass);

//   if (this.checkName(name) === false) {
//     //驗證名稱錯誤時的訊息
//     let name = document.querySelector('#name')
//     let err_username = document.querySelector('#err_username')
//     name.classList.add('err_border')
//     err_username.classList.add('err_text')
//     this.setState({ err_username: '使用者姓名字太少' })
//     //  return
//   }
//   //  console.log(2, isPass);
//   if (this.checkPassword(password, password2) === false) {
//     let password = document.querySelector('#password')
//     let password2 = document.querySelector('#password2')
//     let err_password = document.querySelector('#err_password')
//     // password.type = (password.type === "text") ;
//     // password2.type = (password2.type === "text") ;
//     password.classList.add('err_border')
//     password2.classList.add('err_border')
//     err_password.classList.add('err_text')
//     this.setState({ err_password: '密碼格式不正確或輸入錯誤' })
//     // return
//   }
//   console.log(3, isPass);
//   if (captcha1 !== captcha2) {
//     let captcha2 = document.querySelector('#captcha2')
//     let err_captcha = document.querySelector('#err_captcha')
//     captcha2.classList.add('err_border')
//     err_captcha.classList.add('err_text')
//     this.setState({ err_captcha: '驗證碼有誤' })
//     return
//   } else {
//     isPass = true
//   }
//   // this.setState({name: "字數太少囉",password: "格式或密碼有誤", password2: "請再重新輸入"})
//   console.log("isPass",isPass);

//   const formData = new FormData()
//   let fileField = document.querySelector("input[type='file']")
//   formData.append('avatar', fileField.files[0])
//   console.log(4, isPass, formData);

//   if (isPass) {
//     let imgFile = ''
//     //目前想說新增完圖片再塞入修改資料
//     fetch('http://localhost:5555/member/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(res => {
//         // console.log("res:", res);
//         return res.json()
//       })
//       .then(img => {
//         if (img.filename === '') {
//           imgFile = '品書印章.png'
//         } else {
//           imgFile = img.filename
//         }

//         fetch('http://localhost:5555/member/register', {
//           method: 'POST',
//           credentials: 'include', //跨網域取得session資訊
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name: this.state.name,
//             nickname: this.state.nickname,
//             email: this.state.email,
//             password: this.state.password,
//             filename: imgFile,
//           }),
//         })
//           .then(response => {
//             if (!response) throw new Error(response.statusText)
//             // console.log('3'+response);

//             return response.json()
//           })
//           .then(data => {
//             let status = data.status
//             let message = data.message
//             console.log('註冊', data)
//             if (data.status === '註冊成功') {
//               this.success(status, message)
//               // setTimeout(() => {
//               //   window.location = window.location.href
//               //  }, 1000)
//             } else {
//               this.fail(status, message)
//             }
//           })
//           .catch(error => {
//             console.log('error = ' + error)
//           })
//       })
//   }
// }

function Register(props) {
  const [register, setRegister] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    password: '',
    password2: '',
  })

  const [reg, setReg] = useState({
    title: '',
    msg: '',
    data: {},
  })

  const [smShow, setSmShow] = useState(false)
  let history = useHistory()

  const [validated, setValidated] = useState(false)

  // 函式參數解構 developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // ref: https://blog.stvmlbrn.com/2017/01/16/form-validation-with-react.html
  // const handleChange = (event) => {
  // 從 event.target 解構取出 name, value
  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value)
    setRegister({ ...register, [name]: value })
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault() //阻止預設行為
    event.stopPropagation() //停止向上傳送

    console.log('form.checkValidity()', form.checkValidity())
    if (form.checkValidity() === false) {
      console.log('驗證失敗')
    } else {
      // call api
      registerApi()
    }

    setValidated(true)
  }

  async function registerApi() {
    const { password2, ...realRegister } = register

    const response = await request({
      url: 'members/register',
      method: 'POST',
      data: { ...realRegister },
    })

    const { success, msg, data } = response

    // 如果成功
    if (success) {
      // 資料（物件）轉成 JSON，儲存登入資訊
      // localStorage.setItem('userInfo', JSON.stringify(data))

      // 設定小彈窗的內容
      setReg({
        success: success,
        title: '註冊成功',
        msg: msg,
      })

      // 顯示小彈窗
      setSmShow(true)

      // n 秒後轉導至 /
      setTimeout(() => {
        history.push('/')
      }, 2000)

      // alert(msg)
    } else {
      // alert(msg)
      setReg({
        success: success,
        title: '註冊失敗',
        msg: msg,
        data: data,
      })
      setSmShow(true)
    }
  }

  return (
    <>
      <Container className="Register_container con">
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {reg.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {reg.success && <div>{reg.msg}</div>}
            {reg.data && reg.data.noEmail && <div>{reg.data.noEmail}</div>}
            {reg.data && reg.data.noMobile && <div>{reg.data.noMobile}</div>}
          </Modal.Body>
        </Modal>

        <div className="text-center title">註冊</div>
        <Form
          className="register_form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="sub_title">個人資料</div>
          <Form.Group as={Col} controlId="name">
            <Form.Label>姓名</Form.Label>
            <Form.Control
              onChange={handleChange}
              placeholder="請輸入姓名"
              name="name"
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              請輸入正確格式
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="mobile">
            <Form.Label>電話</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="mobile"
              placeholder="請輸入電話"
              required
            />
            <Form.Control.Feedback type="invalid">
              請輸入正確的格式
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="address">
            <Form.Label>地址</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="address"
              type="text"
              placeholder="請輸入地址"
              required
            />
            <Form.Control.Feedback type="invalid">
              請輸入正確格式
            </Form.Control.Feedback>
          </Form.Group>

          <div className="sub_title2">帳戶密碼</div>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>電子郵件</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="請輸入電子郵件"
              required
            />

            <Form.Control.Feedback type="invalid">
              請輸入正確格式
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="password">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              isValid={register.password.length >= 6}
              placeholder="請輸入密碼"
              required
            />
            <Form.Control.Feedback type="invalid">
              請輸入密碼
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="password2">
            <Form.Label>確認密碼</Form.Label>
            <Form.Control
              isValid={
                register.password && register.password === register.password2
              }
              isInvalid={
                register.password.length === register.password2.length &&
                register.password !== register.password2
              }
              onChange={handleChange}
              name="password2"
              type="password"
              placeholder="請輸入確認密碼"
              required
            />
            <Form.Control.Feedback type="invalid">
              確認密碼錯誤
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="reg_btn">
            註冊
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Register
