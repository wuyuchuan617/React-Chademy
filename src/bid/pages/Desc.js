import React, { useState, useEffect } from 'react'
// import useInterval from '@use-it/interval';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Slider from '../component/Slider'
import Bookmark from '../component/Bookmark'
import Record from '../component/Record'
import Chatroom from '../component/Chatroom'
import Carousel from 'react-elastic-carousel'
import Sidepic from '../component/Sidepic'
import '../styles/desc.scss'
import { withRouter, useParams } from 'react-router-dom'
import '../styles/designer.scss'
import { Button, Modal } from 'react-bootstrap'
import Modalsetprice from '../component/Modalsetprice'
import Countdown from 'react-countdown';
import Confirm from '../component/Confirm';
// import { BsFillHeartFill } from 'react-icons/bs'
// import { HeartOutlined } from '@ant-design/icons';
import Counter from '../component/Counter'
import QueueAnim from 'rc-queue-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
function Desc(props) {

  let {id} = useParams()
//<3 css
  const heartFill = {
    color: '#C77334',
  }
  const {price, setPrice,pname, setPname, data,total,setTotal,startdate, setStartdate,enddate, setEnddate} = props
  // const [startdate, setStartdate] = useState('')
  const [starttime, setStarttime] = useState('')
  // const [enddate, setEnddate] = useState('')
  const [endtime, setEndtime] = useState('')
  const [desc, setDesc] = useState([])
  const [material, setMaterial] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [productpic, setProductpic] = useState([])
  const [pic, setPic] = useState('')
  const [intro, setIntro] = useState('')
  const [name, setName] = useState('')
  const [member, setMember] = useState([])
  const [startprice, setStartprice] = useState([])
  const [part, setPart] = useState([])
  const [visiter, setVisiter] = useState([])
  const [day, setDay] = useState(0)
  const [sdate, setSdate] = useState('')
  const [edate, setEdate] = useState('')
  const [sec, setSec] = useState(0)
  const [member2, setMember2] = useState('')
  const [heart, setHeart] = useState(false)
  const [heartItem, setHeartItem] = useState({})
  const [modalShow, setModalShow] = React.useState(false);
  
  async function initData() {
    
    const url = `http://localhost:3001/product/api/bid/${id}`

    const request = new Request(url, {
      method: 'GET',
      // body: JSON.stringify(newPrice),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
  console.log('data',data)
    setSdate(data[0].sdate)
    setEdate(data[0].edate)
    setStartprice(data[0].startedPrice)
    setVisiter(data[0].visiter)
    setPart(data[0].participant)
    setStarttime(data[0].startingTime)
    setEndtime(data[0].bidTime)
    setStartdate(data[0].startingDate)
    setEnddate(data[0].bidDate)
    setProductpic(data[0].pic)
    setPname(data[0].productName)
    setPrice(data[0].current_price)
    setDesc(data[0].description)
    setMaterial(data[0].material)
    setDimensions(data[0].dimensions)
  }


  async function getDesigner() {
    const url = `http://localhost:3001/product/api/designer/${id}` 

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

    setPic(data.designer_pic)
    setIntro(data.intro)
    setName(data.name)
  }
  async function getMember() {
    const url = `http://localhost:3001/product/api/member-record` 

    const request = new Request(url, {
      method: 'GET',
      
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setMember(data)
    
  }
  

  async function addprice(value){
    const url = 'http://localhost:3001/product/api/record' 
    const copyPrice = price
  
    const newPrice = { 
      'member_sid': member2,
      'product_sid': id,
      'bid_sid': id,
      'price' : value,
      'total_price' : +copyPrice + value*1,
      'sid': id,
      // 'time':Date.now(),
    }

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newPrice),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setPrice(+copyPrice + value*1)
  }

  const [chair, setChair] = useState(null)
  useEffect(() => {
       initData()
       getDesigner()
       getMember()
       getCartFromLocalStorage() 

  }, [])

  useEffect(()=>{
    setChair(`http://localhost:3000/uploads/${productpic[0]}`)
  },[productpic])
  
  //countdown
  function getTimeRemaining(enddate){ 
    // const s_time = Date.parse(startdate);
    // const e_time = Date.parse(enddate);
    const s_time = Date.now();
    // const s_time = new Date(startdate).getTime();

    const e_time = new Date(enddate).getTime();
    const total = e_time - s_time
  
    return total 
  }

  useEffect(()=>{
    const a = getTimeRemaining(enddate)
    setTotal(a)
    const secs = Math.floor( a/(1000*60*60*24))-1
    setDay(secs<0?0:secs)
  },[startdate,enddate])
  //countdown
  // console.log('total',total)

//   const Completionist = () =>  setModalShow(true);
// console.log(setModalShow(true))
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return 
    } else {
      
      // Render a countdown
    //  date1 = new Date(total)
      return (

        <div className="d-flex w-50 align-items-center justify-content-center ">
        <div key="a" className="col-sm-2 days d-flex flex-column">
              {day}<span>days</span>
            </div>
        <div className="col-2 days d-flex flex-column">
            {hours}<span>hours</span>
            </div>
            <div className="col-2 days d-flex flex-column">
            {minutes}<span>minutes</span>
            </div>
            <div className="col-2 days d-flex flex-column">
            {seconds}<span>seconds</span>
            </div>
       
        </div>
      
      );
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addmoney,setAddmoney] = useState(0)

//   function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// useEffect(()=>{
//   numberWithCommas(price)
// },[initData()])

//get member_sid fn
function getCartFromLocalStorage() {
  const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
    .sid
 
  console.log('newMember', newMember)
  console.log(typeof newMember)
  setMember2(newMember)

}

//add to cart fn
const updateCartToLocalStorage = (item, isAdded = true) => {
  console.log(item, isAdded)
  const currentCart = JSON.parse(localStorage.getItem('cart')) || []

  // find if the product in the localstorage with its id
  const index = currentCart.findIndex((v) => v.id === item.id)

  console.log('index', index)
  // found: index! == -1
  if (index > -1) {
    currentCart[index].amount++
  } else {
    currentCart.push(item)
  }

  localStorage.setItem('cart', JSON.stringify(currentCart))
      // 設定資料
      setMyCart(currentCart)
    }

    
  return (
    <>
      {/* countdown */}

      <div className="container">
        <div  className="row justify-content-center ">
          {/* <div className=" d-flex align-items-center justify-content-center"> */}
          {total ? 
          <Countdown date={Date.now() + (+total)} renderer={renderer}>
    </Countdown>:'...'}
   
        </div>
      </div>
      {/* Desc */}
      <div className="container">
        <div className="row">
          <div className="picarea">
            <div className="mainpic">
              <img src={chair} />
            </div>
            <div key="b" className="sidepic d-flex">
            {productpic.map((item,index)=>{
            if(productpic.length>4)return productpic.length =4
              return <Sidepic key={index} item={item} productpic={productpic} setProductpic={setProductpic} setChair={setChair} />
            })}
      
            </div>
            
            <div className="info">
            <ScrollParallax  animation={[
            // { x: 0, opacity: 1, playScale: [0, 1.5] },
            { y: 0, opacity: 1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 3] },
          ]}
          style={{ transform: 'translateY(10px)', filter: 'blur(0px)', opacity: 0 }}>
              <h4 className="text-center">產品簡介</h4>
              <div className="line2"></div>
              <p>{desc}</p>
              </ScrollParallax>
            </div>
            <div className="info">
            <ScrollParallax  animation={[
            // { x: 0, opacity: 1, playScale: [0, 1.5] },
            { y: 0, opacity: 1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 1] },
          ]}
          style={{ transform: 'translateY(50px)', filter: 'blur(0px)', opacity: 0 }}>
              <h4 className="text-center">產品規格</h4>
              <div className="line2"></div>
              <div className="justify-content-center d-flex">
                <div className="col-6">
                  <h4 className="text-center">尺寸</h4>
                  <p>{dimensions}</p>
                 
                </div>
                <div className="col-6">
                  <h4 className="text-center">材質</h4>
                  <p className="text-left">{material}</p>
                  
                </div>
              </div>
                </ScrollParallax>
            </div>
          </div>
          <div className="line mx-4"></div>
          <div className="bidinfo">
          {/* 動畫特效 */}
          <ScrollParallax  animation={[
            // { x: 0, playScale: [0, 1.5] },
            { y: 0, opacity:1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 3] },
          ]}
          style={{ transform: 'translateY(50px)', filter: 'blur(0px)', opacity: 0 }}>
            <h1>{pname}</h1>
            <h5 className="g-pDesc">{pname}單椅</h5>
            <h4>目前金額</h4>
            <div className="line3 my-4 w-100"></div>
            <h2 className="g-bidprice">${price}</h2>
            
            {/* <BsFillHeartFill
                onClick={async () => {
                  await setHeart(!heart)
                  if (heart === false) {
                    const newHeartItem = {
                      follow_product: item.product_name,
                      member_id: 'AMY',
                      follow_status: 1,
                    }
                    await setHeartItem(newHeartItem)
                  } else {
                    deleteHeartToServer()
                    setHeart(false)
                    setHeartItem({})
                  }
                }}
                style={heart ? heartFill : ''}
              /> */}


            {/* <HeartOutlined className="g-heart" style={{ fontSize: '18px', color: '#707070', fill: '#707070'}}/> */}
            <p>出價</p>
            <div className="d-flex justify-content-between">
            <div 
            onClick={()=>{
              setAddmoney(1000)
              // addprice(1000)
              handleShow()
              }}
             className="g-price d-flex justify-content-center align-items-center">
             $1,000
             </div>
    
              <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>確定要加價嗎？</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    不確定
                  </Button>
                  <Button variant="primary" onClick={()=>{
                    addprice(addmoney)
                    handleClose()
                 
                  }}>
                    確定
                  </Button>
                </Modal.Footer>
              </Modal>
            <div onClick={()=>{
              setAddmoney(5000)
              // addprice(1000)
              handleShow()
              }}
            className="g-price d-flex justify-content-center align-items-center">$5,000</div>
            <div onClick={()=>{
              setAddmoney(10000)
              // addprice(1000)
              handleShow()
              }}
            className="g-price d-flex justify-content-center align-items-center">$10,000</div>
            </div>
            <h4>競標資訊</h4>
            <div className="line3 my-4  w-100"></div>
            <table>
              <tbody className="text-left justify-content-center ">
                <tr>
                  <th>競標日期</th>
                  <td>{sdate}~{edate}</td>
                </tr>
                <tr>
                  <th>競標時間</th>
                  <td>{starttime}~{endtime}</td>
                </tr>
                <tr>
                  <th>起標價格</th>
                  <td>${startprice}</td>
                </tr>
                <tr>
                  <th>競標人數</th>
                  <td>{visiter}人</td>
                </tr>
                <tr>
                  <th>觀看人數</th>
                  <td>{part}人</td>
                </tr>
              </tbody>
            </table>
            </ScrollParallax>
            
            {/* <button className="chat"></button> */}
            {/* <Button className="chat" variant="primary" onClick={() => setModalShow(true)}>
            設定自動出價
            </Button> */}

     
          
          </div>
        </div>
        <ScrollParallax  animation={[
            // { x: 0, opacity: 1, playScale: [0, 1.5] },
            { y: 0, opacity: 1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 3] },
          ]}
          style={{ transform: 'translateY(10px)', filter: 'blur(0px)', opacity: 0 }}>
      <Bookmark {...props}/>

      <div className="row">
        <div className="col">
        <div className="g-bg p-3">

      <Switch>
      <Route path="/pages/desc/record/:id?"> 
      <table className="w-100 text-center mt-3">
            <tbody>
                <tr className="w-100 text-center">
                    <th className="w-25">競標者</th>
                    <th className="w-25">下標金額</th>
                    <th className="w-25">總金額</th>
                    <th className="w-25">時間</th>
                </tr>
      {member.map((item,index)=>{
        if(index>5) return null
        return <Record key={index} item={item} {...props} />}
      )}
        </tbody>
      </table>
      </Route>
      <Route path="/pages/desc/chatroom/:id?">
        <Chatroom/>
      </Route>
      {/* <Route path="/pages/desc/spec/:id?">
        <Spec/>
      </Route> */}
      </Switch>
      </div>
        </div>
        </div>
      </ScrollParallax>
        {/* <QueueAnim delay={300} duration={2000} type={['right', 'left']} leaveReverse> */}
        <ScrollParallax  animation={[
            // { x: 0, opacity: 1, playScale: [0, 1.5] },
            { y: 0, opacity: 1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 1] },
          ]}
          style={{ transform: 'translateY(70px)', filter: 'blur(0px)', opacity: 0 }}>
      <div key="a" className="container">
        <div className="d-flex align-items-center ">
          <div className="designer-des d-flex align-items-center px-5">
            <div className="text-center">
              <h3 className="design">DESIGN BY</h3>
              <h1 className="name">{name}</h1>
              <h3 className="brief">{intro}</h3>
              <span>
                <Link to="#">Learn more</Link>
              </span>
            </div>
          </div>
          <div className="designer-img">
          <img src={pic}/>
          </div>
        </div>
      </div>
      </ScrollParallax>
      {/* </QueueAnim> */}
      <ScrollParallax  animation={[
            // { x: 0, opacity: 1, playScale: [0, 1.5] },
            { y: 0, opacity: 1, playScale: [0, 1] },
            { blur: '10px', playScale: [0, 1] },
          ]}
          style={{ transform: 'translateY(70px)', filter: 'blur(0px)', opacity: 0 }}>
      <h2 className="grace-related-product text-center">相關產品</h2>
        <div className="row">
        <Carousel itemsToScroll={3} itemsToShow={3}>
      {data.map((item,index)=>{
        if(data.length>8) return data.length = 8
        return <Slider key={index} item={item} {...props} />
      }
      )}
      </Carousel>
      </div>
      </ScrollParallax>
      </div>
      <BackTop
          visibilityHeight="2000"
          style={{
            height: '40',
            width: '40',
            lineHeight: '33px',
            color: 'white',
            fontSize: '16px',
            borderRadius: '0',
            textAlign: 'center',
            backgroundColor: '#c77334',
          }}
        >
          <div>
            <UpOutlined
              style={{
                color: 'white',
                fontSize: '18px',
                borderRadius: '0',
                backgroundColor: '#c77334',
                marginTop: '-3px',
              }}
            />
          </div>
        </BackTop>
      <Modalsetprice
        show={modalShow}
        onHide={() => setModalShow(false)}
        pname={pname} chair={chair} price={price}
      />
    </>
  )
}


export default Desc