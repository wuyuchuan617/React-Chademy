import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './index.scoped.scss'
import request from '../../utils/request'

import { Typography, Layout, Form, Input, Modal, Button } from 'antd'

const { Title } = Typography

const { Content } = Layout

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

function ResetEmail(props) {
  const dispatch = useDispatch()

  // 表單元素
  const [form] = Form.useForm()

  // const [register, setRegister] = useState({})

  const [reg, setReg] = useState({
    title: '',
    msg: '',
    data: {},
  })

  const [smShow, setSmShow] = useState(false)
  let history = useHistory()

  // 表單方法
  const onFinish = (fieldsValue) => {
    const registerValue = {
      ...fieldsValue,
      birthday: fieldsValue['birthday'].format('YYYY-MM-DD'), // 組件格式化日期
    }

    resetEmailApi(registerValue)
  }

  async function resetEmailApi(register) {
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

      // 3. 調用 dispatch => 觸發 store.subscribe
      dispatch({ type: 'SIGN_IN', payload: data })

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
    } else {
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
    <Layout className="register_container">
      <Title style={{ textAlign: 'center' }} level={2}>
        重設電子郵件
      </Title>

      <Content style={{ padding: '0 50px' }}>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={{
            email: '',
            email2: '',
          }}
          onFinish={onFinish}
          validateMessages={validateMessages}
          onValuesChange={(changedValues, allValues) => {
            console.log(' allValues ', allValues)
            form.setFieldsValue(allValues)
          }}
          className="form_container"
        >
          <Title level={4}>電子郵件</Title>

          <Form.Item
            label="電子郵件"
            name="email"
            rules={[
              { required: true, message: '此欄不得為空' },
              { type: 'email' },
            ]}
          >
            <Input size="large" placeholder="請輸入電子郵件" />
          </Form.Item>

          <Form.Item
            name="email1"
            label="電子郵件"
            rules={[
              {
                required: true,
                message: '此欄不得為空',
              },
              { type: 'email' },
            ]}
            hasFeedback
          >
            <Input size="large" placeholder="請輸入電子郵件" />
          </Form.Item>

          <Form.Item
            name="email2"
            label="請輸入確認電子郵件"
            dependencies={['email1']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your email!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('email1') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    'The two emails that you entered do not match!'
                  )
                },
              }),
            ]}
          >
            <Input size="large" placeholder="請輸入電子郵件" />
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
}

export default ResetEmail
