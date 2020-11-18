/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import '../styles/bloglist.css'
import imagedemo from '../images/48.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { logRoles } from '@testing-library/react'
import BlogListMessage from '../components/BlogListMessage'

function BlogListTwo(props) {
  const { item } = props
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const [message, setMessage] = useState('')
  const [messagetitle, setMessageTitle] = useState('')
  const [saveMessage, setSaveMessage] = useState({})

  async function updateTotalToServer(value) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/a_title_mainlist/message'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(saveMessage),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log('return' + data.success)

    //   // 驗証成功後再設定…
    //   setTotal(total + value)
    // } catch (error) {
    //   setError(error)
    // }
  }

  useEffect(() => {
    if (!!saveMessage) return
    updateTotalToServer()
  }, [saveMessage])

  const [blogListMessage, setBlogListMessage] = useState([])

  async function getTotalFromSQL3() {
    const url =
      'http://localhost:3001/a_title_mainlist/reactlist/message?title=' +
      item.title

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
    setBlogListMessage(newData)
  }
  useEffect(() => {
    getTotalFromSQL3()
  }, [saveMessage])

  return (
    <div className="container">
      <div className="annie_message01">
        <h5>留言列表</h5>
      </div>
      <div className="a_message01list" data-aos="fade-up"></div>
      <div className="row d-flex justify-content-center no-gutters a_messagestart">
        <p className="col-2 a_message2">
          <img src={imagedemo} />
        </p>
        <div className="col-10">
          <textarea
            onChange={(e) => {
              console.log(e.target.value)
              setMessageTitle(e.target.value)
            }}
            rows="1"
            cols="121"
            placeholder="請用一句話形容此篇文章"
            className="a_formstyle"
            name="a_description"
          ></textarea>

          <textarea
            onChange={(e) => {
              console.log(e.target.value)
              setMessage(e.target.value)
            }}
            rows="6"
            cols="121"
            placeholder="您的更多回饋是我們創作好文章的正面能量!!!"
            className="a_formstyle"
            name="a_description"
          ></textarea>
          <div className="row justify-content-end">
            <button
              className="message-btn"
              onClick={() => {
                const { user = {} } = JSON.parse(
                  localStorage['reduxState'] || '{}'
                )
                const { name } = user.users || {}

                const newMessage = {
                  title: item.title,
                  text_title: messagetitle,
                  text_content: message,
                  member_id: name,
                }
                setSaveMessage(newMessage)
              }}
            >
              留言送出
            </button>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center no-gutters a_message8">
        {blogListMessage.map((item, index) => {
          return <BlogListMessage key={index} item={item} />
        })}
      </div>
    </div>
  )
}

export default BlogListTwo
