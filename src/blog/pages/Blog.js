import React, { useState, useEffect } from 'react'
import BlogBanner from '../components/BlogBanner'
import BlogNewsSlider from '../components/BlogNewsSlider'
import BlogMasonry from '../components/BlogMasonry'

function Blog(props) {
  return (
    <>
      <BlogBanner />
      <BlogNewsSlider />
      <BlogMasonry />
    </>
  )
}

export default Blog
