import React from 'react'
import './index.scoped.scss'

export default function NoData({ tips }) {
  return (
    <div className="empty_container">
      <div>{tips}</div>
    </div>
  )
}
