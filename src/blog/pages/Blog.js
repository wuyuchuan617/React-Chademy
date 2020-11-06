import React, { useState, useEffect } from 'react'
import BlogBanner from '../components/BlogBanner'
import BlogNewsSlider from '../components/BlogNewsSlider'
import BlogMasonry from '../components/BlogMasonry'

function Blog(props) {
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
      <BlogNewsSlider />
      <BlogMasonry oneBlog={oneBlog} />
    </>
  )
}

export default Blog
