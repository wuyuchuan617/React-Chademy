import React from 'react'

function TabletBanner(props) {
  const { item } = props

  return (
    <>
      <div className="rcontainer">
        <div className="row d-flex justify-content-center">
          <div className="w_phone justify-content-center col-3">
            <img src={require('../images/phone@2x.png')} alt="" />
          </div>
          <div className="w_phone justify-content-center col-3">
            <img src={require('../images/pad@2x.png')} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TabletBanner
