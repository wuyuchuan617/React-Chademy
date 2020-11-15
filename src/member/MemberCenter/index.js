import React, { useEffect, useState } from 'react'

import request from '../../utils/request'

import '../index.scoped.scss'
import { Modal, Upload, Button, Form, Input, DatePicker, message } from 'antd'
import moment from 'moment'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

function MemberCenter(props) {
  const [previewPhotoUrl, setPreviewPhotoUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const [form] = Form.useForm()

  async function setUserInfo(allValue) {
    try {
      const { success, msg, data } = await request({
        url: 'members/setUserInfo',
        method: 'POST',
        data: allValue,
      })

      success ? message.success(msg) : message.error(msg)

      form.setFieldsValue(data) // 設定初始值去表單上
    } catch (error) {
      console.warn(error)
    }
  }

  // didmount拿所有資料
  useEffect(() => {
    async function getUserInfo() {
      try {
        const { data } = await request({
          url: 'members/getUserInfo',
          method: 'POST',
        })

        // 需要轉換為 Moment 物件，不然組件會噴錯而畫面卡住
        if (data && data.birthday) {
          data.birthday = moment(data.birthday)
        }

        form.setFieldsValue(data) // 設定初始值去表單上
        setPreviewPhotoUrl(data.avatar) // 設定頭像
      } catch (error) {
        console.warn(error)
      }
    }

    getUserInfo()
    console.log(' useEffect')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRequest = async (event) => {
    const { file } = event

    // 設定 laoding
    setLoading(true)

    // 準備 formData
    const formData = new FormData()
    formData.append('myfile', file)

    // call api
    const response = await request({
      url: '/man_fund/try-upload',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const { success, newFileName } = response

    // 關閉 loading
    setTimeout(() => setLoading(false), 300)

    if (success) {
      setPreviewPhotoUrl(newFileName)
    }
  }

  // 提交表單
  const onFinish = (fieldsValue) => {
    if (!previewPhotoUrl) {
      Modal.warning({ content: '請上傳頭像！' })
      return
    }

    setUserInfo({
      ...fieldsValue,
      avatar: previewPhotoUrl, // 頭像
      birthday: fieldsValue['birthday'].format('YYYY-MM-DD'), // 組件格式化日期
    })
  }

  return (
    <>
      <Upload
        name="photo"
        listType="picture-card"
        className="avatar-uploader-chademy"
        showUploadList={false}
        customRequest={handleRequest}
      >
        {previewPhotoUrl ? (
          <img
            src={`${window.location.origin}/img/${previewPhotoUrl}`}
            alt="avatar"
            style={{ width: '100%' }}
          />
        ) : (
          <div>
            {/* upload button */}
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        )}
      </Upload>
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
