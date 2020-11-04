import React, {useState} from 'react'
import Bid from './Bid'
import Desc from './Desc'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Pages(){
    const [price, setPrice] = useState(99)
    const [pname, setPname] = useState('')
    const [startdate, setStartdate] = useState('')
    const [starttime, setStarttime] = useState('')
    const [enddate, setEnddate] = useState('')
    const [endtime, setEndtime] = useState('')
    const [data, setData] = useState([])
    

    return(
        <>
        <Switch>
        <Route path="/pages/bid">
        <Bid price={price} setPrice={setPrice} pname={pname} setPname={setPname} enddate={enddate} setEnddate={setEnddate} endtime={endtime} setEndtime={setEndtime} data={data} setData={setData} />
          </Route>
          <Route path="/pages/desc/record">
          <Desc price={price} setPrice={setPrice} />
          </Route>
          <Route path="/pages/desc/chatroom">
          <Desc price={price} setPrice={setPrice} />
          </Route>
          <Route path="/pages/desc/spec">
          <Desc price={price} setPrice={setPrice} />
          </Route>
          </Switch>
            
        
        </>
    )
}

export default Pages