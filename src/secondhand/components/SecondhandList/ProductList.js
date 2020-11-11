import React, { useEffect, useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import Img from '../../img/elementaire-chair_910x1100_brandmodel.jpg'
import { Rate } from 'antd'

function ProductList(props) {
  const { item, reload } = props
  const [rateColor, setRateColor] = useState({})
  const [heart, setHeart] = useState(false)
  const [heartItem, setHeartItem] = useState({})
  const heartFill = {
    color: '#C77334',
  }
  const [memberData, setMemberData] = useState({})
  const [allMember, setAllMember] = useState({})

  async function getHeartFromServer() {
    const url = 'http://localhost:3001/man_product/heart/' + item.productname

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    if (data.length > 0) {
      setHeart(true)
    }

    //   // 驗証成功後再設定…
    //   setTotal(total + value)
    // } catch (error) {
    //   setError(error)
    // }
  }
  async function updateTotalToServer() {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_product/addheart'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(heartItem),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data.success)
    setHeart(data.success)
  }
  async function deleteHeartToServer(e) {
    // const newTotal = { total: total + value }

    const url = 'http://localhost:3001/man_product/del/' + item.productname

    const request = new Request(url, {
      method: 'DELETE',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // try {
    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data)
  }

  // useEffect(() => {
  //   updateTotalToServer()
  // }, [heartItem])

  useEffect(() => {
    getHeartFromServer()
  }, [])

  /**
   * 撈會員資料
   */
  async function getItemFromSQL4() {
    const url =
      'http://localhost:3001/man_secondhand/member_data/' + item.member_sid

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setMemberData(data)
  }
  useEffect(() => {
    getItemFromSQL4()
    getItemFromSQL3()
  }, [])
  useEffect(() => {
    getItemFromSQL4()
    getItemFromSQL3()
  }, [reload])

  /**
   * 撈會員全部資料
   */
  async function getItemFromSQL3() {
    const url = 'http://localhost:3001/man_secondhand/member_data'

    const request = new Request(url, {
      method: 'GET',

      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response', response) // [object Response]
    console.log('data', data) // [object Object]

    setAllMember(data)
  }

  let memberImg = Img
  for (let i = 0; i < allMember.length; i++) {
    if (+item.member_sid === allMember[i].sid) {
      memberImg = allMember[i].avatar
      console.log(item.member_sid)
      console.log('hihi')
      console.log(memberImg)
    }
  }
  return (
    <div className="i_card" id={item.sid}>
      <div className="i_card_img">
        <img
          src={`http://localhost:3001/img/` + item.photo}
          alt=""
          onClick={() => {
            props.history.push('/secondhand_product/' + item.sid)
          }}
        />
        <div
          className="i_mask"
          onClick={() => {
            props.history.push('/secondhand_product/' + item.sid)
          }}
        >
          <p
            className="i_list_like"
            style={heart ? heartFill : null}
            // onClick={() => {
            //   setHeart(!heart)
            //   if (heart === false) {
            //     const newHeartItem = {
            //       follow_product: item.productname || '',
            //       member_id: 'AMY',
            //       follow_status: 1,
            //     }
            //     console.log('newHeartItem' + newHeartItem)
            //     setHeartItem(newHeartItem)
            //     // updateTotalToServer(newHeartItem)
            //   } else {
            //     deleteHeartToServer(item.productname)
            //     setHeart(false)
            //     setHeartItem({})
            //   }
            // }}
          >
            ♥︎
          </p>
        </div>
      </div>
      <div className="i_card_info mt-4 d-flex justify-content-between">
        <div className="i_user">
          <div className="i_user_name">
            <img src={memberImg} alt="" />
            <p>{memberData.length > 0 ? memberData.name : 'Linda325'}</p>
          </div>
          <div className="i_user_star mt-2">
            <Rate
              allowHalf
              defaultValue={2.5}
              style={rateColor}
              className="ant-rate-star-second"
              onClick={() => {
                setRateColor({ height: '100px' })
              }}
            />
          </div>
        </div>
        <div className="i_item">
          <div className="i_item_name">
            <p
              onClick={() => {
                props.history.push('/secondhand_product/' + item.sid)
              }}
            >
              {item.productname}
            </p>
          </div>
          <div className="i_item_price ">
            <p className="text-right">${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ProductList)
