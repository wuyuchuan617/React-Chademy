// import React from 'react'
import React, { useState } from 'react'
import './index.scoped.scss'

import request from '../../utils/request'

import { Typography, Layout, Form, Input, Button, message } from 'antd'
const { Title } = Typography
const { Content } = Layout

function ResetEmail() {
  // 表單元素
  const [form] = Form.useForm()

  // const [smShow, setSmShow] = useState(false)
  // const [reg, setReg] = useState({
  //   title: '',
  //   msg: '',
  //   data: {},
  // })

  // 表單方法
  const onFinish = (fieldsValue) => {
    const fetchData = async () => {
      const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
      const { token } = user.users || {}

      const response = await request({
        url: `/members/setUserEmail`,
        method: 'POST',
        data: {
          token: token,
          email: fieldsValue.email,
        },
      })

      const { success, msg, data } = response

      if (!success) {
        message.error(msg)
      } else {
        message.success(msg)
      }

      console.log('response.data ', data)

      // 如果成功
      // if (success) {
      //   // 設定小彈窗的內容
      //   setReg({
      //     success: success,
      //     title: '重置信箱成功',
      //     msg: msg,
      //   })

      //   setSmShow(true) // 顯示小彈窗
      // } else {
      //   setReg({
      //     success: success,
      //     title: '重置信箱失敗',
      //     msg: msg,
      //     data: data,
      //   })
      //   setSmShow(true)
      // }
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
          <Title level={4}>重置信箱</Title>

          <Form.Item
            name="email"
            label="請輸入電子郵件"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input your email!',
              },
            ]}
            hasFeedback
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="password2"
            label="請輸入確認電子郵件"
            dependencies={['email']}
            hasFeedback
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please confirm your email!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('email') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    'The two emails that you entered do not match!'
                  )
                },
              }),
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="chademy" htmlType="submit">
              更改
            </Button>
          </Form.Item>
        </Form>
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

export default ResetEmail
