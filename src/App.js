// ------------------以下import 套件-------------------------

import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CHNavbar from './common_components/CHNavbar'
// ------------------以下import common components--------------------

import MyNavbar from './common_components/MyNavbar'
import MainContent from './common_components/MainContent'
import MyFooter from './common_components/MyFooter'
import NotFoundPage from './common_components/NotFoundPage'

// ---------------------以下import 首頁頁面--------------------

import Home from './Home'

// ---------------------以下import 品牌故事頁面----------------

// ---------------------以下import 產品頁面--------------------

import Product from './product/pages/Product'
import ProductList from './product/pages/ProductList'

// ---------------------以下import 二手頁面--------------------
import SecondhandList from './secondhand/pages/SecondhandList'

// ---------------------以下import 募資頁面--------------------

// ---------------------以下import 競標頁面--------------------

// ---------------------以下import 課程頁面--------------------
import Workshop from './workshop/pages/Workshop'
import WorkshopList from './workshop/pages/WorkshopList'

// ---------------------以下import 部落格頁面------------------

// ---------------------以下import 會員頁面--------------------

// ---------------------以下import 購物車頁面------------------
import CartProduct from './cart/pages/CartProduct'
import CartBid from './cart/pages/CartBid'
import CartSecondHand from './cart/pages/CartSecondHand'
import CartClass from './cart/pages/CartClass'
import DeliveryInfo from './cart/pages/DeliveryInfo'
import CheckInfo from './cart/pages/CheckInfo'
//-----------------------------------------------------------
function App() {
  const [activeName, setActiveName] = useState('')

  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        <CHNavbar activeName={activeName} setActiveName={setActiveName} />

        <Switch>
          {/* 首頁頁面 */}

          <Route exact path="/">
            <Home />
          </Route>

          {/* 品牌故事頁面 */}

          <Route path="/brand">
            <Home />
          </Route>

          {/* 產品頁面 */}

          <Route exact path="/productlist">
            <ProductList />
          </Route>

          <Route path="/product/:sid?">
            <Product />
          </Route>

          {/* 二手頁面 */}

          <Route path="/secondhand_list">
            <SecondhandList />
          </Route>

          {/* 募資頁面 */}

          <Route path="/login">
            <Home />
          </Route>

          {/* 競標頁面 */}

          <Route path="/register">
            <Home />
          </Route>

          {/* 課程頁面 */}

          <Route path="/Workshop">
            <Workshop />
          </Route>

          {/* 部落格頁面 */}

          <Route path="/todo">
            <Home />
          </Route>

          {/* 會員頁面 */}

          <Route path="/about">
            <Home />
          </Route>

          {/* 購物車頁面 */}

          <Route path="/cartproduct">
            <CartProduct />
          </Route>

          <Route path="/cartbid">
            <CartBid />
          </Route>

          <Route path="/cartsecondhand">
            <CartSecondHand />
          </Route>

          <Route path="/cartclass">
            <CartClass />
          </Route>

          <Route path="/deliveryinfo">
            <DeliveryInfo />
          </Route>

          <Route path="/checkinfo">
            <CheckInfo />
          </Route>

          {/* 404找不到網頁，需要放在switch路由表最後一個 */}
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        {/* </Container> */}

        <MyFooter />
      </>
    </Router>
  )
}

export default App
