import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { FaSketch } from 'react-icons/fa'

function OrderToFund(props) {
  return (
    <>
      <div className="j_myorderbox" style={{ marginBottom: '15px' }}>
        <div className="j_wrapspace">
          <h5>訂單編號:PO1604924958983</h5>
        </div>
        <h6 style={{ marginTop: '30px' }}>訂購日期: 2020-11-15</h6>
        <h6 style={{ marginTop: '30px' }}>訂單狀況:已完成</h6>
        <div className="j_wrapspace" style={{ marginTop: '40px' }}>
          <img
            style={{
              width: '270px',
              height: '175px',
              objectFit: 'cover',
            }}
            src={
              'http://localhost:3001/img/0cdc95af85269592688c630e45502d3c.png'
            }
            alt=""
          />
          <h6 style={{ lineHeight: '175px' }}>訂單金額:$20,000</h6>
          <Link to="/fundform">
            <h6 style={{ lineHeight: '175px', cursor: 'pointer' }}>
              我要募資
              <FaSketch />
            </h6>
          </Link>
        </div>
      </div>
    </>
  )
}
export default withRouter(OrderToFund)
