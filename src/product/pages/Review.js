import React, { useState, useEffect } from 'react'
import '../styles/review.css'
import { Rate, Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

function Review() {
  const [orderProductNo, setOrderProductNo] = useState('')
  const [orderProduct, setOrderProduct] = useState('')
  const [orderNo, setOrderNo] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [reviewTitle, setReviewTitle] = useState('')
  const [reviewComment, setReviewComment] = useState('')
  // const [photoReturn, setPhotoReturn] = useState({})

  const [photo, setPhoto] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState({})
  console.log('photo' + JSON.stringify(photo))

  // 圖片預覽
  async function updateReviewToServer() {
    // const newTotal = { total: total + value }
    const fd = new FormData()
    fd.append('myfile', photo)
    console.log('fd' + JSON.stringify(fd))
    console.log('photo' + JSON.stringify(photo))
    const url = 'http://localhost:3001/man_product/try-upload'

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
    // console.log(previewPhoto.newFileName)
    // setPreviewPhoto(data)

    //   // 驗証成功後再設定…
    //   setTotal(total + value)
    // } catch (error) {
    //   setError(error)
    // }
  }
  console.log('previewPhoto.newFileName' + previewPhoto.newFileName)

  useEffect(() => {
    updateReviewToServer()
  }, [photo])

  // const [formDone, setFormDone] = useState(false)
  const [writePhoto, setWritePhoto] = useState('')
  const [writeProduct, setWriteProduct] = useState('')
  const [writeOrder, setWriteOrder] = useState('')
  const [stars, setStars] = useState(5)
  const [writeTitle, setWriteTitle] = useState('')
  const [writeComment, setWriteComment] = useState('')
  const [writeMember, setWriteMember] = useState('AMY')

  async function handleSubmit(e) {
    e.preventDefault()
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

  return (
    <>
      <div className="container custom-container-width">
        <div className=" text-center m-5">
          <p>新增評論</p>
          <p>您好，Amy 感謝您的購買</p>
        </div>
        <form
          className="formcss1"
          action=""
          name="form1"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="row no-gutters">
            <div className="col-lg-6 col-sm-12">
              <div className="upload">
                <div
                  className="btn2 text-center"
                  onClick={() => {
                    // updateReviewToServer()
                  }}
                >
                  上傳照片
                </div>
              </div>
              <p className="text-center notice">＊可以點選或拖曳上傳圖片</p>

              <div className="upload_img">
                <input
                  type="hidden"
                  id="photo"
                  name="photo"
                  value={previewPhoto.newFileName}
                  className="form-control"
                  onChange={(e) => {
                    setWritePhoto(e.target.value)
                  }}
                />
                <img
                  src={`http://localhost:3001/img/` + previewPhoto.newFileName}
                  alt=""
                  id="myimg"
                />
                <input
                  type="file"
                  id="file_input"
                  // name="myfile"
                  onChange={(e) => {
                    console.log(e.target.files[0])
                    const newPhoto = e.target.files[0]

                    setPhoto(newPhoto)
                    // await updateReviewToServer()
                  }}
                />
              </div>
              <div
                className="btnDemo text-center mt-4"
                onClick={() => {
                  setOrderProductNo('CH29')
                  setOrderProduct('經典丹麥椅')
                  setOrderNo('OVER1234')
                  setOrderDate('2020.08.31')
                  setReviewTitle('質感非常好！')
                  setReviewComment(
                    `過去幾年來，我們創作了幾個空間，秉持著NV一向自然、原始、純粹的風格，希望讓大家拋開過去非得要”裝潢”的概念，讓空間載體本身回歸乾淨簡單，再佐上我們為您搭配的歐洲經典傢俱家飾物件，由我們親自設計施作的木作，就是要讓您展現任性、自豪又絕對脫俗的居家品味。“把喜歡的美感傳達出去`
                  )
                }}
              >
                DEMO
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              {/* <form className="formcss" action=""> */}
              <div className="d-flex justify-content-between">
                <div className="formset reviewInput">
                  <label for="productname">商品名稱</label>
                  <input
                    type="text"
                    className="formstyle formwidthw"
                    value={orderProduct}
                    id="productname"
                    name="buy_product"
                    onChange={(e) => {
                      setWriteProduct(e.target.value)
                    }}
                  />
                </div>
                <div className="formset reviewInput">
                  <label for="product_no">購買日期</label>
                  <input
                    type="text"
                    className="formstyle formwidthw"
                    value={orderDate}
                    id="product_no"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="formset reviewInput">
                  <label for="productname">商品編號</label>
                  <input
                    type="text"
                    className="formstyle formwidthw"
                    value={orderProductNo}
                    id="productname"
                  />
                </div>
                <div className="formset reviewInput">
                  <label for="product_no">訂單編號</label>
                  <input
                    type="text"
                    className="formstyle formwidthw"
                    value={orderNo}
                    id="product_no"
                    name="order_no"
                    onChange={(e) => {
                      setWriteOrder(e.target.value)
                    }}
                  />
                </div>
              </div>

              <div className="reviewStars d-flex">
                <Rate
                  style={{ color: '#C77334' }}
                  defaultValue={5}
                  onChange={(e) => {
                    setStars(e)
                  }}
                />
              </div>

              <input
                type="hidden"
                name="stars"
                value={stars}
                className="form-control"
              />

              <div className="formset">
                <label for="price">評論標題</label>
                <input
                  type="text"
                  className="formstyle formwidthw"
                  value={reviewTitle}
                  id="price"
                  name="review_title"
                  onChange={(e) => {
                    setWriteTitle(e.target.value)
                  }}
                />
              </div>

              <input
                type="hidden"
                name="buy_member_id"
                value="AMY"
                className="form-control"
                onChange={(e) => {
                  setWriteMember(e.target.value)
                }}
              />

              <div className="formset textareaRewiew">
                <label for="description">商品評論</label>
                <textarea
                  rows="10"
                  style={{ resize: 'none' }}
                  cols="65"
                  className="formstyle"
                  value={reviewComment}
                  name="review_comment"
                  onChange={(e) => {
                    setWriteComment(e.target.value)
                  }}
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
      </div>
    </>
  )
}

export default Review

// const [orderProductNo, setOrderProductNo] = useState('')
// const [orderProduct, setOrderProduct] = useState('')
// const [orderNo, setOrderNo] = useState('')
// const [orderDate, setOrderDate] = useState('')
// const [reviewTitle, setReviewTitle] = useState('')
// const [reviewComment, setReviewComment] = useState('')
