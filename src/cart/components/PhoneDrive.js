import React from 'react'
import { countries, townships, postcodes } from '../components/Data'

function PhoneDrive(props) {
  return (
    <>
      <input
        type="text"
        style={{
          width: '600px',
          height: '40px',
          marginBottom: '30px',
        }}
        placeholder="手機載具"
      />
    </>
  )
}
export default PhoneDrive
