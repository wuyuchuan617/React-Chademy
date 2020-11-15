
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Img from '../img/WireDiningChair_LeatherSaddle.jpg'

import { Rate, Upload, Layout } from 'antd'
import { notification, Space } from 'antd'
import '../styles/secondhandForm.css'

import Aside from '../../common_components/Aside/index'
import '../../common_components/Aside/index.scoped.scss'
import '../../member/MemberCenter/index.scoped.scss'
const { Header, Footer, Sider, Content } = Layout

function SecondhandForm() {
  //photo
  const [photo, setPhoto] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState({})
  const [stars, setStars] = useState(5)
  const [good, setGood] = useState('')

  const [member, setMember] = useState('')
  const [memberSid, setMemberSid] = useState('')

  //redux
  function getCartFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .name

    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMember(newMember)
  }

  //redux
  function getCartFromLocalStorage2() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .sid

    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMemberSid(newMember)
  }

  useEffect(() => {
    getCartFromLocalStorage()
    getCartFromLocalStorage2()
  }, [])

  //post form
  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(document.form3)
    const url = 'http://localhost:3001/man_secondhand/review_member'
    console.log('document.form3' + document.form3)
    console.log('fd' + fd)
    const request = new Request(url, {
      method: 'POST',
      body: fd,
    })

    //try {
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
            <div className="i_title text-center">
              <h5>Hello, {member}</h5>
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
                    src={
                      `http://localhost:3001/img/` + previewPhoto.newFileName
                    }
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
                      value="po234653235"
                    />
                  </div>
                  <div className="i_formset">
                    <label for="buy_product">賣家ID</label>
                    <input
                      type="text"
                      className="i_formstyle i_formwidth"
                      id="seller_sid"
                      name="seller_sid"
                      value="26"
                    />
                  </div>
                  <div className="i_formset">
                    {/* <label for="buyer_id">會員ID</label> */}
                    <input
                      type="hidden"
                      className="i_formstyle i_formwidth"
                      id="buyer_sid"
                      name="buyer_sid"
                      value={memberSid}
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
                      cols="57"
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
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default SecondhandForm
