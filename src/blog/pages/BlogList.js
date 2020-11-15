/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import BlogListOne from '../components/BlogListOne'
import BlogListTwo from '../components/BlogListTwo'
import BlogListThree from '../components/BlogListThree'
import { withRouter, useParams } from 'react-router-dom'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BreadcrumbOne from '../components/BreadcrumbOne'
import '../styles/bloglist.css'

function BlogList(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const [blog, setBlog] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/a_title_mainlist/reactitem/' + sid

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

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setBlog(data.slice(0))
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])

  return (
    <>
      <div className="wrap789 custom-container-width">
        <div className="row mt-5">
          {blog.map((item, index) => {
            return <BreadcrumbOne item={item} />
          })}
        </div>
      </div>
      {blog.map((item, index) => {
        return <BlogListOne key={index} item={item} blog={blog} />
      })}

      {blog.map((item, index) => {
        return <BlogListTwo key={index} item={item} blog={blog} />
      })}

      <BlogListThree />
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

export default BlogList
