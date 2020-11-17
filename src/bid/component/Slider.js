/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/slider.scss'

function Slider(props) {
  const { item } = props
  let chair = `http://localhost:3000/uploads/${item.pic[1]}`
  const [comma4, setComma4] = useState(null)
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  useEffect(() => {
    const newprice = item.current_price
    const c = numberWithCommas(newprice)
    setComma4(c)
  }, [item.current_price])

  return (
    <>
      <div className="col grace-wrap mx-1">
        {/* <div className="grace-pic"> */}
          <img alt="" src={chair} />
        {/* </div> */}
        <div className="d-flex flex-column grace-slider-text">
          <span className="grace-slider-pname">{item.productName}</span>
          <span>${comma4}</span>
          <span>{item.designer}</span>
        </div>
      </div>
    </>
  )
}

export default Slider
