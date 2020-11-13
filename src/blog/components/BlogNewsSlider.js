/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import '../styles/blog.css'
import BlogNews from '../components/BlogNews'
import BlogNewsTwo from '../components/BlogNewsTwo'
import BlogNewsThree from '../components/BlogNewsThree'

import 'antd/dist/antd.css'
import { Carousel } from 'antd'

function BlogNewsSlider() {
  function onChange(a, b, c) {
    console.log(a, b, c)
  }

  const contentStyleannie = { marginBottom: '150px' }
  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyleannie}>
            <BlogNews />
          </h3>
        </div>
        <div>
          <h3 style={contentStyleannie}>
            <BlogNewsTwo />
          </h3>
        </div>
        <div>
          <h3 style={contentStyleannie}>
            <BlogNewsThree />
          </h3>
        </div>
      </Carousel>
    </>
  )
}

export default BlogNewsSlider
