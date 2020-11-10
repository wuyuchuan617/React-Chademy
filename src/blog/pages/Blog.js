import React, { useState, useEffect } from 'react'
import BlogBanner from '../components/BlogBanner'
import BlogNewsSlider from '../components/BlogNewsSlider'
import BlogMasonry from '../components/BlogMasonry'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/blog.css'
import BreadcrumbTwo from '../components/BreadcrumbTwo'

function Blog(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const [oneBlog, setoneBlog] = useState([])

  async function getTotalFromSQL() {
    const url = 'http://localhost:3001/a_title_mainlist/reactlist'

    const request = new Request(url, {
      method: 'GET',
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
    setoneBlog(newData)
  }
  useEffect(() => {
    getTotalFromSQL()
  }, [])
  return (
    <>
      <BlogBanner />
      <div class="wrap123 custom-container-width">
        <div className="row mt-5">
          <BreadcrumbTwo />
        </div>
      </div>
      <BlogNewsSlider />
      <BlogMasonry oneBlog={oneBlog} />
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
    </>
  )
}

export default Blog
