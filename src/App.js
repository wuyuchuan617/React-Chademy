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

// ---------------------以下import 二手頁面--------------------
import SecondhandForm from './secondhand/pages/SecondhandForm'
import SecondhandList from './secondhand/pages/SecondhandList'
import SecondhandProduct from './secondhand/pages/SecondhandProduct'

// ---------------------以下import 募資頁面--------------------
import FundHomepage from './fund/pages/FundHomepage'
import FundList from './fund/pages/FundList'
import FundItem from './fund/pages/FundItem'


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
import MemberCenter from './member/MemberCenter'
import Resetpassword from './member/Resetpassword'

// ---------------------以下import 購物車頁面------------------
import CartProduct from './cart/pages/CartProduct'
import CartBid from './cart/pages/CartBid'
import CartSecondHand from './cart/pages/CartSecondHand'
import CartClass from './cart/pages/CartClass'
import DeliveryInfo from './cart/pages/DeliveryInfo'
import CheckInfo from './cart/pages/CheckInfo'
import Finish from './cart/pages/Finish'

//-----------------------------------------------------------

function App() {
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
  //-----------------------------------------------------------
  return (
    <Router>
      <>
        <CHNavbar cartamount={cartamount} setCartAmount={setCartAmount} />

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

            {/* 註冊 */}
            <Route path="/register">
              <Register />
            </Route>

            <Route path="/reset-password">
              <Resetpassword />
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
              <ProductList
                cartamount={cartamount}
                setCartAmount={setCartAmount}
              />
            </Route>

            <Route path="/product/:sid?">
              <Product cartamount={cartamount} setCartAmount={setCartAmount} />
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

            <Route path="/funditem">
              <FundItem />
            </Route>

            

            {/* 競標頁面 */}

            <Route path="/pages">
              <Pages />
            </Route>

            {/* 課程頁面 */}
            <Route exact path="/Workshop">
              <Workshop />
            </Route>

            <Route exact path="/WorkshopList/:sid?">
              <WorkshopList />
            </Route>

            {/* 部落格頁面 */}
            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/BlogList/:sid?">
              <BlogList />
            </Route>

            {/* 會員頁面 */}
            <Route path="/about">
              <Home />
            </Route>

            {/* 購物車頁面 */}
            <Route path="/cartproduct">
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
              />
            </Route>

            <Route path="/cartbid">
              <CartBid
                myCart={myCart}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
              />
            </Route>

            <Route path="/cartsecondhand">
              <CartSecondHand
                myCart={myCart}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
              />
            </Route>

            <Route path="/cartclass">
              <CartClass
                myCart={myCart}
                setMyCart={setMyCart}
                showLoading={showLoading}
                setShowLoading={setShowLoading}
                myCartDisplay={myCartDisplay}
                setMyCartDisplay={setMyCartDisplay}
              />
            </Route>

            <Route path="/deliveryinfo">
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
              />
            </Route>

            <Route path="/checkfinish">
              <Finish
                orderNo={orderNo}
                cartamount={cartamount}
                setCartAmount={setCartAmount}
              />
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
