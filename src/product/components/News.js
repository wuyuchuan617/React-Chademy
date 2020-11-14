import React, { useState } from 'react'
import { Drawer } from 'antd'
function News(props) {
  const [drawerw, setDrawerw] = useState(false)

  const online = (
    <div>
      <p className="titleEN lora text-center w_online_text">
        2021年度型錄全新登場！可在Chademy官方網站搶先看線上版本，8月19日起也可到店內免費索取。今年新型錄設定為「讓生活更美好的居家指南」。
      </p>
      <div
        className="btn_lessmargin more w_cart-btn w_online-btn "
        onClick={() => {
          setDrawerw(true)
        }}
      >
        <a
          href="https://oandd.dk/wp-content/uploads/2020/05/Catalogue-Overgaard-Dyrman-2020.pdf"
          target="_blank"
        >
          線上看
        </a>
      </div>
    </div>
  )

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">年度型錄</div>
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
              領取最新型錄
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
              width={450}
            >
              <div className="w_join_member">
                <p className="titleEN lora text-center">
                  如何成為每年8月份年度型錄寄送對象?
                </p>
                <div className="w_join_cata">
                  <p className="titleEN lora text-left">1. 成為Chademy會員</p>
                  <p className="titleEN lora text-left">
                    2. 去年5月16日至今年4月30日消費
                  </p>
                  <p className="titleEN lora text-left">
                    3. 4月30日前確認會員資料是否正確(收件人姓名、地址)
                  </p>
                </div>

                <div
                  className="btn_lessmargin more w_online-btn "
                  onClick={() => {
                    setDrawerw(true)
                  }}
                >
                  現在就加入會員
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
