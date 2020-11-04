import React from 'react'
import record from '../styles/record.scss'
import pic from '../myfile/Karim-hero-tablet.jpg'
function Record(){
    return(
        <>
        <div className="row">
        <div className="col">
        <div className="g-bg p-3">

        <div className="g-list my-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center ">
        <div className="g-b-pic">
            <img src={pic} />
        </div>

        <span className="g-b-name">David Holland</span>
        </div>
        <span className="g-b-price mx-5">已下標 $5000</span>
        <span className="g-b-total">總金額 $37,5000</span>
        <span className="g-b-time">2020/11/20 10:00:00</span>
        </div>

        <div className="g-line mx-auto my-3">
        
        </div>
        </div>
        </div>
        </div>
        
        </>
    )
}
export default Record