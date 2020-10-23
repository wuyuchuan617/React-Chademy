import React, { useState, useEffect } from 'react'
import './styles/filter.css'

function Filter(props) {
  // 0 : close 1 : open
  const [viewFilter, setViewFilter] = useState(0)

  console.log(viewFilter)

  // const newViewFilter = ({ open }) => setViewFilter(open)

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

  const plus = document.querySelectorAll('.plus')
  const seats1 = document.querySelectorAll('.seats1')
  const spreadPlus = document.querySelectorAll('.spreadPlus')

  // 內容下拉 querySelectorAll
  for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
      if (seats1[i].style.display !== 'none') {
        seats1[i].style.display = 'none'
        spreadPlus[i].innerHTML = '+'
      } else {
        seats1[i].style.display = 'block'
        spreadPlus[i].innerHTML = 'x'

        let others = [...seats1].filter((item, index, array) => index !== i)
        let othersX = [...spreadPlus].filter(
          (item, index, array) => index !== i
        )

        console.log(others)

        for (let i = 0; i < others.length; i++) {
          others[i].style.display = 'none'
          othersX[i].innerHTML = '+'
        }
      }
    })
  }

  return (
    <>
      <div
        className="filterText"
        onClick={() => setViewFilter(1)}
        style={viewFilter === 1 ? filterTextShow : filterTextHide}
      >
        <p>FILTER</p>
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
              close
            </p>
            <p className="clearFilter">Restart your filter</p>
            <p className="filterTag">
              {' '}
              <span>x</span> 白色
            </p>
            <p className="filterTag">
              {' '}
              <span>x</span> 餐椅
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
                onClick={() => {}}
              >
                <div className="refinement-title ">產品類別</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
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

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div className="plus d-flex justify-content-between">
                <div className="refinement-title ">產品類別</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
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

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div className="plus d-flex justify-content-between">
                <div className="refinement-title ">產品類別</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
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

          <div className="refinement seats  " data-refinement-id="seats">
            <div
              className="refinement-toggle js-slide-toggle  is-active"
              data-toggle-element="#seats"
              data-toggle-duration="800"
            >
              <div className="plus d-flex justify-content-between">
                <div className="refinement-title ">產品類別</div>
                <div className="spreadPlus">+</div>
              </div>
            </div>
            <ul
              className="refinement-list scrollable seats1"
              id="seats1"
              aria-hidden="false"
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

          <button className="searchButton">SEARCH</button>
        </div>
      </div>

      {/* <div className="contextt">
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
      </div> */}
    </>
  )
}

export default Filter
