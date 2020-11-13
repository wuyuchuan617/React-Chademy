/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './index.scoped.scss'

import { countries, cityData } from '../../cart/components/Data'
import request from '../../utils/request'
import { transAddress } from '../../utils'

import { message, Modal, Input, Select } from 'antd'
import { BsTrash } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Option } = Select
const { confirm } = Modal

function Address() {
  const [allAddress, allSetAddress] = useState('')

  const [defaultCity, setDefaultCity] = useState('')
  const [cities, setCities] = useState({
    city: '',
    cities: cityData[countries[0]],
    secondCity: cityData[countries[0]][0],
  })

  const [otherAddress, setOtherAddress] = useState('')

  const [visible, setVisible] = useState(false)

  const handleProvinceChange = (value) => {
    setCities({
      city: value,
      cities: cityData[value],
      secondCity: cityData[value][0],
    })
  }

  const onSecondCityChange = (value) => {
    setCities({ ...cities, secondCity: value })
  }

  const setData = (address) => {
    // 將字串的地址轉換
    const { cityId, areaId, otherAddress } = transAddress(address)

    // 設定畫面上的全部地址
    allSetAddress(address)

    // 設定 Select 組件的預設值
    setDefaultCity(countries[cityId])

    // 設定 Options 組件的值
    setCities({
      city: countries[cityId],
      cities: cityData[countries[cityId]],
      secondCity: cityData[countries[cityId]][areaId],
    })

    // 設定 Input 組件的值
    setOtherAddress(otherAddress)
  }

  function showConfirm() {
    confirm({
      title: '確定要刪除地址嗎?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        deleteAddress()
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const getAddress = async () => {
    const response = await request({
      url: `/members/getAddress`,
      method: 'POST',
      data: {},
    })

    const { success, data } = response

    if (success) {
      // 設定地址
      setData(data.address)
    }
  }

  const deleteAddress = async () => {
    const response = await request({
      url: `/members/deleteAddress`,
      method: 'POST',
      data: {},
    })

    const { success, msg } = response

    if (!success) {
      message.error(msg)
    } else {
      message.success(msg)
      getAddress()
    }
  }

  const setAddress = async (payload) => {
    const response = await request({
      url: `/members/setAddress`,
      method: 'POST',
      data: payload,
    })

    const { success, msg, data } = response

    if (!success) {
      message.error(msg)
    } else {
      message.success(msg)
      // 成功，將回傳地址設定回去(跟 getAddress 一樣)
      setData(data.address)
    }

    // 關掉彈窗
    setVisible(false)
  }

  const handleOk = () => {
    // 檢查是否正確輸入地址
    if (!otherAddress.length) {
      confirm({
        title: '請輸入地址',
        icon: <ExclamationCircleOutlined />,
        onOk() {
          console.log('OK')
        },
      })

      return
    }

    const { city, secondCity } = cities

    // 將地址組起來，以物件的方式傳入函式
    setAddress({ address: `${city}${secondCity}${otherAddress}` })
  }

  // didMount 拿所有資料
  useEffect(() => {
    getAddress()
  }, [])

  return (
    <>
      <div className="lineee justify-content-between">
        地址：{allAddress ? allAddress : '新增地址'}
        <div className="icon_con">
          <AiOutlinePlus className="icon" onClick={() => setVisible(true)} />
          {allAddress && (
            <BsTrash
              className="delet_btn"
              onClick={() => showConfirm()}
            ></BsTrash>
          )}
        </div>
      </div>

      <Modal
        title={allAddress ? '編輯地址' : '新增地址'}
        visible={visible}
        onOk={handleOk}
        maskClosable={false}
        onCancel={() => setVisible(false)}
      >
        <section>
          <Select
            style={{
              width: 'calc(50% - 20px)',
              height: '40px',
              marginBottom: '30px',
              marginRight: '20px',
            }}
            size="large"
            defaultValue={defaultCity}
            onChange={handleProvinceChange}
          >
            {countries.map((province) => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
          <Select
            style={{
              width: '50%',
              height: '40px',
              marginBottom: '30px',
            }}
            size="large"
            value={cities.secondCity}
            onChange={onSecondCityChange}
          >
            {cities.cities.map((city) => (
              <Option key={city}>{city}</Option>
            ))}
          </Select>
          <Input
            size="large"
            style={{
              width: '100%',
              height: '40px',
            }}
            value={otherAddress}
            placeholder="地址"
            onChange={(e) => setOtherAddress(e.target.value)}
          />
        </section>
      </Modal>
    </>
  )
}

export default Address
