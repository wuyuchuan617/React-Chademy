import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import img1 from '../../product/images/777.jpg'
import { MdAdd } from 'react-icons/md'
import { FiMinus } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
// import './style/jay.scss'

function CartList(props) {
  return (
    <>
      <div className="cartlist">
        <ul>
          <li>
            <div className="listitem">
              <img src={img1} />
              <h6 style={{ left: '30px' }}>歐洲銀行扶手沙發型餐椅</h6>
              <h6 style={{ left: '120px' }}>$</h6>
              <div className="listqty">
                <h6 style={{ left: '10px' }}>
                  <MdAdd />
                </h6>
                <h6 style={{ left: '50px' }}>1</h6>
                <h6 style={{ left: '80px' }}>
                  <FiMinus />
                </h6>
              </div>
              <h6 style={{ left: '330px', color: '#C67334' }}>$2500</h6>
              <h6 style={{ left: '400px' }}>
                <BsTrash />
              </h6>
            </div>
          </li>
          <li>
            <div className="listitem">
              <img src={img1} />
              <h6 style={{ left: '30px' }}>歐洲銀行扶手沙發型餐椅</h6>
              <h6 style={{ left: '120px' }}>$</h6>
              <div className="listqty">
                <h6 style={{ left: '10px' }}>
                  <MdAdd />
                </h6>
                <h6 style={{ left: '50px' }}>1</h6>
                <h6 style={{ left: '80px' }}>
                  <FiMinus />
                </h6>
              </div>
              <h6 style={{ left: '330px', color: '#C67334' }}>$2500</h6>
              <h6 style={{ left: '400px' }}>
                <BsTrash />
              </h6>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CartList
