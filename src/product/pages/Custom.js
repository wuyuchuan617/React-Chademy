import React, { useState, useEffect } from 'react'

function Custom(props) {
  // 把三種狀態存陣列，最後join

  const [arm, setArm] = useState('noarm')
  const [wood, setWood] = useState('white')
  const [seat, setSeat] = useState('weaved')

  const [returnData, setReturnData] = useState({})

  let custom = []
  if (arm) custom.push(arm)
  if (wood) custom.push(wood)
  if (seat) custom.push(seat)

  let customUrl = custom.join('_')

  console.log('custom', custom)
  console.log('customUrl', customUrl)

  async function getCustomFromSQL() {
    const url = 'http://localhost:3001/man_product/custom?custom=' + customUrl

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    let data = await response.json()
    data.map((item, index) => {
      setReturnData(item)
    })
  }

  useEffect(() => {
    getCustomFromSQL()
  }, [arm, wood, seat])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 custom_photo">
            <img src={returnData.photo} alt="" />
          </div>
          <div className="col-6">
            <div className="">
              <p>選擇扶手</p>
              <select
                onChange={(e) => {
                  let newArm = e.target.value
                  setArm(newArm)
                }}
              >
                <option value="noarm">無扶手</option>
                <option value="arm">有扶手</option>
              </select>
            </div>
            <div className="">
              <p>選擇椅身木頭</p>
              <select
                onChange={(e) => {
                  let newArm = e.target.value
                  setWood(newArm)
                }}
              >
                <option value="white">White Oak</option>
                <option value="fumed">Fumed Oak</option>
              </select>
            </div>
            <div className="">
              <p>選擇椅墊</p>
              <select
                onChange={(e) => {
                  let newArm = e.target.value
                  setSeat(newArm)
                }}
              >
                <option value="weaved">編織</option>
                <option value="gray">灰色</option>
                <option value="brown">深咖啡色</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Custom
