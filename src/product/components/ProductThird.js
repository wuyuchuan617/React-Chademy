import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Parallax } from 'rc-scroll-anim'

function ProductThird(props) {
  // const { product, item } = props
  // 0 : close 1 : open
  // const [viewFilter, setViewFilter] = useState(0)

  const [viewSpread, setViewSpread] = useState(true)
  const [viewSpread1, setViewSpread1] = useState(false)
  const [viewSpread2, setViewSpread2] = useState(false)

  // seats1 //sidebarContent
  let sidebarContentShow = {
    display: 'block',
  }

  let sidebarContentHide = {
    display: 'none',
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 third-photo">
            <Parallax
              animation={{ scale: 1 }}
              style={{ transform: 'scale(1.3)', margin: '0px auto' }}
              className="code-box-shape"
            >
              <img src={require('../images/pc3.jpg')} alt="" />
            </Parallax>
          </div>
          <div className="col-sm-12 col-lg-6 ">
            <div className=" refinement seats  " data-refinement-id="seats">
              <div
                className="refinement-toggle js-slide-toggle  is-active"
                data-toggle-element="#seats"
                data-toggle-duration="800"
              >
                <div
                  className="plus1 d-flex justify-content-between"
                  onClick={() => {
                    setViewSpread(!viewSpread)
                    setViewSpread1(false)
                    setViewSpread2(false)
                  }}
                >
                  <div className="refinement-title">產品類別</div>
                  <div className="spreadPlus">+</div>
                </div>
              </div>
              <ul
                className="refinement-list scrollable seats3"
                id="seats1"
                aria-hidden="false"
                style={viewSpread ? sidebarContentShow : sidebarContentHide}
              >
                <p className="w_comP">
                  柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
                  Pedersen
                  的有機設計通過精美的工藝設計加以呈現，將成為您起居室中的標誌性家居。
                  扶手椅採用高支腿設計，突出柔和優雅的表達。也可以選擇旋轉底座，讓您在不起身的情況下朝不同方向轉動椅子。
                  為了確保其始終處於最佳狀態且實現極致舒適度，座墊上貼有 Velcro
                  魔術貼以防止滑動。
                </p>
              </ul>
            </div>

            <div className=" refinement seats  " data-refinement-id="seats">
              <div
                className="refinement-toggle js-slide-toggle  is-active"
                data-toggle-element="#seats"
                data-toggle-duration="800"
              >
                <div
                  className="plus1 d-flex justify-content-between"
                  onClick={() => {
                    setViewSpread1(!viewSpread1)
                    setViewSpread(false)
                    setViewSpread2(false)
                  }}
                >
                  <div className="refinement-title">產品類別</div>
                  <div className="spreadPlus">+</div>
                </div>
              </div>
              <ul
                className="refinement-list scrollable seats3"
                id="seats1"
                aria-hidden="false"
                style={viewSpread1 ? sidebarContentShow : sidebarContentHide}
              >
                <p className="w_comP">
                  柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
                  Pedersen
                  的有機設計通過精美的工藝設計加以呈現，將成為您起居室中的標誌性家居。
                  扶手椅採用高支腿設計，突出柔和優雅的表達。也可以選擇旋轉底座，讓您在不起身的情況下朝不同方向轉動椅子。
                  為了確保其始終處於最佳狀態且實現極致舒適度，座墊上貼有 Velcro
                  魔術貼以防止滑動。
                </p>
              </ul>
            </div>

            <div className=" refinement seats  " data-refinement-id="seats">
              <div
                className="refinement-toggle js-slide-toggle  is-active"
                data-toggle-element="#seats"
                data-toggle-duration="800"
              >
                <div
                  className="plus1 d-flex justify-content-between"
                  onClick={() => {
                    setViewSpread2(!viewSpread2)
                    setViewSpread(false)
                    setViewSpread1(false)
                  }}
                >
                  <div className="refinement-title">產品類別</div>
                  <div className="spreadPlus">+</div>
                </div>
              </div>
              <ul
                className="refinement-list scrollable seats3"
                id="seats1"
                aria-hidden="false"
                style={viewSpread2 ? sidebarContentShow : sidebarContentHide}
              >
                <p className="w_comP">
                  柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
                  Pedersen
                  的有機設計通過精美的工藝設計加以呈現，將成為您起居室中的標誌性家居。
                  扶手椅採用高支腿設計，突出柔和優雅的表達。也可以選擇旋轉底座，讓您在不起身的情況下朝不同方向轉動椅子。
                  為了確保其始終處於最佳狀態且實現極致舒適度，座墊上貼有 Velcro
                  魔術貼以防止滑動。
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductThird)
