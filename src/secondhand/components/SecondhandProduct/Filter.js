/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Filter() {
  const [show, setShow] = useState(false)
  return (
    <div className="row">
      <div className="i_detail">
        <div className="i_filter">
          <div className="i_list d-flex justify-content-between align-items-center pl-3 ">
            <p className="mr-5 mt-3">賣家資訊</p>
            <p className="mr-3 mt-3">＋</p>
          </div>

          <div
            className="i_list d-flex justify-content-between align-items-center pr-3 pl-3"
            onClick={() => {
              setShow(!show)
            }}
          >
            <p className="mr-5 mt-3">購買須知</p>
            <p className="ml-5 mt-3">＋</p>
          </div>
          {show && (
            <div className="i_info ml-3">
              <div className="i_title mb-3 mt-5">配送費</div>
              <div className="i_text">
                <p>
                  我們的標準配送費為NT$1,700起，並將依照送貨地點的所在城市而有不同。
                </p>
                <p>
                  如果商品總額超過NT$200,000，可享大台北地區免費送貨乙次(大台北地區以外，採折抵NT$1,700方式)。
                </p>
                <p>
                  選擇門市和送貨方式後，可在結帳時查看訂單總額。有關送貨和組裝選項的更多資訊，請點擊此處。
                </p>
              </div>
              <div className="i_title mb-3 mt-5">更改或取消訂單</div>
              <div className="i_text">
                <p>
                  如果您下單後改變主意，可在24小時內取消或更改訂單。但對於訂製物品，您必須在12小時內取消或更改訂單。(僅限線上門市，不適用於實體門市)。
                </p>
              </div>
              <div className="i_title mb-3 mt-5">送貨時間</div>
              <div className="i_text">
                <p>
                  CHADEMY大部份的產品皆無庫存，因為我們的大多數傢具都是為您和您的家而訂製。
                </p>
                <p>
                  我們正常的交貨期為：傢具類商品交期約8-12週，燈飾類商品的交期約8-16週，地毯類商品的交期約4-8週。（除特殊狀況，一般來說您訂單中的所有物品將同時送貨）。活動檔期之商品，因全球供貨需求增加，交期有可能會額外延長約4-8週。
                </p>
              </div>
              <div className="i_title mb-3 mt-5">退貨與換貨</div>
              <div className="i_text">
                <p>
                  很抱歉，由於商品為依照您的需求所下訂，下單後CHADEMY不提供退貨服務，僅提供等值商品更換，或是補差額更換更高價商品。在未經拆封及使用的狀況之下，如需換貨，請於購買日起3日內，請先聯絡我們的門市，並攜帶商品及原購物發票至門市，我們的門市人員將協助您辦理換貨。若發票遺失，恕不提供換貨服務，敬請見諒。
                </p>
              </div>
              <div className="i_title mb-3 mt-5">免責聲明</div>
              <div className="i_text">
                <p>
                  我們的部分圖案為 3D
                  演示，可能會與實際產品有微小差異。在不同設備上查看，產品的顏色復原度可能也會不同。
                </p>
              </div>
              <div className="i_title mb-3 mt-5">價格和付款方式</div>
              <div className="i_text">
                <p>
                  網站上顯示的所有價格均為以新台幣為單位的建議零售價，並已包含稅金。
                </p>
                <p>我們接受VISA卡、Master卡、JCB卡、美國運通卡、銀聯卡。</p>
              </div>
              <div className="i_title mb-3 mt-5">條款與條件</div>
              <div className="i_text">
                <p>
                  如果您對訂單內容有任何疑問，請閱讀我們的購物須知或聯繫我們。我們隨時準備為您
                  <a
                    href="#"
                    style={{ color: '#475050', textDecoration: 'underline' }}
                  >
                    提供協助
                  </a>
                  。
                </p>
              </div>
            </div>
          )}

          <div className="i_border_bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Filter
