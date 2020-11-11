import React, { useEffect, useState } from 'react'
import BpCard from '../component/BpCard'
import '../styles/bid.scss'
import Banner from '../component/Banner'
import Filter from '../component/Filter'
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';

function Bid(props) {
  const {price, setPrice, pname, setPname, total,setTotal,data,setTotalb, totalb,startdate,enddate,s_date,e_date} = props
  const [product, setProduct] = useState([])
  const [viewProduct, setViewProduct] = useState(8)
  const [lastProductId, setLastProductId] = useState(0)
  const [viewfilter, setViewfilter] = useState(12)

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
    // console.log('data',data[0].current_price)
    setPrice(data[0].current_price)
    
  }
 
    
    // async function getTimeRemaining(startdate,enddate){ 
    //   // const s_time = Date.parse(startdate);
    //   // const e_time = Date.parse(enddate);
    //   const s_time = new Date(startdate).getTime();
    //   const e_time = new Date(enddate).getTime();
    //   const total = e_time - s_time
    //   return total
    // }
 useEffect(()=>{
  getNewPrice()
 },[])
//  useEffect(()=>{
//   const a = getTimeRemaining(s_date,e_date)
//   setTotalb = a 
//   console.log('totalb',totalb)
//  },[s_date,e_date])

//loadmore
  const handleClick = () => {
    let preViewProduct = viewProduct
    let newViewProduct = preViewProduct + 8

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
  /**
   * 用來判斷是不是最後一筆資料
   */
  const [isLast, setIsLast] = useState(false)

  /**
   * 用來搜尋DB的資料
   */
  const [query, setQuery] = useState({
    type: '',
    sid: null,
    pageNo: 0,
    isPage: false,
  })
  
const searchProduct = (type, sid) => {

  if (!type || !sid) {
    return
  }

  setIsLast(false)
  setQuery({ type, sid, pageNo: 0, isPage: false })
}
  return (
    <>
    <Banner />

    <div className="container grace-container">
        <div className="row my-2">
          <div className="col flex-column text-center justify-content-center grace-chairs">
            <div>
            <ScrollParallax  animation={[
            { x: 0, opacity: 1, playScale: [0, 1] },
            // { y: 100, playScale: [0, 0.3] },
            { blur: '10px', playScale: [0, .3] },
          ]}
      
          style={{ transform: 'translateX(-20px)', filter: 'blur(0px)', opacity: 0.5 }}>
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
          style={{ transform: 'translateX(-20px)', filter: 'blur(0px)', opacity: 0.5 }}>
              <span id="aaa" key="a">競標</span>
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
          <Filter data={data} viewfilter={viewfilter} setViewfilter={setViewfilter} searchProduct={searchProduct}/>
          {/* <Waypoint onEnter={this._handleEnter}> */}
          <ScrollParallax  animation={[
            { x: 0, opacity: 1, playScale: [0, 1] },
            // { y: 100, playScale: [0, 0.3] },
            // { blur: '10px', playScale: [0, .3] },
          ]}
      
          style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }}>
          <div className="d-flex flex-wrap justify-content-center grace-grid">
     
          {data.map((item,index)=>{
          
            if(viewfilter ===1 && item.bid_sid !==1) return
            if(viewfilter ===0 && item.bid_sid !==0) return
            if(viewfilter ===2 && item.bid_sid !==2) return
            if((viewfilter ===3) && (item.productName!=='ADELAIDE')) return
            if(viewfilter ===4 && item.productName !=='IMOLA') return
            if(viewfilter ===5 && item.productName !=='OSAKA') return
            if(viewfilter ===6 && item.productName !=='BOSTON') return
            if(viewfilter ===7 && item.productName !=='CHARLOTTE') return
            if(viewfilter ===8 && item.designer_sid !==1) return
            if(viewfilter ===9 && item.designer_sid !==2) return
            if(viewfilter ===10 && item.designer_sid !==3) return

                    return(
                      <>
                    <BpCard key={item.bid_sid} item={item} {...props}  />
                    </>
                    )
                })
          }

  
          </div>
          </ScrollParallax>
          {/* </Waypoint> */}
        </div>
        {/* {!isLast && (
          <div className="g-more text-center mt-4" onClick={handleClick}>+ 更多</div>)} */}
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
