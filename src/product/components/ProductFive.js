import React from 'react'
import { withRouter } from 'react-router-dom'
import { Parallax } from 'rc-scroll-anim'

function ProductFive(props) {
  const { product } = props
  console.log(product)

  return (
    <>
      <div className="container">
        <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(500px)', margin: '10px auto' }}
          className="code-box-shape"
        >
          <div className="row w_float_text">
            <div
              class="wwd w-big-text"
              style={{
                top: '0px',
                left: '0%',
                transform: 'translate3d(-61px, 0px, 0px)',
              }}
            >
              What we do &amp; love.
            </div>
          </div>
        </Parallax>
        {/* <Parallax
          animation={{ y: 100, opacity: 1, playScale: [0, 0.8] }}
          style={{ transform: 'translateY(350px)', margin: '10px auto' }}
          className="code-box-shape"
        >
          <div className="row w_float_circle">
            <div
              class="wwd-circle"
              style={{
                position: 'absolute',
                backgroundColor: '#212529',
                borderRadius: '50%',
                height: ' 549px',
                width: '549px',
                top: '400px',
                left: '-100px',
                zIndex: '-5',
                transform: 'translate(0px, -520px)',
                opacity: '0.25',
                transition:
                  'transform 750ms ease-out 0s, opacity 750ms ease-out 0s',
              }}
            ></div>
          </div>
        </Parallax> */}
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

        {/* <Parallax
          animation={{ y: 0 }}
          style={{ transform: 'translateY(200px)', margin: '10px auto' }}
          className="code-box-shape"
        >
          <div className="row w_float_circle">
            <div
              class="wwd-circle"
              style={{
                position: 'absolute',
                backgroundColor: 'rgb(155, 217, 217)',
                borderRadius: '50%',
                height: ' 549px',
                width: '549px',
                top: '-200px',
                right: '-100px',
                zIndex: '-1',
                transform: 'translate(0px, -520px)',
                opacity: '0.25',
                transition:
                  'transform 750ms ease-out 0s, opacity 750ms ease-out 0s',
              }}
            ></div>
          </div>
        </Parallax> */}
      </div>
    </>
  )
}

export default withRouter(ProductFive)
