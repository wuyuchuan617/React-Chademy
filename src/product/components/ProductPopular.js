import React from 'react'
import '../styles/productlist.css'
// import popularImg from '../images/777.jpg'
// import AOS from 'aos'
import 'aos/dist/aos.css'
import Breadcrumbww from '../components/Breadcrumbww'

function ProductPopular(props) {
  // const { item } = props
  // useEffect(() => {
  //   AOS.init()
  //   AOS.refresh()
  // }, [])
  return (
    <>
      <div className="container section">
        <div className="row   wbread">
          <Breadcrumbww />
        </div>
        {/* <div
          className="row popular justify-content-between"
          data-aos="zoom-out-up"
          data-aos-duration="4000"
        >
          <div className="popular2  col-lg-6 col-sm-12 d-flex ">
            <div className="popularImg">
              <img src={popularImg} alt="" />
            </div>
            <div className="popularText justify-content-center">
              <p className="classic">熱銷經典</p>
              <p className="bestSell">BEST SELLERS</p>
              <button className="popularButton">SHOP NOW</button>
            </div>
          </div>
          <div className="popular2 col-lg-6 col-sm-12 d-flex ">
            <div className="popularImg">
              <img src={popularImg} alt="" />
            </div>
            <div className="popularText justify-content-center">
              <p className="classic">新品上市</p>
              <p className="bestSell">NEW ARRIVAL</p>
              <button className="popularButton">SHOP NOW</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default ProductPopular
