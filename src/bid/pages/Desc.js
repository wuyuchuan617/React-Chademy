import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Designer from '../component/Designer'
import Slider from '../component/Slider'
import { connect } from 'react-redux'
import Bookmark from '../component/Bookmark'
import Record from '../component/Record'
import Chatroom from '../component/Chatroom'
import Spec from '../component/Spec'
import BpCard from '../component/BpCard'
import '../styles/desc.scss'
// import { BsFillHeartFill } from 'react-icons/bs'

// import { HeartOutlined } from '@ant-design/icons';
// import {  
//   getData,
//   getBidData,
//   initAct,
//   initActAsync,
// } from '../../actions'

function Desc(props) {
//<3 css
  const heartFill = {
    color: '#C77334',
  }
  const {price, setPrice} = props
  const [desc, setDesc] = useState('')
  const [material, setMaterial] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [heart, setHeart] = useState(false)
  const [heartItem, setHeartItem] = useState({})

  async function initData() {
    const url = 'http://localhost:3001/product/api/bid/4' 

    // const newPrice = { startedPrice : price}
    const request = new Request(url, {
      method: 'GET',
      // body: JSON.stringify(newPrice),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    // console.log(price+ value)
    console.log('data:' , data) // [object Object]
    // console.log(data.startedPrice , value) // [object Object]
    // setPrice(data.startedPrice*1 + value*1)
    setPrice(data.startedPrice)
    setDesc(data.description)
    setMaterial(data.material)
    setDimensions(data.dimensions)
  }

  async function addprice(value){
    const url = 'http://localhost:3001/product/api/record' 

    const newPrice = { 
      'price' : value,
      'total_price' : price,  
    }
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newPrice),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('data:' , data) 
    
    const copyPrice = price
    setPrice(+copyPrice + value*1)
  }

  useEffect(() => {
    initData()
  }, [])
  
  return (
    <>
      {/* countdown */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className=" d-flex align-items-center justify-content-center">
            <div className="col-sm-2 days d-flex flex-column">
              00<span>days</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>hours</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>minutes</span>
            </div>
            <div className="col-sm-2 days d-flex flex-column">
              00<span>seconds</span>
            </div>
          </div>
        </div>
      </div>
      {/* Desc */}
      <div className="container">
        <div className="row">
          <div className="picarea">
            <div className="mainpic"></div>
            <div className="sidepic d-flex">
              <div className="pic"></div>
              <div className="pic"></div>
              <div className="pic"></div>
              <div className="pic"></div>
            </div>
            <div className="info">
              <h4>產品簡介</h4>
              <div className="line2"></div>
              <p>{desc}
              </p>
            </div>
            <div className="info">
              <h4>產品規格</h4>
              <div className="line2"></div>
              <div className="justify-content-center d-flex">
                <div className="col-6">
                  <h4 className="text-center">尺寸</h4>
                  <p>{dimensions}</p>
                  
                  {/* <table className="mx-auto">
                    <tbody className="text-right justify-content-center ">
                      <tr>
                        <th></th>
                        <td>76cm</td>
                      </tr>
                      <tr>
                        <th>width</th>
                        <td>74cm</td>
                      </tr>
                      <tr>
                        <th>Depth</th>
                        <td>66cm</td>
                      </tr>
                      <tr>
                        <th>Seat Height</th>
                        <td>55cm</td>
                      </tr>
                      <tr>
                        <th>Armrest Height</th>
                        <td>54cm</td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
                <div className="col-6">
                  <h4 className="text-center">材質</h4>
                  <p className="text-center">
                    {material}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="line mx-4"></div>
          <div className="bidinfo">
            <h1>帆布椅</h1>
            <h4>目前金額</h4>
            <div className="line3 my-4"></div>
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
            <button onClick={()=>addprice(1000)}
             className="g-price">$1,000</button>
            <button onClick={()=>addprice(5000)}
            className="g-price">$5,000</button>
            <button onClick={()=>addprice(10000)}
            className="g-price">$10,000</button>
            <h4>競標資訊</h4>
            <div className="line3 my-4"></div>
            <table>
              <tbody className="text-left justify-content-center ">
                <tr>
                  <th>競標日期</th>
                  <td>20/09/2020</td>
                </tr>
                <tr>
                  <th>競標時間</th>
                  <td>10:00 A.M.</td>
                </tr>
                <tr>
                  <th>起標價格</th>
                  <td>$100,000</td>
                </tr>
                <tr>
                  <th>競標人數</th>
                  <td>50人</td>
                </tr>
                <tr>
                  <th>觀看人數</th>
                  <td>300人</td>
                </tr>
              </tbody>
            </table>
            <button className="chat">進入競標聊天室</button>
          </div>
        </div>
      
      <Bookmark />
      <Switch>
      <Route path="/pages/desc/record">
        <Record/>
      </Route>
      <Route path="/pages/desc/chatroom">
        <Chatroom/>
      </Route>
      <Route path="/pages/desc/spec">
        <Spec/>
      </Route>
      </Switch>
      <Designer />
      <Slider />
      </div>
    </>
  )
}

// const mapStateToProps = (store) => {
//   return { desc: store.bid}
// }
// export default connect(mapStateToProps, {
//   getData,
//   getBidData,
//   initAct,
//   initActAsync,
// })(Desc)
export default Desc
