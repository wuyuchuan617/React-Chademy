import React, { useState, useEffect } from 'react'
import { Form, Select } from 'antd'
import '../styles/custom.css'
import { useSelector } from 'react-redux'
import CustomBanner from '../components/CustomBanner'

function Custom(props) {
  const [componentSize, setComponentSize] = useState('default')
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }

  const isLogged = useSelector((state) => state.user.logged)

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
      <CustomBanner />

      {/* <div class="text">文章</div> */}

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <div className="container">
          <div className="row">
            <div className="col-7 custom_photo">
              <img src={returnData.photo} alt="" />
            </div>
            <div className="col-5">
              <p className="text-center w_custom_title">經典丹麥柚木餐椅</p>
              <p className="text-center w_custom_desc">
                「沒有任何機器能取代匠師獨特的風格。Gustav
                Bahus生產的傢俱，凸顯了挪威人的優雅和簡約，手工製造卻不為生產需求而妥協。」
              </p>

              <div className="">
                <p className="text-center">STEP 01</p>
                <Form.Item label="" className="justify-content-center">
                  <Select
                    placeholder="選擇扶手"
                    // style={{ height: '60px' }}
                    onChange={(value) => {
                      setArm(value)
                    }}
                  >
                    <Select.Option value="noarm">無扶手</Select.Option>
                    <Select.Option value="arm">有扶手</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="">
                <p className="text-center">STEP 02</p>
                <Form.Item label="" className="justify-content-center">
                  <Select
                    placeholder="選擇木頭"
                    onChange={(value) => {
                      setWood(value)
                    }}
                  >
                    <Select.Option value="white">White Oak</Select.Option>
                    <Select.Option value="fumed">Fumed Oak</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="">
                <p className="text-center">STEP 03</p>
                <Form.Item label="" className="justify-content-center">
                  <Select
                    placeholder="選擇椅墊"
                    onChange={(value) => {
                      setSeat(value)
                    }}
                  >
                    <Select.Option value="weaved">編織</Select.Option>
                    <Select.Option value="gray">灰色</Select.Option>
                    <Select.Option value="brown">深咖啡色</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              {isLogged ? (
                <button
                  className="w_custom-btn"
                  //   onClick={() => {
                  // setCartAmount(cartamount + 1)
                  // updateCartToLocalStorage({
                  //   product_no: item.product_no,
                  //   id: item.product_name,
                  //   img: item.photo,
                  //   amount: 1,
                  //   price: item.price,
                  //   category: 1,
                  //     })
                  //   }}
                >
                  加入購物車
                </button>
              ) : (
                <button
                  className="w_custom-btn"
                  onClick={() => {
                    props.history.push('/login')
                  }}
                >
                  加入購物車 請先登入
                </button>
              )}
            </div>
          </div>
        </div>

        <div class="parallax"></div>

        <div className="container">
          <div className="row">
            <img src={require('../images/Group 186.png')} alt="" />
          </div>
        </div>

        <div className="container-fluid w_container_fluid">
          <div className="row">
            <div className="col w_custom_work">
              <img src={require('../images/c1.jpg')} alt="" />
              <div className="w_custom_hover">
                <p>Trimming, shaping for a smooth curve</p>
                <p>經歷來回數次的成型工序，才形成順暢的漸變圓弧面。</p>
              </div>
            </div>
            <div className="col w_custom_work">
              <img src={require('../images/c2.jpg')} alt="" />
              <div className="w_custom_hover">
                <p>Clean up the joints</p>
                <p>用鑿刀清理機器打不到的部分。</p>
              </div>
            </div>
            <div className="col w_custom_work">
              <img src={require('../images/c3.jpg')} alt="" />
              <div className="w_custom_hover">
                <p>Test assemble the cross lap joint</p>
                <p>修整，試組十字搭接橫桿</p>
              </div>
            </div>
            <div className="col w_custom_work">
              <img src={require('../images/c4.jpg')} alt="" />
              <div className="w_custom_hover">
                <p>Test assemble before gluing</p>
                <p>
                  每一組高凳，都有配對好的四支腳與橫桿，由製作者挑選過的木紋色澤，每一次工序之間都必須試組確認，才正式膠合。
                </p>
              </div>
            </div>
            <div className="col w_custom_work">
              <img src={require('../images/c5.jpg')} alt="" />
              <div className="w_custom_hover">
                <p>Take carefully every detail by hand</p>
                <p>每一吋細微的轉角，都經由雙手確認，是否滑順、舒服。</p>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  )
}

export default Custom
