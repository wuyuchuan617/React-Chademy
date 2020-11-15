import React from 'react'
import { withRouter } from 'react-router-dom'
import { Result, Button } from 'antd'

function NotFoundPage(props) {
  // 或使用useHistory勾子也可以達到同樣效果
  // let history = useHistory()

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Button
                type="primary"
                onClick={() => {
                  props.history.goBack()
                }}
              >
                回上一頁
              </Button>
            }
          />
        </div>
      </div>

      {/* <button
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
      </button> */}
    </>
  )
}

export default withRouter(NotFoundPage)
