// ------------------以下import 套件-------------------------
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CHNavbar from './common_components/CHNavbar'

// ------------------以下import common components--------------------
import MyFooter from './common_components/MyFooter'
import NotFoundPage from './common_components/NotFoundPage'
import ScrollToTop from './common_components/ScrollToTop'
import EntryAnimation from './Home/components/EntryAnimation'
// ---------------------以下import 首頁頁面--------------------
import Home from './Home'

// ---------------------以下import 品牌故事頁面----------------
import Brand from './about/pages/Brand'

// ---------------------以下import 產品頁面--------------------
import Product from './product/pages/Product'
import ProductList from './product/pages/ProductList'
import Review from './product/pages/Review'

// ---------------------以下import 二手頁面--------------------
import SecondhandForm from './secondhand/pages/SecondhandForm'
import SecondhandList from './secondhand/pages/SecondhandList'
import SecondhandProduct from './secondhand/pages/SecondhandProduct'

// ---------------------以下import 募資頁面--------------------
import FundHomepage from './fund/pages/FundHomepage'
import FundList from './fund/pages/FundList'

import NewFundProject from './fund/components/NewFundProject '

import EndSoonFund from './fund/components/EndSoonFund'

// ---------------------以下import 競標頁面--------------------
import Bid from './bid/pages/Bid'
import Desc from './bid/pages/Desc'
import Designer from './bid/pages/Designer'
import Slider from './bid/pages/Slider'

// ---------------------以下import 課程頁面--------------------
import Workshop from './workshop/pages/Workshop'
import WorkshopList from './workshop/pages/WorkshopList'

// ---------------------以下import 部落格頁面------------------

// ---------------------以下import 會員頁面--------------------
import Login from './member/Login'
import MemberCenter from './member/MemberCenter'

// ---------------------以下import 購物車頁面------------------
import CartProduct from './cart/pages/CartProduct'
import CartBid from './cart/pages/CartBid'
import CartSecondHand from './cart/pages/CartSecondHand'
import CartClass from './cart/pages/CartClass'
import DeliveryInfo from './cart/pages/DeliveryInfo'
import CheckInfo from './cart/pages/CheckInfo'

//-----------------------------------------------------------

function App() {
  return (
    <Router>
      <>
        <EntryAnimation />
        <CHNavbar />

        <ScrollToTop>
          <Switch>
            {/* 首頁頁面 */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* 登入 */}
            <Route path="/login">
              <Login />
            </Route>

            {/* 會員中心 */}
            <Route path="/member-center">
              <MemberCenter />
            </Route>

            {/* 品牌故事頁面 */}
            <Route path="/brand">
              <Brand />
            </Route>

            {/* 產品頁面 */}
            <Route exact path="/productlist">
              <ProductList />
            </Route>

            <Route path="/product/:sid?">
              <Product />
            </Route>

            <Route path="/review">
              <Review />
            </Route>

            {/* 二手頁面 */}
            <Route path="/secondhand_form">
              <SecondhandForm />
            </Route>

            <Route path="/secondhand_list">
              <SecondhandList />
            </Route>

            <Route path="/secondhand_product/:sid?">
              <SecondhandProduct />
            </Route>

            {/* 募資頁面 */}
            <Route path="/fundhomepage">
              <FundHomepage />
            </Route>

            <Route path="/fundlist">
              <FundList />
            </Route>

            <Route path="/newfundproject">
              <NewFundProject />
            </Route>

            <Route path="/endsoonfund">
              <EndSoonFund />
            </Route>

            {/* 競標頁面 */}
            <Route path="/bid">
              <Bid />
            </Route>
            <Route path="/desc">
              <Desc />
              <Designer />
              <Slider />
            </Route>

            {/* 課程頁面 */}
            <Route exact path="/Workshop">
              <Workshop />
            </Route>

            <Route exact path="/WorkshopList">
              <WorkshopList />
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
        </ScrollToTop>

        <MyFooter />
      </>
    </Router>
  )
}

export default App
