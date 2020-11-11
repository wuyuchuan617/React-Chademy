import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

// import Aside from '../../common_components/Aside'

// import { Form, Button, Col, Container, Modal } from 'react-bootstrap'

import { Modal, Button, Form, Input, DatePicker, message } from 'antd'

import moment from 'moment'
// import { useHistory } from 'react-router-dom'

// const { Header, Sider, Content } = Layout

function MemberCenter(props) {
  const [form] = Form.useForm()

  const [reg, setReg] = useState({
    title: '',
    msg: '',
    data: {},
  })
  const [smShow, setSmShow] = useState(false)

  // let history = useHistory()
  // const [validated, setValidated] = useState(false)

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget
  //   event.preventDefault() //阻止預設行為
  //   event.stopPropagation() //停止向上傳送

  //   console.log('form.checkValidity()', form.checkValidity())
  //   if (form.checkValidity() === false) {
  //     // event.preventDefault()
  //     // event.stopPropagation()
  //   } else {
  //     // api
  //     registerApi()
  //   }

  //   setValidated(true)
  // }

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
    // console.log('moment(res.data.birthday): ', moment(res.data.birthday))
    // console.log('response.data ', res.data)

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

  //
  //
  //
  //

  // // Use form inside UseEffect
  // useEffect(() => {
  //   console.log('    useEffect')
  //   form.setFieldsValue({
  //     username: 'Annacoding',
  //   })
  // }, [])

  // didmount拿所有資料
  useEffect(() => {
    getUserInfo()
  }, [])
  //
  //
  //
  //

  return (
    <>
      {/* <Layout className="memberCenter_container">
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
          </Content>
        </Layout>
      </Layout> */}

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
          <Input />
        </Form.Item>

        <Form.Item
          label="電話"
          name="mobile"
          rules={[{ required: true, message: '此欄不得為空' }]}
        >
          <Input />
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
          <Button type="primary" htmlType="submit">
            更改
          </Button>
        </Form.Item>
      </Form>

      {/* 訊息彈窗 */}
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
    </>
  )
}

export default MemberCenter
