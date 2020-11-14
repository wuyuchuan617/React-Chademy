import React from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import '../../product/styles/couponModal.css'

function FundModal(props) {
  const { visible, setVisible, photo } = props
  return (
    <>
      <Modal
        title="  "
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
        headStyle={{ backgroundColor: '#EDECE8' }}
        bodyStyle={{ backgroundColor: '#EDECE8' }}
        footer={null}
        className="modal_wrapper"
      >
        <div className="row modalOut d-flex">
          <div className="col modalproduct ">
            <img src={photo} alt="" />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default FundModal
