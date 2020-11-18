/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import record from '../styles/record.scss'
import pic from '../myfile/Karim-hero-tablet.jpg'
import useInterval from 'use-interval'

function Record(props) {
  const { item, getMember, price, comma } = props
  const [comma8, setComma8] = useState(0)
  const [comma9, setComma9] = useState(0)
  const [isAddClass, setAddClass] = useState(false)
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  // useEffect(()=>{
  //     getMember()

  //     },[price])

  useEffect(() => {
    const newprice = item.price
    const c = numberWithCommas(newprice)
    setComma8(c)
    setComma9(item.total_price)
  }, [item.price])

  // item.avatar


  return (
    <>
      <tr
        className={`border my-1 g-next ${
          props.changeColorStatus && props.index === 0 ? 'g-color' : ''
        }`}
      >
        <td className="d-flex align-items-center justify-content-cen">
          <div className="g-b-pic">
            <img alt="" src={item.avatar} />
          </div>
          <span className="g-b-name"> {item.name}</span>
        </td>
        <td>${comma8}</td>
        <td>${comma9}</td>
        <td>{item.time}</td>
      </tr>
    </>
  )
}
export default Record
