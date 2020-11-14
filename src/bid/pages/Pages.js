/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useCallback } from 'react'
import Bid from './Bid'
import Desc from './Desc'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter, useParams } from 'react-router-dom'

function Pages(props) {
  const { setCartAmount, cartamount } = props
  const [price, setPrice] = useState(99)
  const [pname, setPname] = useState('')
  // const [sid, setSid] = useState('')
  const [totalb, setTotalb] = useState(null)
  const [data, setData] = useState([])

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

  return (
    <>
      <Switch>
        <Route path="/pages/bid">
          <Bid
            price={price}
            setTotalb={setTotalb}
            totalb={totalb}
            setPrice={setPrice}
            pname={pname}
            setPname={setPname}
            data={data}
            setData={setData}
            s_date={s_date}
            e_date={e_date}
          />
        </Route>
        <Route path={`/pages/desc/record/:id?`}>
          <Desc
            price={price}
            setPrice={setPrice}
            pname={pname}
            setPname={setPname}
            data={data}
            setCartAmount={setCartAmount}
            cartamount={cartamount}
          />
        </Route>
        <Route path="/pages/desc/setprice/:id?">
          <Desc
            price={price}
            setPrice={setPrice}
            data={data}
            pname={pname}
            setPname={setPname}
            setCartAmount={setCartAmount}
            cartamount={cartamount}
          />
        </Route>
        {/* <Route path="/pages/desc/spec/:id?">
          <Desc price={price} setPrice={setPrice} />
          </Route> */}
      </Switch>
    </>
  )
}

export default Pages
