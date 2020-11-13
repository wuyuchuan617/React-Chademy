import React, { useState } from 'react'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import { Form, Select } from 'antd'

function DateFilter(props) {
  const { setStartDate, setChooseClass, getClassFilterFromSQL } = props

  // const [startDate, setStartDate] = useState('')
  // const [chooseClass, setChooseClass] = useState('')

  const { RangePicker } = DatePicker
  const dateFormat = 'YYYY-MM-DD'
  const monthFormat = 'YYYY-MM'
  const dateFormatList = ['DD-MM-YYYY', 'DD-MM-YY']

  return (
    <>
      <div className="container a_date_filter">
        <div className="row justify-content-center align-items-center  d-flex a_filter_bg">
          <div className="col ">
            <Space direction="vertical" size={12}>
              <DatePicker
                // defaultValue={moment('2020-09-20', dateFormat)}
                placeholder={'選擇開課日期'}
                format={dateFormat}
                onChange={(date, dateString) => {
                  console.log('dateString', dateString)
                  // console.log('date', date)
                  let newDate = dateString
                  setStartDate(newDate)
                }}
              />
            </Space>
          </div>

          <div className="col a_custom_photo">
            <Form.Item label="" className="justify-content-center">
              <Select
                placeholder="選擇課程"
                // style={{ height: '60px' }}
                onChange={(value) => {
                  console.log('value', value)
                  setChooseClass(value)
                }}
              >
                <Select.Option value="1">一日木工體驗</Select.Option>
                <Select.Option value="2">職人養成班</Select.Option>
                <Select.Option value="3">展覽活動</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div
            className="col btn_lessmargin more w_cart-btn a_cart"
            onClick={() => {
              getClassFilterFromSQL()
              // setViewFilter(0)
            }}
          >
            SEARCH
          </div>
        </div>
      </div>
    </>
  )
}

export default DateFilter
