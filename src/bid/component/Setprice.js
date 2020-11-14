/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import { Form, Input } from 'antd'
import '../styles/setprice.scss'
import Countdown, { zeroPad } from 'react-countdown'
import { Button, Modal } from 'react-bootstrap'
function Setprice(props) {
  const {
    changepage,
    comma,
    pname,
    chair,
    price,
    enddate,
    total,
    inputValue,
    setInputValue,
    subscribe,
  } = props
  const [show, setShow] = useState(false)
  const [comma5, setcomma5] = useState(false)

  // const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  //  modal toggle
  const [modalState, setModalState] = useState('close')

  const handleShowModalOne = () => {
    setModalState('modal-one')
  }

  const handleShowModalTwo = () => {
    setModalState('modal-two')
  }

  const handleClose = () => {
    setModalState('close')
  }
  //coundown
  const Completionist = () => <span>Sold Out!</span>
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )
    }
  }
  //add comma in figures
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  useEffect(() => {
    const c = numberWithCommas(inputValue)
    setcomma5(c)
  }, [inputValue])

  return (
    <>
      <div className="col d-flex align-items-center justify-content-center grace-mt">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <div className="pr-4">
              <p className="g-setpricep">會員姓名</p>
              <p className="g-setpricep">剩餘時間</p>
              <p className="g-setpricep">目前總金額</p>
            </div>
            <div className="text-left">
              <p className="g-setpricep g-setorange">
                {JSON.parse(localStorage.getItem('reduxState')).user.users.name}
              </p>
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
            name="basic"
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
                value={comma5}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
          className="chat"

                type="primary"
                htmlType="submit"
                onClick={() => {
                  handleShowModalOne()
                  handleShow()
                }}
              >
                確認
              </Button>
            </Form.Item>
          </Form>
          {/* <p className="g-setpricep">
            *每次在其他競標者出價後自動加價，直到總金額達到最高金額$50,000為止
          </p> */}
        </div>
        <div className="col-6">
          <p className="g-set-prodname text-left">{pname}</p>
          <p className="g-set-prodname2 text-left">{pname}單椅</p>
          <div className="g-setprice-wrap">
            <img classname="g-setprice-img" src={chair} />
          </div>
        </div>
      </div>
      <Modal
        show={modalState === 'modal-one'}
        onHide={handleClose}
        subscribe={subscribe}
      >
        <Modal.Header closeButton>
          <Modal.Title>請您確認以下設定</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            親愛的
            <span style={{ color: '#c77334' }}>
              {JSON.parse(localStorage.getItem('reduxState')).user.users.name}
            </span>
            您好：
          </p>
          <p>
            在 <span style={{ color: '#c77334' }}>{pname}</span>
            商品競標金額超過<span style={{ color: '#c77334' }}>${comma5}</span>
            時，將對您進行通知
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          // className="rounded-0"
          variant="secondary" onClick={handleClose}>
            取消
          </Button>
          <Button
          // className="rounded-0"
            variant="primary"
            onClick={() => {
              subscribe(inputValue)
              handleShowModalTwo()
              // handleClose()
            }}
          >
            確認
          </Button>
        </Modal.Footer>
      </Modal>
      {/* 2nd modal to confirm */}
      <Modal
        show={modalState === 'modal-two'}
        onHide={handleClose}
        subscribe={subscribe}
      >
        <Modal.Header closeButton>
          <Modal.Title>恭喜您🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <p>
            恭喜您已開啟訂閱小鈴鐺🔔！
            <span style={{ color: '#c77334' }}>{pname}</span>
            商品競標金額將在超過
            <span style={{ color: '#c77334' }}>${comma5}</span>時，對您進行通知
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
          // className="rounded-0"

            variant="primary"
            onClick={() => {
              handleClose()
            }}
          >
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Setprice
