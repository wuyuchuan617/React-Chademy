import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'

import { Menu, Dropdown, message } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

import request from '../../utils/request'
import logo from '../images/logo.svg'

// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'

import CartArea from '../../cart/components/CartArea'
//購物車數字
import { Badge } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

function MyNavbar(props) {
  const {
    cartamount,
    setCartAmount,
    activeName,
    setActiveName,
    navbarHeight,
    setNavbarHeight,
    scrollY,
    scrollDirection,
    resetShow,
    setResetShow,
  } = props
  const [clickcart, setClickCart] = useState(false)

  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'
    // console.log(JSON.parse(newCart))
    const newCart2 = JSON.parse(newCart)
    console.log(newCart2.length)
    setCartAmount(newCart2.length)
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    getCartFromLocalStorage()
  }, [cartamount])

  const dispatch = useDispatch()

  const [showCart, setShowCart] = useState(false)
  const isDown = scrollDirection === 'DOWN'
  const over100px = scrollY < -100
  const navbarPosition =
    !activeName && isDown && over100px ? `-${navbarHeight}px` : 0

  const activeState = (name) =>
    name === activeName ? 'navbar_item_is_active' : ''

  // 登入的狀態
  const isLogged = useSelector((state) => state.user.logged)

  // 使用者物件
  const user = useSelector((state) => state.user)
  const { name } = user.users || {}

  let history = useHistory()

  const handleLogout = () => {
    // 登出
    const logout = () => {
      dispatch({ type: 'SIGN_OUT' })

      setTimeout(() => {
        history.push('/')
      }, 300)
    }

    request({ url: 'members/logout', method: 'POST' })
      .then(() => {
        message.success('登出成功')
        logout()
      })
      .catch(() => logout())
  }

  return (
    <>
      <Navbar
        ref={(element) => {
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
        className={`navbar_container ${activeName ? 'show_bg' : ''}`}
      >
        <Navbar.Brand
          // onClick={() => setActiveName('')}
          as={NavLink}
          to="/"
          className="logo_brand"
        >
          <div className="logologo"></div>
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
          <Nav
            onMouseEnter={() => setActiveName('about')}
            onMouseLeave={() => setActiveName('')}
            className="navbar_list justify-content-between text"
          >
            <Nav.Link
              as={NavLink}
              to="/Brand"
              // onClick={() => setActiveName('Brand')}
              className={['text-center', activeState('Brand')]}
            >
              <div>品牌故事</div>
              <div className="text-center">ABOUT</div>
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/productlist"
              // onClick={() => setActiveName('product')}
              className={['text-center', activeState('product')]}
            >
              <div>經典產品</div>
              <div className="text-center">PRODUCT</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/secondhand_list"
              // onClick={() => setActiveName('antique')}
              className={['text-center', activeState('antique')]}
            >
              <div>中古市集</div>
              <div className="text-center">ANTIQUE</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/pages/bid"
              // onClick={() => setActiveName('bidding')}
              className={['text-center', activeState('bidding')]}
            >
              <div>精品競標</div>
              <div className="text-center">BIDDING</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Workshop"
              // onClick={() => setActiveName('Workshop')}
              className={[
                'openPreview',
                'text-center',
                activeState('Workshop'),
              ]}
            >
              <div>設計學院</div>
              <div className="text-center">WORKSHOP</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/fundhomepage"
              // onClick={() => setActiveName('funding')}
              className={['text-center', activeState('funding')]}
            >
              <div>新創募資</div>
              <div className="text-center">FUNDING</div>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Blog"
              // onClick={() => setActiveName('Blog')}
              className={['text-center', activeState('Blog')]}
            >
              <div>靈感探索</div>
              <div>BLOG</div>
            </Nav.Link>
          </Nav>

          <Nav className="icon_con">
            <Nav.Link
              style={{ display: 'none' }}
              as={NavLink}
              to="#"
              onClick={async () => {
                const response = await request({
                  url: 'members/loginTest',
                  method: 'POST',
                  data: {},
                })

                console.log(' 測試 response:', response)
              }}
            >
              <AiOutlineShoppingCart className="icon" />
            </Nav.Link>
            <Badge count={cartamount}>
              <Nav.Link
                as={NavLink}
                to="#"
                onClick={() => {
                  setShowCart(true)
                  setClickCart(true)
                }}
              >
                <AiOutlineShoppingCart className="icon" />
              </Nav.Link>
            </Badge>

            {/* 是否登入 ？ 下拉選單(會員中心/登出) : 登入頁 */}
            {isLogged ? (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <Nav.Link as={NavLink} to="/member-center">
                        <AiOutlineUser />
                        會員中心
                      </Nav.Link>
                    </Menu.Item>
                    <Menu.Item onClick={handleLogout}>
                      <LogoutOutlined />
                      登出
                    </Menu.Item>
                  </Menu>
                }
              >
                <div>
                  <AiOutlineUser
                    className="icon"
                    style={{ margin: '8px' }}
                    onClick={(e) => e.preventDefault()}
                  />
                  {/* 使用者 name */}
                  {name}
                </div>
              </Dropdown>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                <AiOutlineUser className="icon" />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {clickcart ? (
        <CartArea
          showCart={showCart}
          setShowCart={setShowCart}
          cartamount={cartamount}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default MyNavbar
