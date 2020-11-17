/* eslint-disable no-unused-vars */
import React from 'react'
import { countries, townships, postcodes } from '../components/Data'

function SameAdress(props) {
  const { samename, phone, city, area, adress } = props
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
        value={samename}
        readOnly
      />
      <input
        type="text"
        style={{
          width: '600px',
          height: '40px',
          marginBottom: '30px',
        }}
        placeholder="手機"
        value={phone}
        readOnly
      />
      <select
        style={{
          width: '290px',
          height: '40px',
          marginBottom: '30px',
          marginRight: '20px',
          padding: '10px',
        }}
        value={city}
        readOnly
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
        value={area}
        readOnly
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
        value={adress}
        readOnly
      />
    </>
  )
}
export default SameAdress
