/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

// ------------------------------以下引入套件----------------------------
import React, { useState, useEffect } from 'react'
import { Rate, message } from 'antd'

// ------------------------以下引入樣式----------------------------
import './index.scoped.scss'
import request from '../../utils/request'
import { useParams } from 'react-router-dom'
// import '../styles/review.css'
import { userInfo } from '../../utils'
// -----------------------以下開始Component Product-----------------

function CommentEdit(props) {
  const { reviewSid } = useParams()

  const [previewPhotoUrl, setPreviewPhotoUrl] = useState('')
  const [reviewComment, setReviewComment] = useState({
    avatar: '',
    buy_product: '',
    name: '',
    photo: '',
    review_comment: '',
    review_sid: 0,
    review_time: '',
    stars: 0,
  })

  const { name } = userInfo()

  let poNO = ''
  let productNO = ''
  // -----------------------以下開始useState狀態設定-----------------

  // 以下六個為demo btn 預設文字
  const [orderProductNo, setOrderProductNo] = useState('')
  const [orderProduct, setOrderProduct] = useState('')
  const [orderNo, setOrderNo] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [reviewTitle, setReviewTitle] = useState('')
  // const [reviewComment, setReviewComment] = useState('')
  // const [photoReturn, setPhotoReturn] = useState({})

  //  存圖片上傳file檔，要fetch form Data
  const [photo, setPhoto] = useState(null)

  //  存圖片回傳後編碼後檔名
  const [previewPhoto, setPreviewPhoto] = useState({})
  console.log('photo' + JSON.stringify(photo))

  //  存星星數字
  const [stars, setStars] = useState(5)

  // ---------------以下開始fetch SQL get data function-----------------

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
      console.log(reviewComment)
    }

    getCommentt()
  }, [])

  // 拿訂單資料

  // 圖片預覽
  async function updateReviewToServer() {
    // const newTotal = { total: total + value }
    const fd = new FormData()
    fd.append('myfile', photo)
    console.log('fd' + JSON.stringify(fd))
    console.log('photo' + JSON.stringify(photo))
    const url = 'http://localhost:3001/man_product/try-upload/'

    const request = new Request(url, {
      method: 'POST',
      body: fd,
      // headers: new Headers({
      //   'Content-Type': 'multipart/form-data',
      //   Accept: 'application/json',
      // }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    const newData = data
    console.log(data)
    console.log(newData.newFileName)

    setPreviewPhoto(newData)
  }

  // useEffect(() => {
  //   updateReviewToServer()
  // }, [photo])

  // get member
  // function getCartFromLocalStorage() {
  //   const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
  //     .sid
  //   const newMemberName = JSON.parse(localStorage.getItem('reduxState')).user
  //     .users.name

  //   console.log('newMember', newMember)
  //   console.log(typeof newMember)
  //   setMember(newMember)
  //   setMemberName(newMemberName)
  // }

  // useEffect(() => {
  //   getCartFromLocalStorage()
  // }, [])

  // 送出表單
  async function handleSubmit(e) {
    e.preventDefault()

    if (!reviewTitle) return message.warn('請輸入評論標題')
    if (!reviewComment) return message.warn('請輸入評論內容')

    const fd = new FormData(document.form1)
    const url = 'http://localhost:3001/man_product/addreview'

    const request = new Request(url, {
      method: 'POST',
      body: fd,
      // headers: new Headers({
      //   'Content-Type': 'multipart/form-data',
      //   Accept: 'application/json',
      // }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    const newData = data
    console.log(data)
    console.log(newData.newFileName)
  }

  const handleClick = () => {
    document.getElementById('file_input').click()
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
                  handleClick()
                }}
              >
                上傳照片
              </div>
            </div>
            {/* <p className="text-center notice">＊可以點選或拖曳上傳圖片</p> */}

            <div className="upload_img">
              <input
                type="hidden"
                id="photo"
                name="photo"
                value={previewPhoto.newFileName}
                className="form-control"
              />
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
                  console.log(e.target.files[0])
                  const newPhoto = e.target.files[0]

                  setPhoto(newPhoto)
                  // await updateReviewToServer()
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
                value={Number(reviewComment.stars)}
                onChange={(e) => {
                  console.log(4444, e)
                  setStars(e)
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
                className="formstyle formwidthw cus_input"
                value={reviewTitle}
                id="price"
                name="review_title"
                onChange={(e) => setReviewTitle(e.target.value)}
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
                style={{ resize: 'none', width: '100%', maxWidth: '368px' }}
                cols="44"
                className="formstyle comment_text_area"
                value={reviewComment.review_comment}
                onChange={(e) => setReviewComment(e.target.value)}
                name="review_comment"
              ></textarea>
            </div>
            <input
              type="submit"
              value="新增評論"
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
