import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductFive(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div className="container">
        <div className="row post-abs">
          <div className="top-area"></div>
          <div className="top-area">
            <h3>WHO WE ARE</h3>
            <p>Founded On Friendship, Guided By Curiosity</p>
          </div>
          <div className="designer-photo">
            <img src={require('../images/founder.jpg')} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="sec-area"></div>
          <div className="sec-area">
            <p className="w_comP">
              柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
              Pedersen
              的有機設計通過精美的工藝設計加以呈現，將成為您起居室中的標誌性家居。
              扶手椅採用高支腿設計，突出柔和優雅的表達。也可以選擇旋轉底座，讓您在不起身的情況下朝不同方向轉動椅子。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductFive)
