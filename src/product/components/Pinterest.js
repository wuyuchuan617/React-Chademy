import React from 'react'

function Pinterest(props) {
  return (
    <>
      <div className="container">
        {/* <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">Instagrem</div>
            <div className="titleEN lora text-center">Tag us on Instagram</div>
          </div>
        </div> */}
        <div className="row justify-content-center">
          <div style={{ textAlign: 'center' }}>
            <span
              class="PIN_1605466003322_embed_grid PIN_1605466003322_c3 PIN_1605466003322_board"
              data-pin-log="embed_grid"
              data-pin-href="https://www.pinterest.com"
              style={{ width: '751px' }}
            >
              <span
                class="PIN_1605466003322_hd"
                data-pin-href="https://www.pinterest.com/fredericiafurniture/"
                data-pin-log="embed_grid"
              >
                <span
                  class="PIN_1605466003322_pinner text-center"
                  src={require('../images/logo.svg')}
                  data-pin-log="embed_grid"
                >
                  &CHADEMY
                </span>
                <span
                  class="PIN_1605466003322_board text-center"
                  data-pin-href="https://www.pinterest.com/fredericiafurniture/the-spanish-collection-i-fredericia-furniture/"
                  data-pin-log="embed_grid"
                >
                  Created to Inspire I Crafted to Last
                </span>
              </span>
              <span
                class="PIN_1605466003322_bd"
                data-pin-href="https://www.pinterest.com"
                data-pin-log="embed_grid"
                style={{ height: '550px' }}
              >
                <span
                  class="PIN_1605466003322_ct"
                  data-pin-href="https://www.pinterest.com"
                  data-pin-log="embed_grid"
                >
                  <span
                    // class="PIN_1605466003322_col"
                    data-pin-href="https://www.pinterest.com"
                    data-pin-log="embed_grid"
                  >
                    {/* <span
                      class="PIN_1605466003322_img"
                      data-pin-href="https://www.pinterest.com/pin/149533650117008157"
                      data-pin-log="embed_grid"
                      style={{
                        backgroundImage:
                          'url("https://i.pinimg.com/237x/93/1d/91/931d91ad83d8ef8e6d54ad4f32c2a128.jpg',
                        backgroundColor: 'rgb(203, 202, 200',
                        paddingBottom: '149.78902953586498%',
                      }}
                    ></span> */}
                    <div className="row reviewNO justify-content-between d-flex">
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps3.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps4.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps5.jpg')} alt="" />
                      </div>
                    </div>

                    <div className="row reviewNO justify-content-between d-flex">
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps6.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps7.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps8.jpg')} alt="" />
                      </div>
                    </div>

                    <div className="row reviewNO justify-content-between d-flex">
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps9.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps1.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps2.jpg')} alt="" />
                      </div>
                    </div>
                    <div className="row reviewNO justify-content-between d-flex">
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps3.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps4.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps5.jpg')} alt="" />
                      </div>
                    </div>
                    <div className="row reviewNO justify-content-between d-flex">
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps6.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps7.jpg')} alt="" />
                      </div>
                      <div className="review-photo justify-content-center col">
                        <img src={require('../images/ps8.jpg')} alt="" />
                      </div>
                    </div>
                  </span>
                </span>
              </span>
              <span
                class="PIN_1605466003322_ft"
                data-pin-href="https://www.pinterest.com/fredericiafurniture/the-spanish-collection-i-fredericia-furniture/follow/?guid=9FKh783Fkecg"
                data-pin-log="embed_user_ft"
              >
                {/* <div className="btn_lessmargin more w_cart-btn w_pin_btn">FOLLOW US</div> */}
                <span
                  class="PIN_1605466003322_button"
                  data-pin-href="https://www.pinterest.com/fredericiafurniture/the-spanish-collection-i-fredericia-furniture/follow/?guid=9FKh783Fkecg"
                  data-pin-log="embed_user_ft"
                >
                  <span
                    class="PIN_1605466003322_label PIN_1605466003322_bottom"
                    data-pin-href="https://www.pinterest.com/fredericiafurniture/the-spanish-collection-i-fredericia-furniture/follow/?guid=9FKh783Fkecg"
                    data-pin-log="embed_user_ft"
                  >
                    <span
                      class="PIN_1605466003322_string"
                      data-pin-href="https://www.pinterest.com/fredericiafurniture/the-spanish-collection-i-fredericia-furniture/follow/?guid=9FKh783Fkecg"
                      data-pin-log="embed_board_ft"
                    >
                      Follow Us
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pinterest
