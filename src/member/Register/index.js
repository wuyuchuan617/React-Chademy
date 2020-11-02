import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import './index.scoped.scss'
import request from '../../utils/request'

import {
  Typography,
  Layout,
  Form,
  Input,
  Modal,
  DatePicker,
  Button,
} from 'antd'

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

function Register(props) {
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

    registerApi(registerValue)
  }

  async function registerApi(register) {
    const { password2, ...realRegister } = register

    console.log('register', register)

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

      // // n 秒後轉導至 /
      // setTimeout(() => {
      //   history.push('/')
      // }, 2000)
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
        註冊
      </Title>

      <Content style={{ padding: '0 50px' }}>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={{
            name: '',
            address: '',
            mobile: '',
            email: '',
            password: '',
            password2: '',
            birthday: '',
          }}
          onFinish={onFinish}
          validateMessages={validateMessages}
          onValuesChange={(changedValues, allValues) => {
            console.log(' allValues ', allValues)
            form.setFieldsValue(allValues)
          }}
          className="form_container"
        >
          <Title level={4}>個人資料</Title>

          <Form.Item
            label="請輸入姓名"
            name="name"
            rules={[{ required: true, message: '此欄不得為空' }]}
          >
            <Input size="large" placeholder="請輸入姓名" />
          </Form.Item>

          <Form.Item
            label="請輸入電話"
            name="mobile"
            hasFeedback
            rules={[
              {
                required: true,
                message: '此欄不得為空',
              },

              () => ({
                validator(rule, value) {
                  const mobileReg = /^09\d{2}-?\d{3}-?\d{3}$/

                  // 沒有值不驗證
                  if (!value) return Promise.resolve()

                  // 不是 09 開頭
                  if (!value.startsWith('09')) {
                    return Promise.reject('手機格式錯誤')
                  }

                  // 不符合手機格式
                  if (!mobileReg.test(value)) {
                    return Promise.reject('手機格式錯誤')
                  }

                  // 最後給過
                  return Promise.resolve()
                },
              }),
            ]}
          >
            <Input size="large" placeholder="請輸入電話" />
          </Form.Item>

          <Form.Item
            label="生日"
            name="birthday"
            rules={[{ required: true, message: '此欄不得為空' }]}
          >
            <DatePicker
              format="YYYY-MM-DD"
              size="large"
              className="date_input"
              placeholder="請選擇生日"
              rules={[
                {
                  type: 'object',
                  required: true,
                  message: '請選擇生日',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="請輸入地址"
            name="address"
            rules={[{ required: true, message: '此欄不得為空' }]}
          >
            <Input size="large" placeholder="請輸入地址" />
          </Form.Item>

          <Title level={4}>帳戶密碼</Title>

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
            <Button type="primary" htmlType="submit">
              註冊
            </Button>
          </Form.Item>
        </Form>

        <Modal
          title={reg.title}
          visible={smShow}
          onCancel={() => setSmShow(false)}
          okText="確認"
        >
          {reg.success && <div>{reg.msg}</div>}
          {reg.data && reg.data.noEmail && <div>{reg.data.noEmail}</div>}
          {reg.data && reg.data.noMobile && <div>{reg.data.noMobile}</div>}
        </Modal>
      </Content>
    </Layout>
  )
}

export default Register
