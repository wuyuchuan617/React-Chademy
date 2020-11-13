import React from 'react'

function NewsLetter() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-start w_new_row">
          <div className="col-8 w_newsletter">
            <img src={require('../images/newsletter.png')} alt="" />
            <div className="align-content"></div>
            <span class="titleh-line l1" style={{ width: '30px' }}></span>
            <p className="w_news1">NEWSLETTER</p>
            <span class="titleh-line l2" style={{ width: '30px' }}></span>
            <p className="w_news2">Our Design News in Your Inbox</p>
          </div>
          <div className="col-3 w_newsletter1">
            <div className="formset reviewInput w_news3">
              <label for="productname ">姓名</label>
              <input
                type="text"
                className="formstyleww formwidthw1"
                // value={orderProductNo}
                name="order_no"
                id="productname"
              />
            </div>
            <div className="formset reviewInput w_news3">
              <label for="productname ">Email</label>
              <input
                type="text"
                className="formstyleww formwidthw1"
                // value={orderProductNo}
                name="order_no"
                id="productname"
              />
            </div>
            <div className="btn_lessmargin more w_cart-btn ">訂閱電子報</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
