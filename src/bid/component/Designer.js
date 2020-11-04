import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter, useParams } from 'react-router-dom'

import '../styles/designer.scss'
function Designer() {
  const [pic, setPic] = useState('')
  const [intro, setIntro] = useState('')
  const [name, setName] = useState('')

  let {sid} = useParams()
  async function getDesigner() {
    const url = 'http://localhost:3009/product/api/designer/1' 

    const request = new Request(url, {
      method: 'GET',
      
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    // console.log(data.designer_pic)
    // console.log(data.intro)
    // console.log(data.name)
    // console.log('data: ',  data) // [object Object]

    setPic(data.designer_pic)
    setIntro(data.intro)
    setName(data.name)
  }
  useEffect(async () => {
    await getDesigner()
  }, [])
  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center ">
          <div className="designer-des d-flex align-items-center px-5">
            <div className="text-center">
              <h3 className="design">DESIGN BY</h3>
              <h1 className="name">{name}</h1>
              <h3 className="brief">{intro}</h3>
              <span>
                <Link to="#">Learn more</Link>
              </span>
            </div>
          </div>
          <div className="designer-img">
          <img src={pic}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Designer
