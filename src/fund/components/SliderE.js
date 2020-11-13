import React, { useState, useEffect } from 'react'
// // import { connect } from 'react-redux'
// // import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import Carousel from 'react-elastic-carousel'
import '../styles/slider.scss'
import '../../bid/styles/slider.scss'

function SliderE(props) {
  const [localData, setLocalData] = useState([])
  // const [view, setView] = useState([])

  //   const updateStoryToLocalStorage = (item) => {
  //     console.log(item)
  // const currentStory = JSON.parse(localStorage.getItem('showStory')) || []

  //     setView(currentStory)
  //     console.log(view)
  //   }
  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem('showStory')) || []
    setLocalData(localdata)
  }, [])

  // const chair = `http://localhost:3001/img/${item.img}`

  return (
    <>
      {/* {localData.map((item) => { */}

      {/* return ( */}
      <div className="col grace-wrap mx-1">
        <div className="e-pic">
          {/* <img src={chair} /> */}
        </div>
        <div className="d-flex flex-column grace-slider-text">
          {/* <span className="grace-slider-pname"> {item.id}</span> */}
          {/* <span>${item.price}</span> */}
        </div>
      </div>
      {/* ) */}
      {/* })} */}
    </>
  )
}

export default SliderE
