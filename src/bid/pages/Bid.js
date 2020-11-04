import React, { useEffect, useState } from 'react'
// import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
// import {  
//   getData,
//   getBidData,
//   initAct,
//   initActAsync,
// } from '../../actions'
import BpCard from '../component/BpCard'
import chair from '../myfile/The Canvas Chair/Fredericia-The-Canvas-Chair-Natural-Canvas-Soaped-Oak-Close-Up2.jpg'
import '../styles/bid.scss'
import Banner from '../component/Banner'
import Bookmark from '../component/Bookmark'
import Record from '../component/Record'

function Bid(props) {
  const {price, setPrice, pname, setPname, enddate, setEnddate, endtime, setEndtime,data, setData} = props
  async function initBidData() {
    const url = 'http://localhost:3001/product/api/record/list/'

    const request = new Request(url, {
      method: 'GET',
      
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data1 = await response.json()
    
    setData(data1)
    // const newDate = [...]
    
  }
  useEffect(() => {
    initBidData()
  }, [])

  
  
  return (
    <>
    <Banner />
      <div className="container">
        <div className="row my-2">
          <div className="col flex-column text-center justify-content-center">
            <div>
              <img
                className="grace-chair"
                src="https://wp.andtradition.com/wp-content/uploads/2019/10/Lille-Petra-VB1-1.svg"
                alt=""
              />
            </div>
            <div className="grace-text text-center mx-auto">
              <span>FURNITURE</span>
              <h5>
                From reissued Scandinavian design icons to the works of
                contemporary international designers, the collection of
                furniture combines timeless pieces with future classics.
              </h5>
            </div>
          </div>
        </div>
        <div className="row">          
          <div className="d-flex flex-wrap">
          {data.map((item,index)=>{
                {/* console.log(item) */}
                {/* setPrice(item.total_price)
                  setPname(item.productName)
                  setEnddate(item.bidDate)
                  setEndtime(item.bidTime)  */}
                    return(
                      <>
                    <BpCard key={index} item={item} />
                    </>
                    )
                  
             
                })}
          </div>
        </div>
          
      </div>
    </>
  )
}

// const mapStateToProps = (store) => {
//   return { bid: store.bid }
// }
// export default connect(mapStateToProps, {
//   getData,
//   getBidData,
//   initAct,
//   initActAsync,
// })(Bid)
export default Bid
