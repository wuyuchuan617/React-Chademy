import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function ProductSecond(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col second-text">
            <p className="w_comP">
              柔軟的設計、細微的細節以及曲線造型使其不存在視覺欣賞的死角。Henrik
              Pedersen
              的有機設計通過精美的工藝設計加以呈現，將成為您起居室中的標誌性家居。
            </p>
            <p className="w_comP">
              扶手椅採用高支腿設計，突出柔和優雅的表達。也可以選擇旋轉底座，讓您在不起身的情況下朝不同方向轉動椅子。
            </p>
            <p className="w_comP">
              為了確保其始終處於最佳狀態且實現極致舒適度，座墊上貼有 Velcro
              魔術貼以防止滑動。
            </p>
          </div>
          <div className="col-sm-12 col-lg-6 second-photo">
            <img
              src={
                'https://oandd.dk/wp-content/uploads/2018/12/TwoTone_SandBlack_WireDiningChair_OvergaardDyrman_6378-1024x689.jpg'
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductSecond)
