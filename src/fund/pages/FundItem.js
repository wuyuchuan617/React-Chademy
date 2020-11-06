import '../styles/FundItem.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import React, { useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FundIFirst from '../components/FundIFirst'

function FundItem(props) {
  const isLogged = useSelector((state) => state.user.logged)

  const { setCartAmount, cartamount, resetShow, setResetShow } = props

  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_fund/reactitem/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setProduct(data.slice(0))
  }

  useEffect(() => {
    getItemFromSQL()
  }, [sid])

  return (
    <>
      {product.map((item, index) => {
        return (
          <FundIFirst
            key={index}
            item={item}
            product={product}
            sid={sid}
            setCartAmount={setCartAmount}
            cartamount={cartamount}
            isLogged={isLogged}
            resetShow={resetShow}
            setResetShow={setResetShow}
          />
        )
      })}
    </>
  )
}

export default FundItem
