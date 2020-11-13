import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { Comment, Tooltip, Avatar, Rate } from 'antd'
import moment from 'moment'

import request from '../../utils/request'

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

  // buy_product,
  // stars,
  // review_comment,
  // review_time,

  return (
    <>
      {evaluation.length > 0 ? (
        evaluation.map((item) => {
          return (
            <Comment
              className="evaluation_container"
              author={
                <div>
                  <div>{item.name}</div>
                  <Rate disabled defaultValue={item.stars} />
                </div>
              }
              avatar={
                <>
                  <Avatar
                    src={require('../../img/' + item.avatar)}
                    alt="Avatar"
                  />
                </>
              }
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
        <Comment className="evaluation_container" content={<p>尚未評論</p>} />
      )}
    </>
  )
}

export default Evaluation
