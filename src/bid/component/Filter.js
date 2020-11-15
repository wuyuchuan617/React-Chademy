/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import '../styles/filter.css'

import 'antd/dist/antd.css'

import { AiOutlineClose } from 'react-icons/ai'
function Filter(props) {
  const { setViewfilter } = props

  // 0 : close 1 : open
  const [viewFilter, setViewFilter] = useState(0)

  const [viewSpread, setViewSpread] = useState(false)
  const [viewSpread1, setViewSpread1] = useState(false)
  const [viewSpread2, setViewSpread2] = useState(false)
  const [viewSpread3, setViewSpread3] = useState(false)
  const [viewSpread4, setViewSpread4] = useState(false)

  //sidebar
  let sidebarShow = {
    width: '240px',
    display: 'block',
  }
  let sidebarHide = {
    width: '80px',
  }

  //filterText
  let filterTextShow = {
    display: 'none',
  }

  let filterTextHide = {
    display: 'block',
    position: 'fixed',
  }

  //sidebarContent
  let sidebarContentShow = {
    display: 'block',
  }

  let sidebarContentHide = {
    display: 'none',
  }

  // // seats1
  // let seats1Show = {
  //   display: 'block',
  // }

  // let seats1Hide = {
  //   display: 'none',
  // }

  // let colorBorder = {
  //   border: 3 + 'px solid #c77334',
  // }
  // let colorBorder2 = {
  //   border: '3px solid #EDECE8',
  // }

  // function onChange(e) {
  //   console.log(`checked = ${e.target.checked}`)
  // }

  // function log(e) {
  //   console.log(e)
  // }

  // function preventDefault(e) {
  //   e.preventDefault()
  //   console.log('Clicked! But prevent default.')
  // }

  return (
    <>
      <div
        className="filterText"
        onClick={() => setViewFilter(1)}
        style={viewFilter === 1 ? filterTextShow : filterTextHide}
      >
        <p className="g-hand">FILTER</p>
      </div>
      <div
        className="sidebar"
        style={viewFilter === 1 ? sidebarShow : sidebarHide}
      >
        <div
          className="sidebarContent"
          style={viewFilter === 1 ? sidebarContentShow : sidebarContentHide}
        >
          <div className="justify-content-end">
            <p id="close" onClick={() => setViewFilter(0)}>
              <AiOutlineClose />
            </p>

            <p
              className="g-clearFilter"
              onClick={() => {
                setViewfilter(12)
              }}
            >
              Restart your filter
            </p>
          </div>

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread1(!viewSpread1)
                  setViewSpread(false)
                  setViewSpread2(false)
                  setViewSpread3(false)
                  setViewSpread4(false)
                }}
              >
                <div className="refinement-title ">競標狀態</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
              style={viewSpread1 ? sidebarContentShow : sidebarContentHide}
            >
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(1)
                }}
              >
                競標中
              </p>
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(0)
                }}
              >
                即將競標
              </p>
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(2)
                }}
              >
                已結標
              </p>
            </ul>
          </div>

          <div className="refinement seats" data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread(!viewSpread)
                  setViewSpread1(false)
                  setViewSpread2(false)
                  setViewSpread3(false)
                  setViewSpread4(false)
                }}
              >
                <div className="refinement-title">產品系列</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
              style={viewSpread ? sidebarContentShow : sidebarContentHide}
            >
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(3)
                }}
              >
                ADELAIDE
              </p>
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(4)
                }}
              >
                IMOLA
              </p>
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(5)
                }}
              >
                OSAKA
              </p>
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(6)
                }}
              >
                BOSTON
              </p>
              <p
                className="g-hand"
                onClick={() => {
                  setViewfilter(7)
                }}
              >
                CHARLOTTE
              </p>
            </ul>
          </div>
          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div
                className="plus d-flex justify-content-between"
                onClick={() => {
                  setViewSpread2(!viewSpread2)
                  setViewSpread(false)
                  setViewSpread1(false)
                  setViewSpread3(false)
                  setViewSpread4(false)
                }}
              >
                <div className="refinement-title ">設計師</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats2"
              id="seats2"
              aria-hidden="false"
              style={viewSpread2 ? sidebarContentShow : sidebarContentHide}
            >
              <p
              className="g-hand"
                onClick={() => {
                  setViewfilter(8)
                }}
              >
                Henrik Pedersen
              </p>
              <p
              className="g-hand"
                onClick={() => {
                  setViewfilter(9)
                }}
              >
                Karim Rashid
              </p>
              <p
              className="g-hand"
                onClick={() => {
                  setViewfilter(10)
                }}
              >
                Morten Georgsen
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
