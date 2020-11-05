import React from 'react'
import { Link } from 'react-router-dom'
function Finish(props) {
  const { orderNo } = props
  return (
    <>
      <div className="myprogress">
        <div className="progressbar">
          {' '}
          <div className="layoutcircle">
            <div
              className="defaultcircle"
              style={{ backgroundColor: '#436464' }}
            ></div>
          </div>
          <div className="layoutcircle">
            <div
              className="defaultcircle"
              style={{ backgroundColor: '#436464' }}
            ></div>
          </div>
          <div className="layoutcircle">
            <div
              className="defaultcircle"
              style={{ backgroundColor: '#436464' }}
            ></div>
          </div>
          <div className="activecircle"></div>
        </div>
        <div className="progresstitle">
          <div className="titlecenter1">
            <h5>購物車</h5>
          </div>
          <div className="titlecenter2">
            <h5>物流資訊</h5>
          </div>
          <div className="titlecenter3">
            <h5>付款資訊</h5>
          </div>
          <div className="titlecenter4">
            <h5>成功付款</h5>
          </div>
        </div>
      </div>

      <div className="j_showbox">
        <h2>訂單已寄送您的信箱</h2>
        <h3>我們將為您儘快出貨</h3>
        <br />
        <br />
        <br />
        <h3>{orderNo}</h3>
        <div className="j_wrap">
          <Link to="#" className="j_btn6">
            <div className="j_btn6">繼續購物</div>
          </Link>
          <Link tp="#" className="j_btn6">
            <div className="j_btn6">查看訂單</div>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Finish
