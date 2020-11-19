import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { Comment, Tooltip, Avatar, Rate } from 'antd'
import moment from 'moment'
import NoData from '../../common_components/NoData'

import request from '../../utils/request'
import { noImage } from '../../utils'

// 防止噴錯卡住 ref: https://www.c-sharpcorner.com/blogs/error-handling-while-use-image-render-in-react-js-application
function CustomImg(props) {
  const { src, alt = 'imaghe', ...otherProps } = props
  let imagePath = ''
  try {
    imagePath = src.startsWith('http')
      ? src
      : `${window.location.origin}/img/${src}`
  } catch (err) {
    imagePath = noImage //set default image path
  }

  return <Avatar {...otherProps} src={imagePath} alt={alt} />
}

function Evaluation() {
  const [evaluation, setEvaluation] = useState([])

  async function getEvaluation() {
    const response = await request({
      url: `/members/getEvaluation`,
      method: 'POST',
      data: {},
    })

    const { success, data } = response

    console.log('success, data ', success, data)
    if (success) {
      setEvaluation(data)
    }
  }

  useEffect(() => {
    getEvaluation()
  }, [])

  return (
    <>
      {evaluation.length > 0 ? (
        evaluation.map((item, index) => {
          return (
            <Comment
              key={index}
              className="evaluation_container"
              author={
                <div>
                  <div>{item.name}</div>
                  <Rate disabled defaultValue={item.stars} />
                </div>
              }
              avatar={<CustomImg src={item.avatar} />}
              content={
                <div>
                  <p>{item.buyer_comment}</p>
                </div>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment(item.review_time).fromNow()}</span>
                </Tooltip>
              }
            />
          )
        })
      ) : (
        <NoData tips="尚未評論" />
      )}
    </>
  )
}

export default Evaluation
