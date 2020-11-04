import React from 'react'
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

  const contentStyle = {}
  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <BlogNews />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <BlogNewsTwo />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <BlogNewsThree />
          </h3>
        </div>
      </Carousel>
    </>
  )
}

export default BlogNewsSlider
