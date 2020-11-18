import React, { useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import '../styles/slider.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function NoReviewCard(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div
        className="container section"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">新品上市</div>
            <div className="titleEN lora text-center">New Arrivals</div>
          </div>
        </div>
        <Carousel itemsToScroll={1} itemsToShow={1}>
          <div className="row justify-content-center">
            <div className="col-6 w_new_img">
              <img src={require('../images/newbg.jpg')} alt="" />
            </div>
            <div className="col-5 d-flex">
              <div className="product-left-border d-none d-lg-block"></div>
              <div className="ShopTheLook__ProductList">
                <img src={require('../images/new2.jpg')} alt="" />
                <p className="text-center w_ins_title2">栗子棕絨面古董椅</p>
                <p className="text-center w_new_text">
                  從雙手到雙腳都能體驗的細緻觸感、溫潤與冰涼的回饋，整體感受更加迷人，坐在上頭想必也會是愛不釋手。
                </p>
                <div
                  className="btn_lessmargin more w_cart-btn"
                  style={{ marginTop: '40px' }}
                >
                  Check Out
                </div>
              </div>
              <div className="product-right-border d-none d-lg-block"></div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 w_new_img">
              <img src={require('../images/new21.jpg')} alt="" />
            </div>
            <div className="col-5 d-flex">
              <div className="product-left-border d-none d-lg-block"></div>
              <div className="ShopTheLook__ProductList">
                <img src={require('../images/new22.jpg')} alt="" />
                <p className="text-center w_ins_title2">栗子棕絨面古董椅</p>
                <p className="text-center w_new_text">
                  從雙手到雙腳都能體驗的細緻觸感、溫潤與冰涼的回饋，整體感受更加迷人，坐在上頭想必也會是愛不釋手。
                </p>
                <div
                  className="btn_lessmargin more w_cart-btn"
                  style={{ marginTop: '40px' }}
                >
                  Check Out
                </div>
              </div>
              <div className="product-right-border d-none d-lg-block"></div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 w_new_img">
              <img src={require('../images/new31.jpg')} alt="" />
            </div>
            <div className="col-5 d-flex">
              <div className="product-left-border d-none d-lg-block"></div>
              <div className="ShopTheLook__ProductList">
                <img src={require('../images/new32.jpg')} alt="" />
                <p className="text-center w_ins_title2">栗子棕絨面古董椅</p>
                <p className="text-center w_new_text">
                  從雙手到雙腳都能體驗的細緻觸感、溫潤與冰涼的回饋，整體感受更加迷人，坐在上頭想必也會是愛不釋手。
                </p>
                <div
                  className="btn_lessmargin more w_cart-btn"
                  style={{ marginTop: '40px' }}
                >
                  Check Out
                </div>
              </div>
              <div className="product-right-border d-none d-lg-block"></div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 w_new_img">
              <img src={require('../images/new41.jpg')} alt="" />
            </div>
            <div className="col-5 d-flex">
              <div className="product-left-border d-none d-lg-block"></div>
              <div className="ShopTheLook__ProductList">
                <img src={require('../images/new42.jpg')} alt="" />
                <p className="text-center  w_ins_title2">栗子棕絨面古董椅</p>
                <p className="text-center w_new_text">
                  從雙手到雙腳都能體驗的細緻觸感、溫潤與冰涼的回饋，整體感受更加迷人，坐在上頭想必也會是愛不釋手。
                </p>
                <div
                  className="btn_lessmargin more w_cart-btn"
                  style={{ marginTop: '40px' }}
                >
                  Check Out
                </div>
              </div>
              <div className="product-right-border d-none d-lg-block"></div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default NoReviewCard
