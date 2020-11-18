/* eslint-disable no-unused-vars */
// ------------------以下import 套件-------------------------
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CHNavbar from './common_components/CHNavbar'

// ------------------以下import common components--------------------
import MyFooter from './common_components/MyFooter'
import NotFoundPage from './common_components/NotFoundPage'
import ScrollToTop from './common_components/ScrollToTop'

// ---------------------以下import 首頁頁面--------------------
import Home from './Home'

// ---------------------以下import 品牌故事頁面----------------
import Brand from './about/pages/Brand'

// ---------------------以下import 產品頁面--------------------
import Product from './product/pages/Product'
import ProductList from './product/pages/ProductList'
import Review from './product/pages/Review'
import Custom from './product/pages/Custom'

// ---------------------以下import 二手頁面--------------------
import SecondhandForm from './secondhand/pages/SecondhandForm'
import SecondhandList from './secondhand/pages/SecondhandList'
import SecondhandProduct from './secondhand/pages/SecondhandProduct'
import SecondhandFormEdit from './secondhand/pages/SecondhandFormEdit'
import ReviewMember from './secondhand/pages/ReviewMember'
import Myproduct from './secondhand/pages/Myproduct'

// ---------------------以下import 募資頁面--------------------
import FundHomepage from './fund/pages/FundHomepage'
import FundList from './fund/pages/FundList'
import FundItem from './fund/pages/FundItem'
import FundForm from './fund/pages/FundForm'

// ---------------------以下import 競標頁面--------------------
import Pages from './bid/pages/Pages'

// ---------------------以下import 課程頁面--------------------
import Workshop from './workshop/pages/Workshop'
import WorkshopList from './workshop/pages/WorkshopList'

// ---------------------以下import 部落格頁面------------------
import Blog from './blog/pages/Blog'
import BlogList from './blog/pages/BlogList'

// ---------------------以下import 會員頁面--------------------
import Login from './member/Login'
import Register from './member/Register'
import Resetpassword from './member/Resetpassword'
import MemberIndex from './member'

// ---------------------以下import 購物車頁面------------------
import CartProduct from './cart/pages/CartProduct'
import CartBid from './cart/pages/CartBid'
import CartSecondHand from './cart/pages/CartSecondHand'
import CartClass from './cart/pages/CartClass'
import DeliveryInfo from './cart/pages/DeliveryInfo'
import CheckInfo from './cart/pages/CheckInfo'
import Finish from './cart/pages/Finish'
// import { Manager } from 'socket.io-client'
import DashBoard from './cart/components/DashBorad'
import CartFund from './cart/pages/CartFund'
import ManagerOrder from './cart/pages/ManageOrder'
import { tr } from 'date-fns/locale'

// ---------------------以下import 管理後台頁面------------------

//-----------------------------------------------------------

function App() {
  const [footer, setFooter] = useState(null)
  //---------------購物車使用變數--------------------------------
  const [myCart, setMyCart] = useState([])
  const [showLoading, setShowLoading] = useState(false)
  const [myCartDisplay, setMyCartDisplay] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState(-1)
  const [area, setArea] = useState(-1)
  const [adress, setAdress] = useState('')
  const [cartamount, setCartAmount] = useState(0)
  const [orderNo, setOrderNo] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)
  const [subtotal, setSubtoal] = useState(0)
  const [resetShow, setResetShow] = useState(0)
  const [typeofProduct, setTypeofProduct] = useState(1)
  //-----------------------------------------------------------
  return (
    <Router>
      <>
        <ScrollToTop>
          <Switch>
            {/* 首頁頁面 */}
            <Route exact path="/">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Home />
            </Route>
            {/* 管理後台 */}
            <Route path="/dashboard">
              <ManagerOrder />
            </Route>
            {/* 登入 */}
            <Route path="/login">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Login />
            </Route>
            {/* 註冊 */}
            <Route path="/register">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Register />
            </Route>
            <Route path="/reset-password">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Resetpassword />
            </Route>
            {/* 會員中心 */}
            <Route path="/member-center">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <MemberIndex
                cartamount={cartamount}
                setCartAmount={setCartAmount}
              />
            </Route>
            {/* 品牌故事頁面 */}
            <Route path="/brand">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Brand />
            </Route>
            {/* 產品頁面 */}
            <Route exact path="/productlist">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <ProductList
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setResetShow={setResetShow}
              />
            </Route>
            <Route path="/product/:sid?">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Product cartamount={cartamount} setCartAmount={setCartAmount} />
            </Route>
            <Route path="/review/:po?">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Review />
            </Route>
            <Route path="/custom">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Custom />
            </Route>
            {/* 二手頁面 */}
            <Route path="/secondhand_form_edit/:sid?">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <SecondhandFormEdit />
            </Route>
            <Route path="/secondhand_form">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <SecondhandForm />
            </Route>
            <Route path="/secondhand_list">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <SecondhandList footer={footer} setFooter={setFooter} />
            </Route>
            <Route path="/secondhand_product/:sid?">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <SecondhandProduct
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setResetShow={setResetShow}
              />
            </Route>
            <Route path="/review_member">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <ReviewMember />
            </Route>
            <Route path="/member-center/myproduct">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Myproduct />
            </Route>
            {/* 募資頁面 */}
            <Route path="/fundhomepage">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <FundHomepage />
            </Route>
            <Route path="/fundlist">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <FundList />
            </Route>
            <Route path="/funditem/:sid?">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <FundItem cartamount={cartamount} setCartAmount={setCartAmount} />
            </Route>
            <Route path="/fundform">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <FundForm />
            </Route>
            {/* 競標頁面 */}
            <Route path="/pages">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Pages
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setResetShow={setResetShow}
                myCart={myCart}
                setMyCart={setMyCart}
                setTypeofProduct={setTypeofProduct}
              />
            </Route>
            {/* 課程頁面 */}
            <Route exact path="/Workshop">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Workshop />
            </Route>
            <Route exact path="/WorkshopList/:sid?">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <WorkshopList
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setResetShow={setResetShow}
                setMyCart={setMyCart}
              />
            </Route>
            {/* 部落格頁面 */}
            <Route exact path="/blog">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Blog />
            </Route>
            <Route exact path="/BlogList/:sid?">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <BlogList />
            </Route>
            {/* 會員頁面 */}
            <Route path="/about">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Home />
            </Route>
            {/* 購物車頁面 */}
            <Route path="/cartproduct">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <CartProduct
                myCart={myCart}
                cartamount={cartamount}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
                subtotal={subtotal}
                setSubtoal={setSubtoal}
                typeofProduct={typeofProduct}
                setTypeofProduct={setTypeofProduct}
                setCartAmount={setCartAmount}
              />
            </Route>
            <Route path="/cartbid">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <CartBid
                myCart={myCart}
                cartamount={cartamount}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
                subtotal={subtotal}
                setSubtoal={setSubtoal}
                typeofProduct={typeofProduct}
                setTypeofProduct={setTypeofProduct}
                setCartAmount={setCartAmount}
              />
            </Route>
            <Route path="/cartsecondhand">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <CartSecondHand
                myCart={myCart}
                cartamount={cartamount}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
                subtotal={subtotal}
                setSubtoal={setSubtoal}
                typeofProduct={typeofProduct}
                setTypeofProduct={setTypeofProduct}
                setCartAmount={setCartAmount}
              />
            </Route>
            <Route path="/cartclass">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <CartClass
                myCart={myCart}
                cartamount={cartamount}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
                subtotal={subtotal}
                setSubtoal={setSubtoal}
                typeofProduct={typeofProduct}
                setCartAmount={setCartAmount}
                setTypeofProduct={setTypeofProduct}
              />
            </Route>
            <Route path="/cartfund">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <CartFund
                myCart={myCart}
                cartamount={cartamount}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
                subtotal={subtotal}
                setSubtoal={setSubtoal}
                typeofProduct={typeofProduct}
                setTypeofProduct={setTypeofProduct}
                setCartAmount={setCartAmount}
              />
            </Route>
            <Route path="/deliveryinfo">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <DeliveryInfo
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                city={city}
                setCity={setCity}
                area={area}
                setArea={setArea}
                adress={adress}
                setAdress={setAdress}
              />
            </Route>
            <Route path="/checkinfo">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <CheckInfo
                totalPrice={totalPrice}
                myCart={myCart}
                name={name}
                phone={phone}
                city={city}
                area={area}
                adress={adress}
                setOrderNo={setOrderNo}
                setCartAmount={setCartAmount}
                typeofProduct={typeofProduct}
                setTypeofProduct={setTypeofProduct}
              />
            </Route>
            <Route path="/checkfinish">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
              <Finish
                orderNo={orderNo}
                cartamount={cartamount}
                setCartAmount={setCartAmount}
              />
            </Route>
            {/* 404找不到網頁，需要放在switch路由表最後一個 */}
            <Route path="*">
              <CHNavbar
                cartamount={cartamount}
                setCartAmount={setCartAmount}
                resetShow={resetShow}
                setTypeofProduct={setTypeofProduct}
              />
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
