import { countries, townships } from '../cart/components/Data'

// 信用卡的卡號格式處理
// export const onCardNumberChange = (value) => {
export const transCardNumber = (value) => {
  let cardNumber = value
  value = value.replace(/\D/g, '')
  if (/^3[47]\d{0,13}$/.test(value)) {
    cardNumber = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{6})/, '$1 $2 ')
  } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
    // diner's club, 14 digits
    cardNumber = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{6})/, '$1 $2 ')
  } else if (/^\d{0,16}$/.test(value)) {
    // regular cc number, 16 digits
    cardNumber = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
  }
  return cardNumber.trimRight()
}

// 將完整地址分解成選項的 index, 以及其他剩下的地址
export const transAddress = (allAddress) => {
  const findFunc = (target) => ~allAddress.indexOf(target)
  const cityId = countries.findIndex(findFunc) // 找出 city id

  // 如果找不到直接返回
  if (cityId === -1) {
    return {
      city: '',
      area: '',
      cityId: 0,
      areaId: 0,
      otherAddress: allAddress,
    }
  }

  const areaId = townships[cityId].findIndex(findFunc) // 找出 town id
  const city = countries[cityId]
  const area = townships[cityId][areaId]

  return {
    city,
    area,
    cityId,
    areaId,
    otherAddress: allAddress.replace(city, '').replace(area, ''),
  }
}
