import React, { useEffect } from 'react'
import record from '../styles/record.scss'
import pic from '../myfile/Karim-hero-tablet.jpg'
import useInterval from 'use-interval'
import QueueAnim from 'rc-queue-anim';
function Record(props){
    const {item, getMember,price,changepage} = props
    // useInterval(()=>{getMember()},2000)
    // useEffect(()=>{
    //     getMember()
    //   },[price])
    // item.avatar
    console.log(changepage)
    return(
        <>
    
                <tr className="border my-1">
                    <td className="d-flex align-items-center justify-content-cen"><div className="g-b-pic"><img src={pic} /></div><span className="g-b-name">{item.name} </span></td>
                    <td>${item.price}</td>
                    <td>${item.total_price}</td>
                    <td>{item.time}</td>
                </tr>
            
        </>
    )
}
export default Record