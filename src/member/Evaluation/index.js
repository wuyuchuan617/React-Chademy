import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { Comment, Tooltip, Avatar, Rate } from 'antd'
import moment from 'moment'

function Evaluation() {
  const [evaluation, setEvaluation] = useState([])

  async function getEvaluation() {
    const url = 'http://localhost:3001/members/getEvaluation'
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
    // if (res && res.data) {
    //   setEvaluation(res.data)
    // }
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
            <>
              <div>我的評分</div>
              <div>有關我的評價</div>

              <Comment
                className="evaluation_container"
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
            </>
          )
        })
      ) : (
        <Comment className="evaluation_container" content={<p>尚未有評價</p>} />
      )}
    </>
  )
}

export default Evaluation
