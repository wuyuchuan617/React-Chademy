/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import '../styles/slider.scss'
import { Link, withRouter } from 'react-router-dom'

function Slider(props) {
  const { item } = props
  // const [showSlider , setShowSlider] = useState(null)
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

  let path = `/pages/desc/record/${item.sid}`

  return (
    <>
   
    {/* <Link to={path} exact> */}
      <div 
      
      className="col grace-wrap mx-1 g-hand">
        {/* <div className="grace-pic"> */}
          <img 
          onClick={()=>{
        props.history.push(path)
      }}
          alt="" src={chair} />
        {/* </div> */}
        <div className="d-flex flex-column grace-slider-text">
          <span className="grace-slider-pname">{item.productName}</span>
          <span>${comma4}</span>
          <span>{item.designer}</span>
        </div>
      </div>
      {/* </Link> */}
    </>
  )
}

export default withRouter(Slider)
