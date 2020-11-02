import React from 'react'
import popularImg from '../images/777.jpg'
import { BsStarFill } from 'react-icons/bs'
import { Rate } from 'antd'

function ProductSeven(props) {
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center title">
          <h3>產品評價</h3>
        </div>
        <div className="row review justify-content-between d-flex">
          <div className="review-photo justify-content-center col-4">
            <img src={popularImg} alt="" />
          </div>
          <div className="col-7">
            <div className="d-flex justify-content-between ">
              <div>
                {/* <div className="stars "> */}
                <Rate
                  disabled
                  allowHalf
                  style={{ color: '#C77334', fontSize: 24 + 'px' }}
                  defaultValue={4.5}
                />
                {/* </div> */}
                <p className="w_reviewSub">把喜歡的美感傳達出去</p>
              </div>
              <div>
                <div className="memberPhoto align-items-end">
                  <img src={popularImg} alt="" />
                </div>
                <p className="w_comP w_review_date">2020.08.08</p>
              </div>
            </div>
            <p className="w_review_comm">
              過去幾年來，我們創作了幾個空間，秉持著NV一向自然、原始、純粹的風格，希望讓大家拋開過去非得要”裝潢”的概念，讓空間載體本身回歸乾淨簡單，再佐上我們為您搭配的歐洲經典傢俱家飾物件，由我們親自設計施作的木作，就是要讓您展現任性、自豪又絕對脫俗的居家品味。“把喜歡的美感傳達出去”
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="more-btn">MORE</button>
        </div>
      </div>
    </>
  )
}

export default ProductSeven
