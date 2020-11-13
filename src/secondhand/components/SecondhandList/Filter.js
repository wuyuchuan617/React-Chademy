/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Affix, Button } from 'antd'

const Filter = (props) => {
  const { searchProduct } = props

  return (
    <Affix
      offsetTop={120}
      onChange={(affixed) => console.log('affixed' + affixed)}
    >
      <div className="i_filter_list">
        {itemList.map((item, index) => {
          return (
            <FilterItem
              key={`item ${index}`}
              item={item}
              searchProduct={searchProduct}
            />
          )
        })}
        <div className="i_border_bottom"></div>
      </div>
    </Affix>
  )
}

const itemList = [
  {
    title: '分類',
    filters: ['高腳椅', '扶手椅', '單椅', '餐椅', '沙發椅'],
    type: 'category',
  },
  {
    title: '材質',
    filters: ['布料', '皮革', '木質'],
    type: 'material',
  },
  {
    title: '骨架',
    filters: ['木頭', '金屬', '塑膠'],
    type: 'framework',
  },
  {
    title: '狀況',
    filters: ['九成新', '八成新', '七成新'],
    type: 'condition',
  },
]

const FilterItem = (props) => {
  const { item, searchProduct } = props
  const [isShow, setIsShow] = useState(false)

  const search = (index) => {
    searchProduct(item.type, index + 1)
  }

  return (
    <>
      <div
        className="i_list d-flex justify-content-around align-items-center"
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        <p className="mr-5 mt-3">{item.title}</p>
        <p className="ml-5 mt-3 ">＋</p>
      </div>
      {isShow && (
        <ul className="ml-5 i_li">
          {item.filters.map((option, index) => (
            <li
              key={`option ${index}`}
              onClick={() => {
                search(index)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Filter
