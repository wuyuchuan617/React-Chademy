// import React from 'react'
import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import './index.scoped.scss'

import request from '../../utils/request'

// import { Form, Button, Container } from 'react-bootstrap'

import { Typography, Layout, Form, Input, Modal, Button } from 'antd'
const { Title } = Typography
const { Content } = Layout

function Resetpassword() {
  // 表單元素
  const [form] = Form.useForm()

  const [smShow, setSmShow] = useState(false)
  const [reg, setReg] = useState({
    title: '',
    msg: '',
    data: {},
  })

  let history = useHistory()

  // 表單方法
  const onFinish = (fieldsValue) => {
    const fetchData = async () => {
      const response = await request({
        url: `/members/resetPWD`,
        method: 'POST',
        data: {
          token: window.location.search.replace('?token=', ''),
          password: fieldsValue.password,
        },
      })

      const { success, msg, data } = response

      // 如果成功
      if (success) {
        // 設定小彈窗的內容
        setReg({
          success: success,
          title: '重置密碼',
          msg: msg,
        })

        // 顯示小彈窗
        setSmShow(true)

        // n 秒後轉導至 /
        setTimeout(() => {
          history.push('/')
        }, 2000)
      } else {
        setReg({
          success: success,
          title: '重置密碼',
          msg: msg,
          data: data,
        })

        setSmShow(true)
      }
    }

    fetchData()
  }

  return (
    <Layout className="register_container">
      <Content style={{ padding: '0 50px' }}>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={{
            email: '',
            password: '',
          }}
          onFinish={onFinish}
          onValuesChange={(changedValues, allValues) => {
            console.log(allValues)
            form.setFieldsValue(allValues)
          }}
          className="form_container"
        >
          <Title level={4}>重置密碼</Title>

          <Form.Item
            name="password"
            label="請輸入密碼"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item
            name="password2"
            label="請輸入確認密碼"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!'
                  )
                },
              }),
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="chademy" htmlType="submit">
              更改
            </Button>
          </Form.Item>
        </Form>

        <Modal
          className="reset_modal"
          title={reg.title}
          visible={smShow}
          onOk={() => setSmShow(false)}
          onCancel={() => setSmShow(false)}
          footer={[
            <Button
              key="submit"
              type="primary"
              onClick={() => setSmShow(false)}
            >
              確認
            </Button>,
          ]}
        >
          {reg.success && <div>{reg.msg}</div>}
          {reg.data && reg.data.noEmail && <div>{reg.data.noEmail}</div>}
          {reg.data && reg.data.noMobile && <div>{reg.data.noMobile}</div>}
        </Modal>
      </Content>
    </Layout>
  )

  // return (
  //   <>
  //     <Container>
  //       <Form>
  //         <h1>重置密碼</h1>
  //         <div>更改密碼</div>
  //         <Form.Group controlId="formBasicEmail">
  //           <Form.Label>新密碼</Form.Label>
  //           <Form.Control type="password" placeholder="Enter password" />
  //         </Form.Group>

  //         <Form.Group controlId="formBasicPassword">
  //           <Form.Label>確認新密碼</Form.Label>
  //           <Form.Control type="password" placeholder="Enter password" />
  //         </Form.Group>

  //         <Button
  //           variant="primary"
  //           type="submit"
  //           onClick={async () => {
  //             // const response = await request({
  //             //   url: `/members/forgetPwd`,
  //             //   method: 'POST',
  //             //   data: { token, password },
  //             // })
  //             // console.log(response)
  //             // if (!response.success) {
  //             //   message.error(response.msg)
  //             // } else {
  //             //   message.success(response.msg)
  //             // }
  //           }}
  //         >
  //           Submit
  //         </Button>
  //       </Form>
  //     </Container>
  //   </>
  // )
}

export default Resetpassword
