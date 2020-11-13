import React, { useState } from 'react'
import { Drawer, Button } from 'antd'
function News(props) {
  const [drawerw, setDrawerw] = useState(false)

  const online = (
    <div>
      <p>線上看</p>
      <div
        className="btn_lessmargin more w_cart-btn w_online-btn"
        onClick={() => {
          setDrawerw(true)
        }}
      >
        <a
          href="https://oandd.dk/wp-content/uploads/2020/05/Catalogue-Overgaard-Dyrman-2020.pdf"
          target="_blank"
        >
          Subscribe
        </a>
      </div>
    </div>
  )

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">年度目錄</div>
            <div className="titleEN lora text-center">Catalog</div>
          </div>
        </div>
        <div className="row">
          <div className="col site-drawer-render-in-current-wrapper">
            <div
              className="btn_lessmargin more w_cart-btn w_news-btn"
              onClick={() => {
                setDrawerw(true)
              }}
            >
              Subscribe
            </div>
            <Drawer
              title={online}
              placement="right"
              closable={false}
              onClose={() => {
                setDrawerw(false)
              }}
              visible={drawerw}
              getContainer={false}
              style={{ position: 'absolute' }}
              width={500}
            >
              <div
                className="btn_lessmargin more w_online-btn "
                onClick={() => {
                  setDrawerw(true)
                }}
              >
                Subscribe
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
