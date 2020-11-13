import React, { useState, useEffect } from 'react'
import { Form, Input, DatePicker, Select } from 'antd'
import '../styles/setprice.scss'
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from 'react-countdown'
import {  Button , Modal } from 'react-bootstrap'
function Setprice(props) {
  const {
    changepage,
    comma,
    pname,
    chair,
    price,
    addprice,
    enddate,
    total,
  } = props
  const [inputValue, setInputValue] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  function trigger() {
    if (price > inputValue) addprice()
  }

  const Completionist = () => <span>Sold Out!</span>
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span >
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )
    }
  }
  return (
    <>
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <div className="d-flex">
            <div className="pr-4">
              <p className="g-setpricep">會員姓名</p>
              <p className="g-setpricep">剩餘時間</p>
              <p className="g-setpricep">目前總金額</p>
            </div>
            <div className="text-left">
              <p className="g-setpricep g-setorange">Ian</p>
              <p className="g-setpricep g-setorange">
                {' '}
                {total ? (
                  <Countdown
                    date={new Date(enddate).getTime()}
                    renderer={renderer}
                  ></Countdown>
                ) : (
                  ''
                )}
              </p>
              <p className="g-setpricep g-setorange">${comma}</p>
            </div>
          </div>

          <Form
            // form={form}
            layout="vertical"
            initialValues={{
              addprice: '',
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
            {/* <Form.Item label="每次出價金額" name="addprice"  className="g-setpricep" >
          <Select className="g-setpricep">
            <Select.Option onchange={} value="1000">$1,000</Select.Option>
            <Select.Option value="5000">$5,000</Select.Option>
            <Select.Option value="10000">$10,000</Select.Option>
           
          </Select>
        </Form.Item> */}

            <Form.Item
              label="金額通知"
              name="totalPrice"
              type="number"
              // rules={[{ required: true, message: '此欄不得為空' }]}
              className="g-setpricep"
            >
              <Input
                className="heigh"
                id="money"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  
                  handleShow()
                }}
              >
                確認
              </Button>
            </Form.Item>
          </Form>
          <p className="g-setpricep">
            *每次在其他競標者出價後自動加價，直到總金額達到最高金額$50,000為止
          </p>
        </div>
        <div className="col-6">
          <p className="g-set-prodname text-left">{pname}</p>
          <p className="g-set-prodname2 text-left">{pname}單椅</p>
          <img src={chair} />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>確定要通知嗎？</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            trigger()
            handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Setprice
