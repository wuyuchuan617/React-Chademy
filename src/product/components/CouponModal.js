import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import 'antd/dist/antd.css'
import '../styles/couponModal.css'
import popularImg from '../images/777.jpg'

function CouponModal(props) {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="  "
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        headStyle={{ backgroundColor: '#EDECE8' }}
        bodyStyle={{ backgroundColor: '#EDECE8' }}
        footer={null}
      >
        <div className="row modalOut d-flex">
          <div className="col-6 modalLeft ">
            <p className="modalTitle ">首次訂購領取10%折扣碼</p>
            <p className="modalSmallTitle ">
              我同意....為了確保其始終處於最佳狀態且實現極致舒適度，保其始終處於最佳狀態且實
            </p>
            <div class="formset">
              <label for="productname"> 姓名</label>
              <input
                type="text"
                class="formstyle formwidth"
                value=""
                id="productname"
              />
            </div>
            <div class="formset">
              <label for="password">Email</label>
              <input
                type="password"
                class="formstyle formwidth"
                value=""
                id="password"
              />
            </div>
            <div className="d-flex">
              <div className="squareCheck"></div>
              <p className="modalSmallTitle1 ">
                我同意....為了確保其始終處於最佳狀態且實現極致舒適度，保其始終處於最佳狀
              </p>
            </div>
            <button class="coupon-btn">領取折扣碼</button>
          </div>
          <div className="col-6 modalRight d-flex">
            <img src={popularImg} alt="" />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CouponModal
