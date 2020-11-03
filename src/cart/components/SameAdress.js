import React from 'react'
import { countries, townships, postcodes } from '../components/Data'

function SameAdress(props) {
  const { name, phone, city, area, adress } = props
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
        value={name}
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
      />
      <select
        style={{
          width: '290px',
          height: '40px',
          marginBottom: '30px',
          marginRight: '20px',
        }}
        value={city}
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
        }}
        value={area}
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
      />
    </>
  )
}
export default SameAdress
