import React, { useState, useEffect } from 'react'

import Firstview from '../components/SecondhandFrom/Firstview'
import Title from '../components/SecondhandFrom/Title'
import ImgArea from '../components/SecondhandFrom/ImgArea'
import TextArea from '../components/SecondhandFrom/TextArea'

import '../styles/secondhandForm.css'

function SecondhandForm() {
  const [product, setProduct] = useState([])
  const [product_no, setProduct_no] = useState('')
  const [productname, setProductname] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const [conditions_sid, setConditions_sid] = useState('')
  const [framework_sid, setFramework_sid] = useState('')
  const [material_sid, setMaterial_sid] = useState('')
  const [categories_sid, setCategories_sid] = useState('')
  async function getTotalFromSQL(props) {
    const url = 'http://localhost:3001/man_secondhand/add'

    // const obj = {
    //   product_no: '43254',
    //   productname: '3245',
    //   price: '3333',
    //   stock: '333',
    //   description: '3333',
    //   photo: '',
    //   conditions_sid: '1',
    //   framework_sid: '1',
    //   material_sid: '1',
    //   categories_sid: '1',
    // }

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        // product_no: '43254',
        // productname: '3245',
        // price: '3333',
        // stock: '333',
        // description: '3333',
        // photo: '',
        // conditions_sid: '1',
        // framework_sid: '1',
        // material_sid: '1',
        // categories_sid: '1',
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const newData = [...data]
    console.log('newData' + newData)
    console.log(Array.isArray(data))
    setProduct(newData)
  }

  useEffect(() => {
    getTotalFromSQL()
  }, [])
  return (
    <>
      <Firstview />
      <div className="container custom-container-width">
        <Title />
        <div class="row no-gutters">
          <ImgArea />
          <TextArea
            product_no={product_no}
            setProduct_no={setProduct_no}
            productname={productname}
            setProductname={setProductname}
            price={price}
            setPrice={setPrice}
            stock={stock}
            setStock={setStock}
            description={description}
            setDescription={setDescription}
            photo={photo}
            setPhoto={setPhoto}
            conditions_sid={conditions_sid}
            setConditions_sid={setConditions_sid}
            framework_sid={framework_sid}
            setFramework_sid={setFramework_sid}
            material_sid={material_sid}
            setMaterial_sid={setMaterial_sid}
            categories_sid={categories_sid}
            setCategories_sid={setCategories_sid}
          />
        </div>
      </div>
    </>
  )
}

export default SecondhandForm
