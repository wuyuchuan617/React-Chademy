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

  const [photo, setPhoto] = useState({})
  // const [previewPhoto, setPreviewPhoto] = useState({})
  console.log('photo' + JSON.stringify(photo))

  async function updateReviewToServer() {
    // const newTotal = { total: total + value }
    const fd = new FormData()
    fd.append('myfile', photo)
    console.log('fd' + JSON.stringify(fd))
    console.log('photo' + JSON.stringify(photo))
    const url = 'http://localhost:3001/man_product/reactupload'

    const request = new Request(url, {
      method: 'POST',
      body: fd,
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data)
    // setPreviewPhoto(data)

    //   // 驗証成功後再設定…
    //   setTotal(total + value)
    // } catch (error) {
    //   setError(error)
    // }
  }

  useEffect(() => {
    updateReviewToServer()
  }, [])

  return (
    <>
      <div class="container custom-container-width">
        <div class=" text-center m-5">
          <p>新增評論</p>
          <p>您好，Amy 感謝您的購買</p>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6 col-sm-12">
            <div class="upload">
              <div
                class="btn2 text-center"
                onClick={() => {
                  // updateReviewToServer()
                }}
              >
                上傳照片
              </div>
            </div>
            <p class="text-center notice">＊可以點選或拖曳上傳圖片</p>
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
            <div class="upload_img">
              <input
                type="hidden"
                id="photo"
                name="photo"
                class="form-control"
              />
              {/* <img
                src={require('../../../public/images/' + previewPhoto)}
                alt=""
                id="myimg"
              /> */}
              <input
                type="file"
                id="file_input"
                name="myfile"
                onChange={async (e) => {
                  console.log(e.target.files[0])
                  const newPhoto = e.target.files[0]

                  await setPhoto({ ...newPhoto })
                  await updateReviewToServer()
                }}
              />
            </div>
            <div
              class="btnDemo text-center mt-4"
              onClick={() => {
                setOrderProductNo('CH29')
                setOrderProduct('經典丹麥椅')
                setOrderNo('OVER1234')
                setOrderDate('2020.08.31')
                setReviewTitle('質感非常好！')
                setReviewComment('非常推薦～～～')
              }}
            >
              DEMO
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <form class="formcss" action="">
              <div className="d-flex justify-content-between">
                <div class="formset reviewInput">
                  <label for="productname">商品名稱</label>
                  <input
                    type="text"
                    class="formstyle formwidthw"
                    value={orderProduct}
                    id="productname"
                  />
                </div>
                <div class="formset reviewInput">
                  <label for="product_no">購買日期</label>
                  <input
                    type="text"
                    class="formstyle formwidthw"
                    value={orderDate}
                    id="product_no"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div class="formset reviewInput">
                  <label for="productname">商品編號</label>
                  <input
                    type="text"
                    class="formstyle formwidthw"
                    value={orderProductNo}
                    id="productname"
                  />
                </div>
                <div class="formset reviewInput">
                  <label for="product_no">訂單編號</label>
                  <input
                    type="text"
                    class="formstyle formwidthw"
                    value={orderNo}
                    id="product_no"
                  />
                </div>
              </div>

              <div class="reviewStars d-flex">
                <Rate style={{ color: '#C77334' }} defaultValue={5} />
              </div>

              <div class="formset">
                <label for="price">評論標題</label>
                <input
                  type="text"
                  class="formstyle formwidthw"
                  value={reviewTitle}
                  id="price"
                />
              </div>

              <div class="formset textareaRewiew">
                <label for="description">商品評論</label>
                <textarea
                  rows="10"
                  style={{ resize: 'none' }}
                  cols="65"
                  class="formstyle"
                  value={reviewComment}
                ></textarea>
              </div>
              <div class="btnReview text-center mt-4">新增評論</div>
            </form>
          </div>
        </div>
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
