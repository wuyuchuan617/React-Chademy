import React from 'react'

import request from '../../utils/request'

import { Typography, Layout, Form, Input, Button, message } from 'antd'
const { Title } = Typography
const { Content } = Layout

function ResetEmail() {
  // 表單元素
  const [form] = Form.useForm()

  // 表單方法
  const onFinish = (fieldsValue) => {
    const fetchData = async () => {
      const response = await request({
        url: `/members/setUserEmail`,
        method: 'POST',
        data: {
          email: fieldsValue.email,
        },
      })

      const { success, msg, data } = response

      if (!success) {
        message.error(msg)
      } else {
        message.success(msg)

        // 成功後清空
        form.resetFields()
      }

      console.log('response.data ', data)
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
          initialValues={{ email: '' }}
          onFinish={onFinish}
          onValuesChange={(changedValues, allValues) => {
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
            name="email2"
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
}

export default ResetEmail
