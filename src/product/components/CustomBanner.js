import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
const BgElement = Element.BgElement

function CustomBanner(props) {
  return (
    <>
      <BannerAnim prefixCls="banner-user" autoPlay autoPlaySpeed={4000}>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement key="bg" className="bg" />
          <img src={require('../images/banner2.jpg')} alt="" />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: 'from' }}
          >
            {/* <img src={require('../images/banner2.jpg')} alt="" /> */}
          </TweenOne>

          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            {/* The Fast Way Use Animation In React */}
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement key="bg" className="bg" />

          <img src={require('../images/banner1.jpg')} alt="" />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: 'from' }}
          >
            {/* Ant Motion Banner */}
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            {/* The Fast Way Use Animation In React */}
          </TweenOne>
        </Element>
      </BannerAnim>
    </>
  )
}

export default CustomBanner
