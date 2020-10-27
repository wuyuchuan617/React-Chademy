import React, { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function ProductThird(props) {
  const { product, item } = props
  // 0 : close 1 : open
  const [viewFilter, setViewFilter] = useState(0)

  const [viewSpread, setViewSpread] = useState(false)
  const [viewSpread1, setViewSpread1] = useState(false)
  const [viewSpread2, setViewSpread2] = useState(false)
  const [viewSpread3, setViewSpread3] = useState(false)

  // seats1 //sidebarContent
  let sidebarContentShow = {
    display: 'block',
  }

  let sidebarContentHide = {
    display: 'none',
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-6 third-photo">
            <img src={require('../../img/' + item.photo)} alt="" />
          </div>
          <div class="col-sm-12 col-lg-6 ">
            <div className=" refinement seats  " data-refinement-id="seats">
              <div
                className="refinement-toggle js-slide-toggle  is-active"
                data-toggle-element="#seats"
                data-toggle-duration="800"
              >
                <div
                  className="plus1 d-flex justify-content-between"
                  onClick={() => {
                    setViewSpread(!viewSpread)
                    setViewSpread1(false)
                    setViewSpread2(false)
                    setViewSpread3(false)
                  }}
                >
                  <div className="refinement-title">產品類別</div>
                  <div className="spreadPlus">+</div>
                </div>
              </div>
              <ul
                className="refinement-list scrollable seats2"
                id="seats1"
                aria-hidden="false"
                style={viewSpread ? sidebarContentShow : sidebarContentHide}
              >
                <li data-refinement-value="4">
                  <a className="refinement-link" rel="nofollow" href="#">
                    單椅
                  </a>
                </li>
                <li data-refinement-value="6">
                  <a className="refinement-link" rel="nofollow" href="#">
                    扶手椅
                  </a>
                </li>
                <li data-refinement-value="8">
                  <a className="refinement-link" rel="nofollow" href="#">
                    餐椅
                  </a>
                </li>
                <li data-refinement-value="10">
                  <a className="refinement-link" rel="nofollow" href="#">
                    沙發椅
                  </a>
                </li>
                <li data-refinement-value="12">
                  <a className="refinement-link" rel="nofollow" href="">
                    吧台椅
                  </a>
                </li>
              </ul>
            </div>

            <div className=" refinement seats  " data-refinement-id="seats">
              <div
                className="refinement-toggle js-slide-toggle  is-active"
                data-toggle-element="#seats"
                data-toggle-duration="800"
              >
                <div
                  className="plus1 d-flex justify-content-between"
                  onClick={() => {
                    setViewSpread1(!viewSpread1)
                    setViewSpread(false)
                    setViewSpread2(false)
                    setViewSpread3(false)
                  }}
                >
                  <div className="refinement-title">產品類別</div>
                  <div className="spreadPlus">+</div>
                </div>
              </div>
              <ul
                className="refinement-list scrollable seats2"
                id="seats1"
                aria-hidden="false"
                style={viewSpread1 ? sidebarContentShow : sidebarContentHide}
              >
                <li data-refinement-value="4">
                  <a className="refinement-link" rel="nofollow" href="#">
                    單椅
                  </a>
                </li>
                <li data-refinement-value="6">
                  <a className="refinement-link" rel="nofollow" href="#">
                    扶手椅
                  </a>
                </li>
                <li data-refinement-value="8">
                  <a className="refinement-link" rel="nofollow" href="#">
                    餐椅
                  </a>
                </li>
                <li data-refinement-value="10">
                  <a className="refinement-link" rel="nofollow" href="#">
                    沙發椅
                  </a>
                </li>
                <li data-refinement-value="12">
                  <a className="refinement-link" rel="nofollow" href="">
                    吧台椅
                  </a>
                </li>
              </ul>
            </div>

            <div className=" refinement seats  " data-refinement-id="seats">
              <div
                className="refinement-toggle js-slide-toggle  is-active"
                data-toggle-element="#seats"
                data-toggle-duration="800"
              >
                <div
                  className="plus1 d-flex justify-content-between"
                  onClick={() => {
                    setViewSpread2(!viewSpread2)
                    setViewSpread(false)
                    setViewSpread1(false)
                    setViewSpread3(false)
                  }}
                >
                  <div className="refinement-title">產品類別</div>
                  <div className="spreadPlus">+</div>
                </div>
              </div>
              <ul
                className="refinement-list scrollable seats2"
                id="seats1"
                aria-hidden="false"
                style={viewSpread2 ? sidebarContentShow : sidebarContentHide}
              >
                <li data-refinement-value="4">
                  <a className="refinement-link" rel="nofollow" href="#">
                    單椅
                  </a>
                </li>
                <li data-refinement-value="6">
                  <a className="refinement-link" rel="nofollow" href="#">
                    扶手椅
                  </a>
                </li>
                <li data-refinement-value="8">
                  <a className="refinement-link" rel="nofollow" href="#">
                    餐椅
                  </a>
                </li>
                <li data-refinement-value="10">
                  <a className="refinement-link" rel="nofollow" href="#">
                    沙發椅
                  </a>
                </li>
                <li data-refinement-value="12">
                  <a className="refinement-link" rel="nofollow" href="">
                    吧台椅
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductThird)
