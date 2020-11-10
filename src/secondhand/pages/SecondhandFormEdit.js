import React, { useState, useEffect } from 'react'
import Img from '../img/WireDiningChair_LeatherSaddle.jpg'
import Img2 from '../img/Cover_CircleDiningChair_22.jpg'

import '../styles/secondhandForm.css'
import { Alert } from 'antd'
import { withRouter, useParams } from 'react-router-dom'

function SecondhandForm() {
  const [product, setProduct] = useState([])
  //photo
  const [photo, setPhoto] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState({})

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getTotalFromSQL(props) {
    const url = 'http://localhost:3001/man_secondhand/secondhandlist/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    data.map((item, index) => {
      setProduct(item)
    })
    // const newData = [...data]
    // console.log('newData' + newData)
    // console.log(Array.isArray(data))
    // setProduct(newData)
  }

  useEffect(() => {
    getTotalFromSQL()
  }, [])

  async function updateReviewToServer() {
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
    const url = 'http://localhost:3001/man_secondhand/edit/' + sid

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

  console.log(product)
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
          <h1>修改中古資料</h1>
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
                  value={product.photo}
                  // value={previewPhoto.newFileName}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      photo: e.previewPhoto.newFileName,
                    })
                  }
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
                    ? `http://localhost:3001/img/` + previewPhoto.newFileName
                    : `http://localhost:3001/img/` + product.photo
                }
                alt=""
                id="myimg"
              />
              <img src={`http://localhost:3001/img/` + product.photo} />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="i_formcss">
              <div className="i_formset">
                <label for="productname">商品名稱</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="productname"
                  name="productname"
                  value={product.productname}
                  onChange={(e) =>
                    setProduct({ ...product, productname: e.value })
                  }
                />
              </div>
              <div className="i_formset">
                <label for="product_no">商品編號</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="product_no"
                  name="product_no"
                  value={product.product_no}
                  onChange={(e) =>
                    setProduct({ ...product, product_no: e.value })
                  }
                />
              </div>
              <div className="i_formset">
                <label for="price">價錢</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={(e) => setProduct({ ...product, price: e.value })}
                />
              </div>
              <div className="i_formset">
                <label for="stock">商品數量</label>
                <input
                  type="text"
                  className="i_formstyle i_formwidth"
                  id="stock"
                  name="stock"
                  value={product.stock}
                  onChange={(e) => setProduct({ ...product, stock: e.value })}
                />
              </div>
              <div className="i_formset">
                <label for="description">商品描述</label>
                <textarea
                  rows="4"
                  cols="48"
                  className="i_formstyle"
                  name="description"
                  value={product.description}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.value })
                  }
                ></textarea>
              </div>
              <div className="i_formset">
                <label for="categories">商品種類</label>
                <select
                  id="categories"
                  className="i_formstyle i_formwidth"
                  name="categories_sid"
                  value={product.categories_sid}
                  onChange={(e) =>
                    setProduct({ ...product, categories_sid: e.value })
                  }
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
                    checked={product.framework_sid === 1 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, framework_sid: 1 })
                    }
                  />
                  木頭
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="framework_sid"
                    className="i_formstyle i_radiomargin"
                    value="2"
                    checked={product.framework_sid === 2 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, framework_sid: 2 })
                    }
                  />
                  金屬
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="framework_sid"
                    className="i_formstyle i_radiomargin"
                    value="3"
                    checked={product.framework_sid === 3 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, framework_sid: 3 })
                    }
                  />
                  塑膠
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
                    checked={product.material_sid === 1 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, material_sid: 1 })
                    }
                  />
                  布料
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="material_sid"
                    className="i_formstyle i_radiomargin"
                    value="2"
                    checked={product.material_sid === 2 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, material_sid: 2 })
                    }
                  />
                  皮革
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="material_sid"
                    className="i_formstyle i_radiomargin"
                    value="3"
                    checked={product.material_sid === 3 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, material_sid: 3 })
                    }
                  />
                  木質
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
                    checked={product.conditions_sid === 1 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, conditions_sid: 1 })
                    }
                  />
                  九成新
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="conditions_sid"
                    className="i_formstyle i_radiomargin"
                    value="2"
                    checked={product.conditions_sid === 2 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, conditions_sid: 2 })
                    }
                  />
                  八成新
                </div>
                <div className="i_radioset">
                  <input
                    type="radio"
                    name="conditions_sid"
                    className="i_formstyle i_radiomargin"
                    value="3"
                    checked={product.conditions_sid === 3 ? true : false}
                    onChange={(e) =>
                      setProduct({ ...product, conditions_sid: 3 })
                    }
                  />
                  七成新
                </div>
              </div>
              <button className="i_btn3 text-center mt-4" type="submit">
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
