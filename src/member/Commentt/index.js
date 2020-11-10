import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { Comment, Tooltip, Avatar, Rate } from 'antd'
import moment from 'moment'

function Commentt() {
  const [commentt, setCommentt] = useState([])

  async function getCommentt() {
    const url = 'http://localhost:3001/members/getCommentt'
    const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
    const { token, authToken } = user.users || {}

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    })

    const res = await response.json()

    console.log(111, res)
    if (res && res.data) {
      setCommentt(res.data)
    }
  }

  useEffect(() => {
    getCommentt()
  }, [])

  // buy_product,
  // stars,
  // review_comment,
  // review_time,

  return (
    <>
      {commentt.length > 0 ? (
        commentt.map((item) => {
          return (
            <Comment
              className="commentt_container"
              author={
                <div>
                  <div>{item.buy_product}</div>
                  <Rate disabled defaultValue={item.stars} />
                </div>
              }
              avatar={
                <>
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                </>
              }
              content={
                <div>
                  <p>{item.review_comment}</p>
                  <div>
                    <img
                      alt="img"
                      // src={require('../../img/' + item.photo)}
                    />
                  </div>
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
        <Comment className="commentt_container" content={<p>尚未評論</p>} />
      )}
    </>
  )
}

export default Commentt
