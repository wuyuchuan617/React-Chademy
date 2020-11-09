import React, { useEffect, useState } from 'react'
// import { Button, Card } from 'react-bootstrap'
import BpCard from '../component/BpCard'
import '../styles/bid.scss'
import Banner from '../component/Banner'
import { withRouter, useParams } from 'react-router-dom'
import Filter from '../component/Filter'
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
// import Breadcrumb from '../component/Breadcrumb'

function Bid(props) {
  const {price, setPrice, pname, setPname, total,setTotal,data} = props

  const [product, setProduct] = useState([])
  const [viewProduct, setViewProduct] = useState(8)
  const [lastProductId, setLastProductId] = useState(0)
  const [sdate, setSdate] = useState(null)
  const [edate, setEdate] = useState(null)

//   function getTimeRemaining(startdate,enddate){ 
//     const s_time = Date.parse(startdate);
//     const e_time = Date.parse(enddate);
//     // const s_time = new Date(startdate).getTime();
//     // const e_time = new Date(enddate).getTime();
//     const total = e_time - s_time
//     const seconds = Math.floor( (total/1000) % 60 ); 
//     const minutes = Math.floor( (total/1000/60) % 60 ); 
//     const hours = Math.floor( (total/(1000*60*60)) % 24 ); 
//     const days = Math.floor( total/(1000*60*60*24) ); 
//     return { total, days, hours, minutes, seconds }; 
// }
// async function bidchange(id){
//   const url = `http://localhost:3001/product/api/bidchange`

//   const newtime2 = {
//     'countdown': total,
//     'sid': id
//   }
//   const request = new Request(url, {
//     method: 'PUT',
//     body: JSON.stringify(newtime2),
//     headers: new Headers({
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     }),
//   })
//   const response = await fetch(request)
//   const data = await response.json()
//   console.log('sdate', sdate)

//   const mm=getTimeRemaining(sdate,edate)
//   setTotal(mm)
  
// }




  async function getNewPrice() {
    const url = 'http://localhost:3001/product/api/record/list'

    const request = new Request(url, {
      method: 'GET',
      
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()
    console.log('data',data[0].current_price)
    setPrice(data[0].current_price)
    // setTotal(data[0].countdown.total)
    setSdate(data[0].startingDate)
    setEdate(data[0].bidDate)
    
  }
    console.log('sdate',sdate)
    console.log('edate',edate)
    
  
 useEffect(()=>{
   getNewPrice()
 },[])

  const handleClick = () => {
    let preViewProduct = viewProduct
    let newViewProduct = preViewProduct + 8

    console.log(newViewProduct)
    setViewProduct(newViewProduct)
    //const arr = product.slice(0, preViewProduct)
    //setLastProductId(arr[arr.length - 1].sid)
    if (document.getElementById(lastProductId)) {
      //alert(lastProductId)
      document
        .getElementById(lastProductId)
        .scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
  useEffect(() => {
    const arr = product.slice(0, viewProduct)
    if (arr.length > 0) setLastProductId(arr[arr.length - 1].sid)
  }, [viewProduct, product])
//   useEffect(()=>{

//     bidchange(1)

// },[sdate,edate])
  
  return (
    <>
    <Banner />

    <div className="container grace-container">
        <div className="row my-2">
          <div className="col flex-column text-center justify-content-center grace-chairs">
            <div>
            <ScrollParallax  animation={[
            { x: 0, opacity: 1, playScale: [0, 1.5] },
            // { y: 100, playScale: [0, 0.3] },
            { blur: '10px', playScale: [0, .3] },
          ]}
          style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }}>
              <img
                className="grace-chair"
                src="https://wp.andtradition.com/wp-content/uploads/2019/10/Lille-Petra-VB1-1.svg"
                alt=""
              />
           </ScrollParallax>

            </div>
            <div className="grace-text text-center mx-auto">
            {/* <QueueAnim delay={300} duration={2000} type={['right', 'left']} leaveReverse> */}
            {/* <Parallax
            targetId="span"
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
       
        /> */}
        <ScrollParallax  animation={[
            { x: 0, opacity: 1, playScale: [0, 1] },
            // { y: 100, playScale: [0, 0.3] },
            { blur: '10px', playScale: [0, .3] },
          ]}
          style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }}>
              <span id="aaa" key="a">單椅</span>
              <h5 key="b">
              想收藏獨一無二的藝品嗎?

              全新的設計、華麗的面料和最流行的色彩。

              要完成新潮的外觀搭配是一件頗具挑戰性的事情。

              所幸的是，我們的設計師能讓這一切變得輕鬆簡單。

              如果您正尋找椅子的最新設計，無需再躊躇。我們剛剛推出這些令人興奮的設計——以競標的方式來獲得獨一無二，絕無僅有，全宇宙唯一一張最舒適又具設計感的椅子!
              </h5>
           {/* </QueueAnim> */}
           </ScrollParallax>
            </div>
          </div>
        </div>
        <div className="row">          
          <Filter data={data}/>
          <div className="d-flex flex-wrap justify-content-center grace-grid">

          {data.slice(0, viewProduct).map((item,index)=>{
                    return(
                      <>
                    <BpCard key={index} item={item} {...props} />
                    </>
                    )
                })
          }

          </div>
        </div>
          <div className="g-more text-center mt-4" onClick={handleClick}>+ 更多</div>
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
