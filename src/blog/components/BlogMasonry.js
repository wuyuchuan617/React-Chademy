import React, { useEffect } from 'react'
import '../styles/blog.css'
import ImgBlogfour from '../images/04_blog.jpg'
import ImgBlogfive from '../images/05_blog.jpg'
import ImgBlogsix from '../images/06_blog.jpg'
import ImgBlogseven from '../images/07_blog.jpg'
import ImgBlogeight from '../images/08_blog.jpeg'
import ImgBlognine from '../images/09_blog.jpeg'
import ImgBlogten from '../images/10_blog.jpeg'
import ImgBlogele from '../images/11_blog.jpeg'
import ImgBlogtwe from '../images/12_blog.jpg'
import ImgBlogthi from '../images/13_blog.jpeg'
import ImgBlogfourt from '../images/14_blog.jpeg'
import ImgBlogfif from '../images/15_blog.jpeg'
import ImgBlogsixt from '../images/16_blog.jpeg'
import ImgBlogsevent from '../images/17_blog.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import OneBlog from '../components/OneBlog'

function BlogMasonry(props) {
  const { oneBlog } = props
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className="container">
      <div className="annie_title01">
        <h2>靈感探索</h2>
      </div>

      <div className="a_list" data-aos="fade-up">
        {oneBlog.map((item, index) => {
          return <OneBlog key={index} item={item} />
        })}

        {/*<div className="item">
          <img src={ImgBlogfour} alt="" />
          <h4>高級紅木家居</h4>
          <p>
            我們寫下關於走走家具的故事，創業的真實、生活的知識、充滿歡笑與淚水的過程，各種故事帶來不同感動，期待您的支持，與走走家具一同寫下新篇章，一個屬於台灣品牌的故事。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogfive} alt="" />
          <h4>懷舊復古家居</h4>
          <p>
            其實呢這個案子已經完成很久了，只是一直沒有時間跟機會介紹，且後來發現自己留的資料並不齊全，所以就......
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogsix} alt="" />
          <h4>乾淨潔白的舒適環境</h4>
          <p>
            以瑞典為基地的跨國居家用品零售企業，據點分布世界多國，販售平整式包裝的傢具、配件、浴室和廚房用品。宜家家居是開創以平實價格銷售自行組裝家具的領導品牌，現已成為全球最大傢具零售企業。
            宜家家居是在1943年由當時17歲的英格瓦·坎普拉於瑞典阿姆胡特創立。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogseven} alt="" />
          <h4>檜木香13號房子</h4>
          <p>
            我們寫下關於走走家具的故事，創業的真實、生活的知識、充滿歡笑與淚水的過程，各種故事帶來不同感動，期待您的支持，與走走家具一同寫下新篇章，一個屬於台灣品牌的故事。
            符合身體曲線的加厚椅面設計，久坐也不痠痛！
            樸質傳統風格，幫您打造獨具個人品味的居家空間！
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogeight} alt="" />
          <h4>童趣座椅</h4>
          <p>
            符合身體曲線的加厚椅面設計，久坐也不痠痛！
            樸質傳統風格，幫您打造獨具個人品味的居家空間！
            細膩木紋色澤，經典原木色系，充分展現你的居家時尚美學！
          </p>
        </div>
        <div className="item">
          <img src={ImgBlognine} alt="" />
          <h4>彎木椅</h4>
          <p>
            大多數木工設計、生產都是利用直線木構件進行直角連接。但是隨著彎曲木的出現，越來越多的木工愛好者更喜歡這種彎曲工藝帶來的製作樂趣。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogten} alt="" />
          <h4>黑絨毛的質感</h4>
          <p>
            浪漫的黑色，光滑的絨布天鵝絨。使用超細纖維材料製成的溫暖材料，觸感柔軟。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogele} alt="" />
          <h4>畢卡索設計風格家居</h4>
          <p>
            畢卡索是西班牙畫家、雕塑家和版畫家，他的作品變化多端，涵蓋住絕大多數二十世紀藝術家發展的樣式。
            畢卡索的父親是一位素描教師，他從小就非常早熟。1900
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogtwe} alt="" />
          <h4>療育與自然的結合</h4>
          <p>
            依照心情選擇最喜愛的擴香，並搭配擴香座放置於心愛的角落，隨著擴香枝的毛細原理緩慢釋放…
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogthi} alt="" />
          <h4>簡單質樸之幸福</h4>
          <p>
            FACT DESIGN
            我們在1992年將日本的工廠轉移至中國，堅持日本的高品質與技術，最先進的機械加工技術與設計融為一體，創造出適合居家使用的家具。日式原木的特性，傢俱會有自然的木紋痕跡。手工製造所以每一件產品尺寸、表面圖案及顏色都會有些差異。商品皆屬手工製造非機器生產，為的是那份原木天然的自然氛圍，如此下來我們的商品才能擁有這份特色。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogfourt} alt="" />
          <h4>優雅的營造空間</h4>
          <p>
            乾淨整潔的空間，陪伴孩子閱讀、學習數字、發掘新想法同時激發創意，創造讓孩子能夠持之以恆、專注學習的空間。前面和後面的桌腳之間有電線收納架，可放置電線和延長線，收納更井然有序。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogfif} alt="" />
          <h4>美女與寂靜</h4>
          <p>
            依照心情選擇最喜愛的座椅，並搭配擴香座放置於心愛的角落，隨著擴香枝的毛細原理緩慢釋放…
            松樹與綠橡木燃燒的聲音在耳邊響起，感受如同冬日依偎於壁爐邊的溫暖舒適氛圍，進入冬日森林的氛圍。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogsixt} alt="" />
          <h4>原木的生活</h4>
          <p>
            我們寫下關於走走家具的故事，創業的真實、生活的知識、充滿歡笑與淚水的過程，各種故事帶來不同感動，期待您的支持，與走走家具一同寫下新篇章，一個屬於台灣品牌的故事。手工製造所以每一件產品尺寸、表面圖案及顏色都會有些差異。商品皆屬手工製造非機器生產，為的是那份原木天然的自然氛圍，如此下來我們的商品才能擁有這份特色。
          </p>
        </div>
        <div className="item">
          <img src={ImgBlogsevent} alt="" />
          <h4>跨國家居企業</h4>
          <p>
            跨國家居企業，是台灣首家大型DIY居家修繕工具與材料販賣連鎖店，公司成立於1995年，並於1996年時以「跨國家居企業」品牌名稱於桃園縣南崁地區成立第一家分店。
          </p>
        </div>*/}
      </div>
    </div>
  )
}

export default BlogMasonry
