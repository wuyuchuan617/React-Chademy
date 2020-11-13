/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Form, Select } from 'antd'
import '../styles/custom.css'
import { useSelector } from 'react-redux'
import CustomBanner from '../components/CustomBanner'
import BreadcrumCustom from '../components/BreadcrumCustom'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { set } from 'date-fns'
import { LoadingOutlined } from '@ant-design/icons'
import { Steps, Divider } from 'antd'

const { Step } = Steps

function Custom(props) {
  const [componentSize, setComponentSize] = useState('default')
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }

  const isLogged = useSelector((state) => state.user.logged)

  // 把三種狀態存陣列，最後join

  const [arm, setArm] = useState('noarm')
  const [wood, setWood] = useState('fumed')
  const [seat, setSeat] = useState('weaved')

  const [returnData, setReturnData] = useState({})
  const [spin, setSpin] = useState(false)
  const [step, setStep] = useState(0)

  let custom = []
  if (arm) custom.push(arm)
  if (wood) custom.push(wood)
  if (seat) custom.push(seat)

  let customUrl = custom.join('_')

  console.log('custom', custom)
  console.log('customUrl', customUrl)

  const antIcon = <LoadingOutlined style={{ color: '#c77334' }} spin />

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
    // eslint-disable-next-line array-callback-return
    data.map((item, index) => {
      setReturnData(item)
    })
  }

  useEffect(() => {
    getCustomFromSQL()
    setSpin(true)
    setTimeout(() => {
      setSpin(false)
    }, 500)
  }, [arm, wood, seat])

  return (
    <>
      <CustomBanner />
      <div className="container firstTop">
        <div className="row  mt-1 wbread">
          <BreadcrumCustom />
        </div>
      </div>
      {/* <div className="text">文章</div> */}

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-8 w_step">
              <Steps current={step}>
                <Step title="Step 1" description="選擇把手" />
                <Step title="Step 2" description="選擇木頭" />
                <Step title="Step 3" description="選擇椅墊" />
              </Steps>
            </div>
          </div>
          <div className="row">
            <div className="col-7 custom_photo">
              <Spin
                indicator={antIcon}
                spinning={spin}
                style={{ color: '#c77334' }}
                size={'large'}
              >
                <img src={returnData.photo} alt="" />
              </Spin>
            </div>
            <div className="col-5">
              <p className="text-center w_custom_title">經典丹麥柚木餐椅</p>
              <p className="text-center w_custom_desc">
                「沒有任何機器能取代匠師獨特的風格。Gustav
                Bahus生產的傢俱，凸顯了挪威人的優雅和簡約，手工製造卻不為生產需求而妥協。」
              </p>

              <div className="">
                <p className="text-center w_custom_mmmm">STEP 01</p>

                <Form.Item label="" className="justify-content-center">
                  <Select
                    placeholder="選擇扶手"
                    // style={{ height: '60px' }}
                    onChange={(value) => {
                      setArm(value)
                      setStep(1)
                    }}
                  >
                    <Select.Option value="noarm">無扶手</Select.Option>
                    <Select.Option value="arm">有扶手</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="">
                <p className="text-center w_custom_mmmm">STEP 02</p>
                <Form.Item label="" className="justify-content-center">
                  <Select
                    placeholder="選擇木頭"
                    onChange={(value) => {
                      setWood(value)
                      setStep(2)
                    }}
                  >
                    <Select.Option value="white">White Oak</Select.Option>
                    <Select.Option value="fumed">Fumed Oak</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="">
                <p className="text-center w_custom_mmmm">STEP 03</p>
                <Form.Item label="" className="justify-content-center">
                  <Select
                    placeholder="選擇椅墊"
                    onChange={(value) => {
                      setSeat(value)
                      setStep(3)
                    }}
                  >
                    <Select.Option value="weaved">編織</Select.Option>
                    <Select.Option value="gray">灰色</Select.Option>
                    <Select.Option value="brown">深咖啡色</Select.Option>
                  </Select>
                </Form.Item>
              </div>

              {isLogged ? (
                <div
                  className="btn_lessmargin more w_cart-btn w_custom-btn"
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
                </div>
              ) : (
                <div
                  className="btn_lessmargin more w_cart-btn"
                  onClick={() => {
                    props.history.push('/login')
                  }}
                >
                  加入購物車 請先登入
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="parallax"></div>

        <div className="container">
          <div className="row justify-content-center">
            <img src={require('../images/Group 186.png')} alt="" />
          </div>
        </div>

        <div className="container-fluid w_container_fluid">
          <div className="row">
            <div className="w_title1">
              <div className="titlech noto-serif text-center">經典工藝</div>
              <div className="titleEN lora text-center">Classic Craft</div>
            </div>
          </div>

          <div className="row justify-content-center titleEN lora text-center mb-5">
            <div className="col-6">
              <p>
                我們從設計草稿至親手製作樣品，並與30年經驗、位於台中專門製作椅子的木器廠協作，最後再由我們親手雕琢，用指尖細磨感受每一道弧線與面，確保到你的手中，也能感受同樣的舒適手感。
              </p>
            </div>
          </div>

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

        <div className="container">
          <div className="row">
            <div className="w_title1">
              <div className="titlech noto-serif text-center">參考作品</div>
              <div className="titleEN lora text-center">Other Projects</div>
            </div>
          </div>
          <div className="row w_share_row">
            <div className="col-5 w_share_left">
              <p className="w_share_big">
                DESIGNED & MADE IN MELBOURNE FOR AN ENDURING APPEAL
              </p>
              <p>TAG US ON INSTAGRAM</p>
              <p className="w_tag">#SIT_DOWN_PLEASE</p>

              <p className="w_share_text">
                「沒有任何機器能取代匠師獨特的風格。Gustav
                Bahus生產的傢俱，凸顯了挪威人的優雅和簡約，手工製造卻不為生產需求而妥協。」
              </p>
            </div>
            <div className="col-7 w_share_big1">
              <img src={require('../images/share4.jpg')} alt="" />
            </div>
          </div>
          <div className="row w_share_row">
            <div className="col-4 coll4">
              <img
                className="w_share_hover_img"
                src={require('../images/share1.jpg')}
                alt=""
              />
              <p className="w_share_hover_text text-center w_ins_title">
                藏在不停尋找的簡單裡
              </p>
              <p className="text-center w_share_hover_text">
                「沒有任何機器能取代匠師獨特的風格。Gustav
                Bahus生產的傢俱，凸顯了挪威人的優雅和簡約，手工製造卻不為生產需求而妥協。」
              </p>
            </div>
            <div className="col-4 coll4">
              <img src={require('../images/award.jpg')} alt="" />
              <p className="w_share_hover_text text-center w_ins_title">
                燕椅，體驗一張椅子美妙的存在
              </p>
              <p className="text-center w_share_hover_text">
                新的燕椅承襲老椅的台、和、洋混血基因，讓它能自由自在地身處於各式各樣的風格空間。輕盈而敞開的後背，迎接日光灑落家中。​
              </p>
            </div>
            <div className="col-4 coll4">
              <img src={require('../images/share3.jpg')} alt="" />
              <p className="w_share_hover_text text-center w_ins_title">
                流暢、從容的輕盈線條
              </p>
              <p className="text-center w_share_hover_text">
                每一張燕椅，最後皆由手工刻製細修，一氣呵成的曲線，從椅腦頂端順著側稜線，滑向後腳與後方精實的微弧面相接。
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="w_title1">
                <div className="titlech noto-serif text-center">國際大賞</div>
                <div className="titleEN lora text-center">Awards</div>
              </div>
            </div>
            <div className="row w_share_row">
              <div className="col-5 award_img">
                <img src={require('../images/share2.jpg')} alt="" />
              </div>
              <div className="col-7 w_award_bg">
                <p className="w_ins_title">
                  燕椅，獲IFDA旭川國際家具設計大賽入圍肯定
                </p>
                <p className="w_ins_comment">
                  1990年開始，三年一度的「 IFDA
                  旭川國際家具設計大賽」，每一屆僅取總件數的前 3%
                  進入決賽。2017年是 27
                  周年，也是極具紀念性的第十屆，燕椅從全世界 683
                  件作品中，成為最終 25
                  位的入選者。在2017年6月的旭川設計週與同年11
                  月的日本東京國際家具暨家居用品展展出。
                  {/* 我們一方面感謝IFDA的肯定，一方面也很感動，這次的入選證明了台灣的文化元素一樣能登上世界的舞台，我們從燕椅開始，讓世界一步一步地看見，台灣這塊土地也能誕生出全世界都會愛上的美麗家具。 */}
                </p>
                <p className="w_ins_title">
                  2017 International Furniture Design Award
                </p>
                <p className="w_ins_comment">
                  IFDA is held every three years since 1990. In the year 2017
                  when it came to its 10th iteration. Hirundo was awarded
                  shortlisted out of 683 competitors from the world and
                  exhibited both in Asahikawa Design Week and Tokyo Interior
                  Lifestyle Living.
                </p>
                <p className="text-right w_ins_comment mt-5">
                  More About IFDA http://www.ifda.jp/
                </p>
              </div>
            </div>
          </div>
        </div>
      </Form>
      <BackTop
        visibilityHeight="2000"
        style={{
          height: '40',
          width: '40',
          lineHeight: '33px',
          color: 'white',
          fontSize: '16px',
          borderRadius: '0',
          textAlign: 'center',
          backgroundColor: '#c77334',
        }}
      >
        <div>
          <UpOutlined
            style={{
              color: 'white',
              fontSize: '18px',
              borderRadius: '0',
              backgroundColor: '#c77334',
              marginTop: '-3px',
            }}
          />
        </div>
      </BackTop>
    </>
  )
}

export default Custom
