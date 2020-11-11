import React, {useState, useEffect,useCallback} from 'react'
import Bid from './Bid'
import Desc from './Desc'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Pages(){
    const [price, setPrice] = useState(99)
    const [pname, setPname] = useState('')
    const [total, setTotal] = useState(0)
    const [totalb, setTotalb] = useState(null)
    const [data, setData] = useState([])
    const [startdate, setStartdate] = useState('')
    const [enddate, setEnddate] = useState('')
    const [s_date, setS_date] = useState(null)
    const [e_date, setE_date] = useState(null)

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
      // setS_date(data1.startingDate)
      // setE_date(data1.bidDate)
      
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
  
    return(
        <>
        <Switch>
        <Route path="/pages/bid">
        <Bid price={price} setTotalb={setTotalb} total={total} totalb={totalb} setTotal={setTotal} setPrice={setPrice} pname={pname} setPname={setPname} data={data} setData={setData} startdate={startdate} enddate={enddate} s_date={s_date} e_date={e_date}/>
          </Route>
          <Route path="/pages/desc/record/:id?">
          <Desc price={price} setPrice={setPrice} total={total} setTotal={setTotal} pname={pname} setPname={setPname} data={data} setStartdate={setStartdate} startdate={startdate} enddate={enddate} setEnddate={setEnddate}/>
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