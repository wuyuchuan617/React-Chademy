import React from 'react'
import { withRouter } from 'react-router-dom'

function NotFoundPage(props) {
  // 或使用useHistory勾子也可以達到同樣效果
  // let history = useHistory()

  return (
    <>
      <h1>頁面不存在</h1>
      <button
        onClick={() => {
          props.history.push('/product')
        }}
      >
        到產品頁
      </button>
      <hr />
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        到上一頁
      </button>
    </>
  )
}

export default withRouter(NotFoundPage)
