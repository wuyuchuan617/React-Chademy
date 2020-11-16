/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import BpCard from '../component/BpCard'
import '../styles/bid.scss'
import Banner from '../component/Banner'
import Filter from '../component/Filter'
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax'
import useInterval from 'use-interval'

function Bid(props) {
  const {
    setPrice,
    data,
    initBidData,
  } = props
  const [viewfilter, setViewfilter] = useState(11)
  async function getNewPrice() {
    const url = 'http://localhost:3001/product/api/record/list'

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // setPrice(data.current_price)
  }

  useEffect(() => {
    // getNewPrice()
    initBidData()
  }, [])

  // useInterval(()=>{
  //   getNewPrice()
  // },1000)

  return (
    <>
      <Banner />

      <div className="container grace-container">
        <div className="row my-2">
          <div className="col flex-column text-center justify-content-center grace-chairs">
            <div>
              <ScrollParallax
                animation={[
                  { x: 0, opacity: 1, playScale: [0, 1] },
                  // { y: 100, playScale: [0, 0.3] },
                  { blur: '10px', playScale: [0, 0.3] },
                ]}
                style={{
                  transform: 'translateX(-20px)',
                  filter: 'blur(0px)',
                  opacity: 0.5,
                }}
              >
                <img
                  className="grace-chair"
                  src="https://wp.andtradition.com/wp-content/uploads/2019/10/Lille-Petra-VB1-1.svg"
                  alt=""
                />
              </ScrollParallax>
            </div>
            <div className="grace-text text-center mx-auto">
              {/* <QueueAnim delay={300} duration={2000} type={['right', 'left']} leaveReverse> */}
              
              <ScrollParallax
                animation={[
                  { x: 0, opacity: 1, playScale: [0, 1] },
                  // { y: 100, playScale: [0, 0.3] },
                  { blur: '10px', playScale: [0, 0.3] },
                ]}
                style={{
                  transform: 'translateX(-20px)',
                  filter: 'blur(0px)',
                  opacity: 0.5,
                }}
              >
                <span id="aaa" key="a">
                  競標
                </span>
                <h5 key="b">
                  想收藏獨一無二的藝品嗎? 全新的設計、華麗的面料和最流行的色彩。
                  要完成新潮的外觀搭配是一件頗具挑戰性的事情。
                  所幸的是，我們的設計師能讓這一切變得輕鬆簡單。
                  如果您正尋找椅子的最新設計，無需再躊躇。我們剛剛推出這些令人興奮的設計——以競標的方式來獲得獨一無二，絕無僅有，全宇宙唯一一張最舒適又具設計感的椅子!
                </h5>
              
              </ScrollParallax>
            </div>
          </div>
        </div>
        <div className="row">
          <Filter
            data={data}
            viewfilter={viewfilter}
            setViewfilter={setViewfilter}
            // searchProduct={searchProduct}
          />
     
          <ScrollParallax
            animation={[
              { x: 0, opacity: 1, playScale: [0, 1] },
              // { y: 100, playScale: [0, 0.3] },
              // { blur: '10px', playScale: [0, .3] },
            ]}
            style={{
              transform: 'translateX(-100px)',
              filter: 'blur(0px)',
              opacity: 0,
            }}
          >
            <div className="d-flex flex-wrap justify-content-center grace-grid">
              {data.map((item, index) => {
                if (viewfilter === 0 && item.bid_sid !== 0) return
                if (viewfilter === 1 && item.bid_sid !== 1) return
                if (viewfilter === 2 && item.bid_sid !== 2) return
                if (viewfilter === 3 && item.productName !== 'ADELAIDE') return
                if (viewfilter === 4 && item.productName !== 'IMOLA') return
                if (viewfilter === 5 && item.productName !== 'OSAKA') return
                if (viewfilter === 6 && item.productName !== 'BOSTON') return
                if (viewfilter === 7 && item.productName !== 'CHARLOTTE') return
                if (viewfilter === 8 && item.designer_sid !== 1) return
                if (viewfilter === 9 && item.designer_sid !== 2) return
                if (viewfilter === 10 && item.designer_sid !== 3) return
                
                return (
                  <>
                  
                    <BpCard key={index} item={item} {...props} />
                  </>
                )
              })}
            </div>
          </ScrollParallax>
    
        </div>
        {/* {!isLast && (
          <div className="g-more text-center mt-4" onClick={handleClick}>+ 更多</div>)} */}
      </div>
    </>
  )
}

export default Bid
