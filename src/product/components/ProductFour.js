import React from 'react'
import { withRouter } from 'react-router-dom'
import { Parallax } from 'rc-scroll-anim'

function ProductFour(props) {
  const { product } = props
  console.log(product)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 fourth-photo">
            <Parallax
              animation={[
                { x: 0, opacity: 1, playScale: [0, 0.2] },
                { y: 0, playScale: [0, 0.3] },
                { blur: '0px', playScale: [0, 0.2] },
              ]}
              style={{
                transform: 'translateY(-80px)',
                filter: 'blur(3px)',
                opacity: 0,
              }}
              className="code-box-shape"
            >
              <img src={require('../images/pc4.jpg')} alt="" />
            </Parallax>
          </div>
          <div className="col">
            <Parallax
              animation={[
                { x: 0, opacity: 1, playScale: [0, 0.2] },
                { y: 0, playScale: [0, 0.3] },
                { blur: '0px', playScale: [0, 0.2] },
              ]}
              style={{
                transform: 'translateY(-80px)',
                filter: 'blur(1px)',
                opacity: 0,
              }}
              className="code-box-shape"
            >
              <div className="quote">
                <p>
                  “Creating a space that feels comfortably and authentically you
                  is to create a home that tells a story of you.”
                </p>
              </div>
              <div className="author">
                <p>Alper Hermann</p>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductFour)
