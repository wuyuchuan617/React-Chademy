/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import record from '../styles/record.scss'
import pic from '../myfile/Karim-hero-tablet.jpg'
import useInterval from 'use-interval'
import Button from 'antd/lib/button'
import QueueAnim from 'rc-queue-anim'

function Record(props) {
  const { item, getMember, price, changepage } = props
  useInterval(() => {
    getMember()
  }, 2000)
  // useEffect(()=>{
  //     getMember()
  //   },[price])
  // item.avatar

  return (
    <>
      <tr key="0" className="border my-1">
        <td className="d-flex align-items-center justify-content-cen">
          <div className="g-b-pic">
            <img src={pic} />
          </div>
          <span className="g-b-name">{item.name} </span>
        </td>
        <td>${item.price}</td>
        <td>${item.total_price}</td>
        <td>{item.time}</td>
      </tr>
    </>
  )
}
export default Record
