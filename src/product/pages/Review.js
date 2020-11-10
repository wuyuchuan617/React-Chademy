// ------------------------------以下引入套件----------------------------

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'
import { Layout } from 'antd'
// ------------------以下引入Components----------------------------

import Aside from '../../common_components/Aside/index'

// ------------------------以下引入樣式----------------------------

import '../styles/review.css'
import '../../common_components/Aside/index.scoped.scss'
import '../../member/MemberCenter/index.scoped.scss'
const { Header, Footer, Sider, Content } = Layout

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
    updateReviewToServer()
  }, [photo])

  // get member
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

  // 送出表單
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
              <p>您好，Amy 感謝您的購買</p>
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
                      setOrderProduct('204RH')
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
                      className="formstyle formwidthw"
                      value={reviewTitle}
                      id="price"
                      name="review_title"
                    />
                  </div>

                  <input
                    type="hidden"
                    name="buy_member_id"
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
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

// ---------------以下輸出component-----------------

export default Review
