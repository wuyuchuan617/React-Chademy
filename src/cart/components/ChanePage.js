import React, { useState, useEffect } from 'react'
import { countries, townships, postcodes } from '../components/Data'

function ChangePage(props) {
  const { showDashBoard, setDashboard } = props
  useEffect(() => {
    setDashboard(true)
  }, [])
  return (
    <>
      <input
        type="text"
        style={{
          width: '600px',
          height: '40px',
          marginBottom: '30px',
        }}
        placeholder="捐贈號碼"
      />
    </>
  )
}
export default ChangePage
