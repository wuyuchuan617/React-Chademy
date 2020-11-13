import React, { useState, useEffect } from 'react'
import Img from '../images/form.jpeg'

import '../../secondhand/styles/secondhandForm.css'
import { Alert } from 'antd'
import { Button, notification, Space } from 'antd'
import 'antd/dist/antd.css'

import '../styles/FundItem.scss'

function FundForm() {
  //photo
  const [photo, setPhoto] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState({})

  async function updateReviewToServer() {
    // const newTotal = { total: total + value }
    const fd = new FormData()
    fd.append('myfile', photo)
    console.log('fd' + JSON.stringify(fd))
    console.log('photo' + JSON.stringify(photo))
    const url = 'http://localhost:3001/man_fund/try-upload'

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

    setPreviewPhoto(newData)
  }

  useEffect(() => {
    updateReviewToServer()
  }, [photo])

  //post form
  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(document.form2)
    const url = 'http://localhost:3001/man_fund/add'

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

  const [showAlert, setShowAlert] = useState(false)

  // 以下六個為demo btn 預設文字
  const [orderProductNo, setOrderProductNo] = useState('')
  const [orderProduct, setOrderProduct] = useState('')
  const [lowPrice, setLowPrice] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [reviewTitle, setReviewTitle] = useState('')
  const [reviewComment, setReviewComment] = useState('')
  const [fundGoal, setFundGoal] = useState('')
  const [endTime, setEndTime] = useState('')
  const [realTime, setRealTime] = useState('')
  const [leftDay, setLeftDay] = useState('')
  const [designer, setDesigner] = useState('')
  const [progress, setProgress] = useState('')
  const [sid, setSid] = useState('')

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: '上傳成功',
      description: '您的夢想已在路上',
    })
  }

  return (
    <>
      <div className="i_fv">
        <img src={Img} alt="" />
        <div className="i_fv_text text-center">
          <p className="i_slogan_form">Dream come true.</p>
          <p className="i_subslogan_form lora">
            Create your own fascinating masterpiece.
          </p>
        </div>
      </div>
      <div className="container custom-container-width">
        <div className="i_title text-center m-5">
          <h1>新增募資專案</h1>
          <p>fund Login</p>
        </div>
        <form
          className="row no-gutters"
          name="form2"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="col-lg-6 col-sm-12">
            <div className="i_upload ml100">
              <div className="i_btn2 text-center">
                <input
                  type="hidden"
                  className="file_upload"
                  name="e_pic"
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

            <div
              className="btnDemo text-center mt-4"
              onClick={() => {
                setOrderProductNo('1')
                setOrderProduct('IMOLA')
                setLowPrice('324000')
                setFundGoal('8888000')
                setOrderDate('2020-11-20')
                setEndTime('2020-11-21')
                setRealTime('2020-11-22')
                setReviewComment(
                  `我們為您搭配的歐洲經典傢俱家飾物件，由我們親自設計施作的木作，就是要讓您展現任性、自豪又絕對脫俗的居家品味。“把喜歡的美感傳達出去`
                )
                setLeftDay('1')
                setDesigner('Ian')
                setProgress('0')
                
              }}
            >
              DEMO
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="i_formcss">
              <div className="i_formset">
                <label for="productname">專案名稱</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="productname"
                  name="e_proname"
                  value={orderProduct}
                />
              </div>
              <div className="i_formset">
                <label for="product_no">專案編號</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="product_no"
                  name="sid"
                  value={orderProductNo}
                />
              </div>
              <div className="i_formset">
                <label for="price">最低價格</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="price"
                  name="e_lowprice"
                  value={lowPrice}
                />
              </div>
              <div className="i_formset">
                <label for="stock">目標金額</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="e_goal"
                  value={fundGoal}
                />
              </div>
              <div className="i_formset">
                <label for="description">募資介紹</label>
                <textarea
                  rows="4"
                  cols="48"
                  className="i_formstyle"
                  name="e_prointro"
                  value={reviewComment}
                ></textarea>
              </div>
              <div className="i_formset">
                <label for="categories">商品種類</label>
                <select
                  id="categories"
                  className="i_formstyle i_formwidth"
                  name="e_cate"
                >
                  <option value="1">吧台椅</option>
                  <option value="2">單椅</option>
                  <option value="3">扶手椅</option>
                  <option value="4">餐椅</option>
                  <option value="5">沙發椅</option>
                </select>
              </div>

              <div className="i_formset">
                <label for="stock">開始時間</label>
                <input
                  type="date"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="e_start_time"
                  value={orderDate}
                />
              </div>

              <div className="i_formset">
                <label for="stock">結束時間</label>
                <input
                  type="date"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="e_end_time"
                  value={endTime}
                />
              </div>

              <div className="i_formset">
                <label for="stock">實踐時間</label>
                <input
                  type="date"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="e_realize_time"
                  value={realTime}
                />
              </div>

              <div className="e_formset">
                <label for="stock">天數</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="e_day"
                  value={leftDay}
                />
              </div>

              <div className="e_formset">
                <label for="stock">進度</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="e_progress"
                  value={progress}
                />
              </div>

              <div className="e_formset">
                <label for="stock">設計師</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="e_designer_sid"
                  value={designer}
                />
              </div>

           

              <button
                className="i_btn3 text-center mt-4"
                type="submit"
                onClick={() => openNotificationWithIcon('success')}
              >
                新增專案
              </button>
            </div>

            {/* {showAlert && <Alert message="Warning Text" type="warning" />} */}
          </div>
        </form>
      </div>
    </>
  )
}

export default FundForm
