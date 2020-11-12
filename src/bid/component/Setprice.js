import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Input, DatePicker, message } from 'antd'
function Setprice(props){
    const {changepage} = props
    
    
    return(
        <>
   
            <Form
        // form={form}
        layout="vertical"
        initialValues={{
          birthday: '',
          mobile: '',
          name: '',
        }}
        // onValuesChange={(changedValues, allValues) => {
        //   form.setFieldsValue(allValues)
        // }}
        name="basic"
        // onFinish={onFinish}
        className="form_container"
      >
        <Form.Item
          label="出價金額"
          name="name"
          rules={[{ required: true, message: '此欄不得為空' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="出價時間"
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
     
        </>
    )
}

export default Setprice