import React from 'react'
import { Form, Input } from 'antd'
function NewsLetter() {
  return (
    <>
      <div className="container-fluid">
        {/* <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">訂閱</div>
            <div className="titleEN lora text-center">Newsletter</div>
          </div>
        </div> */}
        <div className="row justify-content-start w_new_row">
          <div className="col-8 w_newsletter">
            <img src={require('../images/newsletter.png')} alt="" />
            <div className="align-content"></div>
            <span className="titleh-line l1" style={{ width: '30px' }}></span>
            <p className="w_news1">NEWSLETTER</p>
            <span className="titleh-line l2" style={{ width: '30px' }}></span>
            <p className="w_news2">Our Design News in Your Inbox</p>
          </div>
          <div className="col-3 w_newsletter1">
            <div className="formset reviewInput w_news3">
              <label for="productname ">姓名</label>
              <Form.Item name="name">
                <Input
                  type="text"
                  className="formstyleww formwidthw1"
                  // value={orderProductNo}
                  name="order_no"
                  id="productname"
                />
              </Form.Item>
            </div>

            <div className="formset reviewInput w_news3">
              <label for="productname1 ">Email</label>
              <Form.Item name="name">
                <Input
                  type="text"
                  className="formstyleww formwidthw1"
                  // value={orderProductNo}
                  name="order_no"
                  id="productname1"
                />
              </Form.Item>
            </div>
            <div className="btn_lessmargin more w_cart-btn ">訂閱電子報</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
