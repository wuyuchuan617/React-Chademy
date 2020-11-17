import React, { useState, useEffect } from 'react'
// import { Button } from 'antd'
import RecommendResult from '../components/RecommendResult'

// const { Step } = Steps

// const steps = [
//   {
//     title: 'First',
//     content: 'First-content',
//   },
//   {
//     title: 'Second',
//     content: 'Second-content',
//   },
//   {
//     title: 'Last',
//     content: 'Last-content',
//   },
// ]
function ProductRecommend(props) {
  // const { item } = props

  const [current, setCurrent] = React.useState(0)
  const [recommendCate, setRecommendCate] = useState('')
  const [recommendColor, setRecommendColor] = useState('')
  const [returnFilter, setReturnFilter] = useState([])

  console.log('recommendCate', recommendCate)
  console.log('recommendColor', recommendColor)
  console.log('returnFilter', returnFilter)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  // 拿篩選資料
  async function getClassFilterFromSQL() {
    const url = 'http://localhost:3001/man_product/recomfilter'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({
        cate: recommendCate,
        color: recommendColor,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    let data = await response.text()
    // const newData = await [...data]
    // console.log('data: ' + data)
    data = JSON.parse(data)
    console.log('data: ' + data)
    setReturnFilter(data)
  }

  useEffect(() => {
    getClassFilterFromSQL()
  }, [recommendColor])

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="w_title1">
            <div className="titlech noto-serif text-center">專屬推薦</div>
            <div className="titleEN lora text-center">
              Recommend only for you
            </div>
          </div>
        </div>

        {/* <div className="container"> */}
        <div className="row justify-content-center steps-content d-flex">
          {/* <div className="steps-content "> */}
          {current === 0 ? (
            <div className="col w_recom_start">
              <img src={require('../images/start.jpg')} alt="" />
            </div>
          ) : (
            ''
          )}

          {current === 1 ? (
            <div>
              <p className="noto-serif text-center rec_text">
                請選擇擺設環境牆壁顏色風格
              </p>
              <div className="d-flex">
                <div className=" productCard col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="productCardImg_recom"
                    onClick={() => {
                      setRecommendCate('lounge')
                      setCurrent(current + 1)
                    }}
                  >
                    <img
                      src={require('../images/homee.jpg')}
                      alt=""
                      onClick={() => {
                        // props.history.push('/product/' + item.sid)
                      }}
                    />
                  </div>

                  <p>Home</p>
                </div>

                <div className="productCard col-lg-4 col-md-6 col-sm-12">
                  <div className="productCardImg_recom">
                    <img
                      src={require('../images/kitchen.jpg')}
                      alt=""
                      onClick={() => {
                        setRecommendCate('stool')
                        setCurrent(current + 1)
                      }}
                    />
                  </div>

                  <p>Restaurant</p>
                </div>
                <div className="productCard col-lg-4 col-md-6 col-sm-12">
                  <div className="productCardImg_recom">
                    <img
                      src={require('../images/office.jpg')}
                      alt=""
                      onClick={() => {
                        setRecommendCate('armchair')
                        setCurrent(current + 1)
                      }}
                    />
                  </div>

                  <p>Office</p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {current === 2 ? (
            <div>
              <p className=" noto-serif text-center rec_text">
                請選擇擺設環境牆壁顏色風格
              </p>
              <div className="d-flex">
                <div className=" productCard col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="productCardImg_recom"
                    onClick={async () => {
                      setRecommendColor('白')
                      setCurrent(current + 1)
                    }}
                  >
                    <img
                      src={require('../images/cold.jpg')}
                      alt=""
                      onClick={() => {
                        // props.history.push('/product/' + item.sid)
                      }}
                    />
                  </div>

                  <p>淺色系</p>
                </div>

                <div className="productCard col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="productCardImg_recom"
                    onClick={() => {
                      setRecommendColor('綠')
                      setCurrent(current + 1)
                    }}
                  >
                    <img
                      src={require('../images/warm.jpg')}
                      alt=""
                      onClick={() => {
                        // props.history.push('/product/' + item.sid)
                      }}
                    />
                  </div>

                  <p>彩色係</p>
                </div>
                <div className="productCard col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="productCardImg_recom"
                    onClick={() => {
                      setRecommendColor('橘')
                      setCurrent(current + 1)
                    }}
                  >
                    <img
                      src={require('../images/whitec.jpg')}
                      alt=""
                      onClick={() => {
                        // props.history.push('/product/' + item.sid)
                      }}
                    />
                  </div>

                  <p>深色系</p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {current === 3
            ? returnFilter.map((item, index) => {
                return <RecommendResult key={index} item={item} />
              })
            : ''}
        </div>
        {/* </div> */}

        <div className="row justify-content-center">
          <div className="steps-action col text-center w_com_real">
            {current === 0 && (
              <div
                type="primary"
                onClick={() => next()}
                style={{
                  margin: '0 0px',
                  width: '39.5%',
                  letterSpacing: '12px',
                }}
                className="btn_lessmargin more w_cart-btn w_recom"
              >
                開始
              </div>
            )}
            {current > 0 && (
              <div
                style={{
                  margin: '0 0px',
                  width: '39.5%',
                  letterSpacing: '12px',
                }}
                // type="primary"
                onClick={() => prev()}
                className="btn_lessmargin more w_cart-btn w_recom"
              >
                回上一步
              </div>
            )}
            {/* {current > 0 && current < 2 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )} */}
            {/* {current === 3 && (
              <Button type="primary" onClick={() => getClassFilterFromSQL()}>
                Done
              </Button>
            )} */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default ProductRecommend
