/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import Img from '../img/WireDiningChair_LeatherSaddle.jpg'

import '../styles/secondhandForm.css'
import { Layout } from 'antd'
import { Button, notification } from 'antd'
import Aside from '../../common_components/Aside/index'
import '../../common_components/Aside/index.scoped.scss'
import '../../member/MemberCenter/index.scoped.scss'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
const { Header, Footer, Sider, Content } = Layout
function SecondhandForm() {
  //photo
  const [photo, setPhoto] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState({})
  const [member, setMember] = useState('')
  //redux
  function getCartFromLocalStorage() {
    const newMember = JSON.parse(localStorage.getItem('reduxState')).user.users
      .sid

    console.log('newMember', newMember)
    console.log(typeof newMember)
    setMember(newMember)
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  //photo
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
    const url = 'http://localhost:3001/man_secondhand/add'

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
          <h1>新增中古資料</h1>
          <p>Second Hands Login</p>
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
                  name="photo"
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
                <label for="productname">商品名稱</label>
                <input
                  type="hidden"
                  className="i_formstyle i_formwidth"
                  name="member_sid"
                  value={member}
                />
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="product_name"
                  name="product_name"
                />
              </div>
              <div className="i_formset">
                <label for="product_no">商品編號</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="product_no"
                  name="product_no"
                />
              </div>
              <div className="i_formset">
                <label for="price">價錢</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="price"
                  name="price"
                />
              </div>
              <div className="i_formset">
                <label for="stock">商品數量</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="stock"
                />
              </div>
              <div className="i_formset">
                <label for="description">商品描述</label>
                <textarea
                  rows="4"
                  cols="61"
                  className="i_formstyle"
                  name="description"
                ></textarea>
              </div>
              <div className="i_formset">
                <label for="categories">商品種類</label>
                <select
                  id="categories"
                  className="i_formstyle i_formwidth"
                  name="categories_sid"
                >
                  <option value="1">高腳椅</option>
                  <option value="2">單椅</option>
                  <option value="3">扶手椅</option>
                  <option value="4">餐椅</option>
                  <option value="5">沙發椅</option>
                </select>
              </div>
              <div className="i_formset">
                <label>骨架</label>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="framework_sid"
                    className="i_formstyle i_radiomargin"
                    value="1"
                    id="wood"
                  />
                  <label for="wood" style={{ display: 'inline' }}>
                    木頭
                  </label>
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="framework_sid"
                    className="i_formstyle i_radiomargin"
                    value="2"
                    id="metro"
                  />
                  <label for="metro" style={{ display: 'inline' }}>
                    金屬
                  </label>
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="framework_sid"
                    className="i_formstyle i_radiomargin"
                    value="3"
                    id="plastic"
                  />
                  <label for="plastic" style={{ display: 'inline' }}>
                    塑膠
                  </label>
                </div>
              </div>
              <hr />
              <div className="i_formset">
                <label for="material">材質</label>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="material_sid"
                    className="i_formstyle i_radiomargin"
                    value="1"
                    id="bu"
                  />
                  <label for="bu" style={{ display: 'inline' }}>
                    布料
                  </label>
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="material_sid"
                    className="i_formstyle i_radiomargin"
                    value="2"
                    id="leath"
                  />
                  <label for="leath" style={{ display: 'inline' }}>
                    皮革
                  </label>
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="material_sid"
                    className="i_formstyle i_radiomargin"
                    value="3"
                    id="wood2"
                  />
                  <label for="wood2" style={{ display: 'inline' }}>
                    木質
                  </label>
                </div>
              </div>
              <hr />
              <div className="i_formset">
                <label for="conditions">商品狀況</label>
                <div className=" i_radioset">
                  <input
                    type="radio"
                    name="conditions_sid"
                    className="i_formstyle i_radiomargin"
                    value="1"
                    id="9"
                  />
                  <label for="9" style={{ display: 'inline' }}>
                    九成新
                  </label>
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="conditions_sid"
                    className="i_formstyle i_radiomargin"
                    value="2"
                    id="8"
                  />
                  <label for="8" style={{ display: 'inline' }}>
                    八成新
                  </label>
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="conditions_sid"
                    className="i_formstyle i_radiomargin"
                    value="3"
                    id="7"
                  />
                  <label for="7" style={{ display: 'inline' }}>
                    七成新
                  </label>
                </div>
              </div>
              <button
                className="i_btn3 text-center mt-4"
                type="submit"
                onClick={() => openNotificationWithIcon('success')}
              >
                新增商品
              </button>
            </div>

            {/* {showAlert && <Alert message="Warning Text" type="warning" />} */}
          </div>
        </form>
        <BackTop
          visibilityHeight="2000"
          style={{
            height: '40',
            width: '40',
            lineHeight: '33px',
            color: 'white',
            fontSize: '16px',
            borderRadius: '0',
            textAlign: 'center',
            backgroundColor: '#c77334',
          }}
        >
          <div>
            <UpOutlined
              style={{
                color: 'white',
                fontSize: '18px',
                borderRadius: '0',
                backgroundColor: '#c77334',
                marginTop: '-3px',
              }}
            />
          </div>
        </BackTop>
      </div>
    </>
  )
}

export default SecondhandForm
