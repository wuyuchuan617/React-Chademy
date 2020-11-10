import React, { useEffect, useState } from 'react'
import '../styles/bloglist.css'
import imagewriter from '../images/48.png'
import imagedemo from '../images/40.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { withRouter, useParams } from 'react-router-dom'
import { logRoles } from '@testing-library/react'

function BlogListMessage(props) {
  const { item } = props
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <p class="col-2 a_message2">
        <img src={imagewriter} />
      </p>
      <div class="col-10 a_message3">
        <div className="annie_message04">{item.text_title}</div>
        <div className="annie_message05">{item.text_content}</div>
        <div class="row justify-content-end">
          <div className="annie_customer">By {item.member_id}</div>
          <div className="annie_time">{item.created_at} 評價</div>
        </div>
      </div>
    </>
  )
}

export default withRouter(BlogListMessage)
