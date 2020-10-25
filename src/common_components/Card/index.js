import React from 'react'
import './index.scss'

// ref: https://medium.com/itsoktomakemistakes/react-create-react-app-import-images-with-webpack-372e6ea19e2a
import imageChpr from '../images/chpr.png'

function Card(props) {
  // const { activaName } = props

  // console.log('Card', activaName)

  //   let className = 'section_container'
  //   className += activaName ? ' isActive ' + activaName : ''

  return (
    <>
      {/* <div>系列產品</div> */}

      <div className="product_list">
        <div className="product_title">產品系列</div>

        <ul className="product_item_list">
          {['單椅', '扶手椅', '餐椅', '沙發椅', '吧台椅'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* <ListGroup variant="flush">
                <ListGroup.Item>單椅</ListGroup.Item>
                <ListGroup.Item>扶手椅</ListGroup.Item>
                <ListGroup.Item>餐椅</ListGroup.Item>
                <ListGroup.Item>沙發椅</ListGroup.Item>
                <ListGroup.Item>吧台椅</ListGroup.Item>
              </ListGroup> */}
      <div className="container img_list">
        {['新品上市', '創意客製', '專屬推薦'].map((item, index) => (
          <div className="img_item text-center" key={index}>
            <figure className="fuck">
              <figcaption className="text-center img_title">{item}</figcaption>
              <img src={imageChpr} alt={item} />
            </figure>
          </div>
        ))}

        {/* <div>
          <div className="text-center">新品上市</div>
          <img src="../logo192.png" alt="" />
        </div>
        <div>
          <div className="text-center">創意客製</div>
          <img src="../logo192.png" alt="" />
        </div>
        <div>
          <div className="text-center">專屬推薦</div>
          <img src="../logo192.png" alt="" />
        </div> */}
      </div>
    </>
  )
}

export default Card
