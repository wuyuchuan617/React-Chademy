import React, { useState, useEffect } from 'react'
import BlogListOne from '../components/BlogListOne'
import BlogListTwo from '../components/BlogListTwo'
import BlogListThree from '../components/BlogListThree'

function BlogList(props) {
  return (
    <>
      <BlogListOne />
      <BlogListTwo />
      <BlogListThree />
    </>
  )
}

export default BlogList
