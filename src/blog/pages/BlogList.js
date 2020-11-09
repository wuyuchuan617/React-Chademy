import React, { useState, useEffect } from 'react'
import BlogListOne from '../components/BlogListOne'
import BlogListTwo from '../components/BlogListTwo'
import BlogListThree from '../components/BlogListThree'
import { withRouter, useParams } from 'react-router-dom'

function BlogList(props) {
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
      {blog.map((item, index) => {
        return <BlogListOne key={index} item={item} blog={blog} />
      })}

      {blog.map((item, index) => {
        return <BlogListTwo key={index} item={item} blog={blog} />
      })}

      <BlogListThree />
    </>
  )
}

export default BlogList
