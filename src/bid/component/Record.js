/* eslint-disable no-unused-vars */
import React from 'react'
import record from '../styles/record.scss'
import pic from '../myfile/Karim-hero-tablet.jpg'
import useInterval from 'use-interval'


function Record(props) {
  const { item, getMember } = props

  useInterval(() => {
    getMember()
  }, 1000)
  // useEffect(()=>{
  //     getMember()
  //     setNewprice(item.price)
  //     },[price])
  // item.avatar

  return (
    <>
      <tr className="border my-1 g-next">
        <td className="d-flex align-items-center justify-content-cen">
          <div className="g-b-pic">
            <img alt="" src={pic} />
          </div>
          <span className="g-b-name"> {item.name}</span>
        </td>
        <td>${item.price}</td>
        <td>${item.total_price}</td>
        <td>{item.time}</td>
      </tr>
    </>
  )
}
export default Record
