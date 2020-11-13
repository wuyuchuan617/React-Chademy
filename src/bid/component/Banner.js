import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'
import '../styles/banner.scss'
// import imgUrl from 'https://www.boconcept.com/on/demandware.static/-/Library-Sites-BoConceptSharedLibrary/default/dwff3bac50/images/activities/nov-jan-20/1540500_hero-L.jpg'
const BgElement = Element.BgElement
function Banner(props) {
  //   const { Element, Arrow, Thumb } = BannerAnim;
  // const BgElement = Element.BgElement;
  const imgUrl =
    'https://www.boconcept.com/on/demandware.static/-/Library-Sites-BoConceptSharedLibrary/default/dwff3bac50/images/activities/nov-jan-20/1540500_hero-L.jpg'
  const img2 =
    'https://www.boconcept.com/on/demandware.static/-/Library-Sites-BoConceptSharedLibrary/default/dw7ebb92b4/images/activities/nov-jan-20/1540481_hero-L.jpg'
  return (
    <>
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element
          prefixCls="banner-user-elem"
          key="0"
          followParallax={{
            delay: 1000,
            data: [
              {
                id: 'bg',
                value: 20,
                bgPosition: '50%',
                type: ['backgroundPositionX'],
              },
              { id: 'title', value: 50, type: 'x' },
              { id: 'content', value: -30, type: 'x' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url(' + imgUrl + ')',
              backgroundSize: 'cover',
              width: '100%',
            }}
            id="bg"
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: 'from' }}
            id="title"
          >
            想收藏獨一無二的藝品嗎?
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            id="content"
          >
            如果您正尋找椅子的最新設計，無需再躊躇。
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url(' + img2 + ')',
              backgroundSize: 'cover',
              width: '100%',
            }}
          />
          <TweenOne
            className="banner-user-title2"
            animation={{ x: -40, y: -50, opacity: 0, type: 'from' }}
          >
            全新的設計、華麗的面料和最流行的色彩。
          </TweenOne>
          <TweenOne
            className="banner-user-text2"
            animation={{ x: -40, y: -50, opacity: 0, type: 'from', delay: 100 }}
          >
            以競標的方式來獲得獨一無二，絕無僅有，最舒適又具設計感的椅子!
          </TweenOne>
        </Element>
      </BannerAnim>
    </>
  )
}

export default Banner
