// ------------------------------ 以下引入套件 ----------------------------
import React, { useState, useEffect } from 'react'
import { Rate, message } from 'antd'
import { useParams } from 'react-router-dom'

// ------------------------ 以下引入樣式 ----------------------------
import './index.scoped.scss'

// ------------------------ 以下引入輔助函式 ----------------------------
import request from '../../utils/request'
import { userInfo } from '../../utils'
// import '../styles/review.css'
// ----------------------- 以下開始 CommentEdit Component -----------------

function CommentEdit(props) {
  const { reviewSid } = useParams()
  const { name } = userInfo()

  // ----------------------- 以下開始useState狀態設定 -----------------
  const [previewPhotoUrl, setPreviewPhotoUrl] = useState('')
  const [reviewComment, setReviewComment] = useState({
    avatar: '',
    buy_product: '',
    name: '',
    photo: '',
    review_comment: '',
    review_sid: 0,
    review_time: '',
    stars: 5,
  })

  // --------------- 以下開始 fetch data -----------------
  useEffect(() => {
    async function getCommentt() {
      const response = await request({
        url: `/members/getCommentt/${reviewSid}`,
        method: 'Get',
      })
      const { success, data } = response

      if (success) {
        setReviewComment(data) // 設定評論資料
        setPreviewPhotoUrl(data.photo) // 設定評論圖片
      }
    }

    getCommentt()
  }, [reviewSid])

  // 拿訂單資料

  // 圖片預覽
  async function updateReviewToServer(photo) {
    const formData = new FormData()
    formData.append('myfile', photo)

    const response = await fetch(
      'http://localhost:3001/man_product/try-upload/',
      {
        method: 'POST',
        body: formData,
      }
    )
    const data = await response.json()

    // 如果為真則設定評論圖片
    data.newFileName && setPreviewPhotoUrl(data.newFileName)
  }

  async function updateCommentt(comment) {
    const response = await request({
      url: `/members/updateCommentt`,
      method: 'POST',
      data: { ...comment, photo: previewPhotoUrl }, // 傳送評論資料(預覽的圖片放進去)
    })
    const { success } = response

    success ? message.success(response.msg) : message.error(response.msg)

    // if (!success) {
    //   message.error(response.msg)
    // } else {
    //   message.success(response.msg)
    // }
  }

  // 送出表單
  async function handleSubmit(e) {
    e.preventDefault()
    updateCommentt(reviewComment)
  }

  // -----------------------------以下開始 JSX 畫面-----------------

  return (
    <>
      <div className=" text-center my-2">
        {/* <p>新增評論</p> */}
        <p>您好， {name}感謝您的購買</p>
      </div>
      <form
        className="CommentEdit_container"
        action=""
        name="form1"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="form_inside_container">
          {/* <div className="col-lg-5 col-sm-12"> */}
          <div className="left_wrapper">
            <div className="upload_block">
              <div
                className="btn2 text-center"
                onClick={() => {
                  document.getElementById('file_input').click()
                }}
              >
                上傳照片
              </div>
            </div>
            {/* <p className="text-center notice">＊可以點選或拖曳上傳圖片</p> */}

            <div className="upload_img">
              <img
                src={`${window.location.origin}/img/${previewPhotoUrl}`}
                alt="previewPhotoUrl"
              />
              <input
                type="file"
                id="file_input"
                // name="myfile"
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target.files.length > 0)
                    updateReviewToServer(e.target.files[0])
                }}
              />
            </div>
          </div>
          <div className="right_wrapper">
            {/* <form className="formcss" action=""> */}
            <div className="d-flex justify-content-between">
              <div className="formset reviewInput">
                <label htmlFor="productname">商品名稱</label>
                <input
                  type="text"
                  className="formstyle formwidthw1"
                  value={reviewComment.buy_product}
                  id="productname"
                  name="buy_product"
                  readOnly
                />
              </div>
              <div className="formset reviewInput">
                <label htmlFor="productname">訂單編號</label>
                <input
                  type="text"
                  className="formstyle formwidthw1"
                  value={reviewComment.order_no}
                  name="order_no"
                  id="productname"
                  readOnly
                />
              </div>
            </div>

            <div className="reviewStars d-flex">
              <Rate
                style={{ color: '#C77334' }}
                value={reviewComment.stars}
                onChange={(number) => {
                  setReviewComment({
                    ...reviewComment,
                    stars: number,
                  })
                }}
              />
            </div>

            <input
              type="hidden"
              name="stars"
              value={reviewComment.stars}
              className="form-control"
            />

            <div className="formset">
              <label htmlFor="price">評論標題</label>
              <input
                type="text"
                style={{ width: '100%', maxWidth: '500px' }}
                className="formstyle formwidthw cus_input"
                value={reviewComment.review_title}
                id="price"
                name="review_title"
                onChange={(event) =>
                  setReviewComment({
                    ...reviewComment,
                    review_title: event.target.value,
                  })
                }
              />
            </div>

            <input
              type="hidden"
              name="category"
              value={1}
              className="form-control"
            />

            <div className="formset textareaRewiew">
              <label htmlFor="description">商品評論</label>
              <textarea
                rows="10"
                style={{ resize: 'none', width: '100%', maxWidth: '500px' }}
                cols="44"
                className="formstyle comment_text_area"
                value={reviewComment.review_comment}
                onChange={(event) =>
                  setReviewComment({
                    ...reviewComment,
                    review_comment: event.target.value,
                  })
                }
                name="review_comment"
              ></textarea>
            </div>
            <input
              type="submit"
              value="編輯評論"
              className="btnReview text-center mt-4"
            />
          </div>
        </div>
      </form>
    </>
  )
}

// ---------------以下輸出component-----------------

export default CommentEdit
