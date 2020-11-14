import React, { useEffect } from 'react'

import '../index.scoped.scss'
import { Button, Form, Input, DatePicker, message } from 'antd'
import moment from 'moment'

function MemberCenter(props) {
  const [form] = Form.useForm()

  async function getUserInfo() {
    const url = 'http://localhost:3001/members/getUserInfo'
    const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
    const { token, authToken } = user.users || {}

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    })

    const res = await response.json()

    // 需要轉換為 Moment 物件，不然組件會噴錯而畫面卡住
    if (res.data && res.data.birthday) {
      res.data.birthday = moment(res.data.birthday)
    }

    // 設定初始值去表單上
    form.setFieldsValue(res.data)
  }

  async function setUserInfo(allValue) {
    const url = 'http://localhost:3001/members/setUserInfo'
    const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
    const { token, authToken } = user.users || {}
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...allValue,
        token: token,
      }),
    })

    const res = await response.json()

    if (!res.success) {
      message.error(res.msg)
    } else {
      message.success(res.msg)
    }

    console.log('response.data ', res.data)

    // 設定初始值去表單上
    form.setFieldsValue(res.data)
  }

  // const onFinish = async (allValue) => {
  //   console.log(' onFinish:', allValue)
  //   setUserInfo(allValue)
  // }

  const onFinish = (fieldsValue) => {
    const allValue = {
      ...fieldsValue,
      birthday: fieldsValue['birthday'].format('YYYY-MM-DD'), // 組件格式化日期
    }
    setUserInfo(allValue)
  }

  // didmount拿所有資料
  useEffect(() => {
    getUserInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          birthday: '',
          mobile: '',
          name: '',
        }}
        onValuesChange={(changedValues, allValues) => {
          form.setFieldsValue(allValues)
        }}
        name="basic"
        onFinish={onFinish}
        className="form_container"
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '此欄不得為空' }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="電話"
          name="mobile"
          rules={[{ required: true, message: '此欄不得為空' }]}
        >
          <Input size="large" />
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
                type: 'string',
                required: true,
                message: '請選擇生日',
              },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <Button type="chademy" htmlType="submit">
            更改
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default MemberCenter
