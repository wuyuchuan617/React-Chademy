import React from 'react'

function TextArea() {
  return (
    <div className="i_text_area">
      <div className="i_product_set">
        <div className="i_product_name">Veddor</div>
        <div className="i_product_no">ch001</div>
        <div className="i_like">♥︎</div>
      </div>
      <div className="i_product_description mt-5">
        <p>
          靈感來自大自然的Ottawa餐椅，樹葉的造型和曲線設計，讓它成為獨一無二的設計傢具。坐下的瞬間您便會發現，Ottawa餐椅不僅擁有特別的外型，還無比舒適。
          同時，無包覆的塑型椅身，突顯了俐落線條和簡約樣式。
        </p>
      </div>
      <div className="i_price_set d-flex justify-content-between mt-5">
        <div className="i_price_name">
          <p>商品價格</p>
        </div>
        <div className="i_price">
          <p>NT2,480</p>
        </div>
      </div>
      <div className="i_btn5 text-center mt-4">加入購物車</div>
    </div>
  )
}

export default TextArea
