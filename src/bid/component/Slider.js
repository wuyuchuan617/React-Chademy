import React from 'react'
// import { connect } from 'react-redux'
// import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import Carousel from 'react-elastic-carousel'
import '../styles/slider.scss'

function Slider(props) { 
const{item}=props

let chair = `http://localhost:3000/uploads/${item.pic[1]}`

  return (
    <>
  
            <div className="col grace-wrap mx-1">
              <div className="grace-pic">
                <img src={chair} />
              </div>
              <div className="d-flex flex-column grace-slider-text">
                <span className="grace-slider-pname">{item.productName}</span>
                <span>${item.startedPrice}</span>
                <span>{item.designer}</span>
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
