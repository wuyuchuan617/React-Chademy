import React from 'react'

function TextArea() {
  return (
    <div className="col-lg-6 col-sm-12">
      <form className="i_formcss" action="">
        <div className="i_formset">
          <label for="productname">商品名稱</label>
          <input
            type="text"
            className="i_formstyle i_formwidth"
            value=""
            id="productname"
          />
        </div>
        <div className="i_formset">
          <label for="product_no">商品編號</label>
          <input
            type="text"
            className="i_formstyle i_formwidth"
            value=""
            id="product_no"
          />
        </div>
        <div className="i_formset">
          <label for="price">價錢</label>
          <input
            type="text"
            className="i_formstyle i_formwidth"
            value=""
            id="price"
          />
        </div>
        <div className="i_formset">
          <label for="stock">商品數量</label>
          <input
            type="text"
            className="i_formstyle i_formwidth"
            value=""
            id="stock"
          />
        </div>
        <div className="i_formset">
          <label for="description">商品描述</label>
          <textarea rows="4" cols="48" className="i_formstyle "></textarea>
        </div>
        <div className="i_formset">
          <label for="conditions">商品種類</label>
          <select id="conditions" className="i_formstyle i_formwidth">
            <option>高腳椅</option>
            <option>扶手椅</option>
            <option>單椅</option>
            <option>餐椅</option>
            <option>沙發椅</option>
          </select>
        </div>
        <div className="i_formset">
          <label for="frame">骨架</label>
          <div className="i_radioset">
            <input
              type="radio"
              name="frame"
              className="i_formstyle i_radiomargin"
              value=""
            />
            木頭
          </div>
          <div className="i_radioset">
            <input
              type="radio"
              name="frame"
              className="i_formstyle i_radiomargin"
              value=""
            />
            金屬
          </div>
          <div className="i_radioset">
            <input
              type="radio"
              name="frame"
              className="i_formstyle i_radiomargin"
              value=""
            />
            塑膠
          </div>
        </div>
        <hr />
        <div className="i_formset">
          <label for="material">材質</label>
          <div className="i_radioset">
            <input
              type="radio"
              name="material"
              className="i_formstyle i_radiomargin"
              value=""
            />
            布料
          </div>
          <div className="i_radioset">
            <input
              type="radio"
              name="material"
              className="i_formstyle i_radiomargin"
              value=""
            />
            皮革
          </div>
          <div className="i_radioset">
            <input
              type="radio"
              name="material"
              className="i_formstyle i_radiomargin"
              value=""
            />
            木質
          </div>
        </div>
        <hr />
        <div className="i_formset">
          <label for="conditions">商品狀況</label>
          <div className=" i_radioset">
            <input
              type="radio"
              name="conditions"
              className="i_formstyle i_radiomargin"
              value=""
            />
            九成新
          </div>
          <div className="i_radioset">
            <input
              type="radio"
              name="conditions"
              className="i_formstyle i_radiomargin"
              value=""
            />
            八成新
          </div>
          <div className="i_radioset">
            <input
              type="radio"
              name="conditions"
              className="i_formstyle i_radiomargin"
              value=""
            />
            七成新
          </div>
        </div>
        <div className="i_btn3 text-center mt-4">新增商品</div>
      </form>
    </div>
  )
}

export default TextArea
