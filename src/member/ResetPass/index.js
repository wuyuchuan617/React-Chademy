import React from 'react'
import '../index.scoped.scss'

import request from '../../utils/request'

import { Layout, Form, Input, Button, message } from 'antd'
// const { Title } = Typography
const { Content } = Layout

function ResetPass() {
  // 表單元素
  const [form] = Form.useForm()

  // 表單方法
  const onFinish = (fieldsValue) => {
    console.log(
      '%c DEBUG %cData',
      'color: #0092FA; font-weight: bold; ',
      'color: #fff; background: #0092FA; font-weight: bold; padding: 5px; border-radius: 3px',
      fieldsValue
    )
    const fetchData = async () => {
      const response = await request({
        url: `/members/setUserPass`,
        method: 'POST',
        data: {
          oldPassword: fieldsValue.oldPassword,
          newPassword: fieldsValue.newPassword,
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
    <Layout className="password_container">
      <Content style={{ padding: '0 50px' }}>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={{ oldPassword: '', newPassword: '' }}
          onFinish={onFinish}
          onValuesChange={(changedValues, allValues) => {
            form.setFieldsValue(allValues)
          }}
          className="form_container"
        >
          {/* <Title level={4}>重置密碼</Title> */}

          <Form.Item
            name="oldPassword"
            label="請輸入舊密碼"
            rules={[
              {
                required: true,
                message: 'Please input your old password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="請輸入密碼"
            rules={[
              {
                required: true,
                message: 'Please input your new password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="請輸入確認密碼"
            dependencies={['newPassword']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your new password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('newPassword') === value) {
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
      </Content>
    </Layout>
  )
}

export default ResetPass
