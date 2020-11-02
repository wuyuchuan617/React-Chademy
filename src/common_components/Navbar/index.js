import React, { useState, useRef } from 'react'
import './index.scoped.scss'

import { useSelector, useDispatch } from 'react-redux'

import { Navbar, Nav, Button, Overlay, Tooltip } from 'react-bootstrap'

import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineUserSwitch,
} from 'react-icons/ai'
import logo from '../images/logo.svg'

// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'

import CartArea from '../../cart/components/CartArea'

// TODO: https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/

function MyNavbar(props) {
  const {
    activeName,
    setActiveName,
    navbarHeight,
    setNavbarHeight,
    scrollY,
    scrollDirection,
  } = props
  const [showCart, setShowCart] = useState(false)
  const isDown = scrollDirection === 'DOWN'
  const over100px = scrollY < -100
  const navbarPosition =
    !activeName && isDown && over100px ? `-${navbarHeight}px` : 0

  // console.log(scrollY, scrollDirection, isDown && over100px)

  const activeState = (name) =>
    name === activeName ? 'navbar_item_is_active' : ''

  // 登入的狀態
  const isLogged = useSelector((state) => state.isLogged)

  console.log(' 是否登入: ', isLogged)

  // 改變登出登入
  const dispatch = useDispatch()

  return (
    <>
      <Navbar
        ref={(element) => {
          // console.log(3, element)
          // NOTE: 排除 el 為 null
          if (!element) return

          const { height } = element.getBoundingClientRect()
          setNavbarHeight(height)
        }}
        style={{
          top: navbarPosition,
        }}
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={`navbar_contanier ${activeName ? 'show_bg' : ''}`}
      >
        <Navbar.Brand
          onClick={() => setActiveName('')}
          as={NavLink}
          to="/"
          className="logo_brand"
        >
          <img
            className="navbar_logo"
            src={logo}
            width="80"
            height="80"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="m-auto justify-content-between"> */}
          <Nav className="navbar_list  justify-content-between text">
            <Nav.Link
              as={NavLink}
              to="/Brand"
              onClick={() => setActiveName('Brand')}
              className={['text-center', activeState('Brand')]}
            >
              <div>品牌故事</div>
              <div className="text-center">ABOUT</div>
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/productlist"
              onClick={() => setActiveName('product')}
              className={['text-center', activeState('product')]}
            >
              <div>經典產品</div>
              <div className="text-center">PRODUCT</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/secondhand_list"
              onClick={() => setActiveName('antique')}
              className={['text-center', activeState('antique')]}
            >
              <div>中古市集</div>
              <div className="text-center">ANTIQUE</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/bid"
              onClick={() => setActiveName('bidding')}
              className={['text-center', activeState('bidding')]}
            >
              <div>精品競標</div>
              <div className="text-center">BIDDING</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Workshop"
              onClick={() => setActiveName('Workshop')}
              className={['text-center', activeState('Workshop')]}
            >
              <div>設計學院</div>
              <div className="text-center">WORKSHOP</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/fundhomepage"
              onClick={() => setActiveName('funding')}
              className={['text-center', activeState('funding')]}
            >
              <div>新創募資</div>
              <div className="text-center">FUNDING</div>
            </Nav.Link>
            <Nav.Link
              href="#blog"
              onClick={() => setActiveName('blog')}
              className={['text-center', activeState('blog')]}
            >
              <div>靈感探索</div>
              <div>BLOG</div>
            </Nav.Link>
          </Nav>

          <Nav className="icon_con">
            <Nav.Link as={NavLink} to="#" onClick={() => setShowCart(true)}>
              <AiOutlineShoppingCart className="icon" />
            </Nav.Link>

            {/* 是否登入 ？ 會員中心 : 登入頁 */}
            {isLogged ? (
              <Nav.Link as={NavLink} to="/member-center">
                <AiOutlineUser className="icon" />
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                <AiOutlineUser className="icon" />
              </Nav.Link>
            )}

            {/*  */}

            <AiOutlineUserSwitch
              className="icon"
              onClick={() => {
                dispatch({ type: 'SIGN_IN' })
              }}
            />

            {/*  */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <CartArea showCart={showCart} setShowCart={setShowCart} />
    </>
  )
}

export default MyNavbar
