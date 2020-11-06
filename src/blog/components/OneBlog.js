import React, { useState, useEffect } from 'react'
import '../styles/blog.css'
import 'aos/dist/aos.css'
import { withRouter, useParams } from 'react-router-dom'

function OneBlog(props) {
  const { item } = props
  return (
    <>
      <div
        className="item"
        onClick={() => {
          props.history.push('/BlogList/' + item.sid)
        }}
      >
        <img src={require('../../img/' + item.images)} />
        <h4>{item.title}</h4>
        <p>{item.introduction}</p>
      </div>
    </>
  )
}

export default withRouter(OneBlog)
