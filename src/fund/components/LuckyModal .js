import React from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import '../../product/styles/couponModal.css'
import Hpanimate from '../pages/Hpanimate'

function LuckyModal(props) {
  const { visible, setVisible } = props
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
            <Hpanimate />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default LuckyModal
