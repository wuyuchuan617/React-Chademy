/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
// import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import Carousel from 'react-elastic-carousel'
import '../../../product/styles/slider.scss'
import { withRouter, useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function Slider(props) {
  const { item } = props

  const [relateProducts, setEelateProducts] = useState([])

  async function getItemFromSQL() {
    const url =
      'http://localhost:3001/man_secondhand/relate/' + item.categories_sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setEelateProducts(data)
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])

  return (
    <>
      <h2 className="grace-related-product text-center">相關產品</h2>

      <div className="container">
        <div className="row">
          {/* <div className="arrow col-sm-1">
            <a
              role="button"
              className="relative-btn-right d-flex justify-content-center align-items-center"
            >
              <IoIosArrowDropleft color="#707070" size={30} />
            </a>
          </div> */}
          {/* <div className="styling"> */}

          <Carousel itemsToScroll={3} itemsToShow={3}>
            {relateProducts.map((item, index) => {
              return (
                <div className="col grace-wrap mx-1">
                  <div className="productCardImg">
                    <img
                      src={`http://localhost:3001/img/` + item.photo}
                      alt=""
                      onClick={() => {
                        props.history.push('/secondhand_product/' + item.sid)
                      }}
                    />
                  </div>
                  <div className="d-flex flex-column grace-slider-text">
                    <span>{item.product_name}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              )
            })}
          </Carousel>

          {/* </div> */}
          {/* <div className="arrow col-sm-1">
            <a
              role="button"
              className="relative-btn-right d-flex justify-content-center align-items-center aaa"
            >
              <IoIosArrowDropright color="#707070" size={30} />
            </a>
          </div> */}
        </div>
      </div>
    </>
  )
}

// export default connect(mapStateToProps, {
//   swipeLeft,
//   swipeRight,
//   initAct,
// })(Slider)
export default withRouter(Slider)
