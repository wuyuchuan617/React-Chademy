import React, { useState } from 'react'
import { Button } from 'antd'
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
            <div className="col-6 w_recom_start">
              <img src={require('../images/newbg.jpg')} alt="" />
            </div>
          ) : (
            ''
          )}

          {current === 1 ? (
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
                    src={require('../images/newbg.jpg')}
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
                    src={require('../images/newbg.jpg')}
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
                    src={require('../images/newbg.jpg')}
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
          ) : (
            ''
          )}

          {current === 2 ? (
            <div className="d-flex">
              <div className=" productCard col-lg-4 col-md-6 col-sm-12">
                <div
                  className="productCardImg_recom"
                  onClick={() => {
                    setRecommendColor('米')
                    setCurrent(current + 1)
                  }}
                >
                  <img
                    src={require('../images/newbg.jpg')}
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
                    src={require('../images/newbg.jpg')}
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
                    setRecommendColor('褐')
                    setCurrent(current + 1)
                  }}
                >
                  <img
                    src={require('../images/newbg.jpg')}
                    alt=""
                    onClick={() => {
                      // props.history.push('/product/' + item.sid)
                    }}
                  />
                </div>

                <p>深色系</p>
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
          <div className="steps-action">
            {current === 0 && (
              <Button type="primary" onClick={() => next()}>
                Start
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current > 0 && current < 3 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === 3 && (
              <Button type="primary" onClick={() => getClassFilterFromSQL()}>
                Done
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default ProductRecommend
