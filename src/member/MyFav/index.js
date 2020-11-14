import React, { useState } from 'react'
import request from '../../utils/request'

import { Row } from 'react-bootstrap'
import { Tabs } from 'antd'

import NoData from '../../common_components/NoData'
import CardMyFav from '../../common_components/CardMyFav'

const { TabPane } = Tabs

function MyFav(props) {
  const [myfavlist, setmyfavlist] = useState([])

  console.log(' props  ', props)

  const fetchData = async () => {
    const response = await request({
      url: `/members/getUserMyFav`,
      method: 'POST',
      data: {},
    })

    setmyfavlist(response.data || {})
  }

  // https://www.digitalocean.com/community/tutorials/creating-a-custom-usefetch-react-hook
  React.useEffect(() => {
    fetchData()
  }, [])

  // React.useEffect(() => {
  //   fetchData().then((data) => setmyfavlist(data))
  // }, [])

  return (
    <>
      <Tabs defaultActiveKey="1" type="card">
        {[
          { tab: '經典', key: '1' },
          { tab: '二手', key: '5' },
          { tab: '課程', key: '2' },
        ].map((tabItem) => (
          <TabPane tab={tabItem.tab} key={tabItem.key} centered>
            <Row className="row_list">
              {/* 顯示符合 key 的商品 */}
              {myfavlist.filter((i) => i.product_type === Number(tabItem.key))
                .length === 0 ? (
                <NoData tips="尚無追蹤清單"></NoData>
              ) : (
                myfavlist.map(
                  (item, index) =>
                    item.product_type === Number(tabItem.key) && (
                      <CardMyFav
                        {...props}
                        key={index}
                        data={item}
                        fetchData={fetchData}
                      ></CardMyFav>
                    )
                )
              )}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </>
  )
}

export default MyFav
