import React from 'react'
import '../styles/ProgressE.scss'
import 'antd/dist/antd.css'
import { Progress } from 'antd'

function ProgressE(props) {
  const { item } = props
  // let bar = item.e_progress
  let umber = Number.parseInt(`${item.e_progress}`, 10)
  return (
    <>
      <div style={{ width: 330 }}>
        <Progress
          percent={umber}
          size="small"
          status="active"
          style={{ height: 12 }}
          strokeWidth={10}
        />
      </div>
    </>
  )
}

export default ProgressE
