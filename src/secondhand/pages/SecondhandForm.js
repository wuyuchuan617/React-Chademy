import React, { useState, useEffect } from 'react'
import Img from '../img/WireDiningChair_LeatherSaddle.jpg'

import '../styles/secondhandForm.css'
import { Modal, notification } from 'antd'
import '../../common_components/Aside/index.scoped.scss'
import '../../member/MemberCenter/index.scoped.scss'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import { Radio } from 'antd'
import { Select } from 'antd'
function SecondhandForm() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const { Option } = Select
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onChange2 = (e) => {
    setValue2(e.target.value)
  }
  const onChange3 = (e) => {
    setValue3(e.target.value)
  }
  //photo
  const [photo, setPhoto] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState({})
  const [isLoding, setIsLoding] = useState(false)

  //直接從 localStorage 拿，不需要 useState 設值
  const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
  const { sid } = user.users || {}

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
    if (!photo) return // 如果沒有值，就返回，不 api
    updateReviewToServer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photo])

  const hasEmptyValue = (formData) => {
    // 驗證都有填寫
    // ref: https://developer.mozilla.org/zh-TW/docs/Web/API/FormData
    return [...formData.values()].some((value) => value === '')
  }

  //post form
  async function handleSubmit(e) {
    setIsLoding(true)

    e.preventDefault()
    const fd = new FormData(document.form2)

    // 這邊做一個簡單的檢查，所有的值都要輸入，否則會噴提示
    // isLoding: 避免 enter 一直觸發
    if (isLoding && hasEmptyValue(fd)) {
      Modal.warning({ content: '尚未填寫完成！' })
      setIsLoding(false)
      return
    }

    // 先放這 後端 api 有 bug
    openNotificationWithIcon('success')
    setIsLoding(false)

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
          noValidate
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
                <label htmlFor="productname">商品名稱</label>
                <input
                  type="hidden"
                  className="i_formstyle i_formwidth"
                  name="member_sid"
                  value={sid}
                />
                <input
                  type="hidden"
                  className="i_formstyle i_formwidth"
                  name="product_type"
                  value="5"
                />
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="product_name"
                  name="product_name"
                />
              </div>
              <div className="i_formset">
                <label htmlFor="product_no">商品編號</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="product_no"
                  name="product_no"
                />
              </div>
              <div className="i_formset">
                <label htmlFor="price">價錢</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="price"
                  name="price"
                />
              </div>
              <div className="i_formset">
                <label htmlFor="stock">商品數量</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="stock"
                />
              </div>
              <div className="i_formset">
                <label htmlFor="description">商品描述</label>
                <textarea
                  rows="4"
                  cols="65"
                  className="i_formstyle"
                  name="description"
                ></textarea>
              </div>
              <div className="i_formset">
                <label htmlFor="categories">商品種類</label>
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
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  name="framework_sid"
                >
                  <Radio value={1}>木頭</Radio>
                  <Radio value={2}>金屬</Radio>
                  <Radio value={3}>塑膠</Radio>
                </Radio.Group>
              </div>
              <hr />
              <div className="i_formset">
                <label htmlFor="material">材質</label>
                <Radio.Group
                  onChange={onChange2}
                  value={value2}
                  name="material_sid"
                >
                  <Radio value={1}>布料</Radio>
                  <Radio value={2}>皮革</Radio>
                  <Radio value={3}>木質</Radio>
                </Radio.Group>
              </div>
              <hr />
              <div className="i_formset">
                <label htmlFor="conditions">商品狀況</label>
                <Radio.Group
                  onChange={onChange3}
                  value={value3}
                  name="conditions_sid"
                >
                  <Radio value={1}>九成新</Radio>
                  <Radio value={2}>八成新</Radio>
                  <Radio value={3}>七成新</Radio>
                </Radio.Group>
              </div>
              <button className="i_btn3 text-center mt-4" type="submit">
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
