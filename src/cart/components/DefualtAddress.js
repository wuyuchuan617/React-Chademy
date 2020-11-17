import React from 'react'
import { countries, townships } from '../components/Data'

function DefaultAddress(props) {
  const { city } = props
  return (
    <>
      <input
        type="text"
        style={{
          width: '600px',
          height: '40px',
          marginBottom: '30px',
        }}
        placeholder="姓名"
      />
      <input
        type="text"
        style={{
          width: '600px',
          height: '40px',
          marginBottom: '30px',
        }}
        placeholder="手機"
      />
      <select
        style={{
          width: '290px',
          height: '40px',
          marginBottom: '30px',
          marginRight: '20px',
          padding: '10px',
        }}
      >
        <option value={-1}>城市</option>
        {countries.map((v, i) => (
          <option key={i} value={i}>
            {v}
          </option>
        ))}
      </select>
      <select
        style={{
          width: '290px',
          height: '40px',
          marginBottom: '30px',
          padding: '10px',
        }}
      >
        <option value={-1}>區域</option>
        {city > -1 &&
          townships[city].map((v, i) => (
            <option key={i} value={i}>
              {v}
            </option>
          ))}
      </select>

      <input
        type="text"
        style={{
          width: '600px',
          height: '40px',
          marginBottom: '30px',
        }}
        placeholder="地址"
      />
    </>
  )
}
export default DefaultAddress
