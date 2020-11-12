// ------------------------------以下引入套件--------------------------

import React, { useState } from 'react'

// ------------------以下引入images---------------------------

import series from '../images/series.jpg'

function ProductSeries(props) {
  const { setSeries } = props
  const [statusPhoto, setStatusPhoto] = useState(1)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">產品系列</div>
            <div className="titleEN lora text-center">Collections</div>
          </div>
        </div>

        <div className="row justify-content-start thirdbg1">
          <ul className="col-3 fade-pager__indicators ">
            <li
              class={
                'fade-pager__indicator1' + (statusPhoto === 1 ? ' active' : '')
              }
              onClick={() => {
                setStatusPhoto(1)
                setSeries(`category='chair'`)
              }}
            >
              單椅 CHAIR
            </li>
            <li
              class={
                'fade-pager__indicator1' + (statusPhoto === 2 ? ' active' : '')
              }
              onClick={() => {
                setStatusPhoto(2)
                setSeries(`category='armchair'`)
              }}
            >
              扶手椅 ARMCHAIR
            </li>
            <li
              class={
                'fade-pager__indicator1' + (statusPhoto === 3 ? ' active' : '')
              }
              onClick={() => {
                setStatusPhoto(3)
                setSeries(`category='dining'`)
              }}
            >
              餐椅 DINING
            </li>
            <li
              class={
                'fade-pager__indicator1' + (statusPhoto === 4 ? ' active' : '')
              }
              onClick={() => {
                setStatusPhoto(4)
                setSeries(`category='lounge'`)
              }}
            >
              沙發椅 LOUNGE
            </li>
            <li
              class={
                'fade-pager__indicator1' + (statusPhoto === 5 ? ' active' : '')
              }
              onClick={() => {
                setStatusPhoto(5)
                setSeries(`category='stool'`)
              }}
            >
              吧台椅 STOOL
            </li>
          </ul>
          <div className="fade-pager1 initialized col-8 ">
            <ul className="fade-pager__pages">
              <li
                class={
                  'fade-pager__page frontpage-presentation__page' +
                  (statusPhoto === 1 ? ' active' : '')
                }
              >
                <div
                  className="col seriePhoto"
                  onClick={() => {
                    setSeries(`category='chair'`)
                  }}
                >
                  <img
                    src={
                      'https://oandd.dk/wp-content/uploads/2019/05/3Daysofdesign7-835x1024.jpg'
                    }
                    alt=""
                  />
                  {/* <p className="seriesTitle">單椅</p> */}
                </div>
              </li>
              <li
                class={
                  'fade-pager__page frontpage-presentation__page' +
                  (statusPhoto === 2 ? ' active' : '')
                }
              >
                <div
                  className=" col seriePhoto"
                  onClick={() => {
                    setSeries(`category='armchair'`)
                  }}
                >
                  <img
                    src={
                      'https://oandd.dk/wp-content/uploads/2019/02/MAIN_HouseByArneJacobsen_OvergaardDyrman.jpg'
                    }
                    alt=""
                  />
                  {/* <p className="seriesTitle">扶手椅</p> */}
                </div>
              </li>
              <li
                class={
                  'fade-pager__page frontpage-presentation__page' +
                  (statusPhoto === 3 ? ' active' : '')
                }
              >
                <div
                  className="col seriePhoto"
                  onClick={() => {
                    setSeries(`category='dining'`)
                  }}
                >
                  <img
                    src={
                      'https://oandd.dk/wp-content/uploads/2019/03/MAIN_KostaBrowneWinery_OvergaardDyrman.jpg'
                    }
                    alt=""
                  />
                  {/* <p className="seriesTitle">餐椅</p> */}
                </div>
              </li>
              <li
                class={
                  'fade-pager__page frontpage-presentation__page' +
                  (statusPhoto === 4 ? ' active' : '')
                }
              >
                <div
                  className="col seriePhoto"
                  onClick={() => {
                    setSeries(`category='lounge'`)
                  }}
                >
                  <img
                    src={
                      'https://oandd.dk/wp-content/uploads/2020/04/Jogailos-rezidencija-originalus-dydis7.jpg'
                    }
                    alt=""
                  />
                  {/* <p className="seriesTitle">餐椅</p> */}
                </div>
              </li>
              <li
                class={
                  'fade-pager__page frontpage-presentation__page' +
                  (statusPhoto === 5 ? ' active' : '')
                }
              >
                <div
                  className="col seriePhoto"
                  onClick={() => {
                    setSeries(`category='stool'`)
                  }}
                >
                  <img
                    src={
                      'https://oandd.dk/wp-content/uploads/2020/04/MAIN2_Jogailos-rezidencija-originalus-dydis1-scaled.jpg'
                    }
                    alt=""
                  />
                  {/* <p className="seriesTitle">吧台椅</p> */}
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
                if (statusPhoto < 5) {
                  let newStatus = statusPhoto + 1
                  setStatusPhoto(newStatus)
                }
              }}
            ></span>
          </div>
        </div>

        {/* <div className="row justify-content-center">
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='chair'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">單椅</p>
          </div>

          <div
            className=" col seriePhoto"
            onClick={() => {
              setSeries(`category='armchair'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">扶手椅</p>
          </div>
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='dining'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">餐椅</p>
          </div>
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='lounge'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">沙發椅</p>
          </div>
          <div
            className="col seriePhoto"
            onClick={() => {
              setSeries(`category='stool'`)
            }}
          >
            <img src={series} alt="" />
            <p className="seriesTitle">吧台椅</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ProductSeries
