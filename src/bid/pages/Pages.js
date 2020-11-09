import React, {useState, useEffect,useCallback} from 'react'
import Bid from './Bid'
import Desc from './Desc'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Pages(){
    const [price, setPrice] = useState(99)
    const [pname, setPname] = useState('')
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])

    async function initBidData() {
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
      const data1 = await response.json()
      // console.log('data1',data1)
      setData(data1)
      
    }

      useEffect(() => {
        initBidData()
      }, [])
       //countdown
    // const [remainSecond, setRemainSecond] = useState(0)
    // const handleTimeup = useCallback(
    //   () => {
    //     console.log('time up!!')
    //   },
    //   []
    // )
    // // effect
    //   useEffect(() => {
    //     const countDownSecond = total
    //     // 產生 Timer
    // // console.log(`[timer] == start count down ${countDownSecond}s  ==`)
    // const startTime = Date.now()
    // const countDownTimer = setInterval(() => {
    //   // 計算剩餘秒數
    //   const pastSeconds = parseInt((Date.now() - startTime) / 1000)
    //   // console.log(pastSeconds)
    //   const remain = (countDownSecond - pastSeconds)
    //   setRemainSecond(remain < 0 ? 0 : remain)
    //   console.log('[timer] count down: ', remain)
  
    //   setDay(Math.floor( remain/(1000*60*60*24) ))
    //   setHr(Math.floor( (remain/(1000*60*60)) % 24 ))
    //   setMin(Math.floor( (remain/1000/60) % 60 ))
    //   setSec(Math.floor( (remain/1000) % 60 ))
    //   // 檢查是否結束
    //   if (remain <= 0) {
    //     clearInterval(countDownTimer)
    //     // console.log(`[timer] == stop count down ${countDownSecond}s  ==`)
    //     handleTimeup() // 透過 prop 通知外部時間已到
    //   }

     
    // }, 1000)
    // console.log('1',remainSecond)
   
  
    //   return () => {
    //     // 清除 Timer
    //     clearInterval(countDownTimer)
    //     // console.log(`[timer] == stop count down ${countDownSecond}s  ==`)
    //   }
    // }, [total]) // 相依 prop / state 值的 Effect
    // {remainSecond} setRemainSecond={setRemainSecond} day={day} hr={hr} min={min} sec={sec}

    return(
        <>
        <Switch>
        <Route path="/pages/bid">
        <Bid price={price} total={total} setTotal={setTotal} setPrice={setPrice} pname={pname} setPname={setPname} data={data} setData={setData} />
          </Route>
          <Route path="/pages/desc/record/:id?">
          <Desc price={price} setPrice={setPrice} total={total} setTotal={setTotal} pname={pname} setPname={setPname} data={data}/>
          </Route>
          <Route path="/pages/desc/chatroom/:id?">
          <Desc price={price} setPrice={setPrice} data={data} total={total} setTotal={setTotal} pname={pname} setPname={setPname} />
          </Route>
          {/* <Route path="/pages/desc/spec/:id?">
          <Desc price={price} setPrice={setPrice} />
          </Route> */}
          </Switch>
            
        
        </>
    )
}

export default Pages