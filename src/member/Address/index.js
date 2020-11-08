// import React from 'react'
import React from 'react'
import './index.scoped.scss'

import { AiOutlinePlus } from 'react-icons/ai'

function Address() {
  //   const [modalShow, setModalShow] = useState(false)

  //   const handleOpenModal = () => {
  //     console.log('Click')
  //     setModalShow(true)
  //   }

  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     setModalShow(false)
  //   }

  return (
    <>
      <div className="lineee justify-content-between">
        新增地址
        <div className="icon_con">
          <AiOutlinePlus className="icon" />
        </div>
      </div>
      {/* <div className="con">尚未綁定</div> */}
      {/* <MainScreen
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={handleSubmit}
      /> */}
    </>
  )
}

export default Address
