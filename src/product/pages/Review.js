/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

// ------------------------------以下引入套件----------------------------

import React, { useState, useEffect } from 'react'
import { Rate, Layout, message } from 'antd'
import { notification } from 'antd'
// ------------------以下引入Components----------------------------

import Aside from '../../common_components/Aside/index'

// ------------------------以下引入樣式----------------------------

import '../styles/review.css'
import '../../common_components/Aside/index.scoped.scss'
import '../../member/MemberCenter/index.scoped.scss'
import { useParams } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
const { Header, Sider, Content } = Layout
//ddd
// -----------------------以下開始Component Product-----------------

function Review(props) {
  const { po } = useParams()
  let newPo = po.split('&')

  let poNO = newPo[0]
  let productNO = newPo[1]
  console.log('po', po)
  console.log('typeof po', typeof po)
  console.log('newPo', newPo)
  console.log('poNO', poNO)
  console.log('productNO', productNO)
  // -----------------------以下開始useState狀態設定-----------------

  // 以下六個為demo btn 預設文字
  const [orderProductNo, setOrderProductNo] = useState('')
  const [orderProduct, setOrderProduct] = useState('')
  const [orderNo, setOrderNo] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [reviewTitle, setReviewTitle] = useState('')
  const [reviewComment, setReviewComment] = useState('')
  // const [photoReturn, setPhotoReturn] = useState({})

  //  存圖片上傳file檔，要fetch form Data
  const [photo, setPhoto] = useState(null)

  //  存圖片回傳後編碼後檔名
  const [previewPhoto, setPreviewPhoto] = useState({})
  console.log('photo' + JSON.stringify(photo))

  //  存星星數字
  const [stars, setStars] = useState(5)

  // 會員
  const [member, setMember] = useState('')
  const [memberName, setMemberName] = useState('')

  // ---------------以下開始fetch SQL get data function-----------------

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
    if (!photo) return // 如果沒有值，就返回，不 api
    updateReviewToServer()
  }, [photo])

  // get member
  function getCartFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .sid
    const newMemberName = JSON.parse(localStorage.getItem('reduxState')).user
      .users.name

    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMember(newMember)
    setMemberName(newMemberName)
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

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
    console.log('data', data)
    console.log(newData.newFileName)

    const openNotification = () => {
      notification.open({
        message: '提醒',
        description: '謝謝您，已完成評價',
        onClick: () => {
          console.log('Notification Clicked!')
        },
      })
    }
    if (data.success) {
      openNotification()
    }
  }

  const handleClick = () => {
    document.getElementById('file_input').click()
  }

  // -----------------------------以下開始 JSX 畫面-----------------

  return (
    <>
      <Layout className="memberCenter_container">
        <Header className="hander_container">
          <div className="title">我的評論</div>
        </Header>

        <Layout>
          <Sider
            className="sider_container"
            style={{ background: 'transparent' }}
            light="light"
            width={256}
          >
            <Aside></Aside>
          </Sider>
          <Content style={{ padding: '0 50px' }}>
            <div className=" text-center my-2">
              <p>新增評論</p>
              <p>您好， {memberName}感謝您的購買</p>
            </div>
            <form
              className="w_formcss1"
              action=""
              name="form1"
              novalidate
              onSubmit={handleSubmit}
            >
              <div className="d-flex justify-content-end">
                <div className="col-lg-5 col-sm-12">
                  <div className="w_upload">
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
                      src={
                        `http://localhost:3001/img/` + previewPhoto.newFileName
                      }
                      alt=""
                      id="myimg"
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
                  <div
                    className="btnDemo text-center mt-4"
                    onClick={() => {
                      // setOrderProductNo('CH29')
                      // setOrderProduct('204RH')
                      // setOrderNo('OVER1234')
                      // setOrderDate('2020.08.31')
                      setReviewTitle('燕椅，體驗一張椅子美妙的存在')
                      setReviewComment(
                        `你在尋找一張，有著世界級的設計語言，但是保存了台灣在地品味的單椅嗎？新的燕椅承襲老椅的台、和、洋混血基因，讓它能自由自在地身處於各式各樣的風格空間。輕盈而敞開的後背，迎接日光灑落家中，悠遊在現代與復古之間。​`
                      )
                    }}
                  >
                    DEMO
                  </div>
                </div>
                <div className="col-lg-5 col-sm-12">
                  {/* <form className="formcss" action=""> */}
                  <div className="d-flex justify-content-between">
                    <div className="formset reviewInput">
                      <label for="productname">商品名稱</label>
                      <input
                        type="text"
                        className="formstyle formwidthw1"
                        value={productNO}
                        id="productname"
                        name="buy_product"
                      />
                    </div>
                    <div className="formset reviewInput">
                      <label for="productname">訂單編號</label>
                      <input
                        type="text"
                        className="formstyle formwidthw1"
                        value={poNO}
                        name="order_no"
                        id="productname"
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
                      className="formstyle formwidthw cus_input w-100"
                      value={reviewTitle}
                      id="price"
                      name="review_title"
                      onChange={(e) => setReviewTitle(e.target.value)}
                    />
                  </div>

                  <input
                    type="hidden"
                    name="user_id"
                    value={member}
                    className="form-control"
                  />

                  <input
                    type="hidden"
                    name="category"
                    value={1}
                    className="form-control"
                  />

                  <div className="formset textareaRewiew">
                    <label for="description">商品評論</label>
                    <textarea
                      rows="10"
                      style={{ resize: 'none' }}
                      cols="44"
                      className="formstyle"
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      name="review_comment"
                    ></textarea>
                  </div>
                  {/* <Link to="/member-center/myorder"> */}
                  <input
                    type="submit"
                    value="新增評論"
                    className="btnReview text-center mt-4"
                  />
                  {/* </Link> */}
                </div>
              </div>
            </form>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

// ---------------以下輸出component-----------------

export default Review
