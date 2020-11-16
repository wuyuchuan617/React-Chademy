import React from 'react'
import { withRouter } from 'react-router-dom'

function CustomCard(props) {
  // const { item } = props

  return (
    <>
      <div className="container section" id="w_custom_link">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">創意客製</div>
            <div className="titleEN lora text-center">Custom Chair</div>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-3">
            <div className="w_custom_small">
              <img src={require('../images/cu1.jpg')} alt="" />
            </div>
            <div className="w_custom_small">
              <img src={require('../images/cu2.jpg')} alt="" />
            </div>
          </div>

          <div className="col-6">
            <div className="w_custom_text titleEN lora text-center">
              <p>Create a chair that tells a story of you.</p>
            </div>
            <div className="w_custom_big">
              <img src={require('../images/cu0.jpg')} alt="" />
            </div>

            <div
              className="btn_lessmargin more w_custon_btn  w_cart-btn"
              onClick={() => {
                props.history.push('/custom')
              }}
            >
              前往訂製
            </div>
          </div>

          <div className="col-3">
            <div className="w_custom_small">
              <img src={require('../images/cu3.png')} alt="" />
            </div>
            <div className="w_custom_small">
              <img src={require('../images/cu4.jpg')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(CustomCard)
