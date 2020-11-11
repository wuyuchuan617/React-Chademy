import React, { useState } from 'react'
import car from '../images/car.png'

function ProductTen(props) {
  const { item } = props
  const [statusPhoto, setStatusPhoto] = useState(1)
  return (
    <>
      <div className="row justify-content-end thirdbg">
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
          >
            03
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 4 ? ' active' : '')
            }
          >
            04
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 5 ? ' active' : '')
            }
          >
            05
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 6 ? ' active' : '')
            }
          >
            06
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 7 ? ' active' : '')
            }
          >
            07
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 8 ? ' active' : '')
            }
          >
            08
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 9 ? ' active' : '')
            }
          >
            09
          </li>
          <li
            class={
              'fade-pager__indicator' + (statusPhoto === 10 ? ' active' : '')
            }
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
                <img className="b-lazy loaded" src={item.photo2} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 2 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo3} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 3 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo2} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 4 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo4} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 5 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo2} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 6 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo3} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 7 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo4} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 8 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo3} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 9 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo2} alt="" />
              </div>
            </li>
            <li
              class={
                'fade-pager__page frontpage-presentation__page' +
                (statusPhoto === 10 ? ' active' : '')
              }
            >
              <div className="lazy-img-container lazy-img-container--66 center-children">
                <img className="b-lazy loaded" src={item.photo3} alt="" />
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
