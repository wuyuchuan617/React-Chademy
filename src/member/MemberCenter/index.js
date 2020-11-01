import React, { useState } from 'react'
import './index.scoped.scss'

import Aside from '../../common_components/Aside'

// import { Form, Button, Col, Container, Modal } from 'react-bootstrap'
import { Layout } from 'antd'

import { Modal, Button, Form, Input, Checkbox } from 'antd'

import { useHistory } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout
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

function MemberCenter(props) {
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

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault() //阻止預設行為
    event.stopPropagation() //停止向上傳送

    console.log('form.checkValidity()', form.checkValidity())
    if (form.checkValidity() === false) {
      // event.preventDefault()
      // event.stopPropagation()
    } else {
      // api
      registerApi()
    }

    setValidated(true)
  }

  async function registerApi() {
    const url = 'http://localhost:3001/members/register'

    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: register.email,
        password: register.password,
        mobile: register.mobile,

        // email: email,
        // password: password,
      }),
    })

    // if (!response) throw new Error(response.statusText)

    let res

    try {
      // 試著解析
      res = await response.json()
      console.log(res)

      const { success, msg, data } = res

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
    } catch (error) {
      console.log(error)
    }
  }

  // const layout = {
  //   labelCol: { span: 8 },
  //   wrapperCol: { span: 16 },
  //   layout: 'vertical',
  // }
  // const tailLayout = {
  //   wrapperCol: { offset: 8, span: 16 },
  // }

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Layout className="memberCenter_container">
        <Header className="hander_container">
          <div className="title">個人資料</div>
        </Header>

        <Layout>
          <Sider
            className="sider_container"
            style={{ background: 'transparent' }}
            light="light"
            width={256}
          >
            <Aside></Aside>
          </Sider>
          <Content style={{ padding: '0 50px' }}>
            {/* <div className="text-center title">註冊</div> */}

            {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
            {/* <div className="title2">個人資料</div> */}

            <Form
              // {...layout}
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="form_container"
            >
              <Form.Item
                label="姓名"
                name="username"
                rules={[{ required: true, message: '此欄不得為空' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="電話"
                name="username"
                rules={[{ required: true, message: '此欄不得為空' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="地址"
                name="username"
                rules={[{ required: true, message: '此欄不得為空' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="生日"
                name="username"
                rules={[{ required: true, message: '此欄不得為空' }]}
              >
                <Input />
              </Form.Item>

              {/* <Form.Item
                  label="密碼"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="確認密碼"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password />
                </Form.Item> */}

              {/* <Form.Item
                // {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              <Form.Item
              // {...tailLayout}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            {/* </Form> */}

            {/*  */}
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
                {reg.data && reg.data.noMobile && (
                  <div>{reg.data.noMobile}</div>
                )}
              </Modal.Body>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default MemberCenter
