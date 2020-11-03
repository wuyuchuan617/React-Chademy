import React from 'react'
// import { connect } from 'react-redux'
// import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import Carousel from 'react-elastic-carousel'
import '../styles/slider.scss'

function Slider(props) {
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
            <div className="col grace-wrap mx-1">
              <div className="grace-pic"></div>
              <div className="d-flex flex-column grace-slider-text">
                <span>Wooden Chair</span>
                <span>$10,000</span>
                <span>Jimmy Choo</span>
              </div>
            </div>

            <div className="col grace-wrap mx-1">
              <div className="grace-pic"></div>
              <div className="d-flex flex-column grace-slider-text">
                <span>Wooden Chair</span>
                <span>$20,000</span>
                <span>Jimmy Choo</span>
              </div>
            </div>

            <div className="col grace-wrap mx-1">
              <div className="grace-pic"></div>
              <div className="d-flex flex-column grace-slider-text">
                <span>Wooden Chair</span>
                <span>$30,000</span>
                <span>Jimmy Choo</span>
              </div>
            </div>

            <div className="col grace-wrap mx-1">
              <div className="grace-pic"></div>
              <div className="d-flex flex-column grace-slider-text">
                <span>Wooden Chair</span>
                <span>$30,000</span>
                <span>Jimmy Choo</span>
              </div>
            </div>

            <div className="col grace-wrap mx-1">
              <div className="grace-pic"></div>
              <div className="d-flex flex-column grace-slider-text">
                <span>Wooden Chair</span>
                <span>$30,000</span>
                <span>Jimmy Choo</span>
              </div>
            </div>
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
export default Slider
