import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import 'antd/dist/antd.css'
import '../styles/couponModal.css'
import popularImg from '../images/777.jpg'

function ProductModal(props) {
  const { visible, setVisible, item } = props
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
      >
        <div className="row modalOut d-flex">
          <div className="col modalproduct ">
            <img src={require('../../img/' + item.photo)} alt="" />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductModal
