import React, { useState, useEffect } from 'react'
import Img from '../img/WireDiningChair_LeatherSaddle.jpg'

import { Rate, Upload, Button } from 'antd'
import { notification, Space } from 'antd'
import '../styles/secondhandForm.css'

function SecondhandForm() {
  //photo
  const [photo, setPhoto] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState({})
  const [stars, setStars] = useState(5)
  const [good, setGood] = useState('')

  // async function updateReviewToServer() {
  //   // const newTotal = { total: total + value }
  //   const fd = new FormData()
  //   fd.append('myfile', photo)
  //   console.log('fd' + JSON.stringify(fd))
  //   console.log('photo' + JSON.stringify(photo))
  //   const url = 'http://localhost:3001/man_product/try-upload'

  //   const request = new Request(url, {
  //     method: 'POST',
  //     body: fd,
  //   })

  //   // try {
  //   const response = await fetch(request)
  //   const data = await response.json()
  //   // data會是一個物件值
  //   const newData = data
  //   console.log(data)
  //   console.log(newData.newFileName)

  //   setPreviewPhoto(newData)
  // }

  // useEffect(() => {
  //   updateReviewToServer()
  // }, [photo])

  //post form
  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(document.form3)
    const url = 'http://localhost:3001/man_secondhand/review_member'

    const request = new Request(url, {
      method: 'POST',
      body: fd,
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    const newData = data
    console.log(data)
    console.log(newData.newFileName)
  }

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: '上傳成功',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
  }

  const openNotificationWithIcon2 = (type) => {
    notification[type]({
      message: '賣家玻璃心不給按',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
  }

  return (
    <>
      <div className="i_fv">
        <img src={Img} alt="" />
        <div className="i_fv_text text-center">
          <p className="i_slogan_form">Thinking learning and design.</p>
          <p className="i_subslogan_form lora">
            Create your own fascinating masterpiece.
          </p>
        </div>
      </div>
      <div className="container custom-container-width">
        <div className="i_title text-center m-5">
          <h1>新增會員評價</h1>
          <p>Review</p>
          <h5>Hello,Linda</h5>
        </div>
        <form
          className="row no-gutters mt-3"
          name="form3"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="col-lg-6 col-sm-12">
            <div className="i_upload ml100">
              <div className="i_btn2 text-center">
                <input
                  type="hidden"
                  className="file_upload"
                  // name="photo"
                  value={previewPhoto.newFileName}
                />
                <input
                  type="file"
                  className="file_upload"
                  onChange={(e) => {
                    console.log(e.target.files[0])
                    const newPhoto = e.target.files[0]

                    setPhoto(newPhoto)
                  }}
                />
                上傳圖片
              </div>
            </div>
            <p className="text-center i_notice ml100">
              ＊可以點選或拖曳上傳圖片
            </p>
            <div className="i_upload_img ml100">
              <img
                src={`http://localhost:3001/img/` + previewPhoto.newFileName}
                alt=""
                id="myimg"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="i_formcss">
              <div className="i_formset">
                <label for="order_number">訂單編號</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  name="order_number"
                />
              </div>
              <div className="i_formset">
                <label for="buy_product">商品名稱</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="buy_product"
                  name="buy_product"
                />
              </div>
              <div className="i_formset">
                <label for="buyer_id">會員ID</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="buyer_id"
                  name="buyer_id"
                />
              </div>
              <div className="i_formset mb-2">
                <label>評分</label>

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
              <div className="i_formset">
                <label for="buyer_comment d-flex">給賣家的話</label>
                <div className="i_comment d-flex mb-2">
                  <div
                    className="i_good i_btn6"
                    onClick={() => {
                      setGood('品質優良，買到賺到！')
                    }}
                  >
                    品質優良，買到賺到！
                  </div>
                  <div
                    className="i_bad i_btn6"
                    onClick={() => openNotificationWithIcon2('error')}
                  >
                    商品瑕疵很多，不會再買
                  </div>
                </div>
                <textarea
                  rows="4"
                  cols="60"
                  className="i_formstyle"
                  name="buyer_comment"
                  value={good}
                  onChange={(e) => {
                    setGood(e.value)
                  }}
                ></textarea>
              </div>

              <button
                className="i_btn3 text-center mt-4"
                type="submit"
                onClick={() => openNotificationWithIcon('success')}
              >
                新增商品
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SecondhandForm
