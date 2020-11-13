/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import car from '../images/car.png'

function ProductTen(props) {
  const { item } = props
  const [statusPhoto, setStatusPhoto] = useState(1)
  return (
    <>
      <div className="row justify-content-center thirdbg">
        <ul className="fade-pager__indicators ">
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 1 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(1)
            }}
          >
            01
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 2 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(2)
            }}
          >
            02
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 3 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(3)
            }}
          >
            03
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 4 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(4)
            }}
          >
            04
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 5 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(5)
            }}
          >
            05
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 6 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(6)
            }}
          >
            06
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 7 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(7)
            }}
          >
            07
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 8 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(8)
            }}
          >
            08
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 9 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(9)
            }}
          >
            09
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 10 ? ' active' : '')
            }
            onClick={() => {
              setStatusPhoto(10)
            }}
          >
            10
          </li>
        </ul>
        <div className="fade-pager initialized col-8 ">
          <ul className="fade-pager__pages">
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 1 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps1.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 2 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps2.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 3 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps3.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 4 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps4.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 5 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps5.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 6 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps6.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 7 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps7.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 8 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps8.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 9 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps9.jpg')}
                  alt=""
                />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 10 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img
                  className="b-lazy loaded"
                  src={require('../images/ps10.jpg')}
                  alt=""
                />
              </div>
            </li>
          </ul>

          <span
            className="fade-pager__btn--prev"
            onClick={() => {
              if (statusPhoto > 1) {
                let newStatus = statusPhoto - 1
                setStatusPhoto(newStatus)
              }
            }}
          ></span>
          <span
            className="fade-pager__btn--next"
            onClick={() => {
              if (statusPhoto < 10) {
                let newStatus = statusPhoto + 1
                setStatusPhoto(newStatus)
              }
            }}
          ></span>
        </div>
      </div>
    </>
  )
}

export default ProductTen
